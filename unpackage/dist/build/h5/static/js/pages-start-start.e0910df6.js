(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-start-start"],{"4b30":function(t,n,i){"use strict";var e=i("aa21"),r=i.n(e);r.a},"50b3":function(t,n,i){"use strict";var e=i("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,i("a481");var r=e(i("cebc")),o=e(i("04bd")),s=(e(i("039a")),i("2f62")),a={data:function(){return{titles:"登录文章助手",url:"",gourl:"",token:"",urlHeader:"",seturl:""}},onShow:function(t){this.url=window.location.href;var n=this.url.indexOf("="),i=this.url.indexOf("#"),e=this.url.indexOf("?");this.url.substring(e,i);this.token=this.url.substring(n+1,i),this.seturl=this.url.substring(e,i+1),this.urlHeader=this.url,this.urlHeader=this.urlHeader.substring(0,e),this.getURL(),uni.showLoading({mask:!0,title:"登陆中..."})},methods:(0,r.default)({},(0,s.mapActions)(["getToken","login"]),{getURL:function(){try{var t=uni.getStorageSync("nextURL");t&&(this.gourl=t.path,this.goRoute())}catch(n){}},goRoute:function(){this.getToken(this.token);try{uni.setStorageSync("Token",this.token)}catch(t){}window.history.pushState({},0,document.URL.replace(this.seturl.substr(0,this.seturl.length-1),"")),this.login(this.token),uni.redirectTo({url:this.gourl}),uni.hideLoading()}}),components:{titles:o.default}};n.default=a},"60d9":function(t,n,i){"use strict";i.r(n);var e=i("ef4e"),r=i("dfcb");for(var o in r)"default"!==o&&function(t){i.d(n,t,function(){return r[t]})}(o);i("4b30");var s,a=i("f0c5"),u=Object(a["a"])(r["default"],e["b"],e["c"],!1,null,"30649b4b",null,!1,e["a"],s);n["default"]=u.exports},aa21:function(t,n,i){var e=i("d262");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=i("4f06").default;r("d940c260",e,!0,{sourceMap:!1,shadowMode:!1})},d262:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login[data-v-30649b4b]{width:100%;height:100vh}.login .login_content .login-img[data-v-30649b4b]{border-top:1px solid #d4d4d4;padding-top:130px;text-align:center;margin-bottom:55px}.login .login_content .login-img uni-image[data-v-30649b4b]{width:77px;height:97px}.login .login_content .login-btn[data-v-30649b4b]{width:100%}.login .login_content .login-btn uni-button[data-v-30649b4b]{width:94%;border:1px solid #75bf33;background-color:#fff;color:#75bf33;border-radius:5px;padding:2px 0}',""])},dfcb:function(t,n,i){"use strict";i.r(n);var e=i("50b3"),r=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=r.a},ef4e:function(t,n,i){"use strict";var e,r=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"login bgcf"},[i("titles",{attrs:{titles:t.titles,color:!0}}),i("v-uni-view",{staticClass:"login_content "},[i("v-uni-view",{staticClass:"login-img"},[i("v-uni-image",{attrs:{src:"../../static/img/LOGO.png",mode:"aspectFit"}})],1)],1)],1)},o=[];i.d(n,"b",function(){return r}),i.d(n,"c",function(){return o}),i.d(n,"a",function(){return e})}}]);