import { openURL, Toast } from 'quasar'
const rpc = window.eosjs.rpc
const ax = require('axios')
const state = require('../lib/state')
const sleep = async(ms) => new Promise((resolve) => setTimeout(resolve, ms))
const api = require('../api')
const instructions = [
  { 
    text:"Pick a coin to make a donation with. Each donation causes the minimum for that coin to increase.",
    img:"/statics/seasonpass/pick-a-coin.svg"
  },
  {
    text:"Send the donation! Each donation provides some Boid Power.",
    img:"/statics/seasonpass/send-the-donation.svg"
  },
  {
    text:"Level up to increase the Boid Power reward you receive for your donation. Each time you level up you a higher tier of NFT.",
    img:"/statics/seasonpass/boid-power-increase.svg"
  },
  {
    text:"NFTs will be distributed at the end.",
    img:"/statics/seasonpass/boid-cards.png"
  }
]
const icons = '/statics/tokenicons/'
const range = function(OldValue,OldMin,NewMax,NewMin,OldMax){return (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin}
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;
module.exports = {
  state:{
    getCoinsInterval:null,
    global:state.global,
    page:'rules',
    instructions,
    coins:[],
    contributor:{level:0,donations:0},
    config:null,
    selectedPay:"EOS",
    payAmount:0,
    leaderboard:null,
    loading:{
      accountPanel:true,
      progressPanel:false,
      selectPanel:true,
      leaderboard:true,
      cpuClaim:true
    }
  },
  computed:{
    promoStarted(){
      return parseInt(this.config.promotion_start_utc_ms) < Date.now()
    },
    countdownStart(){
      let countDown = new Date(parseInt(this.config.promotion_start_utc_ms)).getTime()

      let now = new Date().getTime(),
      distance = countDown - now;

      return {
        days: Math.floor(distance/day),
        hours:Math.floor((distance % (day)) / (hour))
      }

    },
    countdown(){
      let countDown = new Date(parseInt(this.config.promotion_end_utc_ms)).getTime()
      
      let now = new Date().getTime(),
      distance = countDown - now;

      return {
        days: Math.floor(distance/day),
        hours:Math.floor((distance % (day)) / (hour))
      }

    },
    dateProgress(){
      const result = range(Date.now(),parseInt(this.config.promotion_start_utc_ms),100,0,parseInt(this.config.promotion_end_utc_ms))
      console.log('progress',result)
      return result
    },
    startDate(){
      if (!this.config) return ""
      return new Date(parseInt(this.config.promotion_start_utc_ms)).toLocaleString()

    },
    endDate(){
      if (!this.config) return ""
      return new Date(parseInt(this.config.promotion_end_utc_ms)).toLocaleString()
    },
    totalPowerGranted(){
      if (!this.leaderboard) return
      return this.leaderboard.reduce((prev,el) => prev += el.total_power_granted,0).toFixed(0)
    },
    totalEOSContributed(){
      if (!this.leaderboard) return
      return this.leaderboard.reduce((prev,el) => prev += el.usdValue,0).toFixed(0)
    },
    donationText(){
      if (this.remainingDonations < 2 ) return "donation"
      else return "donations"
    },
    remainingDonations(){
      if (!this.contributor) return 0
      return 10 - (this.contributor.donations - this.contributor.level*10)
    },
    selectedCoin(){
      if (!this.selectedPay || !this.coins) return false 
      const selectedCoin = this.coins.find(el => el.symbol === this.selectedPay)
      return selectedCoin
    },
    amountLow(){
      if (!this.selectedPay || !this.coins) return false 
      const selectedCoin = this.coins.find(el => el.symbol === this.selectedPay)
      if (!selectedCoin) return false 
      // console.log(this.payAmount,selectedCoin.min_contribution)
      if (this.payAmount < parseFloat(selectedCoin.min_contribution.toFixed(4))) return true
      else return false
    },
    powerBonus(){
      if (!this.config || !this.contributor || !this.contributor) return 0
      // console.log('PowerBonus:',this.config.user_power_reward_increment)
      if (this.contributor.level < 1) return 5
      else return this.contributor.level * this.config.user_power_reward_increment  
    }
  },
  methods:{
    async claimCPU(){
      try {
        this.loading.cpuClaim = true
        await this.global.do.claimCPU()
        await this.global.do.checkCPUClaim()
        this.loading.cpuClaim = false
      } catch (error) {
        this.loading.cpuClaim = false
        console.error(error.toString())
      }
    },
    async checkFreeCPU(){
      try {
        this.loading.cpuClaim = true
        await this.global.do.checkCPUClaim()
        this.loading.cpuClaim = false
      } catch (error) {
        this.loading.cpuClaim = false
        console.error(error.toString())
      }
    },
    updateSelectedPay(symbol){
      this.selectedPay = symbol
    },
    checkAmount(){
      if (!this.selectedPay || !this.coins) return 
      const selectedCoin = this.coins.find(el => el.symbol === this.selectedPay)
      if (!selectedCoin) return 
      if (this.payAmount < selectedCoin.min_contribution) this.payAmount = parseFloat(selectedCoin.min_contribution)
    },
    async donate(){
      try {
        this.loading.selectPanel = true
        await this.getCoins(true)
        this.checkAmount()
        const coin = this.coins.find(el => el.symbol === this.selectedPay)
        await this.global.do.transfer(this.global.transitWallet.auth.accountName,'boiddonation',coin.token,parseFloat(this.payAmount.toFixed(4)))
        await sleep(1000)
        await this.getAll()
        this.updatePayAmount()
        this.updateSelectedPay(this.selectedPay)
        this.loading.selectPanel = false
        console.log('Donate')
      } catch (error) {
        console.log(error.toString())
        this.global.errorMsg = error.toString()
      }
    },
    async claim(){
      try {
        this.loading.accountPanel = true
        await this.global.do.claim()
        await this.global.do.refreshAccountData()
        this.loading.accountPanel = false
        Toast.create.positive("Transaction successful")

      } catch (error) {
        console.log(error.toString())
        this.global.errorMsg = error.toString()
      }
    },
    async updateAccountPanel(){
      this.loading.accountPanel = true
      await this.global.do.refreshAccountData()
      this.loading.accountPanel = false
    },
    updatePayAmount(){
      if (!this.selectedPay || !this.coins) return 0
      const selectedCoin = this.coins.find(el => el.symbol === this.selectedPay)
      if (!selectedCoin) return ""
      // console.log('SELECTEDCOIN',selectedCoin)
      this.payAmount = parseFloat(selectedCoin.min_contribution)
    },
    adjustPay(percent) {
      this.payAmount += this.payAmount * (percent*.01)
    },
    openURL,
    calcPowerBonus(available,multiplier){
      const power = (this.powerBonus * multiplier)
      const result = available - power
      // console.log(result)
      if (result > 0) return power
      else return this.powerBonus + result
    },
    userReward(coin){
      if (!coin || !this.contributor || !this.config ) return 0
      return this.config.level
    },
    async getAll(){
      await this.getConfig()
      this.getCoins()
      if (this.global.transitWallet) this.getContributor(this.global.transitWallet.auth.accountName)
      this.updateAccountPanel()
      this.global.do.updateBoidWallet()
      this.getLeaderboard()
      this.updateSelectedPay(this.selectedPay)
    },
    getPage(){
      console.log(this.page)

    },
    async getLeaderboard(){
      console.log('Get Leaderboard')
      this.loading.leaderboard = true
      try {
        const leaderboard = await api.axios.get('donationsLeaderboard' +'?scope='+this.config.current_promotion_scope)
        this.leaderboard = leaderboard.data
        // console.log('LEADERBOARD',this.leaderboard)

      } catch (error) {
        this.global.errorMsg = error.toString()
        console.error(error.toString())
      }
      this.loading.leaderboard = false
    },
    async getCoins(disableLoading){
      if (!disableLoading) this.loading.selectPanel = true
      try {
        this.coins = (await rpc.get_table_rows({
          code: "boiddonation",
          scope: this.config.current_promotion_scope,
          table: "tokens",
          limit:-1
        })).rows.map(coin => {
          coin.symbol = coin.token.sym.split(',')[1]
          coin.contract = coin.token.contract
          coin.precision = coin.token.sym.split(',')[0]
          coin.img = icons + coin.symbol +'.png'
          coin.min_contribution = parseFloat(parseFloat(coin.min_contribution).toFixed(coin.token.sym.split(',')[0]))+ 0.0001
          coin.minContribution = coin.min_contribution.toLocaleString(undefined,{ minimumFractionDigits: 4 })
          coin.availablePower = parseFloat(coin.current_power_available)
          coin.powerCap = parseFloat(coin.power_available_cap)
          // coin.lastUpdated = coin.
          return coin
        })
        // this.updateTokenPrices()
        // console.log(this.coins)
        if (!disableLoading) this.loading.selectPanel = false

      } catch (error) {
        this.coins = []
        console.error(error.toString())
        this.loading.selectPanel = false
      }
    },
    async updateTokenPrices(){
      for (var coin of this.coins) {
        // console.log('coincontract',coin)
        const price = await this.global.do.getNewdexPrice(coin.symbol,coin.contract)
        // console.log(price)
      }
    },
    async getContributor(accountName){
      if (!accountName) accountName = this.contributor.account
      // console.log('Get Contributor',accountName)
      this.loading.progressPanel = true
      // await this.getConfig()
      try {
        const contributor = (await rpc.get_table_rows({
          code: "boiddonation",
          scope: this.config.current_promotion_scope,
          table: "contributors",
          lower_bound:accountName,
          limit:1
        })).rows[0]
        if (contributor && contributor.account === accountName) this.contributor = contributor
        else this.contributor = {
          account:accountName,
          coins:[],
          donations:0,
          level:0,
          total_power_granted:0
        }
        this.loading.progressPanel = false
      } catch (error) {
        console.error(error.toString())
        this.loading.progressPanel = false
      }
    },
    async getConfig(){
      try {
        this.config = (await rpc.get_table_rows({
          code: "boiddonation",
          scope: "boiddonation",
          table: "config"
        })).rows[0]
      } catch (error) {
        this.coins = []
        console.error(error.toString())
      }
    },
    async getBalances(){
      
    }
  }
}