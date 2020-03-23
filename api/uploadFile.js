import {
	http
} from '../utils/request/index.js'
const token = uni.getStorageSync('Token')

export default {
	uploadfiles({
		photo,
		success,
		fail,
		complete
	} = {}) {

		uni.uploadFile({
			// url: 'http://test.kkbear.me:9888/app/user/uploadFile',
			url: 'http://api.asset.go-tech.cn/app/user/uploadFile',
			filePath: photo, // 要上传文件资源的路径。
			name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
			formData: {}, // HTTP 请求中其他额外的 form data
			header:{
				Token:token
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: err => {
				complete && complete(err)
			}
		})
	},
	getWX({
		success,
		fail,
		complete
	}){
		http.get('auth/wx_jsconfig',{
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: err => {
				complete && complete(err)
			}
		})
		
	}
}
