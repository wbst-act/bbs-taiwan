(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-363e6b50"],{"0c21":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"blue-grey",dark:"",dense:""}},[i("v-app-bar-nav-icon",{attrs:{to:"/"}},[i("v-icon",[t._v(t._s(t.icons.mdiHome))])],1),i("v-toolbar-title",[i("span",{staticClass:"mr-5"},[t._v("eBird匯入產生器")])])],1),i("v-main",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",[i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-radio-group",{scopedSlots:t._u([{key:"label",fn:function(){return[t._v("選擇匯出鳥名格式")]},proxy:!0}]),model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},[i("v-radio",{attrs:{value:"中文"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("中文俗名")]},proxy:!0}])}),i("v-radio",{attrs:{value:"英文"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("英文俗名")]},proxy:!0}])}),i("v-radio",{attrs:{value:"學名"},scopedSlots:t._u([{key:"label",fn:function(){return[t._v("學名")]},proxy:!0}])})],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-file-input",{attrs:{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",label:"選擇BBS回傳表"},on:{change:t.changefile}})],1)],1)],1)],1)],1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[i("v-card-text",[i("v-alert",{attrs:{type:"info",border:"top","colored-border":"",elevation:"2"}},[t._v(' 在eBird網站匯入檔案請選擇"eBird 紀錄格式 (Extended)"')])],1)],1)],1)],1)],1)],1)],1)},a=[],o=i("53ca"),s=i("b85c"),r=i("1da1"),l=i("5530"),c=(i("1276"),i("ac1f"),i("b0c0"),i("4d90"),i("c740"),i("caad"),i("2532"),i("a434"),i("4fad"),i("fb6a"),i("99af"),i("96cf"),i("94ed")),u=i("1146"),h=i.n(u),d=i("2f62"),p={name:"eBirdExport",data:function(){return{icons:{mdiHome:c["o"],mdiDotsVertical:c["j"],mdiVolumeHigh:c["y"],mdiMagnify:c["q"]},plots:{},lang:"中文",birds:{}}},computed:Object(l["a"])({},Object(d["e"])(["static_data_path"])),mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.plots=t.$offlineStorage.get("plots"),t.birds=t.$offlineStorage.get("bbs_birds");case 2:case"end":return e.stop()}}),e)})))()},methods:{changefile:function(t){t&&this.loadfile(t)},loadfile:function(t){var e=this,i=t.name.split(".")[0]+"_轉ebird record.csv",n=function(t,e){return String(t).padStart(e,"0")},a=new FileReader;a.onload=function(t){var a=t.target.result,r=h.a.read(a,{type:"binary"}),l=r.SheetNames.findIndex((function(t){return t.includes("bird")}));if(-1!=l){var c=r.Sheets[r.SheetNames[l]],u=h.a.utils.sheet_to_json(c,{header:1});u.splice(0,1);var d,p={},f=Object(s["a"])(u);try{var v=function(){var t=d.value;if(0==t.length)return"break";if(["其他","其他（填於備註欄）","台灣獮猴","台灣獼猴","臺灣獼猴","沒有鳥"].includes(t[0]))return"continue";0!=t[0].indexOf("XX")&&0!=t[0].indexOf("xx")||(t[0]=t[0].slice(2)+"屬");var i="BBS-"+t[7]+"-"+n(t[8],2),a=t[24]+"/"+t[25]+"/"+t[23];if(p[a+" "+i])p[a+" "+i]["logs"][t[0]]?p[a+" "+i]["logs"][t[0]]+=t[3]:p[a+" "+i]["logs"][t[0]]=t[3];else{var o,s=e.plots[t[7]].plotdtl.findIndex((function(e){return e.pno==t[8]}));if(-1==s)if("WGS84/經緯度"==t[14])o=isNaN(t[16])||isNaN(t[15])?e.convertlatlng(t[15],t[16]):{lng:t[16],lat:t[15]};else{if("TWD97/TM2"!=t[15])return alert("".concat(t[6]," 樣點: ").concat(t[8]," 鳥種: ").concat(t[0],"\r\n座標: ").concat(t[14]," ").concat(t[15]," ").concat(t[16],"\r\n座標格式有問題")),{v:void 0};o=e.twd97_to_latlng(t[15],t[16])}else o=e.convertlatlng(e.plots[t[7]].plotdtl[s].lat,e.plots[t[7]].plotdtl[s].lng);p[a+" "+i]={location:i,date:a,time:n(t[21],2)+":"+n(t[22],2),lng:o.lng,lat:o.lat,p:t[17].split(/,|、|，/).length,logs:{}},p[a+" "+i]["logs"][t[0]]=t[3]}};for(f.s();!(d=f.n()).done;){var g=v();if("break"===g)break;if("continue"!==g&&"object"===Object(o["a"])(g))return g.v}}catch(O){f.e(O)}finally{f.f()}if(0!=Object.entries(p).length){var b=[];for(var m in p){var y=p[m];for(var S in y["logs"]){var C=void 0;try{C="中文"==e.lang?e.birds[S].cn:"英文"==e.lang?""==e.birds[S].en?S:e.birds[S].en:""==e.birds[S].sn?S:e.birds[S].sn}catch(j){C=S}b.push({"Common Name":C,Genus:"",Species:"",Number:y["logs"][S],"Species Comments":"","Location Name":y["location"],Latitude:y["lat"],Longitude:y["lng"],Date:y["date"],"Start Time":y["time"],"State/Province":"","Country Code":"",Protocol:"stationary","Number of Observers":y["p"],Duration:6,"All observations reported?":"Y","Effort Distance Miles":"","Effort area acres":"","Submission Comments":""})}}var V=h.a.utils.book_new(),x=h.a.utils.json_to_sheet(b,{skipHeader:!0});h.a.utils.book_append_sheet(V,x,"recordlist"),h.a.writeFile(V,i)}else alert("無鳥記錄,匯出失敗!")}else alert("找不到記錄分頁")},a.readAsBinaryString(t)},convertlatlng:function(t,e){var i=t.split(/°|'|"/),n=e.split(/°|'|"/);return{lat:parseInt(i[0])+parseInt(i[1])/60+parseFloat(i[2])/3600,lng:parseInt(n[0])+parseInt(n[1])/60+parseFloat(n[2])/3600}},twd97_to_latlng:function(t,e){var i=Math.pow,n=Math.PI,a=Math.sin,o=Math.cos,s=Math.tan,r=6378137,l=6356752.314245,c=121*n/180,u=.9999,h=25e4,d=0,p=i(1-i(l,2)/i(r,2),.5);t-=h,e-=d;var f=e/u,v=f/(r*(1-i(p,2)/4-3*i(p,4)/64-5*i(p,6)/256)),g=(1-i(1-i(p,2),.5))/(1+i(1-i(p,2),.5)),b=3*g/2-27*i(g,3)/32,m=21*i(g,2)/16-55*i(g,4)/32,y=151*i(g,3)/96,S=1097*i(g,4)/512,C=v+b*a(2*v)+m*a(4*v)+y*a(6*v)+S*a(8*v),V=i(p*r/l,2),x=i(V*o(C),2),O=i(s(C),2),j=r*(1-i(p,2))/i(1-i(p,2)*i(a(C),2),1.5),k=r/i(1-i(p,2)*i(a(C),2),.5),$=t/(k*u),_=k*s(C)/j,I=i($,2)/2,w=(5+3*O+10*x-4*i(x,2)-9*V)*i($,4)/24,B=(61+90*O+298*x+45*i(O,2)-3*i(x,2)-252*V)*i($,6)/720,A=C-_*(I-w+B),D=$,G=(1+2*O+x)*i($,3)/6,z=(5-2*x+28*O-3*i(x,2)+8*V+24*i(O,2))*i($,5)/120,L=c+(D-G+z)/o(C);return A=180*A/n,L=180*L/n,{lat:A,lng:L}}}},f=p,v=i("2877"),g=i("6544"),b=i.n(g),m=i("0798"),y=i("7496"),S=i("40dc"),C=i("5bc1"),V=i("b0af"),x=i("99d9"),O=i("62ad"),j=i("a523"),k=i("23a7"),$=i("132d"),_=i("f6c4"),I=(i("2c64"),i("ba87")),w=i("9d26"),B=i("c37a"),A=i("7e2b"),D=i("a9ad"),G=i("4e82"),z=i("5311"),L=i("7560"),F=i("fe09"),M=i("80d2"),E=i("58df"),N=i("d9f7"),T=Object(E["a"])(A["a"],D["a"],z["a"],Object(G["a"])("radioGroup"),L["a"]),R=T.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(l["a"])(Object(l["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return F["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return B["a"].options.computed.computedId.call(this)},hasLabel:B["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return F["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return F["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(I["a"],{on:{click:F["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(M["n"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(w["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(l["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(N["b"])({click:this.onChange},this.listeners$)};return t("div",e,[this.genRadio(),this.genLabel()])}}),P=(i("a9e3"),i("ec29"),i("3d86"),i("604c")),H=i("8547"),K=Object(E["a"])(H["a"],P["a"],B["a"]),q=K.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(l["a"])(Object(l["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},B["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=B["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=B["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:P["a"].options.methods.onClick}}),J=i("0fd9"),W=i("2a7f"),X=Object(v["a"])(f,n,a,!1,null,null,null);e["default"]=X.exports;b()(X,{VAlert:m["a"],VApp:y["a"],VAppBar:S["a"],VAppBarNavIcon:C["a"],VCard:V["a"],VCardText:x["b"],VCol:O["a"],VContainer:j["a"],VFileInput:k["a"],VIcon:$["a"],VMain:_["a"],VRadio:R,VRadioGroup:q,VRow:J["a"],VToolbarTitle:W["a"]})},"0ccb":function(t,e,i){var n=i("50c4"),a=i("1148"),o=i("1d80"),s=Math.ceil,r=function(t){return function(e,i,r){var l,c,u=String(o(e)),h=u.length,d=void 0===r?" ":String(r),p=n(i);return p<=h||""==d?u:(l=p-h,c=a.call(d,s(l/d.length)),c.length>l&&(c=c.slice(0,l)),t?u+c:c+u)}};t.exports={start:r(!1),end:r(!0)}},"23a7":function(t,e,i){"use strict";var n=i("2909"),a=i("5530"),o=i("53ca"),s=(i("a9e3"),i("caad"),i("13d5"),i("d81d"),i("b0c0"),i("99af"),i("a434"),i("159b"),i("fb6a"),i("5803"),i("2677")),r=i("cc20"),l=i("80d2"),c=i("d9bd"),u=i("d9f7");e["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(l["y"])(t).every((function(t){return null!=t&&"object"===Object(o["a"])(t)}))}}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(l["q"])(e,1024===this.base))},internalArrayValue:function(){return Object(l["y"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,a=e.size,o=void 0===a?0:a,s=t.truncateText(n);return t.showSize?"".concat(s," (").concat(Object(l["q"])(o,1024===t.base),")"):s})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(c["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(l["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=s["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(u["c"])(t.data.style,{display:"none"})),t},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=s["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(a["a"])(Object(a["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(n["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,i){"use strict";var n=i("8654");e["a"]=n["a"]},"2c64":function(t,e,i){},"3d86":function(t,e,i){},"4d90":function(t,e,i){"use strict";var n=i("23e7"),a=i("0ccb").start,o=i("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5311:function(t,e,i){"use strict";var n=i("5607"),a=i("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},5803:function(t,e,i){},"8adc":function(t,e,i){},"9a0c":function(t,e,i){var n=i("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},cc20:function(t,e,i){"use strict";var n=i("3835"),a=i("5530"),o=(i("4de4"),i("8adc"),i("58df")),s=i("0789"),r=i("9d26"),l=i("a9ad"),c=i("4e82"),u=i("7560"),h=i("f2e7"),d=i("1c87"),p=i("af2b"),f=i("d9bd");e["a"]=Object(o["a"])(l["a"],p["a"],d["a"],u["a"],Object(c["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(n["a"])(e,2),a=i[0],o=i[1];t.$attrs.hasOwnProperty(a)&&Object(f["a"])(a,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(s["b"],t)},genClose:function(){var t=this;return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,o=i.data;o.attrs=Object(a["a"])(Object(a["a"])({},o.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:o.attrs.tabindex}),o.directives.push({name:"show",value:this.active}),o=this.setBackgroundColor(this.color,o);var s=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(s,o),e)}})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));i("d3b7"),i("25f0"),i("4de4");var n=i("c37a"),a=i("5311"),o=i("8547"),s=i("58df");function r(t){t.preventDefault()}e["a"]=Object(s["a"])(n["a"],a["a"],o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-363e6b50.396424a0.js.map