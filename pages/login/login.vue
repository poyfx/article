<template>
	<view class="login bgcf">
		<!-- <titles :titles="titles" :color="true"></titles> -->

		<view class="login_content ">
			<view class="login-img">
				<image :src="src" mode="aspectFit"></image>
			</view>
			<view class="login-btn" >
				<button type="primary" @tap="go">登录</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	const api = 'http://test.kkbear.me:8888/app/auth/wx_auth'
	import titles from '../../components/title.vue'
	import userSevers from '@/api/get_wx_login.js'
	import img from "@/static/img/LOGO.png"
	export default {
		data() {
			return {
				titles: '登录文章助手',
				 //url: "http://localhost:8080/h5/#/pages/start/start",
				//url: "http://art.dev.pjy.name/#/pages/start/start",
				url:"http://asset.go-tech.cn/h5/#/pages/start/start",
				login:false,
				src:img
			}
		},
		created() {
		

		},
		methods: {
			go() {
				uni.showLoading({
					title:'登录中'
				})
				// const res =  userSevers.getUserInfo(this.url)
				// 	console.log(userSevers.getUserInfo(this.url))
				userSevers.getWXLogin({
					urls: this.url,
					success: (res) => {
						uni.hideLoading()
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							  window.location.href = res.data.oAuthUrl
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								position: 'bottom',
								duration: 2000
							})
						}
					},
					fail: err => {
						uni.hideLoading()
						console.log(err)
					},
					complete: resc => {
						uni.hideLoading()
						console.log(resc)
					}
				})
			},
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
