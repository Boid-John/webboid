webpackJsonp([1],{275:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(286),a=i(287);var o=function(e){i(284)},s=i(13)(n.a,a.a,!1,o,"data-v-25aef78e",null);t.default=s.exports},283:function(e,t,i){"use strict";t.a={icon:function(e){return"BROWSER"===e.type?"tab":"DESKTOP"===e.type?"flash_on":"MOBILE"===e.type?"phone_android":"WINDOWS"===e.type?"fa-windows":"MAC"===e.type?"fa-apple":"add"},color:function(e){return"OFFLINE"===e.status?"grey":"ONLINE"===e.status?"blue":"ACTIVE"===e.status?"green":void 0}}},284:function(e,t,i){var n=i(285);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(274)("4da6b8ba",n,!0)},285:function(e,t,i){(e.exports=i(273)(void 0)).push([e.i,".layout-padding[data-v-25aef78e]{max-width:700px}.infobtn[data-v-25aef78e]{color:$grey-6;font-size:15px;right:5px;top:5px}.taller[data-v-25aef78e]{height:60px}body[data-v-25aef78e]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""])},286:function(e,t,i){"use strict";var n=i(56),a=i.n(n),o=i(14),s=i.n(o),c=i(15),r=i.n(c),l=i(283);i(10);t.a={data:function(){return{loading:!0,parseDevice:l.a,onBatteries:!1,deviceStatePoll:null,actionbg:{backgroundColor:"white"},config:{run_if_user_active:null},boincStatus:"Initializing....",boincStatusIcon:"check",activeTasks:[],thisDevice:{name:null,power:"",status:"",id:"",meta:{},icon:"WINDOWS",type:"WINDOWS",powerRatings:[]},deviceId:null,pending:!1,toggle:!1}},computed:{},methods:{openConfigModal:function(){this.$e.$emit("openBoincConfigModal",this.config)},modulateTaskProgress:function(e){var t;return e=100*parseFloat(e)+(t=2,Math.floor(Math.random()*Math.floor(t)))},handleLocalDevice:function(){var e=r()(s.a.mark(function e(t){var i,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return console.log("received blank localDevice"),window.local.ipcRenderer.send("initBoinc"),e.abrupt("return");case 6:if(!t.cpid){e.next=49;break}return e.prev=7,e.next=10,this.api.device.getByCpid(t.cpid).catch(console.log);case 10:if(i=e.sent){e.next=28;break}return console.log("device does not exist, User can claim device"),e.prev=13,e.next=16,this.api.device.create((o=void 0,(a=t)?(o="Darwin"===a.os.name?"MAC":"WINDOWS",console.log(window.local.thisUser.id),{ownerId:window.local.thisUser.id,cpid:a.cpid,name:a.name,type:o,meta:a}):null));case 16:return n=e.sent,e.next=19,this.api.device.get(n.id);case 19:this.thisDevice=e.sent,e.next=26;break;case 22:return e.prev=22,e.t0=e.catch(13),console.log(e.t0),e.abrupt("return");case 26:e.next=42;break;case 28:if(i.owner.id!==this.thisUser.id){e.next=40;break}return e.prev=29,e.next=32,this.api.device.get(i.id);case 32:this.thisDevice=e.sent,e.next=38;break;case 35:return e.prev=35,e.t1=e.catch(29),e.abrupt("return",console.log(e.t1));case 38:e.next=42;break;case 40:this.$e.$emit("logout"),alert("This device is already claimed by a different account. 😢 \n \n Contact us: support@boid.com");case 42:e.next=47;break;case 44:e.prev=44,e.t2=e.catch(7),console.log(e.t2);case 47:e.next=51;break;case 49:this.$router.push({name:"Auth"}),alert("This device is acting up. 😢 \n \n Contact us: support@boid.com");case 51:if(!t.wcgid){e.next=60;break}if(this.thisDevice.wcgid!==t.wcgid){e.next=56;break}return e.abrupt("return");case 56:return e.next=58,this.api.device.updateWcgid({deviceId:this.thisDevice.id,wcgid:t.wcgid});case 58:i=e.sent,console.log(i);case 60:case"end":return e.stop()}var a,o},e,this,[[7,44],[13,22],[29,35]])}));return function(t){return e.apply(this,arguments)}}(),init:function(){var e=this;window.local&&setTimeout(function(){e.handleLocalDevice(window.local.ipcRenderer.sendSync("localDevice"))},200)}},props:["thisUser","authenticated","api","thisModal","ch"],created:function(){var e=this;setInterval(function(){e.init()},4e3),this.init(),window.local.ipcRenderer.send("boinc.config.get"),window.local.ipcRenderer.on("boinc.toggle",function(t,i){console.log("GOT TOGGLE:",i),e.loading||(e.toggle=i)}),window.local.ipcRenderer.on("boinc.config",function(t,i){console.log("GOT CONFIG",i),e.config=i}),window.local.ipcRenderer.on("boinc.activeTasks",function(t,i){i&&(e.activeTasks=i)}),window.local.ipcRenderer.on("boinc.suspended",function(t,i){console.log("GOT BOINC SUSPENDED:",i),i?(e.onBatteries=!0,e.boincStatus="Paused: "+i,e.boincStatusIcon="pause"):(e.onBatteries=!1,e.boincStatus="Computing Tasks...",e.boincStatusIcon="check")}),window.local.ipcRenderer.on("deviceReady",function(e,t){console.log("GOT DEVICE:",t)}),window.local.ipcRenderer.on("boinc.error",function(e,t){console.log("got errorfrom boinc",t),alert(t)})},watch:{activeTasks:function(e){e.length>0&&e.some(function(e){return 1==e.active_task_state[0]})&&(this.onBatteries||(this.boincStatus="Computing Tasks...",this.boincStatusIcon="check"))},thisDevice:function(){var e=r()(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t&&(window.local.ipcRenderer.send("boinc.config.get"),this.loading=!1,console.log(a()(this.thisDevice)),"ACTIVE"==this.thisDevice.status?this.toggle=!0:(this.toggle=!1,window.local.ipcRenderer.send("boinc.cmd","quit")),this.thisDevice.icon=l.a.icon(this.thisDevice));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),toggle:function(){var e=r()(s.a.mark(function e(t){var i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.pending=!0,e.prev=1,i={deviceId:this.thisDevice.id},t?(i.status="ACTIVE",this.actionbg.backgroundColor="li",window.local.ipcRenderer.send("startBoinc"),clearInterval(this.deviceStatePoll),this.deviceStatePoll=setInterval(function(){window.local.ipcRenderer.send("boinc.activeTasks")},1e3)):(i.status="ONLINE",this.actionbg.backgroundColor="white",window.local.ipcRenderer.send("boinc.cmd","quit"),clearInterval(this.deviceStatePoll)),e.next=6,this.api.device.updateStatus(i);case 6:e.sent,e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error"),alert(e.t0),console.log(e.t0);case 14:return e.prev=14,e.next=17,this.api.device.get(this.thisDevice.id);case 17:return this.thisDevice=e.sent,this.pending=!1,e.finish(14);case 20:case"end":return e.stop()}},e,this,[[1,9,14,20]])}));return function(t){return e.apply(this,arguments)}}()}}},287:function(e,t,i){"use strict";var n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-transition",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[!e.loading&&e.thisDevice.name?i("div",{staticClass:"layout-padding relative-position"},[i("p",[e._v(e._s(e.thisDevice.name)+" "),i("q-icon",{staticClass:"float-lefth on-right inline",attrs:{name:e.parseDevice.icon(e.thisDevice),color:e.parseDevice.color(e.thisDevice)}})],1),i("h6",{staticClass:"light-paragraph"},[e._v("CPU "),e.thisDevice.powerRatings[0]?i("div",[e._v(e._s(parseInt(e.thisDevice.powerRatings[0].power))),e.toggle?i("q-icon",{staticClass:"text-center",staticStyle:{"font-size":"20px"},attrs:{color:"yellow",name:"flash_on"}}):i("q-icon",{staticClass:"text-center",staticStyle:{"font-size":"20px"},attrs:{color:"grey-4",name:"flash_off"}})],1):e._e()]),i("q-card",{staticStyle:{width:"90vw"}},[i("q-card-media",{staticClass:"relative-position"},[i("q-btn",{staticClass:"infobtn absolute-top-right",attrs:{color:"blue",flat:"flat",round:"round"},on:{click:function(t){e.openConfigModal()}}},[i("q-icon",{attrs:{color:"grey-7",name:"settings"}})],1),i("img",{staticStyle:{opacity:".9",width:"100px",height:"100px"},attrs:{src:"https://www.boid.com/media/boid/science-magnifying-glass-dna-cell.svg"}}),i("h6",{staticClass:"absolute-bottom-right text-grey-7",staticStyle:{"margin-right":"10px"}},[e._v("Mapping Cancer Makers")])],1),e.toggle?i("q-card-main",[e.activeTasks.length>0?i("p",[e._v("Active Tasks")]):i("p",[e._v("Downloading Tasks....")]),e._l(e.activeTasks,function(t,n){return e.activeTasks.length>0?i("div",{key:t.slot[0]},[1!=t.active_task_state[0]||e.onBatteries?i("q-progress",{attrs:{buffer:0,height:20,stripe:"stripe",percentage:100*t.checkpoint_fraction_done[0],color:"grey-4"}}):i("q-progress",{attrs:{buffer:0,height:20,stripe:"stripe",animate:"animate",percentage:e.modulateTaskProgress(t.checkpoint_fraction_done[0])}})],1):e._e()})],2):e._e(),i("q-card-separator"),i("q-card-actions",{staticClass:"taller relative-position"},[i("q-btn",{attrs:{small:"small",round:"round",flat:"flat"}},[e.toggle?i("q-icon",{staticClass:"on-right",attrs:{name:e.boincStatusIcon}}):e._e()],1),e.toggle?i("h6",{staticClass:"text-grey-8 on-right",staticStyle:{"padding-top":"5px"}},[e._v(e._s(e.boincStatus))]):e._e(),e.toggle?i("q-spinner-grid",{staticClass:"inline on-right absolute-right",staticStyle:{right:"70px",top:"20px"},attrs:{size:20,color:"grey-4"}}):e._e(),i("q-toggle",{staticClass:"absolute-right",staticStyle:{padding:"20px"},attrs:{color:"green",disable:e.pending},model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}})],1)],1)],1):i("div",{staticClass:"layout-padding relative-position"},[i("div",{staticClass:"text-center"},[e._v("Initializing....")])])])},staticRenderFns:[]};t.a=n}});