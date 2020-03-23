import userSevers from '@/api/get_wx_login.js'


export default {
	state: {
		hasLogin: false,
		openId: null,
		Token: null,
		nickname: null, //称呼
		phone: null, //手机
		wechat: null, //微信
		company: null, //公司
		position: null, //职位
		industry: null, //行业
		userlogo: null, //头像
		personalPhoto1:null,//个人简介图片
		personalPhoto2:null,//个人简介图片
		personalPhoto3:null,//个人简介图片
		userLife:'个人简介',//个人简介
		industrys:Array,//行业
		recommends:Array,//推荐阅读
		product:Array,//推荐产品
	},
	mutations: {
		setToken(state, provider) {
			// console.log(state)
			// console.log(provider)
			state.Token = provider;
			uni.setStorage({
				key:'Token',
				data:state.Token
			})
		},
		setNickname(state, nickname) {
			state.hasLogin = true;
			state.nickname= nickname
		},
		setPhone(state, phone) {
			state.phone= phone
		},
		setWechate(state, wechat) {
			state.wechat= wechat
		},
		setCompany(state, company) {
			state.company= company
		},
		setPosition(state, position) {
			state.position= position
		},
		setIndustry(state,industry ) {
			state.industry= industry
		},
		
		setUserlife(state, userLife) {
			state.userLife= userLife
		},
		setUserlogo(state, userlogo) {
			state.userlogo = userlogo
		},
		setIndustrys(state,industrys){
			state.industrys = industrys
		},
		setpersonalPhoto1(state,personalPhoto1){
			state.personalPhoto1 = personalPhoto1
		},
		setpersonalPhoto2(state,personalPhoto2){
			state.personalPhoto2 = personalPhoto2
		},
		setpersonalPhoto3(state,personalPhoto3){
			state.personalPhoto3 = personalPhoto3
		},
		setRecommends(state,recommends){
			state.recommends = recommends
		},
		setProduct(state,product){
			state.product = product
		},
	},
	actions: {
		getToken({
			commit
		}, data) {
			commit('setToken', data)
		},
		login({
			commit
		}, data) {
			// console.log(data)
			return new Promise((resolve, reject) => {
				try {
					userSevers.getUserInfov({
						Token: data,
						success: res => {
							console.log(res)
							
							const datas = res.data.artUser
							if (res.data.code != 0) {
								uni.showModal({
									content: res.data.msg
								})
								resolve(datas)
								return
							}
							
							commit('setNickname', datas.nickname)
							commit('setPhone', datas.phone)
							commit('setWechate', datas.wechat)
							commit('setCompany', datas.company)
							commit('setPosition', datas.position)
							commit('setIndustry', datas.industry)
							commit('setUserlife', datas.introduction)
							commit('setUserlogo', datas.profilePhoto)
							commit('setIndustrys', res.data.industrys)
							commit('setpersonalPhoto1',datas.personalPhoto1)
							commit('setpersonalPhoto2',datas.personalPhoto2)
							commit('setpersonalPhoto3',datas.personalPhoto3)
							commit('setRecommends',res.data.recommends)
							commit('setProduct',res.data.artProducts)
							resolve(datas)

						},
						fail: err => {
							console.log(err)
						},
						complete: err => {
							console.log(err)
						}
					})
				} catch (e) {
					reject(e)
				}
			})
		},
		setUser({commit},data){
			return new Promise((resolve, reject) => {
				try {
					userSevers.setUserInfo({
						Token: data,
						success: res => {
							const datas = res.data.artUser
							if (res.data.code != 0) {
								uni.showModal({
									content: res.data.msg
								})
								resolve(datas)
								return
							}
							
							commit('setNickname', datas.nickname)
							commit('setPhone', datas.phone)
							commit('setWechate', datas.wechat)
							commit('setCompany', datas.company)
							commit('setPosition', datas.position)
							commit('setIndustry', datas.industry)
							commit('setUserlife', datas.replyContent)
							commit('setUserlogo', datas.profilePhoto)
							// commit('setIndustrys', res.data.industrys)
							commit('setpersonalPhoto1',datas.personalPhoto1)
							commit('setpersonalPhoto2',datas.personalPhoto2)
							commit('setpersonalPhoto3',datas.personalPhoto3)
							resolve(datas)
			
						},
						fail: err => {
							console.log(err)
						},
						complete: err => {
							console.log(err)
						}
					})
				} catch (e) {
					reject(e)
				}
			})
		},
	}
}
