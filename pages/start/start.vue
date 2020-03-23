<template>
	<view class="login bgcf">
		<titles :titles="titles" :color="true"></titles>

		<view class="login_content ">
			<view class="login-img">
				<image src="../../static/img/LOGO.png" mode="aspectFit"></image>
			</view>
			<!-- <view class="login-btn" >
				<button type="primary" @tap="go">登录</button>
			</view> -->

		</view>
	</view>
</template>

<script>
	import titles from '../../components/title.vue'
	import userSevers from '@/api/get_wx_login.js'
	import {
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				titles: '登录文章助手',
				url: "", //需要切割的地址
				gourl: '', //需要跳转的地址
				token: '',
				urlHeader: "",
				seturl: '',
			}
		},
		onShow(option) {
			this.url = window.location.href
			const num1 = this.url.indexOf("=")
			const num2 = this.url.indexOf("#")
			const num3 = this.url.indexOf('?')
			const remove = this.url.substring(num3, num2)
			this.token = this.url.substring(num1 + 1, num2);
			this.seturl = this.url.substring(num3, num2 + 1);
			this.urlHeader = this.url
			// console.log(this.token)
			this.urlHeader = this.urlHeader.substring(0, num3)
			this.getURL()
			uni.showLoading({
				mask: true,
				title: '登陆中...',

			})

		},
		methods: {
			...mapActions(['getToken', 'login']),
			getURL() {
			
				try {
					const value = uni.getStorageSync('nextURL');
					if (value) {
						this.gourl = value.path
						this.goRoute()
					}
				} catch (e) {
					// error
				}
			},
			goRoute() {
				this.getToken(this.token)
				try {
					uni.setStorageSync('Token', this.token);
				} catch (e) {
					// error
				}
				// uni.setStorage({
				// 	key:'Token',
				// 	data:this.token
				// })
				window.history.pushState({}, 0, document.URL.replace(this.seturl.substr(0, this.seturl.length - 1), ''))
				// const url = this.urlHeader +'#'+ this.url
				// console.log(this.token)
				this.login(this.token)
				uni.redirectTo({
					url: this.gourl
				});
				uni.hideLoading()
				// userSevers.getUserInfo({
				// 	success:res=>{
				// 		uni.hideLoading()
				// 		console.log(res)
				// 		uni.redirectTo({
				// 			url: this.gourl
				// 		});
				// 	},
				// 	fail:err=>{
				// 		console.log(err)
				// 		uni.hideLoading()
				// 	},
				// 	complete:resc=>{
				// 		uni.hideLoading()
				// 		console.log(resc)
				// 	}
				// })

			}

		},
		components: {
			titles
		}
	}
</script>

<style lang="scss">
	.login {
		width: 100%;
		height: 100vh;

		.login_content {


			.login-img {
				border-top: 1px solid #D4D4D4;
				padding-top: 130px;
				text-align: center;
				margin-bottom: 55px;

				image {
					width: 77px;
					height: 97px;
				}
			}

			.login-btn {
				width: 100%;

				button {
					width: 94%;
					border: 1px solid #75BF33;
					background-color: #FFFFFF;
					color: #75BF33;
					border-radius: 5px;
					padding: 2px 0;
				}
			}
		}
	}
</style>
