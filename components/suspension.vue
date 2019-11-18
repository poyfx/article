<template>
	<view class="suspension flex">
		<view class="s_edit" @tap="go">
			<text>编辑</text>
		</view>
		<view class="s_logo flex">
			<image :src="src" mode="aspectFit"></image>
		</view>
		<view class="s_ask">
			<text>问一问</text>
		</view>
	</view>
</template>

<script>
	import img from '@/static/img/user.jpeg'
	export default {
		data() {
			return {
				src:img,

			};
		},
		methods:{
			go(){
				uni.navigateTo({
					url:'../../consultation/consultation'
				})
			},
		}
	}
</script>

<style lang="scss">
	.suspension{
		z-index: 1;
		width: 55px;
		position: fixed;
		right:4px ;
		top:40%;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		.s_edit{
			border: 1px solid #dddddd;
			padding:4px 14px;
			line-height: 17px;
			font-size: 0.65rem;
			color: $color55;
			margin-bottom: 5px;
		}
		.s_logo{
			justify-content: center;
			align-content: center;
			align-items: center;
			image{
				width:50px;
				height: 50px;
				border-radius: 50%;
				border: 1px solid #888888;
			}
		}
		.s_ask{
			width: 42px;
			background-color: #888888;
			color: #FFFFFF;
			padding: 2px 2px;
			position: relative;
			top: -8px;
			z-index: 2;
			text-align: center;
			margin: 0 auto;
			text{
				display: inline-block;
				font-size: 12px;
				transform: scale(0.8);
			}
		}
	}
</style>
