<template>
	<view class="reprint">
		<titles :titles="titles" :isIcons='false'></titles>
		<view class="reprint_content">
			<view class="reprint_img">
				<image src="../../../static/img/Original0-banner.jpg" mode="aspectFill"></image>
			</view>
			
			<view class="index_original bgcf">
				<!-- <view class="index_original_title flex">
					<view>发原创</view>
					<text>轻松发原创，找到你的读者</text>
				</view> -->
				<view class="index_original_btn">
					<button @tap="go"><text>+</text>开始创建</button>
				</view>
			</view>
	
			<view class="function">
				<view class="function_content">
					<view class="function_title flex">
						<text></text>
						<view>功能特色</view>
						<text></text>
					</view>
			
					<view class="function_group flex">
						<view class="function_list flex">
							<view class="list_title flex">
								<image src="../../../static/img/easy.png" mode="aspectFit"></image>
								<text>简单便捷</text>
							</view>
							<text>访客阅读时间，次数，访客时长统计，转发次数一应俱全</text>
						</view>
						<view class="function_list flex">
							<view class="list_title flex">
								<image src="../../../static/img/show.png" mode="aspectFit"></image>
								<text>立体展示</text>
							</view>
							<text>属于你的专属展示位，展示专业形象和言论及服务</text>
						</view>
						<view class="function_list flex">
							<view class="list_title flex">
								<image src="../../../static/img/count.png" mode="aspectFit"></image>
								<text>访客统计</text>
							</view>
							<text>可随处添加注释，独家评论，还可添加关联产品和服务</text>
						</view>
					</view>
				</view>
			</view>


		</view>

	</view>
</template>

<script>
	import titles from '../../../components/title.vue'
	import func from '../../../components/function.vue'
	export default {
		data() {
			return {
				titles: '文章小助手'
			}
		},
		onLoad() {

		},
		methods: {
			go(){
				uni.navigateTo({
					url:'./edit/edit'
				})
			},
		},
		components: {
			titles,
			func
		}
	}
</script>

<style lang="scss">
	.reprint {
		height: 100vh;
		    background: #f7f7f7;
		.reprint_content{
			.reprint_img {
				width: 100%;
				height: 170px;
				image {
					width: 100%;
					height: 100%;
				}
			}
			
			.index_original {
				// margin-bottom: 10px;
				padding: 42px 27px 34px 28px;
			
				.index_original_title {
					margin-bottom: 9px;
					align-content: center;
					align-items: center;
			
					view {
						font-size: $size18;
						color: $color55;
						margin-right: 10px;
						font-weight: 550;
					}
			
					text {
						font-size: 0.6rem;
						color: $color88;
					}
				}
			
				.index_original_btn {
					margin-bottom: 14px;
			
					button {
						background-color: $colorbtn;
						box-shadow: $shadowbtn;
						font-size: $size14;
						padding: 5px;
						color: #FFFFFF;
			
						text {
							font-size: 22px;
						
							line-height: 0;
							margin-right: 5px;
							position: relative;
							top: 2px;
						}
					}
				}
			}
			.function {
				background: #F7F7F7;
			
				.function_content {
					padding: 24px 27px 0 28px;
			
					.function_title {
						align-content: center;
						align-items: center;
						margin-bottom: 34px;
			
						text {
							border: 1px solid #E0E0E0;
							flex: 1;
						}
			
						view {
							font-size: 0.6rem;
							color: $color88;
							margin: 0 18px 0 20px;
						}
					}
			
					.function_group {
						flex-wrap: wrap;
			
						.function_list {
							width: 50%;
							flex-direction: column;
							 margin:0 0px 32px 0px;
							>text{
								font-size: 0.6rem;
								color: $color88;
								transform: scale(0.85);
							}
							.list_title{
								margin:0 0 5px 15px;
								align-content: center;
								align-items: center;
								image{
									width: 14px;
									height: 14px;
									margin-right: 7px;
								}
								text{
									font-size: 0.6rem;
									color: $color55;
									font-weight: 550;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
