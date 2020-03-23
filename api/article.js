import {
	http
} from '../utils/request/index.js'
export default {
	//文章浏览记录
	getStatistics({
		id,
		success,
		fail,
		complete,
	} = {}) {
		http.get('article/operate', {
			params: {
				articleId: id,
			},
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//文章详情
	getArticle({
		id,
		success,
		fail,
		complete,
	} = {}) {
		http.get('article/query_info', {
			params: {
				articleId: id,
			},
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//文章详情userid
	getArticleUser({
		id,
		repostUser,
		success,
		fail,
		complete,
	} = {}) {
		http.get('article/query_info', {
			params: {
				articleId: id,
				repostUser:repostUser,
			},
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//访客详细
	getStatisticsDetile({
		id,
		success,
		fail,
		complete,
	} = {}) {
		http.get('article/article_borwse', {
			params: {
				accessUser: id,
			},
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//原创发布  保存
	release({
		id,
		publish_type,
		
		title,
		cover,
		author,
		content,
		annotates,
		success,
		fail,
		complete
	} = {}) {
		http.post('article/release_original', {
			id:id,
			publishType: publish_type,

			title: title,
			cover: cover,
			author: author,
			content: content,
			annotates:annotates,
		}, {
			params: {
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//原创发布  保存
	saveShare({
		id,
		publish_type,
		title,
		cover,
		author,
		content,
		annotates,
		success,
		fail,
		complete
	} = {}) {
		http.post('article/release_article', {
			id:id,
			publishType: publish_type,
			title: title,
			cover: cover,
			author: author,
			content: content,
			annotates:annotates,
		}, {
			params: {
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//访客追踪
	getVisisorTrack({
		success,
		fail,
		complete,
	} = {}) {
		http.get('article/visitor_track', {
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//文章头部启动模块
	startUp({
		id,
		recommend,
		showPhone,
		showWechat,
		showHead,
		success,
		fail,
		complete,
	}) {
		http.post('article/user_show', {}, {
			params: {
				id: id,
				recommend: recommend,
				showPhone: showPhone,
				showWechat: showWechat,
				showHead: showHead,
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//文章底部启动模块
	footUp({
		id,
		recommend,
		showPhone,
		showWechat,
		introduction,
		showFoot,
		success,
		fail,
		complete,
	}) {
		http.post('article/personal_info', {}, {
			params: {
				id: id,
				recommend: recommend,
				showPhone: showPhone,
				showWechat: showWechat,
				introduction: introduction,
				showFoot: showFoot,
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//自动回复
	autoReply({
		auto_reply,
		reply_content,
		success,
		fail,
		complete,
	}) {
		http.post('article/open_advisory', {}, {
			params: {
				autoReply: auto_reply,
				replyContent: reply_content,
			},

			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//产品/案例/服务启动
	productUp({
		article_id,
		show_type,
		title,
		subtitle,
		cover,
		url,
		content,
		success,
		fail,
		complete,
	}) {
		http.post('article/insert_case', {}, {
			params: {
				articleId: article_id,
				showType: show_type,
				title: title,
				subtitle: subtitle,
				cover: cover,
				url: url,
				content: content,
			},

			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//解析文章
	parsing({
		art_url,
		success,
		fail,
		complete,
	}) {
		http.post('article/parsing', {}, {
			params: {
				artUrl: art_url
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	//收藏
	favorite({
		articleId,
		success,
		fail,
		complete,
	}) {
		http.post('article/favorite_cancel', {
			
		}, {
			params:{
				articleId: articleId
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	
}
