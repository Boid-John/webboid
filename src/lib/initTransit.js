import { initAccessContext } from 'eos-transit'
import scatter from 'eos-transit-scatter-provider'
import keycat from 'eos-transit-keycat-provider'
import ledger from 'eos-transit-ledger-provider'
// import anchor from 'eos-transit-anchorlink-provider'


function err (error) {
  console.error(error)
}

function rand (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

import { Api, JsonRpc } from "eosjs"

const endpoints = [
  // 'https://kylin.api.boid.com'
  'https://eos.greymass.com',
  // // 'https://eos.greymass.com:443',
  // // 'https://api.eossweden.org',
  'https://api.eosn.io',
  // // 'https://eu1.eosdac.io:443',
  // 'https://api.main.alohaeos.com:443',
  'https://node1.eosphere.io',
  'https://node2.eosphere.io',
  // 'https://eos.api.boid.com'
]

function pickEndpoint () {
  const endpoint = endpoints[rand(0, endpoints.length - 1)]
  console.log(endpoint)
  return endpoint
}
global.boidtokencontract = 'boidcomtoken'
const rpc = new JsonRpc(pickEndpoint())
const boidjs = require('boidjs')({ rpc,config:{tokenContract:'boidcomtoken'}})
window.boidjs = boidjs
window.transit = {}

async function getTotalStake (account) {
  try {
    let res = await rpc.get_table_rows({
      json: true,
      code: global.boidtokencontract,
      scope: account,
      table: "staked",
      limit: 10000
    })
    const userTotalStaked = res.rows.reduce((acc, el) => parseFloat(el.quantity) + acc, 0)
    return userTotalStaked
  } catch (error) {
    console.log(error)
    return undefined
  }
}

async function getTotalDelegated (account) {
  try {
    let res = await rpc.get_table_rows({
      json: true,
      code: global.boidtokencontract,
      scope: account,
      table: "delegation",
      limit: 10000
    })
    console.log(res)
    const userTotalDelegated = res.rows.reduce((acc, el) => parseFloat(el.quantity) + acc, 0)
    console.log(userTotalDelegated)
    return userTotalDelegated
  } catch (error) {
    console.log(error)
    return undefined
  }
}

async function init () {

  window.eosjs = { rpc, getTotalStake, getTotalDelegated }

  var accessContext
  try {
    accessContext = initAccessContext({
      appName: 'app.boid.com',
      network: {
        blockchain: 'eos',
        host: 'eos.greymass.com',
        port: 443,
        protocol: 'https',
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
      },
      // network: {
      //   blockchain: 'eos',
      //   host: 'kylin.api.boid.com',
      //   port: 443,
      //   protocol: 'https',
      //   chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
      // },
      walletProviders: [
        scatter(),
        // anchor()
      ]
      // keycat()      ]
    })
  } catch (error) {
    err(error)
  }

  window.transit.initWallet = async (providerName, alert) => {
    try {
      providerName = providerName.toLowerCase()
      const providers = accessContext.getWalletProviders()
      console.log(providers)
      const selected = providers.find(el => el.id.toLowerCase() === providerName)
      if(!selected) throw ('Invalid Wallet Provider')
      var wallet = accessContext.initWallet(selected)
      await wallet.connect()
      await wallet.login()
      console.log(wallet)
      return wallet
    } catch (error) {
      if(!error.message) error = { message: error }
      console.error(error)
      if(alert) alert(error.message)
    }
  }
}
const ax = require('axios')

// window.transit.initWallet('keycat') 

// const wallet = accessContext.initWallet(window.transit.walletProviders[1])
// await wallet.connect()
// let discoveryData = await wallet.discover({ pathIndexList: [ 0,1,2,3 ] })
// if (discoveryData.keyToAccountMap.length > 0) {
//   // Let the user choose an account here
//   // await wallet.login(accountName, authorization) 
// } else { await wallet.login() }
// window.transit = {wallet}
// return wallet

init().catch(err)
module.exports = init