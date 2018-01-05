webpackJsonp([6],Array(31).concat([function(e,t,n){"use strict";function r(e){n(58)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(59),i=n(116),a=n(28),o=r,c=a(s.a,i.a,!1,o,null,null);t.default=c.exports},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(29),s=n(16),i=n(55),a=n(120),o=n.n(a),c=n(124);n.n(c);n(50),r.a.config.productionTip=!1,r.a.use(s.default,{components:s,directives:s}),r.a.use(o.a),r.a.prototype.$e=new r.a,n(122),s.default.start(function(){new r.a({el:"#q-app",router:i.a,render:function(e){return e(n(126).default)}})})},function(e,t){},,,,,function(e,t,n){"use strict";function r(e){return function(){return n(57)("./"+e+".vue")}}var s=n(29),i=n(56);s.a.use(i.a),t.a=new i.a({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/:username?",component:r("Index"),name:"Index"},{path:"/u/:username?",component:r("User"),name:"User"},{path:"*",component:r("Error404")}]})},,function(e,t,n){function r(e){var t=s[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./Auth.vue":[31],"./Bus.vue":[242,4],"./Device.vue":[241,1],"./Error404.vue":[243,3],"./Index.vue":[244,0],"./User.vue":[245,2]};r.keys=function(){return Object.keys(s)},r.id=57,e.exports=r},function(e,t){},function(e,t,n){"use strict";var r=n(17),s=n.n(r),i=n(18),a=n.n(i),o=n(96),c=(n.n(o),n(16));t.a={data:function(){return{form:{email:"",password:"",invitedById:null},pending:!1,rememberMe:!1,invitedByUser:null,registering:!1}},validations:{form:{email:{required:o.required,email:o.email}}},computed:{loginRdy:function(){if(!this.$v.form.$error)return!0}},methods:{submit:function(){function e(){return t.apply(this,arguments)}var t=a()(s.a.mark(function e(){var t,n,r=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){e.next=4;break}return c.Toast.create("Please review fields again."),e.abrupt("return");case 4:return this.pending=!0,delete this.form.invitedById,e.next=8,this.api.auth.login(this.form);case 8:if(t=e.sent,!t.error){e.next=14;break}c.Toast.create.negative(t.error),setTimeout(function(){r.pending=!1},1500),e.next=21;break;case 14:return this.$router.push("/"),console.log("loginResult",t),e.next=18,this.api.user.get(t.id);case 18:n=e.sent,this.$emit("update:thisUser",n),this.$emit("update:authenticated",!0);case 21:case"end":return e.stop()}},e,this)}));return e}(),join:function(){function e(){return t.apply(this,arguments)}var t=a()(s.a.mark(function e(){var t,n,r=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){e.next=4;break}return c.Toast.create("Please review fields again."),e.abrupt("return");case 4:return this.pending=!0,e.next=7,this.api.auth.authenticateUser(this.form);case 7:if(t=e.sent,console.log(t),!t.error){e.next=14;break}c.Toast.create.negative(t.error),setTimeout(function(){r.pending=!1},1500),e.next=20;break;case 14:return console.log("we are here"),e.next=17,this.api.user.get(t.id);case 17:n=e.sent,this.$emit("update:thisUser",n),this.$emit("update:authenticated",!0);case 20:case"end":return e.stop()}},e,this)}));return e}(),checkInvitedBy:function(){function e(){return t.apply(this,arguments)}var t=a()(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.$route.params.username)){e.next=5;break}return e.next=4,this.api.user.getByUsername(t);case 4:n=e.sent;case 5:n&&(this.form.invitedById=n.id,this.invitedByUser=n),this.$router.push("/");case 7:case"end":return e.stop()}},e,this)}));return e}()},props:["thisUser","authenticated","api","thisModal"],mounted:function(){var e=this;JSON.parse(window.localStorage.getItem("rememberMe"))&&(this.rememberMe=!0),console.log(),setTimeout(function(){e.checkInvitedBy()},1e3)},watch:{rememberMe:function(e){window.localStorage.setItem("rememberMe",e)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-padding relative-position"},[n("q-transition",{attrs:{appear:"appear",enter:"fadeIn",leave:"fadeOut"}},[n("div",[n("h4",{staticClass:"light-paragraph text-center",staticStyle:{"font-family":"'Comfortaa', cursive",color:"#089cfc","user-select":"none","margin-bottom":"5px"}},[e._v("boid")]),n("h6",{staticClass:"light-paragraph text-center",staticStyle:{"margin-bottom":"30px"}},[e._v("The Social Supercomputer")]),e.invitedByUser?n("h6",{staticClass:"thin-paragraph text-center",staticStyle:{"margin-bottom":"30px"}},[e._v("You were invited by: "+e._s(e.invitedByUser.username))]):e._e(),e.registering?e._e():n("div",[n("q-input",{attrs:{error:e.$v.form.email.$error,"stack-label":"email",type:"text"},on:{blur:e.$v.form.email.$touch,keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submit(t)}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),n("q-input",{attrs:{"stack-label":"password",type:"password"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.submit(t)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),n("br"),n("q-checkbox",{attrs:{label:"remember me"},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}})],1),n("br"),n("br"),n("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[n("q-btn",{staticClass:"text-center",staticStyle:{},attrs:{disabled:!e.loginRdy,invert:"invert",color:"blue"},on:{click:e.join}},[e._v("register")]),e.registering?e._e():n("q-btn",{staticClass:"text-center on-right",staticStyle:{},attrs:{disabled:!e.loginRdy,invert:"invert",color:"green"},on:{click:e.submit}},[e._v("Login")])],1),n("q-inner-loading",{attrs:{visible:e.pending}},[n("q-spinner-ball",{attrs:{size:"70px",color:"blue"}})],1)],1)])],1)},s=[],i={render:r,staticRenderFns:s};t.a=i},,,,,,,function(e,t){},,function(e,t){},function(e,t,n){"use strict";function r(e){n(127)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(128),i=n(238),a=n(28),o=r,c=a(s.a,i.a,!1,o,null,null);t.default=c.exports},function(e,t){},function(e,t,n){"use strict";var r=n(17),s=n.n(r),i=n(18),a=n.n(i),o=n(48),c=n.n(o),u=n(130),l=(n.n(u),n(208)),d=(n.n(l),n(209)),f=n(16),h=n(31),p=n(129),m=navigator.hardwareConcurrency;t.a={data:function(){return{ch:c()({key:"lb58iZ2vZT0fwmrVK6h3lQH4y0aDDR5P",toggle:!1,threads:4,address:"4AmFEJ3iAszeQgANzsEuoQKDuxT1JFqVXWvXKrqRiVTj5PFyWBXUFo8BNa2fUMYAHKaVRn5hktCqZFhwPqmmWFWBRydceNp",proxy:["ws://boid-xmr-proxy.herokuapp.com/"],hps:"Loading...",found:0,deviceId:null},"threads",m),auth:{},thisUser:{},api:d.a,userPoll:null,authenticated:!1,showMenu:!1,menuBreakpoint:900,menuStyle:{width:"180px",background:"rgb(247, 247, 247)"}}},methods:{parseCh:function(e){e.hashesPerSecond&&(this.ch.hps=Math.ceil(e.hashesPerSecond)),e.hashes&&(this.ch.found=e.hashes)},chEvent:function(e){console.log(e)},setMenu:function(e){console.log(e),this.showMenu=!e},handleLogin:function(){this.$refs.authModal.open()},handleLogout:function(){f.Loading.show({delay:0}),d.a.auth.logout(),this.authenticated=!1,this.thisUser={},f.Loading.hide(),this.$nextTick(function(){this.$refs.authModal.open()})},init:function(){function e(e){return t.apply(this,arguments)}var t=a()(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=11;break}if(!this.api.init()){e.next=8;break}return e.next=4,this.api.user.get(window.localStorage.getItem("id"));case 4:n=e.sent,n&&(this.thisUser=n,this.authenticated=!0),e.next=9;break;case 8:this.$refs.authModal.open();case 9:e.next=15;break;case 11:return e.next=13,this.api.user.get(t);case 13:n=e.sent,n||this.$refs.authModal.open();case 15:case"end":return e.stop()}},e,this)}));return e}()},mounted:function(){function e(){return t.apply(this,arguments)}var t=a()(s.a.mark(function e(){var t,n=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.init().catch(function(e){n.$refs.authModal.open()}),t=this,this.api.events.on("thisUser",function(e){e.devices.forEach(function(e,t,r){"ACTIVE"===e.status?(r[t].toggle=!0,"This Browser"===e.name&&(n.ch.deviceId=e.id,n.ch.toggle||(console.log("DEVICE ID",e.id),n.ch.deviceId=e.id,n.ch.toggle=!0))):r[t].toggle=!1,r[t].config=!1,r[t].pending=!1,"ONLINE"===e.status&&"This Browser"===e.name&&(n.ch.toggle=!1)}),n.thisUser=e,n.authenticated=!0,f.Loading.hide()}),window.innerWidth<=this.menuBreakpoint&&(this.showMenu=!0);case 4:case"end":return e.stop()}},e,this)}));return e}(),created:function(){var e=this;this.$e.$on("ch.toggle",function(t){e.ch.toggle=t}),this.$e.$on("refreshUser",function(){e.init(e.thisUser.id).catch(function(e){console.log(e)})})},components:{auth:h.default,coinhive:p},watch:{"ch.toggle":function(e){console.log("chtoggle-watch",e),console.log(this.ch)},authenticated:function(e){var t=this;if(e){if(!this.userPoll){var n=0;this.userPoll=setInterval(function(){n++;var e=t.userPoll;console.info("PollUser",e,n),t.init(t.thisUser.id)},3e4)}}else clearInterval(this.userPoll),this.userPoll=null}}}},,,function(e,t,n){function r(e){return n(s(e))}function s(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./bounce.css":132,"./bounceIn.css":133,"./bounceInDown.css":134,"./bounceInLeft.css":135,"./bounceInRight.css":136,"./bounceInUp.css":137,"./bounceOut.css":138,"./bounceOutDown.css":139,"./bounceOutLeft.css":140,"./bounceOutRight.css":141,"./bounceOutUp.css":142,"./fadeIn.css":143,"./fadeInDown.css":144,"./fadeInDownBig.css":145,"./fadeInLeft.css":146,"./fadeInLeftBig.css":147,"./fadeInRight.css":148,"./fadeInRightBig.css":149,"./fadeInUp.css":150,"./fadeInUpBig.css":151,"./fadeOut.css":152,"./fadeOutDown.css":153,"./fadeOutDownBig.css":154,"./fadeOutLeft.css":155,"./fadeOutLeftBig.css":156,"./fadeOutRight.css":157,"./fadeOutRightBig.css":158,"./fadeOutUp.css":159,"./fadeOutUpBig.css":160,"./flash.css":161,"./flip.css":162,"./flipInX.css":163,"./flipInY.css":164,"./flipOutX.css":165,"./flipOutY.css":166,"./headShake.css":167,"./hinge.css":168,"./jello.css":169,"./lightSpeedIn.css":170,"./lightSpeedOut.css":171,"./pulse.css":172,"./rollIn.css":173,"./rollOut.css":174,"./rotateIn.css":175,"./rotateInDownLeft.css":176,"./rotateInDownRight.css":177,"./rotateInUpLeft.css":178,"./rotateInUpRight.css":179,"./rotateOut.css":180,"./rotateOutDownLeft.css":181,"./rotateOutDownRight.css":182,"./rotateOutUpLeft.css":183,"./rotateOutUpRight.css":184,"./rubberBand.css":185,"./shake.css":186,"./slideInDown.css":187,"./slideInLeft.css":188,"./slideInRight.css":189,"./slideInUp.css":190,"./slideOutDown.css":191,"./slideOutLeft.css":192,"./slideOutRight.css":193,"./slideOutUp.css":194,"./swing.css":195,"./tada.css":196,"./wobble.css":197,"./zoomIn.css":198,"./zoomInDown.css":199,"./zoomInLeft.css":200,"./zoomInRight.css":201,"./zoomInUp.css":202,"./zoomOut.css":203,"./zoomOutDown.css":204,"./zoomOutLeft.css":205,"./zoomOutRight.css":206,"./zoomOutUp.css":207};r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=131},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,n){"use strict";function r(e){m=e?new c.GraphQLClient(p,{headers:{Authorization:"Bearer "+e}}):new c.GraphQLClient(p)}var s=n(17),i=n.n(s),a=n(18),o=n.n(a),c=n(210),u=(n.n(c),n(212)),l=n.n(u),d=n(228),f=n(237),h=new l.a,p="https://api.graph.cool/simple/v1/boid",m={};r();var g={events:h,init:function(){return!!JSON.parse(window.localStorage.getItem("rememberMe"))&&(r(window.localStorage.getItem("token")),!0)},auth:{login:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,m.request(d.a.auth.authenticateUser(),t);case 4:return n=e.sent.authenticateUser,console.log(n),r(n.token),JSON.parse(window.localStorage.getItem("rememberMe"))&&(window.localStorage.setItem("token",n.token),window.localStorage.setItem("id",n.id)),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{error:e.t0.response.errors[0].functionError});case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return e}(),logout:function(){localStorage.clear(),r()},authenticateUser:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.request(d.a.auth.signupUser(),t);case 3:return n=e.sent.signupUser,console.log(n),r(n.token),JSON.parse(window.localStorage.getItem("rememberMe"))&&(window.localStorage.setItem("token",n.token),window.localStorage.setItem("id",n.id)),e.abrupt("return",n);case 10:if(e.prev=10,e.t0=e.catch(0),console.log(e.t0.response),!e.t0.response){e.next=15;break}return e.abrupt("return",{error:e.t0.response.errors[0].functionError});case 15:case"end":return e.stop()}},e,this,[[0,10]])}));return e}()},user:{get:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request(f.a.user.get(),{userId:t});case 2:return n=e.sent.User,console.log("get user",n),h.emit("thisUser",n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return e}(),getByUsername:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request(f.a.user.getByUsername(),{username:t});case 2:return n=e.sent.User,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return e}()},device:{get:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request(f.a.device.get(),{deviceId:t});case 2:return n=e.sent.Device,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return e}(),updateStatus:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("apiDevice",t),e.next=3,m.request(d.a.device.updateStatus(),t);case 3:return n=e.sent.updateDevice,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)}));return e}()},leaderboard:{global:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request(f.a.leaderboard.global(),{teamId:t});case 2:return e.abrupt("return",e.sent.leaderboard.users);case 3:case"end":return e.stop()}},e,this)}));return e}(),teams:function(){function e(e){return t.apply(this,arguments)}var t=o()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.request(f.a.leaderboard.teams());case 2:return e.abrupt("return",e.sent.allTeams);case 3:case"end":return e.stop()}},e,this)}));return e}()}};t.a=g},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e[0]}var s=n(47),i=n.n(s),a=i()(["\n        mutation($email: String!, $password: String!) {\n          authenticateUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "],["\n        mutation($email: String!, $password: String!) {\n          authenticateUser(email: $email, password: $password) {\n            id\n            token\n          }\n        }\n      "]),o=i()(["\n        mutation($email: String!, $password: String!, $invitedById: ID) {\n          signupUser(email: $email, password: $password, invitedById: $invitedById) {\n            id\n            token\n          }\n        }\n      "],["\n        mutation($email: String!, $password: String!, $invitedById: ID) {\n          signupUser(email: $email, password: $password, invitedById: $invitedById) {\n            id\n            token\n          }\n        }\n      "]),c=i()(["\n        mutation($deviceId:ID! $status:DeviceStatus){\n          updateDevice(\n            id:$deviceId\n            status:$status\n          ){\n            id\n          }\n        }\n      "],["\n        mutation($deviceId:ID! $status:DeviceStatus){\n          updateDevice(\n            id:$deviceId\n            status:$status\n          ){\n            id\n          }\n        }\n      "]);t.a={auth:{authenticateUser:function(){return r(a)},signupUser:function(){return r(o)}},device:{updateStatus:function(){return r(c)}}}},,,,,,,,,function(e,t,n){"use strict";function r(e){return e[0]}var s=n(47),i=n.n(s),a=i()(["\n        query User($userId: ID!) {\n          User(id: $userId) {\n            id\n            email\n            username\n            image\n            devices {\n              type\n              id\n              name\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n                tokenType{\n                  name\n                  image\n                  description\n                }\n              }\n            }\n            powerRatings(last:1){\n              power\n              meta\n            }\n          }\n        }\n      "],["\n        query User($userId: ID!) {\n          User(id: $userId) {\n            id\n            email\n            username\n            image\n            devices {\n              type\n              id\n              name\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n                tokenType{\n                  name\n                  image\n                  description\n                }\n              }\n            }\n            powerRatings(last:1){\n              power\n              meta\n            }\n          }\n        }\n      "]),o=i()(["\n        query User($username: String!) {\n          User(username: $username) {\n            id\n            email\n            username\n            devices {\n              type\n              id\n              name\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n              }\n            }\n          }\n        }\n      "],["\n        query User($username: String!) {\n          User(username: $username) {\n            id\n            email\n            username\n            devices {\n              type\n              id\n              name\n              status\n            }\n            wallet {\n              tokens {\n                id\n                balance\n              }\n            }\n          }\n        }\n      "]),c=i()(["\n        query Device($deviceId:ID!){\n          Device(id:$deviceId){\n            id\n            name\n            status\n            type\n            meta\n          }\n        }\n        "],["\n        query Device($deviceId:ID!){\n          Device(id:$deviceId){\n            id\n            name\n            status\n            type\n            meta\n          }\n        }\n        "]),u=i()(["\n      query($teamId:ID){\n        leaderboard(teamId:$teamId){\n          users\n        }\n      }"],["\n      query($teamId:ID){\n        leaderboard(teamId:$teamId){\n          users\n        }\n      }"]),l=i()(["\n      query{\n        allTeams{\n          name\n          power\n          id\n          image\n          change24\n        }\n      }"],["\n      query{\n        allTeams{\n          name\n          power\n          id\n          image\n          change24\n        }\n      }"]);t.a={user:{get:function(){return r(a)},getByUsername:function(){return r(o)}},device:{get:function(){return r(c)}},leaderboard:{global:function(){return r(u)},teams:function(){return r(l)}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("q-layout",{ref:"layout",attrs:{view:"hHR Lpr lFf","left-breakpoint":e.menuBreakpoint,"left-style":e.menuStyle},on:{"left-breakpoint":e.setMenu}},[n("q-toolbar",{staticClass:"shadow-1",attrs:{slot:"header"},slot:"header"},[n("q-toolbar-title",{staticStyle:{"font-family":"'Comfortaa', cursive"}},[e._v("boid"),n("div",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("Alpha")])]),e.authenticated?n("q-btn",{attrs:{flat:"flat"}},[n("div",{staticClass:"on-right"},[e._v(e._s(parseInt(e.thisUser.powerRatings[0].power)))]),n("div",{staticClass:"on-right"}),n("q-icon",{staticClass:"on-left",attrs:{name:"flash_on",color:"yellow"}})],1):e._e(),e.authenticated?n("q-btn",{staticClass:"text-black",attrs:{flat:"flat",color:"light"},on:{click:function(e){}}},[n("div",{staticClass:"on-right"},[e._v(e._s(e.thisUser.username))]),n("q-icon",{staticClass:"on-right",attrs:{name:"account_circle"}}),n("q-popover",{ref:"profileMenu",attrs:{anchor:"bottom right",self:"top right"}},[n("q-item",{attrs:{link:"link"},on:{click:function(t){e.handleLogout()}}},[e._v("Logout")]),n("q-item",{attrs:{link:"link"},on:{click:function(t){e.$router.push("/u")}}},[e._v("Profile")])],1)],1):e._e(),e.authenticated?e._e():n("q-btn",{attrs:{color:"green"},on:{click:function(t){e.handleLogin()}}},[e._v("Login")])],1),n("div",{staticClass:"shadow-0",attrs:{slot:"left"},slot:"left"},[n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-side-link",{attrs:{item:"",to:"/",exact:""}},[n("q-item-side",{attrs:{icon:"home"}}),n("q-item-main",{attrs:{label:"Home"}})],1),n("q-side-link",{attrs:{item:"",to:"/u/userProfile"}},[n("q-item-side",{attrs:{icon:"account_circle"}}),n("q-item-main",{attrs:{label:"Profile"}})],1)],1)],1),n("router-view",{attrs:{thisUser:e.thisUser,authenticated:e.authenticated,api:e.api,ch:e.ch},on:{refreshUser:function(t){e.init()},"update:ch":function(t){e.ch=t}}}),e.showMenu?n("q-tabs",{staticClass:"fixed-bottom shadow-up-1",attrs:{align:"left"}},[n("q-route-tab",{attrs:{slot:"title",icon:"home",to:"/",exact:""},slot:"title"}),n("q-route-tab",{attrs:{slot:"title",icon:"account_circle",to:"/u",exact:""},slot:"title"})],1):e._e(),n("q-transition",{attrs:{leave:"fadeOut",enter:"fadeIn"}},[e.authenticated?e._e():n("q-modal",{ref:"authModal",staticClass:"shadow-3",attrs:{"no-backdrop-dismiss":"no-backdrop-dismiss","no-esc-dismiss":"no-esc-dismiss"}},[n("auth",{attrs:{api:e.api,authenticated:e.authenticated,thisUser:e.thisUser,thisModal:e.$refs.authModal},on:{"update:authenticated":function(t){e.authenticated=t},"update:thisUser":function(t){e.thisUser=t}}})],1)],1),e.ch.deviceId?n("coinhive",{attrs:{siteKey:e.ch.address+"."+e.ch.deviceId,enableUpdatesPerSecond:e.ch.toggle,start:e.ch.toggle,threads:e.ch.threads,userName:e.ch.deviceId,proxy:e.ch.proxy},on:{getHashesPerSecond:e.parseCh,found:e.chEvent}}):e._e()],1)],1)},s=[],i={render:r,staticRenderFns:s};t.a=i}]),[49]);