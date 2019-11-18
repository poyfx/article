<template>
	<view class="product">
		<!-- 没产品推荐 -->
		<view class="product_no flex" @tap="go">
			<text><text>+</text>添加产品/案例/服务</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			go(){
				uni.navigateTo({
					url:'../../productInfo/productInfo'
				})
			},
		}
	}
</script>

<style lang="scss">
	.product{
		.product_no{
			width: 100%;
			height: 100px;
			background-color:#EFEFEF;
			align-content: center;
			align-items: center;
			justify-content: center;
			text{
				align-self: center;
				font-size: $size14;
				color: $color55;
				line-height: 29px;
				font-weight: 550;
				text{
					font-size: 29px;
					line-height: 29px;
					font-weight: 200;
					vertical-align: sub;
					display: inline-block;
					margin-right: 5px;
				}
			}
		}
	}
</style>
