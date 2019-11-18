<template>
	<view class="productInfo">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<stitles :titles="stitles" :color="true"></stitles>
		<view class="productInfo_type bgcf flex">
			<text>请选择展示方式</text>
			<view class="flex">
				<view>外部链接</view>
				<image src="../../../../static/img/right.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="productInfo_logo bgcf">
			<view class="productInfo_title border-Bottom">
				<input type="text" placeholder="请输入标题" />
			</view>
			<view class="productInfo_title border-Bottom">
				<input type="text" placeholder="请输入副标题" />
			</view>
			<view class="productInfo_photo flex">
				<text>封面图</text>
				<image src="../../../../static/img/right.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="productInfo_link bgcf">
			<input type="text" placeholder="请输入外部链接地址" />
		</view>
		<view class="productInfo_btn">
			<button type="primary">确定并启用</button>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import stitles from '@/components/title2.vue'
	export default {
		data() {
			return {
				titles: '发布原创文章',
				stitles: '添加产品/案例/服务'
			};
		},
		components: {
			titles,
			stitles,
		}
	}
</script>

<style lang="scss">
	.productInfo {
		.productInfo_type {
			padding: 21px 27px 18px 28px;
			margin-bottom: 12px;
			justify-content: space-between;
			align-content: center;
			align-items: center;

			text {
				color: $color88;
				font-size: $size14;
			}

			view {
				align-content: center;
				align-items: center;

				view {
					color: $color55;
					font-size: $size16;
					margin-right: 7px;
					font-weight: 550;
				}

				image {
					width: 6px;
					height: 11px;
				}
			}
		}

		.productInfo_logo {
			padding: 0px 27px 0px 28px;
			margin-bottom: 10px;
			.productInfo_title {
				input {
					font-size: $size14;
					color: $color55;
					padding: 21px 0 19px;
				}	
			}
			.productInfo_photo{
				padding: 22px 0 19px;
				justify-content: space-between;
				align-content: center;
				align-items: center;
				image{
					width: 6px;
					height: 11px;
				}
				text{
					font-size: $size14;
					color: $color88;
				}
			}
		}
		.productInfo_link{
			padding: 0px 27px 0px 28px;
			margin-bottom: 108px;
			input{
				font-size: $size14;
				color: $color55;
				padding: 21px 0 19px;
			}
		}
		.productInfo_btn{
			padding: 0px 27px 0px 28px;
			button{
				width: 100%;
				background-color:$colorbtn ;
				color: #FFFFFF;
				font-size: $size14;
				padding: 6px 0 5px;
			}
		}
		
	}
</style>
