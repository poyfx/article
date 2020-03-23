<template>
	<view class="product">
		<!-- 没产品推荐 -->
		<view class="product_no flex" @tap="go(0)" v-show="productShow">
			<text><text>+</text>添加产品/案例/服务</text>
		</view>
		<view class="user_product flex" v-show="!productShow">
			<text>{{footnickname}}为您推荐</text>
			<view class="product_detaile bgcf flex">
				<view class="product_img">
					<image :src="productLogo" mode=""></image>
				</view>
				<view class="product_text">
					<view>{{productTitle}}</view>
					<text>{{fProductTitle}}</text>
					<view class="product_btn flex" @tap="go(1)" v-show="!pre">
						编辑
					</view>
					<view class="product_btn_look" v-show="pre">
						查看
					</view>
				</view>



			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			id: {
				type: String / Number,
			},
			productLogo: {
				type: String,
				default: ''
			},
			productTitle: {
				type: String,
				default: ''
			},
			fProductTitle: {
				type: String,
				default: ''
			},
			productShow: {
				type: Boolean,
				default: true,
			},
			footnickname: {
				type: String,
				default: ''
			},
			pre: {
				type: Boolean,
				default: false
			},
			url: {
				type: String,
				default: ''
			},
		},
		data() {
			return {

			};
		},
		methods: {
			go(have) {
				console.log(have)
				const haves = have || ''
				uni.navigateTo({
					url: '../../productInfo/productInfo?have=' + haves + '&id=' + this.id + '&url=' + this.url
				})
			},
		}
	}
</script>

<style lang="scss">
	.product {
		.product_no {
			width: 100%;
			height: 100px;
			background-color: #EFEFEF;
			align-content: center;
			align-items: center;
			justify-content: center;

			text {
				align-self: center;
				font-size: $size14;
				color: $color55;
				line-height: 29px;
				font-weight: 550;

				text {
					font-size: 29px;
					line-height: 29px;
					font-weight: 200;
					vertical-align: sub;
					display: inline-block;
					margin-right: 5px;
				}
			}
		}

		.user_product {
			margin-bottom: 30px;
			flex-direction: column;

			>text {
				font-size: $size14;
				color: $color88;
				margin-bottom: 10px;
			}

			.product_detaile {
				border-radius: 5px;
				padding: 16px 24px 15px 25px;

				.product_img {
					width: 64px;
					height: 64px;
					margin-right: 10px;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.product_text {
					flex: 1;

					view {
						font-size: $size14;
						color: $color55;
						font-weight: 550;
						line-height: 20px;
					}

					text {
						display: inline-block;
						font-size: 0.6rem;
						color: $color55;

						line-height: 18px;
					}

					.product_btn {
						text-align: center;
						justify-content: center;
						align-items: center;
						align-content: center;
						width: 3.4rem;
						padding: 1px 0px 1px 0px;
						border: 1px solid #d3d3d3;
						background: #FFFFFF;
						font-size: 0.6rem;
						border-radius: 3px;
					}

					.product_btn_look {
						text-align: center;
						width: 59px;
						padding: 1px 0px 1px 0px;
						border: 1px solid #d3d3d3;
						background: #2E7FF1;
						font-size: 0.6rem;
						border-radius: 3px;
						color: #FFFFFF;
					}
				}
			}
		}
	
	}
</style>
