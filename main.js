import Vue from 'vue'
import App from './App'
import Router from 'uni-simple-router'
import {
	http
} from './utils/request/index.js'
import 'common/css/base.css'
import store from './store/index.js'
Vue.config.productionTip = false
import titles from './components/title.vue'
Vue.component('titles', titles)

import uniIcons from "./components/uni-icons/uni-icons.vue"
Vue.component('uniIcons', uniIcons)
import uniPopup from "./components/uni-popup/uni-popup.vue"
Vue.component('uniPopup', uniPopup)
import LbPicker from '@/components/lb-picker'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.component("lb-picker", LbPicker)

Vue.prototype.http = http
Vue.prototype.$store = store

Vue.prototype.Rout = Vue.$router





Vue.use(Router)
const router = new Router({
	routes: [{
			"path": "/pages/index/index",
			"name": 'index',
			"meta": {
				"title": "文章首页",
				"needToken": false,
			}
		},
		{
			"path": "/pages/login/login",
			"name": 'login',
			"meta": {
				"title": "登录",
				"needToken": false,
			}
		},
		{
			"path": "/pages/info/info",
			"name": 'info',
			"meta": {
				"title": "我的文章",
				"needToken": true,
			}
		},
		{
			"path": "/pages/info/collection",
			"name": 'collection',
			"meta": {
				"title": "收藏",
				"needToken": true,
			}
		},
		{
			"path": "/pages/info/articleStatistics",
			"name": 'articleStatistics',
			"meta": {
				"title": "文章统计",
				"needToken": true,
			}
		},
		{
			"path": "/pages/info/visitorDetile",
			"name": 'visitorDetile',
			"meta": {
				"title": "访客详细",
				"needToken": true,
			}
		},
		{
			"path": "/pages/info/drafts",
			"name": 'drafts',
			"meta": {
				"title": "草稿箱",
				"needToken": true,
			}
		},
		{
			"path": "/pages/info/visitor",
			"name": 'visitor',
			"meta": {
				"title": "访客追踪",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/reprint/reprint",
			"name": 'reprint',
			"meta": {
				"title": "转载首页",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/original/original",
			"name": 'original',
			"meta": {
				"title": "原创首页",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/reprint/tips/tips",
			"name": 'tips',
			"meta": {
				"title": "转载提示",
				"needToken": true,
			}
		},
		{
			"path": "/pages/user/user",
			"name": 'user',
			"meta": {
				"title": "个人中心",
				"needToken": true,
			}
		},
		{
			"path": "/pages/user/modifyUser/modifyUser",
			"name": 'modifyUser',
			"meta": {
				"title": "修改个人中心",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/original/edit/edit",
			"name": 'edit',
			"meta": {
				"title": "创建文章",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/original/addDisplayBit/addDisplayBit",
			"name": 'addDisplayBit',
			"meta": {
				"title": "原创添加额外展示位",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/userinfo/userinfo",
			"name": 'userinfo',
			"meta": {
				"title": "形象展示位",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/productInfo/productInfo",
			"name": 'productInfo',
			"meta": {
				"title": "添加产品/案例/服务",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/productInfo/productArticle",
			"name": 'productArticle',
			"meta": {
				"title": "产品正文",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/consultation/consultation",
			"name": 'consultation',
			"meta": {
				"title": "快速咨询",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/preview/preview",
			"name": 'preview',
			"meta": {
				"title": "预览",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/reprint/edits/edits",
			"name": 'edits',
			"meta": {
				"title": "转载编辑文章",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/reprint/editingArticles/editingArticles",
			"name": 'editingArticles',
			"meta": {
				"title": "转载编辑文章",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/comment/comment",
			"name": 'comment',
			"meta": {
				"title": "发布评论",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/share/share",
			"name": 'share',
			"meta": {
				"title": "分享页",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/share/shareArticleInfo",
			"name": 'shareArticleInfo',
			"meta": {
				"title": "作者信息",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/share/shareProduct",
			"name": 'shareProduct',
			"meta": {
				"title": "推荐产品详情",
				"needToken": true,
			}
		},
		{
			"path": "/pages/article/share/out",
			"name": 'out',
			"meta": {
				"title": "外部链接",
				"needToken": true,
			}
		},
		{
			"path": "/pages/start/start",
			"name": 'start',
			"meta": {
				"title": "跳转页",
				"needToken": false,
			}
		},

	]
})

const turnTo = (to, next) => {

	if (to.meta.needToken && !store.state.user.Token) {
		if (window.location.href.indexOf('shareId=') != -1) {
			uni.setStorageSync('query', window.location.href)
		}
		//如果localStorage有token  直接跳转
		var tokens = uni.getStorageSync('Token');
		if (tokens) {
			var StorageToken = tokens
		}
		if (tokens) {
			next()
		} else {

			console.log(to)

			uni.setStorageSync('nextURL', to)
			next({
				name: 'login'
			})
		}

	} else {
		next()
	}
}

router.beforeEach((to, from, next) => {
	if (store.state.user.hasLogin) {
		next()
	} else {
		turnTo(to, next);
	}

})





App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
