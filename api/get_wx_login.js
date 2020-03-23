import {
	http
} from '../utils/request/index.js'

export default {

	getWXLogin({
		urls,
		success,
		fail,
		complete
	} = {}) {
		http.get('auth/wx_auth', {
			params: {
				redirect_uri: urls,
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
	getUserInfov({
		Token,
		success,
		fail,
		complete
	} = {}) {
		http.get('user/get_basis_data', {
			success: res => {
				success && success(res)
			},
			header: {
				Token: Token
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})

	},
	getUserInfo({
		success,
		fail,
		complete
	} = {}) {
		http.get('user/get_basis_data', {
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
	setUserInfo({
		logo,
		nickname,
		industry_id,
		phone,
		wechat,
		company,
		position,
		Introduction,
		personal_photo1,
		personal_photo2,
		personal_photo3,
		success,
		fail,
		complete
	} = {}) {
		http.post('user/update_info', {
			nickname: nickname,
			wechat: wechat,
			phone: phone,
			profilePhoto: logo,
			industryId: industry_id,
			company: company,
			position: position,
			introduction: Introduction,
			personalPhoto1: personal_photo1,
			personalPhoto2: personal_photo2,
			personalPhoto3: personal_photo3,
		}, {
			params: {

			},
			success: res => {

				success && success(res)
			},

			fail: err => {
				console.log(err)
				fail && fail(err)
			},
			complete: res => {

				complete && complete(res)
			}
		})

	},
	getArticle({
		status,
		size,
		success,
		fail,
		complete
	}) {
		http.get('article/list', {
			params: {
				status: status,
				size:size,
			},

			success: res => {
				success && success(res)
			},

			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			},
		})
	},
	getArticleUserInfo({
		articleUser,
		success,
		fail,
		complete
	}) {
		http.get('user/get_article_user', {
			params: {
				articleUser: articleUser
			},

			success: res => {
				success && success(res)
			},

			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			},
		})
	}

}
