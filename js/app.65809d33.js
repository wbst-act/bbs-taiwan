(function(e){function n(n){for(var a,c,s=n[0],i=n[1],d=n[2],u=0,l=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(l.length)l.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(a=!1)}a&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-099a9edf":"4f0aba1d","chunk-3c5aa9c6":"93d9c161","chunk-4a284098":"e47615c1","chunk-5ac30e18":"cb7d9e1d","chunk-aac3b08a":"d292f1d8","chunk-b3d041be":"91c12f36","chunk-ecbf78c4":"94f912e1","chunk-19505115":"1178b177","chunk-31d70396":"6e1cff9b","chunk-029cbe98":"d0940153","chunk-41ad831f":"de9b1684","chunk-5a03cd10":"24fd2a70","chunk-60729070":"73d4e04e","chunk-62eb3b55":"c6224f1f","chunk-363e6b50":"396424a0","chunk-3aee5d93":"d293243c","chunk-e99f194e":"2be206f8"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-099a9edf":1,"chunk-3c5aa9c6":1,"chunk-5ac30e18":1,"chunk-aac3b08a":1,"chunk-b3d041be":1,"chunk-ecbf78c4":1,"chunk-19505115":1,"chunk-31d70396":1,"chunk-029cbe98":1,"chunk-41ad831f":1,"chunk-60729070":1,"chunk-62eb3b55":1,"chunk-363e6b50":1,"chunk-3aee5d93":1,"chunk-e99f194e":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-099a9edf":"062cd1b7","chunk-3c5aa9c6":"f32eaac2","chunk-4a284098":"31d6cfe0","chunk-5ac30e18":"0382f3fd","chunk-aac3b08a":"af1b91ff","chunk-b3d041be":"e4283073","chunk-ecbf78c4":"27d7111a","chunk-19505115":"11e5c157","chunk-31d70396":"9deb4d24","chunk-029cbe98":"0f5f7bce","chunk-41ad831f":"a38e5248","chunk-5a03cd10":"31d6cfe0","chunk-60729070":"1434bd55","chunk-62eb3b55":"1a8e324a","chunk-363e6b50":"108e3324","chunk-3aee5d93":"f5756e02","chunk-e99f194e":"513229a5"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var d=o[s],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===a||u===r))return n()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){d=l[s],u=d.getAttribute("data-href");if(u===a||u===r)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),t(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=o);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var l=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(f);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/bbs-taiwan/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.hydrated?t("router-view"):e._e()},r=[],o=t("1da1"),s=t("5530"),i=(t("96cf"),t("2f62")),d={name:"App",data:function(){return{updated:!1}},computed:Object(s["a"])({},Object(i["c"])({hydrated:"hydrated"})),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var t,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.isOnline){n.next=6;break}return t=e.$offlineStorage.get("version"),n.next=4,e.check_update();case 4:a=n.sent,t!=a&&e.$router.push({name:"更新資料",params:{version:t,new_version:a}});case 6:case"end":return n.stop()}}),n)})))()},methods:{check_update:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.get("https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/1/public/full?alt=json").then((function(e){return e.data.feed.entry[0].gsx$version.$t}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))()}}},u=d,l=t("2877"),f=Object(l["a"])(u,c,r,!1,null,null,null),b=f.exports,h=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-navigation-drawer",{attrs:{app:"",color:"blue-grey lighten-5",clipped:e.$vuetify.breakpoint.lgAndUp},model:{value:e.drawer,callback:function(n){e.drawer=n},expression:"drawer"}},[t("v-list",{attrs:{dense:"",nav:""}},[t("v-list-item",{attrs:{to:encodeURI("/合併匯出")}},[t("v-list-item-icon",[t("v-icon",{attrs:{color:"blue-grey"}},[e._v(e._s(e.icons.mdiMicrosoftExcel))])],1),t("v-list-item-content",[e._v("合併匯出")])],1),t("v-list-item",{attrs:{to:encodeURI("/樣區設定")}},[t("v-list-item-icon",[t("v-icon",{attrs:{color:"blue-grey"}},[e._v(e._s(e.icons.mdiMapMarker))])],1),t("v-list-item-content",[e._v("樣區設定")])],1),t("v-list-item",{attrs:{to:encodeURI("/鳥名錄")}},[t("v-list-item-icon",[t("v-icon",{attrs:{color:"blue-grey"}},[e._v(e._s(e.icons.mdiFormatListBulleted))])],1),t("v-list-item-content",[e._v("中華鳥名錄")])],1),t("v-list-item",{attrs:{to:encodeURI("/eBird匯入產生器")}},[t("v-list-item-icon",[t("v-icon",{attrs:{color:"blue-grey"}},[e._v(e._s(e.icons.mdiCloudUpload))])],1),t("v-list-item-content",[e._v("eBird匯入產生器")])],1),t("v-list-item",{attrs:{to:encodeURI("/關於程式")}},[t("v-list-item-icon",[t("v-icon",{attrs:{color:"blue-grey"}},[e._v(e._s(e.icons.mdiInformationOutline))])],1),t("v-list-item-content",[e._v("關於程式")])],1)],1)],1),t("v-app-bar",{attrs:{app:"",color:"blue-grey",dense:"",dark:"","clipped-left":e.$vuetify.breakpoint.lgAndUp}},[t("v-app-bar-nav-icon",{on:{click:function(n){n.stopPropagation(),e.drawer=!e.drawer}}}),t("v-toolbar-title",[e._v("BBS Taiwan記錄工具")]),t("v-spacer"),t("div",{staticClass:"subtitle-2"},[e._v(e._s(e.version))])],1),t("v-main",[t("router-view"),t("v-snackbar",{attrs:{value:e.updateExists,timeout:-1,color:"blue-grey",centered:""},scopedSlots:e._u([{key:"action",fn:function(n){n.attrs;return[t("v-btn",{attrs:{text:"",dark:""},on:{click:e.refreshApp}},[e._v("更新")])]}}])},[e._v("有新版本可以更新")])],1)],1)},m=[],j=t("94ed"),k=t("9224"),v={data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var e=this;document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(function(){e.refreshing||(e.refreshing=!0,window.location.reload(),alert("更新成功!"),window.location.href="/bbs-taiwan")}))},methods:{updateAvailable:function(e){this.registration=e.detail,this.updateExists=!0},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}},g={name:"Home",mixins:[v],data:function(){return{icons:{mdiMapMarker:j["r"],mdiNotebookEdit:j["u"],mdiFaceAgent:j["m"],mdiInformationOutline:j["p"],mdiMicrosoftExcel:j["t"],mdiFormatListBulleted:j["n"],mdiCloudUpload:j["g"]},drawer:null,version:k["a"]}}},y=g,w=t("6544"),_=t.n(w),E=t("7496"),A=t("40dc"),x=t("5bc1"),B=t("8336"),I=t("132d"),O=t("8860"),U=t("da13"),z=t("5d23"),C=t("34c3"),P=t("f6c4"),S=t("f774"),R=t("2db4"),N=t("2fa4"),D=t("2a7f"),L=Object(l["a"])(y,p,m,!1,null,null,null),F=L.exports;_()(L,{VApp:E["a"],VAppBar:A["a"],VAppBarNavIcon:x["a"],VBtn:B["a"],VIcon:I["a"],VList:O["a"],VListItem:U["a"],VListItemContent:z["a"],VListItemIcon:C["a"],VMain:P["a"],VNavigationDrawer:S["a"],VSnackbar:R["a"],VSpacer:N["a"],VToolbarTitle:D["a"]}),a["a"].use(h["a"]);var M=[{path:"/",component:F,children:[{path:"",name:"Home",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-ecbf78c4"),t.e("chunk-19505115"),t.e("chunk-41ad831f")]).then(t.bind(null,"1a33"))}}]},{path:encodeURI("/鳥名錄"),name:"鳥名錄",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-ecbf78c4"),t.e("chunk-19505115"),t.e("chunk-62eb3b55")]).then(t.bind(null,"1362"))}},{path:encodeURI("/子樣區列表/:logid"),name:"子樣區列表",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-3c5aa9c6"),t.e("chunk-b3d041be")]).then(t.bind(null,"c067"))}},{path:encodeURI("/BBS記錄/:logid"),name:"BBS記錄",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-ecbf78c4"),t.e("chunk-19505115"),t.e("chunk-60729070")]).then(t.bind(null,"e01e"))}},{path:encodeURI("/樣點設定/:plotid"),name:"樣點設定",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-ecbf78c4"),t.e("chunk-19505115"),t.e("chunk-5a03cd10")]).then(t.bind(null,"1bb5"))}},{path:encodeURI("/地圖預覽/:plotid"),name:"地圖預覽",component:function(){return Promise.all([t.e("chunk-3c5aa9c6"),t.e("chunk-4a284098")]).then(t.bind(null,"4bb4"))}},{path:encodeURI("/歷年鳥種清單/:plotid"),name:"歷年鳥種清單",component:function(){return t.e("chunk-5ac30e18").then(t.bind(null,"4184"))}},{path:encodeURI("/樣區設定"),name:"樣區設定",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-ecbf78c4"),t.e("chunk-19505115"),t.e("chunk-31d70396"),t.e("chunk-029cbe98")]).then(t.bind(null,"03e5"))}},{path:encodeURI("/關於程式"),name:"關於程式",component:function(){return t.e("chunk-e99f194e").then(t.bind(null,"f820"))}},{path:encodeURI("/合併匯出"),name:"合併匯出",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-ecbf78c4"),t.e("chunk-31d70396"),t.e("chunk-3aee5d93")]).then(t.bind(null,"3696"))}},{path:encodeURI("/eBird匯入產生器"),name:"eBird匯入產生器",component:function(){return Promise.all([t.e("chunk-aac3b08a"),t.e("chunk-ecbf78c4"),t.e("chunk-31d70396"),t.e("chunk-363e6b50")]).then(t.bind(null,"0c21"))}},{path:encodeURI("/更新資料"),name:"更新資料",component:function(){return t.e("chunk-099a9edf").then(t.bind(null,"9e68"))}},{path:"*",redirect:"/"}],T=new h["a"]({mode:"history",base:"/bbs-taiwan/",routes:M}),V=T,$=t("4fc2"),q=t.n($);a["a"].use(q.a);var G=new q.a({version:1,database:"bbstaiwan",schemas:[{plot:"id, name, city, town, loc1, loc2, loc3, water"},{plot_dtl:"id, plot, pno, lat, lng, loc1, loc2, loc3, water, create_date"},{bbs_log:"id, date, plot, lno, wind, weather, member, create_date, update_date"},{bbs_log_dtl:"id, log_id, plot_dtl, log_time, wind, weather, create_date, update_date"},{bbs_log_bird:"id, log_dtl, period, bird, distance, qty, group, memo, create_date"}],options:{plot:{type:"list",primary:"id"},plot_dtl:{type:"list",primary:"id"},bbs_log:{type:"list",primary:"id"},bbs_log_dtl:{type:"list",primary:"id",updated_at:"create_date"},bbs_log_bird:{type:"list",primary:"id"}}});a["a"].use(i["a"]);var H=!1,J=G.modules,K=new i["a"].Store({state:{static_data_path:"/bbs-taiwan/data/",hydrated:!1,wind:{0:"靜, 樹葉草莖不動",1:"風拂面, 樹葉有聲, 草莖及小枝動",2:"塵沙飛揚，紙片飛舞，小樹幹搖動",3:"大樹搖動，木板或雜物可能被吹倒"},weather:{A:"沒有雲, 或零星幾朵雲",B:"部分有雲 (零散) 或雲層多變",C:"雲層滿佈（包括陰天）",D:"濃霧",E:"毛毛雨",F:"陣雨"},period:{A:"0-3分鐘",B:"3-6分鐘",X:"<0 or >6分鐘(補充記錄)"},plottype:{"":"無",A1:"闊葉林",A2:"針葉林",A3:"針闊混林（針闊葉樹各＞10％）",A4:"竹林",A5:"竹闊混林（竹闊葉樹各＞10％）",A6:"木麻黃防風林",A7:"其他森林",B1:"水稻田",B2:"其他水田（如菱角田、荷花田）",B3:"甘蔗田",B4:"旱田（如各類菜園、鳳梨花生田等）",B5:"果園/苗圃（如檳榔、柳丁、蓮霧、香蕉、龍眼等）",B6:"其他農墾地",C1:"高莖旱生草地（高度＞50公分，如五節芒草生地）",C2:"低莖旱生草地（高度＜50公分，如龍磐草原牧草地）",C3:"高莖草澤（高度＞50公分，如蘆葦草澤）",C4:"低莖草澤（高度＜50公分，如雲林苑草或茳茳鹹草）",C5:"箭竹草原",C6:"其他草生地",D1:"水庫",D2:"埤塘/湖泊",D3:"河川（寬度＞3公尺）",D4:"溪澗（寬度＜3公尺）",D5:"其他淡水水域",E1:"魚塭/鹽田（滿水）",E2:"魚塭/鹽田（放乾）",E3:"魚塭/鹽田（廢棄）（植被生長至魚塭/鹽田中央）",E4:"其他魚塭鹽田",F1:"泥灘型潮間帶",F2:"礁岩型潮間帶",F3:"石礫型海岸",F4:"沙灘型海岸",F5:"海洋",F6:"其他海岸",G1:"都市",G2:"公園",G3:"農村村莊",G4:"其他建築區",H:"其他"},watertype:{"":"無",A:"有「溪澗」或「溝渠」流過範圍內",B:"有小面積的「池塘」存在於範圍內"},distance:{A:"0-25m",B:"25-100m",C:"100m以上",D:"飛過",X:"未判定距之補充記錄"}},actions:{},mutations:{DELETE_INDEXED_DB:function(){}},modules:J,getters:{hydrated:function(e){return e.hydrated}},plugins:[G.plugin],strict:H}),X=t("f309");a["a"].use(X["a"]);var W=new X["a"]({icons:{iconfont:"mdiSvg"}}),Q=t("2ead"),Y=t.n(Q),Z=t("7f45"),ee=t.n(Z),ne=t("bf4e"),te=t.n(ne),ae=t("bc3a"),ce=t.n(ae),re=t("2106"),oe=t.n(re),se=t("9483");Object(se["a"])("".concat("/bbs-taiwan/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].use(te.a),a["a"].use(oe.a,ce.a),a["a"].use(Y.a,{moment:ee.a}),a["a"].config.productionTip=!1,new a["a"]({router:V,store:K,vuetify:W,render:function(e){return e(b)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"a":"0.1.21"}')}});
//# sourceMappingURL=app.65809d33.js.map