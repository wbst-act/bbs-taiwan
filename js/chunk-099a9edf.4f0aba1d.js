(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-099a9edf"],{"297c":function(e,t,s){"use strict";s("a9e3");var r=s("2b0e"),i=s("5530"),n=s("ade3"),a=(s("c7cd"),s("6ece"),s("0789")),o=s("a9ad"),l=s("fe6c"),c=s("a452"),u=s("7560"),d=s("80d2"),h=s("58df"),v=Object(h["a"])(o["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),c["a"],u["a"]),f=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(n["a"])(e,this.isReversed?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(n["a"])(e,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["c"]:a["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(d["n"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),s=t.width;this.internalValue=e.offsetX/s*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=f;t["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"615b":function(e,t,s){},"6ece":function(e,t,s){},"8ce9":function(e,t,s){},"9e68":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"blue-grey",dark:"",dense:""}},[s("v-app-bar-nav-icon",{attrs:{to:"/"}},[s("v-icon",[e._v(e._s(e.icons.mdiHome))])],1),s("v-toolbar-title",[e._v("更新資料 "+e._s(e.version)+" => "+e._s(e.new_version))])],1),s("v-main",[s("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[s("v-list",{attrs:{dense:""}},[s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",[e._v(" 更新中華鳥目錄 ")]),s("v-list-item-subtitle",[e._v(e._s(e.success[0]?"":"成功")+" ")])],1)],1),s("v-divider"),s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",[e._v(" 更新中華鳥目錄分類 ")]),s("v-list-item-subtitle",[e._v(e._s(e.success[1]?"":"成功")+" ")])],1)],1),s("v-divider"),s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",[e._v(" 更新BBS輸入鳥名錄 ")]),s("v-list-item-subtitle",[e._v(e._s(e.success[2]?"":"成功")+" ")])],1)],1),s("v-divider"),s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",[e._v(" 更新BBS樣點資料 ")]),s("v-list-item-subtitle",[e._v(e._s(e.success[3]?"":"成功")+" ")])],1)],1),s("v-divider"),s("v-list-item",[s("v-list-item-content",[s("v-list-item-title",[e._v(" 更新BBS歷年鳥種清單")]),s("v-list-item-subtitle",[e._v(e._s(e.success[4]?"":"成功")+" ")])],1)],1),s("v-divider")],1)],1)],1)],1)},i=[],n=s("b85c"),a=s("ade3"),o=s("1da1"),l=(s("96cf"),s("13d5"),s("b64b"),s("d81d"),s("1276"),s("ac1f"),s("94ed")),c={name:"Update",data:function(){return{icons:{mdiHome:l["o"]},version:"",new_version:"",success:[!1,!1,!1,!1,!1]}},mounted:function(){this.version=this.$route.params.version,this.new_version=""},created:function(){this.updated_offline_storage()},methods:{updated_offline_storage:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s,r,i,o,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/1/public/full?alt=json").then((function(e){return e.data.feed.entry[0].gsx$version.$t}));case 2:return e.new_version=t.sent,s=function(e){var t=e.reduce((function(e,t){var s=Object.keys(t)[0];return e[s]=t[s],e}));return t},t.next=6,e.$http.get("https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/2/public/full?alt=json").then((function(e){return s(e.data.feed.entry.map((function(e){return Object(a["a"])({},e.gsx$cname.$t,{e:e.gsx$ename.$t,f:parseInt(e.gsx$fid.$t),i:parseInt(e.gsx$id.$t),sn:e.gsx$sname.$t,es:e.gsx$shortname.$t.split(",")})})))}));case 6:return r=t.sent,e.$offlineStorage.set("tw_birds",r),e.success[0]=!0,t.next=11,e.$http.get("https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/3/public/full?alt=json").then((function(e){return s(e.data.feed.entry.map((function(e){return Object(a["a"])({},e.gsx$name.$t,parseInt(e.gsx$fid.$t))})))}));case 11:return i=t.sent,e.$offlineStorage.set("tw_familys",i),e.success[1]=!0,t.next=16,e.$http.get("https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/4/public/full?alt=json").then((function(e){return s(e.data.feed.entry.map((function(e){return Object(a["a"])({},e.gsx$bbsname.$t,{cn:e.gsx$cname.$t,en:e.gsx$ename.$t,sn:e.gsx$sname.$t,es:e.gsx$shortname.$t.split(",")})})))}));case 16:return o=t.sent,e.$offlineStorage.set("bbs_birds",o),e.success[2]=!0,t.next=21,e.$http.get("https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/5/public/full?alt=json").then((function(e){var t,s={},r=Object(n["a"])(e.data.feed.entry);try{for(r.s();!(t=r.n()).done;){var i=t.value;Object.prototype.hasOwnProperty.call(s,i.gsx$樣區編號.$t)||(s[i.gsx$樣區編號.$t]={name:i.gsx$樣區名稱.$t,city:i.gsx$縣市.$t,plotdtl:new Array}),s[i.gsx$樣區編號.$t]["plotdtl"].push({id:i.gsx$樣區樣點編號.$t,pno:parseInt(i.gsx$樣點代號.$t),lng:i.gsx$x經度度分秒.$t,lat:i.gsx$y緯度度分秒.$t})}}catch(a){r.e(a)}finally{r.f()}return s}));case 21:return l=t.sent,e.$offlineStorage.set("plots",l),e.success[3]=!0,t.next=26,e.$http.get("https://spreadsheets.google.com/feeds/list/1S3ARsmpH0Ml1-2QmqkI_KPqcgp-CnyN9qkzxxr78U74/6/public/full?alt=json").then((function(e){return s(e.data.feed.entry.map((function(e){return Object(a["a"])({},e.gsx$pid.$t,e.gsx$bird.$t.split(",").map((function(e){return parseInt(e)})))})))}));case 26:c=t.sent,e.$offlineStorage.set("plot_birds",c),e.success[4]=!0,e.$offlineStorage.set("version",e.new_version);case 30:case"end":return t.stop()}}),t)})))()}}},u=c,d=s("2877"),h=s("6544"),v=s.n(h),f=s("7496"),p=s("40dc"),g=s("5bc1"),m=s("b0af"),b=s("ce7e"),_=s("132d"),$=s("8860"),y=s("da13"),x=s("5d23"),B=s("f6c4"),k=s("2a7f"),C=Object(d["a"])(u,r,i,!1,null,null,null);t["default"]=C.exports;v()(C,{VApp:f["a"],VAppBar:p["a"],VAppBarNavIcon:g["a"],VCard:m["a"],VDivider:b["a"],VIcon:_["a"],VList:$["a"],VListItem:y["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:B["a"],VToolbarTitle:k["a"]})},b0af:function(e,t,s){"use strict";var r=s("5530"),i=(s("a9e3"),s("0481"),s("615b"),s("10d2")),n=s("297c"),a=s("1c87"),o=s("58df");t["a"]=Object(o["a"])(n["a"],a["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var e=Object(r["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=n["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),s=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(s,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},ce7e:function(e,t,s){"use strict";var r=s("5530"),i=(s("8ce9"),s("7560"));t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:Object(r["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(r["a"])({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-099a9edf.4f0aba1d.js.map