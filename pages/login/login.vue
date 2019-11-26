<template>
	<view class="login bgcf">
		<titles :titles="titles" :color="true"></titles>

		<view class="login_content ">
			<view class="login-img">
				<image src="../../static/img/LOGO.png" mode="aspectFit"></image>
			</view>
			<view class="login-btn">
				<button type="primary" @tap="go">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import titles from '../../components/title.vue'
	export default {
		data() {
			return {
				titles: '登录文章助手'
			}
		},
		onLoad() {

		},
		methods: {
go(){
	uni.navigateTo({
		url:'../index/index'
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
		.login_content{
			
			
			.login-img{
				border-top: 1px solid #D4D4D4;
				padding-top:130px ;
				text-align: center;
				margin-bottom: 55px;
				image{
					width: 77px ;
					height: 97px;
				}
			}
			.login-btn{
				width: 100%;
				button{
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
