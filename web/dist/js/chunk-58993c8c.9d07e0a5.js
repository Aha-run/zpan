(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58993c8c"],{"0a49":function(t,e,a){var n=a("9b43"),i=a("626a"),r=a("4bf8"),o=a("9def"),s=a("cd1c");t.exports=function(t,e){var a=1==t,c=2==t,f=3==t,l=4==t,d=6==t,u=5==t||d,p=e||s;return function(e,s,h){for(var m,v,y=r(e),w=i(y),_=n(s,h,3),x=o(w.length),b=0,z=a?p(e,x):c?p(e,0):void 0;x>b;b++)if((u||b in w)&&(m=w[b],v=_(m,b,y),t))if(a)z[b]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return b;case 2:z.push(m)}else if(l)return!1;return d?-1:f||l?l:z}}},1169:function(t,e,a){var n=a("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"50bc":function(t,e,a){"use strict";a("f1a6")},7514:function(t,e,a){"use strict";var n=a("5ca1"),i=a("0a49")(5),r="find",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(r)},cd1c:function(t,e,a){var n=a("e853");t.exports=function(t,e){return new(n(t))(e)}},ce0d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"20px 50px"}},[t.matter.dirtype?a("el-card",{staticClass:"folder-card",attrs:{shadow:"never","body-style":"height: 100%"}},[a("div",{staticClass:"header clearfix",attrs:{slot:"header"},slot:"header"},[a("div",[a("span",{staticClass:"name"},[t._v(t._s(t.matter.name))]),a("div",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-download"}},[t._v("下载")])],1)]),a("p",{staticClass:"time"},[a("i",{staticClass:"el-icon-time"}),a("span",[t._v(t._s(t._f("moment")(t.matter.created,"YYYY-MM-DD HH:hh")))]),a("span",[t._v("失效时间："+t._s(t.expireTime))])])]),a("FileExplorer",{ref:"fexp",staticStyle:{height:"calc(100% - 80px)"},attrs:{dataLoader:t.dataLoader,linkLoader:t.linkLoader,rowButtons:t.rowButtons,rootDir:t.rootDir}})],1):t.info.id?a("el-card",{staticClass:"file-card",attrs:{shadow:"never"}},[a("div",{staticClass:"header clearfix",attrs:{slot:"header"},slot:"header"},[a("div",[a("span",{staticClass:"name"},[t._v(t._s(t.matter.name))]),a("div",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-download"},on:{click:function(e){return t.openDownload(t.matter)}}},[t._v("下载")])],1)]),a("p",{staticClass:"time"},[a("i",{staticClass:"el-icon-time"}),a("span",[t._v(t._s(t._f("moment")(t.matter.created,"YYYY-MM-DD HH:hh")))]),a("span",[t._v("失效时间："+t._s(t.expireTime))])])]),a("div",{staticClass:"content"},[a("div",[a("i",{staticClass:"el-icon-document"}),a("p",[t._v("文件大小："+t._s(t.matter.size))])])])]):t._e()],1)},i=[],r=(a("7514"),a("b54a"),a("7f7f"),a("90fe")),o={data:function(){return{rowButtons:[{name:"download",icon:"el-icon-download",action:this.openDownload,shown:function(t){return!t.dirtype}}],info:{},matter:{}}},computed:{layout:function(){return this.info.type?"file":"folder"},rootDir:function(){return"".concat(this.matter.parent).concat(this.matter.name,"/")},expireTime:function(){if(this.info.expire_at)return this.info.expire_at.moment()}},methods:{dataLoader:function(t){var e=this;return new Promise((function(a,n){if(e.info.id&&!e.info.type){var i=e.$route.params.alias;e.$zpan.Share.listMatters(i,{dir:t}).then((function(t){var e=t.data;e.list=e.list.map((function(t){return t.size=r["a"].formatBytes(t.size,1),t.fullpath="".concat(t.parent).concat(t.name),t.dirtype&&(t.fullpath+="/"),t})),a(e)}))}}))},linkLoader:function(t){var e=this;return new Promise((function(a,n){e.$zpan.File.findLink(t.alias).then((function(t){a(t.link)})).catch(n)}))},openDownload:function(t){this.linkLoader(t).then((function(e){var a=document.createElement("a");a.href=e,a.download=t.name,a.click()}))},listRefresh:function(t){var e=this;this.$zpan.Share.findMatter(t).then((function(t){e.matter=t.data,e.matter.size=r["a"].formatBytes(e.matter.size,1),e.$refs.fexp&&e.$refs.fexp.listRefresh()}))}},watch:{$route:function(t){this.listRefresh(t.params.alias)}},mounted:function(){var t=this,e=this.$route.params.alias;this.$zpan.Share.find(e).then((function(a){var n=a.data;n.protected&&localStorage.getItem("zpan-share")!=e?t.$router.push({name:"share-draw"}):(t.info=n,t.listRefresh(e),document.title="".concat(n.name," | Zpan"))}))}},s=o,c=(a("50bc"),a("2877")),f=Object(c["a"])(s,n,i,!1,null,"770ecb5c",null);e["default"]=f.exports},e853:function(t,e,a){var n=a("d3f4"),i=a("1169"),r=a("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&(e=e[r],null===e&&(e=void 0))),void 0===e?Array:e}},f1a6:function(t,e,a){}}]);
//# sourceMappingURL=chunk-58993c8c.9d07e0a5.js.map