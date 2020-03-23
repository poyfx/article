import {
	http
} from '../utils/request/index.js'
export default{
	// 编辑评论
	editComment({
		showComment,
		articleId,
		comment,
		success,
		fail,
		complete,
	}){
		http.post('article/article_author_comment',{},{
			params:{
				showComment:showComment,
				articleId:articleId,
				comment:comment,
			},
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail && fail(err)
			},
			complete:res=>{
				complete && complete(res)
			}
		})
	},
	
	
	// // 用户发表评论
	// releaseComment({
	// 	articleId,
	// 	comment,
	// 	success,
	// 	fail,
	// 	complete,
	// }){
	// 	http.post('article/issue_comment',{},{
	// 		params:{
	// 			articleId:articleId,
	// 			comment:comment,
	// 		},
	// 		success:res=>{
	// 			success && success(res)
	// 		},
	// 		fail:err=>{
	// 			fail && fail(err)
	// 		},
	// 		complete:res=>{
	// 			complete && complete(res)
	// 		}
	// 	})
	// },
	//获取所有评论
	getConmentList({
		articleId,
		success,
		fail,
		complete,
		
	}){
		http.get('article/list_comments',{
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
	//发布评论
	issueConment({
		articleId,
		comment,
		success,
		fail,
		complete,
		
	}){
		http.post('article/issue_comment',{
			articleId: articleId,
			comment:comment
		},{
			params:{
			
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
	//获取产品详情
	getProduct({
		productId,
		success,
		fail,
		complete,
		
	}){
		http.get('article/query_case',{
			params:{
			productId: productId,
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
	getLike({
		articleId,
		success,
		fail,
		complete,
		
	}){
		http.post('article/user_likes',{
			
		},{
			params:{
			articleId: articleId,
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