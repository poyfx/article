<template>
	<view class="user">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<view class="user_content">
			<view class="user_group bgcf">
				<view class="list_logo">
					<text>头像</text>
					<view class="list_img flex">
						<image class="user_logo" src="../../static/img/user.jpeg" mode="aspectFit"></image>
						<image class="right" src="../../static/img/right.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="list">
					<text>称呼</text>
					<view>王小达</view>
				</view>
				<view class="list">
					<text>手机</text>
					<view>13612345678</view>
				</view>
				<view class="list">
					<text>微信</text>
					<view>kenny12345678</view>
				</view>
				<view class="list">
					<text>公司</text>
					<view>悦来科技</view>
				</view>
				<view class="list">
					<text>职位</text>
					<view>产品经理</view>
				</view>
				<view class="list">
					<text>所属行业</text>
					<view class="list_img flex">
						<view>金融</view>
						<image src="../../static/img/select.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="user_info flex">
					<text>个人简介</text>
					<textarea  placeholder="个人简介" />
				</view>
			</view>
			
			<view class="user_photo flex">
				<view class="user_addphoto flex">
					<view class="add">
						+
					</view>
					<text>添加照片</text>
				</view>
				<view class="user_addphoto flex">
					<view class="add">
						+
					</view>
					<text>添加照片</text>
				</view>
				<view class="user_addphoto flex">
					<view class="add">
						+
					</view>
					<text>添加照片</text>
				</view>
			</view>
			
			<view class="user_product flex">
				<text>相关产品及服务</text>
				<view class="product_detaile bgcf flex">
					<view class="product_img">
						<image src="../../static/logo.png" mode="aspectFit"></image>
					</view>
					<view class="product_text">
						<view>农银消费主题混合H</view>
						<text>净值 3.67632 涨幅 +123.32%</text>
					<view class="product_btn">
						查看
					</view>
					</view>
				</view>
			</view>
			
			<view class="user_btn">
				<button type="primary">确认</button>
			</view>
			
		</view>
	</view>
</template>

<script>
	import titles from '../../components/title.vue'

	export default {
		data() {
			return {
				titles: "个人中心",
			};
		},
		components: {
			titles,
		}
	}
</script>

<style lang="scss">
	.user {
		.user_content {
			.user_group {
				padding: 0 7.2% 0 7.5%;

				.list_logo {
					display: flex;
					justify-content: space-between;
					align-content: center;
					align-items: center;
					padding: 10px 0 10px;
					border-bottom: $borderE5;
					text{
						color: $color88;
						font-size: $size14;
					}
					.list_img {
						align-content: center;
						align-items: center;

						.user_logo {
							width: 52px;
							height: 52px;
							border-radius: 50%;
							margin-right: 5px;
						}

						.right {
							width: 6px;
							height: 11px;
						}
					
						
					}
				}

				.list {
					display: flex;
					justify-content: space-between;
					align-content: center;
					align-items: center;
					padding: 20px 0 20px;
					border-bottom: $borderE5;

					text {
						color: $color88;
						font-size: $size14;
					}
					.list_img{
						align-content: center;
						align-items: center;
						view{
							margin-right: 5px;
						}
						image{
							width: 6px;
							height: 11px;
						}
					}
					
				}
				.user_info{
					flex-direction: column;
					padding: 20px 0 20px;
					text{
						color: $color88;
						font-size: $size14;
					}
					textarea{
						width: 100%;
						height:48px ;
						font-size: $size16;
						color: $color55;
					}
				}
			}
			.user_photo{
				justify-content: space-between;
				padding: 20px 7.2% 20px 7.5%;
				.user_addphoto{
					width: 31%;
					height: 100px;
					background-color: #FFFFFF;
					align-content: center;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					.add{
						color: #DDDDDD;
						font-size: 40px;
						line-height: 40px;
					}
					text{
						color: $color88;
					}
				}
			}
			.user_product{
				padding: 0 7.2% 0 7.5%;
				margin-bottom: 30px;
				flex-direction: column;
				>text{
					font-size: $size14;
					color: $color88;
					margin-bottom: 10px;
				}
				.product_detaile{
					border-radius: 5px;
					padding: 16px 24px 15px 25px;
					.product_img{
						width: 64px;
						height: 64px;
						margin-right: 10px;
						image{
							width:100%;
							height: 100%;
						}
					}
					.product_text{
						flex: 1;
						view{
							font-size: $size14;
							color: $color55;
							font-weight: 550;
							margin-bottom: 3px;
						}
						text{
							display: inline-block;
							font-size: 0.6rem;
							color: $color55;
							margin-bottom: 6px;
						}
						.product_btn{
							text-align: center;
							width: 59px;
							padding: 2px 17px 2px 18px;
							background-color: $colorbtn;
							font-size: 0.6rem;
							color: #FFFFFF;
							border-radius: 3px;
						}
					}
				}
			}
			.user_btn{
				margin-bottom: 30px;
				button{
					width: 90%;
					box-shadow: $shadowbtn;
					color: $colorbtn;
					color: #FFFFFF;
					font-size: $size14;
					padding: 5px 0 6px;
				}
			}
		}
	}
</style>
