(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62eb3b55"],{1362:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"blue-grey",dark:"",dense:""}},[n("v-app-bar-nav-icon",{attrs:{to:"/"}},[n("v-icon",[t._v(t._s(t.icons.mdiHome))])],1),n("v-toolbar-title",[n("span",{staticClass:"mr-5"},[t._v("中華鳥名錄")])]),n("v-spacer"),n("div",{staticClass:"subtitle-1"},[t._v("2020 ver")])],1),n("v-main",[n("v-card",{attrs:{flat:""}},[n("v-list",{attrs:{"two-line":"",dense:""}},[t._l(t.birds,(function(e,a){return[n("v-list-item",{key:a,attrs:{link:""},on:{click:function(n){return t.speak(a,e)}}},[n("v-list-item-content",[n("v-list-item-title",[n("span",{staticClass:"text-h6 mr-5"},[t._v(t._s(a))]),n("span",{staticClass:"text-h6"},[t._v(t._s(e.es.join(" ")))])]),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.e+"<span style='float:right'><i>"+e.sn+"</i></span>")}})],1),n("v-list-item-action",[n("v-icon",[t._v(t._s(t.icons.mdiVolumeHigh)+" ")])],1)],1),n("v-divider")]}))],2)],1),n("v-bottom-sheet",{scopedSlots:t._u([{key:"activator",fn:function(e){e.on,e.attrs;return[n("v-btn",{attrs:{fixed:"",dark:"",fab:"",bottom:"",right:"",color:"blue-grey"},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v(t._s(t.icons.mdiMagnify))])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-sheet",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-select",{attrs:{items:t.familys,"item-text":"name","item-value":"id",dense:"",label:"篩選科別"},on:{change:t.search_birds},model:{value:t.filter_family,callback:function(e){t.filter_family=e},expression:"filter_family"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"任意字查詢",dense:"",clearable:""},on:{input:t.search_birds},model:{value:t.search_words,callback:function(e){t.search_words=e},expression:"search_words"}})],1)],1)],1)],1)],1)],1)],1)},s=[],i=n("3835"),c=n("1da1"),r=n("2909"),o=n("5530"),l=(n("96cf"),n("99af"),n("d81d"),n("4fad"),n("7db0"),n("c740"),n("c1f9"),n("4de4"),n("caad"),n("2532"),n("1276"),n("ac1f"),n("2f62")),d=n("94ed"),f={name:"Sname",data:function(){return{icons:{mdiHome:d["o"],mdiDotsVertical:d["j"],mdiVolumeHigh:d["y"],mdiMagnify:d["q"]},birds:null,allbirds:{},ebird_family:{},search_words:"",filter_family:0,dialog:!1,synth:window.speechSynthesis,speech:new window.SpeechSynthesisUtterance}},computed:Object(o["a"])({familys:function(){return[{name:"全部",id:0}].concat(Object(r["a"])(Object.entries(this.ebird_family).map((function(t){return{id:t[1],name:t[0]}}))))}},Object(l["e"])(["static_data_path"])),mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.ebird_family=t.$offlineStorage.get("tw_familys"),t.allbirds=t.$offlineStorage.get("tw_birds"),t.birds=Object.assign({},t.allbirds);case 3:case"end":return e.stop()}}),e)})))()},created:function(){this.speech.voice=this.synth.getVoices().find((function(t){return"zh-TW"==t.lang}))},methods:{FindCodes:function(t,e){return t.length>0&&t.findIndex((function(t){return 0==t.indexOf(e)}))>=0},search_birds:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.birds=Object.assign({},t.allbirds),0!=t.filter_family&&(t.birds=Object.fromEntries(Object.entries(t.birds).filter((function(e){var n=Object(i["a"])(e,2),a=n[1];return a.f==t.filter_family})))),t.search_words&&(n=t.search_words.toUpperCase(),t.birds=Object.fromEntries(Object.entries(t.birds).filter((function(e){var a=Object(i["a"])(e,2),s=a[0],c=a[1];return s.includes(n)||t.FindCodes(c.es,n)||n.length>3&&(0==c.e.toUpperCase().indexOf(n)||0==c.sn.toUpperCase().indexOf(n))}))));case 3:case"end":return e.stop()}}),e)})))()},speak:function(t,e){this.speech.text=t+" "+e.e,this.synth.speak(this.speech)},format_ename:function(t){var e=t.split(/ |-/);return 1==e.length?'<span class="black--text">'.concat(t.substr(0,4),"</span>")+"".concat(t.substr(4)):2==e.length?'<span class="black--text">'.concat(t.substr(0,2),"</span>")+"".concat(t.substring(2,t.indexOf(e[1])))+'<span class="black--text">'.concat(t.substr(t.indexOf(e[1]),2),"</span>")+"".concat(t.substring(t.indexOf(e[1])+2)):3==e.length?'<span class="black--text">'.concat(t.substr(0,1),"</span>")+"".concat(t.substring(1,t.indexOf(e[1])))+'<span class="black--text">'.concat(t.substr(t.indexOf(e[1]),1),"</span>")+"".concat(t.substring(t.indexOf(e[1])+1,t.indexOf(e[2])))+'<span class="black--text">'.concat(t.substr(t.indexOf(e[2]),2),"</span>")+"".concat(t.substring(t.indexOf(e[2])+2)):'<span class="black--text">'.concat(t.substr(0,1),"</span>")+"".concat(t.substring(1,t.indexOf(e[1])))+'<span class="black--text">'.concat(t.substr(t.indexOf(e[1]),1),"</span>")+"".concat(t.substring(t.indexOf(e[1])+1,t.indexOf(e[2])))+'<span class="black--text">'.concat(t.substr(t.indexOf(e[2]),1),"</span>")+"".concat(t.substring(t.indexOf(e[2])+1,t.indexOf(e[3])))+'<span class="black--text">'.concat(t.substr(t.indexOf(e[3]),1),"</span>")+"".concat(t.substring(t.indexOf(e[3])+1))}}},u=f,b=n("2877"),p=n("6544"),m=n.n(p),h=n("7496"),v=n("40dc"),x=n("5bc1"),g=n("288c"),_=n("8336"),O=n("b0af"),k=n("62ad"),w=n("a523"),y=n("ce7e"),V=n("132d"),j=n("8860"),S=n("da13"),C=n("1800"),I=n("5d23"),L=n("f6c4"),T=n("0fd9"),E=n("b974"),R=n("8dd9"),A=n("2fa4"),B=n("8654"),H=n("2a7f"),M=Object(b["a"])(u,a,s,!1,null,null,null);e["default"]=M.exports;m()(M,{VApp:h["a"],VAppBar:v["a"],VAppBarNavIcon:x["a"],VBottomSheet:g["a"],VBtn:_["a"],VCard:O["a"],VCol:k["a"],VContainer:w["a"],VDivider:y["a"],VIcon:V["a"],VList:j["a"],VListItem:S["a"],VListItemAction:C["a"],VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VMain:L["a"],VRow:T["a"],VSelect:E["a"],VSheet:R["a"],VSpacer:A["a"],VTextField:B["a"],VToolbarTitle:H["a"]})},"288c":function(t,e,n){"use strict";var a=n("5530"),s=(n("a9e3"),n("d0cd"),n("169a"));e["a"]=s["a"].extend({name:"v-bottom-sheet",props:{inset:Boolean,maxWidth:{type:[String,Number],default:"auto"},transition:{type:String,default:"bottom-sheet-transition"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-bottom-sheet":!0,"v-bottom-sheet--inset":this.inset})}}})},c1f9:function(t,e,n){var a=n("23e7"),s=n("2266"),i=n("8418");a({target:"Object",stat:!0},{fromEntries:function(t){var e={};return s(t,(function(t,n){i(e,t,n)}),{AS_ENTRIES:!0}),e}})},d0cd:function(t,e,n){}}]);
//# sourceMappingURL=chunk-62eb3b55.c6224f1f.js.map