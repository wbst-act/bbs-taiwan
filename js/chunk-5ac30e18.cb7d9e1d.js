(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ac30e18"],{"0798":function(t,e,r){"use strict";var i=r("5530"),s=r("ade3"),n=(r("caad"),r("0c18"),r("10d2")),a=r("afdd"),o=r("9d26"),c=r("f2e7"),l=r("7560"),d=r("f40d"),u=r("58df"),h=r("d9bd");e["a"]=Object(u["a"])(n["a"],c["a"],d["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(a["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||l["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},"297c":function(t,e,r){"use strict";r("a9e3");var i=r("2b0e"),s=r("5530"),n=r("ade3"),a=(r("c7cd"),r("6ece"),r("0789")),o=r("a9ad"),c=r("fe6c"),l=r("a452"),d=r("7560"),u=r("80d2"),h=r("58df"),p=Object(h["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],d["a"]),f=p.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(n["a"])(t,this.isReversed?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(n["a"])(t,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(s["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["c"]:a["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(u["n"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=f;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(v,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},4184:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.plot?r("v-app",[r("v-app-bar",{attrs:{app:"",color:"blue-grey",dark:"",dense:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){return t.$router.back()}}},[r("v-icon",[t._v(t._s(t.icons.mdiArrowLeft))])],1),r("v-toolbar-title",[t._v(" "+t._s(t.plot.id)+" "+t._s(t.plot.name)+" 歷年鳥種清單")])],1),r("v-main",[r("v-card",{attrs:{flat:""}},[0==Object.keys(t.birds).length?r("v-card-text",[r("v-alert",{attrs:{type:"warning",border:"top","colored-border":"",elevation:"2"}},[t._v("尚無歷年鳥種記錄")])],1):t._e(),r("v-list",{attrs:{"two-line":"",dense:""}},[t._l(t.birds,(function(e,i){return[r("v-list-item",{key:i,attrs:{link:""},on:{click:function(r){return t.speak(i,e)}}},[r("v-list-item-content",[r("v-list-item-title",[r("span",{staticClass:"text-h6 mr-5"},[t._v(t._s(i))]),r("span",{staticClass:"text-h6"},[t._v(t._s(e.es.join(" ")))])]),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.e+"<span style='float:right'><i>"+e.sn+"</i></span>")}})],1),r("v-list-item-action",[r("v-icon",[t._v(t._s(t.icons.mdiVolumeHigh))])],1)],1),r("v-divider")]}))],2)],1)],1)],1):t._e()},s=[],n=r("5530"),a=r("1da1"),o=(r("c1f9"),r("4de4"),r("4fad"),r("caad"),r("2532"),r("7db0"),r("96cf"),r("94ed")),c=r("2f62"),l={name:"PlotBird",data:function(){return{icons:{mdiArrowLeft:o["b"],mdiPencil:o["v"],mdiDelete:o["i"],mdiEye:o["l"],mdiVolumeHigh:o["y"]},plotid:"",allbirds:{},birds:{},synth:window.speechSynthesis,speech:new window.SpeechSynthesisUtterance}},mounted:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])({plot:"getPlotSelected"})),Object(c["e"])(["static_data_path"])),created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.plotid=t.$route.params.plotid,t.allbirds=t.$offlineStorage.get("tw_birds"),r=t.$offlineStorage.get("plot_birds"),i=r[t.plotid]?r[t.plotid]:[],t.birds=Object.fromEntries(Object.entries(t.allbirds).filter((function(t){return i.includes(t[1].i)}))),t.$store.dispatch("plotSelect",{id:t.plotid}),t.speech.voice=t.synth.getVoices().find((function(t){return"zh-TW"==t.lang}));case 7:case"end":return e.stop()}}),e)})))()},methods:{speak:function(t,e){this.speech.text=t+" "+e.e,this.synth.speak(this.speech)}}},d=l,u=r("2877"),h=r("6544"),p=r.n(h),f=r("0798"),v=r("7496"),m=r("40dc"),g=r("5bc1"),b=r("b0af"),_=r("99d9"),y=r("ce7e"),B=r("132d"),C=r("8860"),k=r("da13"),O=r("1800"),$=r("5d23"),j=r("f6c4"),S=r("2a7f"),w=Object(u["a"])(d,i,s,!1,null,null,null);e["default"]=w.exports;p()(w,{VAlert:f["a"],VApp:v["a"],VAppBar:m["a"],VAppBarNavIcon:g["a"],VCard:b["a"],VCardText:_["b"],VDivider:y["a"],VIcon:B["a"],VList:C["a"],VListItem:k["a"],VListItemAction:O["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VMain:j["a"],VToolbarTitle:S["a"]})},"4fad":function(t,e,r){var i=r("23e7"),s=r("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"615b":function(t,e,r){},"6ece":function(t,e,r){},"8ce9":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));var i=r("b0af"),s=r("80d2"),n=Object(s["g"])("v-card__actions"),a=Object(s["g"])("v-card__subtitle"),o=Object(s["g"])("v-card__text"),c=Object(s["g"])("v-card__title");i["a"]},afdd:function(t,e,r){"use strict";var i=r("8336");e["a"]=i["a"]},b0af:function(t,e,r){"use strict";var i=r("5530"),s=(r("a9e3"),r("0481"),r("615b"),r("10d2")),n=r("297c"),a=r("1c87"),o=r("58df");e["a"]=Object(o["a"])(n["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},c1f9:function(t,e,r){var i=r("23e7"),s=r("2266"),n=r("8418");i({target:"Object",stat:!0},{fromEntries:function(t){var e={};return s(t,(function(t,r){n(e,t,r)}),{AS_ENTRIES:!0}),e}})},ce7e:function(t,e,r){"use strict";var i=r("5530"),s=(r("8ce9"),r("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},f40d:function(t,e,r){"use strict";var i=r("2b0e");e["a"]=i["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=chunk-5ac30e18.cb7d9e1d.js.map