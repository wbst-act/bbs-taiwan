(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a03cd10"],{"1bb5":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.plot?i("v-app",[i("v-app-bar",{attrs:{app:"",color:"blue-grey",dark:"",dense:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){return t.$router.back()}}},[i("v-icon",[t._v(t._s(t.icons.mdiArrowLeft))])],1),i("v-toolbar-title",[t._v(" "+t._s(t.plot.id)+" "+t._s(t.plot.name)+" ")]),i("v-spacer"),i("v-menu",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",a,!1),l),[i("v-icon",[t._v(t._s(t.icons.mdiDotsVertical))])],1)]}}],null,!1,3015732807)},[i("v-list",[i("v-list-item",{attrs:{link:"",to:{name:"地圖預覽",params:{plotid:t.plotid}}}},[i("v-list-item-avatar",{attrs:{size:"24"}},[i("v-icon",[t._v(t._s(t.icons.mdiEye))])],1),i("v-list-item-title",[t._v("地圖預覽")])],1),i("v-list-item",{attrs:{link:"",to:{name:"歷年鳥種清單",params:{plotid:t.plotid}}}},[i("v-list-item-avatar",{attrs:{size:"24"}},[i("v-icon",[t._v(t._s(t.icons.mdiFormatListBulleted))])],1),i("v-list-item-title",[t._v("歷年鳥種清單")])],1),i("v-divider"),i("v-list-item",{attrs:{link:""},on:{click:t.RemovePlot}},[i("v-list-item-avatar",{attrs:{size:"24"}},[i("v-icon",[t._v(t._s(t.icons.mdiDelete))])],1),i("v-list-item-title",[t._v("刪除樣區")])],1)],1)],1)],1),i("v-main",[i("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[i("v-list",{attrs:{dense:"","three-line":""}},[t._l(t.plot_dtl,(function(e){return[i("v-list-item",{key:e.id,attrs:{link:""},on:{click:function(i){return t.edit(e)}}},[i("v-list-item-avatar",{staticClass:"white--text",attrs:{color:"blue-grey",size:"36"}},[t._v(t._s(e.pno))]),i("v-list-item-content",[i("v-list-item-title",[i("v-chip",{staticClass:"mr-2",attrs:{small:""}},[t._v(t._s(e.lng))]),i("v-chip",{staticClass:"mr-2",attrs:{small:""}},[t._v(t._s(e.lat))])],1),i("v-list-item-subtitle",[e.loc1?i("v-chip",{staticClass:"mr-2",attrs:{small:"",color:"light-green",dark:""}},[t._v(t._s(e.loc1)+" "+t._s(t.plottype[e.loc1]))]):t._e(),e.loc2?i("v-chip",{staticClass:"mr-2",attrs:{small:"",color:"light-green",dark:""}},[t._v(t._s(e.loc2)+" "+t._s(t.plottype[e.loc2]))]):t._e()],1),i("v-list-item-subtitle",[e.loc3?i("v-chip",{staticClass:"mr-2",attrs:{small:"",color:"light-green",dark:""}},[t._v(t._s(e.loc3))]):t._e(),e.water?i("v-chip",{staticClass:"mr-2",attrs:{small:"",color:"light-green",dark:""}},[t._v(t._s(e.water)+"="+t._s(t.watertype[e.water]))]):t._e()],1)],1)],1),i("v-divider")]}))],2)],1),i("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"white--text blue-grey lighten-1"},[t._v(t._s(t.editplot.id))]),i("v-card-text",[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{items:t.idnamelist(t.plottype),label:"棲地類型(主要)","item-text":"name","item-value":"id",dense:"","menu-props":"auto"},model:{value:t.editplot.loc1,callback:function(e){t.$set(t.editplot,"loc1",e)},expression:"editplot.loc1"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{items:t.idnamelist(t.plottype),label:"棲地類型(次要)","item-text":"name","item-value":"id",dense:"","menu-props":"auto"},model:{value:t.editplot.loc2,callback:function(e){t.$set(t.editplot,"loc2",e)},expression:"editplot.loc2"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"棲地類型(其他說明)",dense:"","menu-props":"auto"},model:{value:t.editplot.loc3,callback:function(e){t.$set(t.editplot,"loc3",e)},expression:"editplot.loc3"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{label:"棲地類型(小水體)",items:t.idnamelist(t.watertype),"item-text":"name","item-value":"id",dense:"","menu-props":"auto"},model:{value:t.editplot.water,callback:function(e){t.$set(t.editplot,"water",e)},expression:"editplot.water"}})],1)],1)],1)],1),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){t.dialog=!1}}},[t._v("取消 ")]),i("v-spacer"),i("v-btn",{attrs:{text:"",color:"green"},on:{click:t.Save}},[t._v("存檔")])],1)],1)],1)],1)],1):t._e()},a=[],o=i("5530"),s=(i("d81d"),i("4fad"),i("159b"),i("94ed")),r=i("2f62"),c={name:"Plotdtl",data:function(){return{icons:{mdiArrowLeft:s["b"],mdiPencil:s["v"],mdiDelete:s["i"],mdiEye:s["l"],mdiDotsVertical:s["j"],mdiFormatListBulleted:s["n"]},plotid:"",dialog:!1,editplot:""}},computed:Object(o["a"])(Object(o["a"])({},Object(r["e"])(["plottype","watertype"])),Object(r["c"])({plot:"getPlotSelected",plot_dtl:"getPlot_dtl",bbs_log:"getBbs_logFiltered",bbs_log_dtl:"getBbs_log_dtlFiltered",bird_log:"getBbs_log_birdFiltered"})),created:function(){this.plotid=this.$route.params.plotid,this.$store.dispatch("plotSelect",{id:this.plotid}),this.$store.dispatch("plot_dtlSetFilter",{plot:this.plotid}),this.$store.dispatch("plot_dtlSetFilter",{plot:this.plotid})},methods:{idnamelist:function(t){return Object.entries(t).map((function(t){return{id:t[0],name:t[0]+" "+t[1]}}))},edit:function(t){this.editplot=Object.assign({},t),this.dialog=!0},Save:function(){this.$store.dispatch("plot_dtlUpdate",this.editplot),this.dialog=!1},RemovePlot:function(){var t=this;0!=confirm("確定刪除樣區資料, 相關記錄也會一併清除?")&&(this.$store.dispatch("bbs_logSetFilter",{plot:this.plotid}),this.bbs_log.forEach((function(e){t.$store.dispatch("bbs_log_dtlSetFilter",{log_id:e.id}),t.bbs_log_dtl.forEach((function(e){t.$store.dispatch("bbs_log_birdSetFilter",{log_dtl:e.id}),t.bird_log.forEach((function(e){t.$store.dispatch("bbs_log_birdRemove",e)})),t.$store.dispatch("bbs_log_dtlRemove",e)})),t.$store.dispatch("bbs_logRemove",e)})),this.plot_dtl.forEach((function(e){t.$store.dispatch("plot_dtlRemove",{id:e.id})})),this.$store.dispatch("plotRemove",{id:this.plot.id}),this.$router.back())}}},d=c,n=i("2877"),p=i("6544"),v=i.n(p),m=i("7496"),_=i("40dc"),u=i("5bc1"),b=i("8336"),h=i("b0af"),g=i("99d9"),f=i("cc20"),V=i("62ad"),k=i("a523"),w=i("169a"),$=i("ce7e"),x=i("132d"),C=i("8860"),y=i("da13"),S=i("8270"),j=i("5d23"),F=i("f6c4"),O=i("e449"),L=i("0fd9"),B=i("b974"),R=i("2fa4"),A=i("8654"),E=i("2a7f"),I=Object(n["a"])(d,l,a,!1,null,null,null);e["default"]=I.exports;v()(I,{VApp:m["a"],VAppBar:_["a"],VAppBarNavIcon:u["a"],VBtn:b["a"],VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VChip:f["a"],VCol:V["a"],VContainer:k["a"],VDialog:w["a"],VDivider:$["a"],VIcon:x["a"],VList:C["a"],VListItem:y["a"],VListItemAvatar:S["a"],VListItemContent:j["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VMain:F["a"],VMenu:O["a"],VRow:L["a"],VSelect:B["a"],VSpacer:R["a"],VTextField:A["a"],VToolbarTitle:E["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return c}));var l=i("b0af"),a=i("80d2"),o=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),r=Object(a["g"])("v-card__text"),c=Object(a["g"])("v-card__title");l["a"]}}]);
//# sourceMappingURL=chunk-5a03cd10.24fd2a70.js.map