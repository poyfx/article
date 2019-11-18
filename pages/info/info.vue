<template>
	<view class="info">
		<!-- 我的文章   发布收藏  草稿箱 -->
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<view class="info_content">
			<!-- <view class="info_nav flex">
				<view>
					<image src="../../static/home.png" mode="aspectFit"></image>
					<text>个人中心</text>
				</view>
				<view @tap="goVisitor">
					<image src="../../static/home.png" mode="aspectFit"></image>
					<text>访客追踪</text>
				</view>
				<view>
					<image src="../../static/home.png" mode="aspectFit"></image>
					<text>智能统计</text>
				</view>
				<view>
					<image src="../../static/home.png" mode="aspectFit"></image>
					<text>建议&反馈</text>
				</view>
			</view> -->
			<view class="info_myinfo_content bgcf">
				<view class="info_myinfo flex border-Bottom">
					<view class="info_myinfo_take flex">
						<text class="active">我的发布</text>
						<text>我的收藏</text>
						<text>草稿箱</text>
					</view>
					<!-- <view class="info_myinfo_box">草稿箱</view> -->
				</view>
				<!-- 我的发布 -->
				<view class="info_article bgcf flex border-Bottom">
					<view class="info_article_title flex" >
						<view>2019年投资什么项目能不亏本</view>
						<text>转载 于今天 12:34</text>
					</view>
					<view class="info_article_number">
						5
					</view>
				</view>
				<!-- 我的收藏 -->
				<view class="info_article bgcf flex border-Bottom">
					<view class="info_article_title flex" >
						<view>2019年投资什么项目能不亏本</view>
						<text>转载 于今天 12:34</text>
					</view>
					<view class="info_article_number flex">
						<image src="../../static/img/right.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import titles from '../../components/title.vue'
	export default {
		data() {
			return {
				titles: '我的文章'
			}
		},
		onLoad() {

		},
		methods: {
			goVisitor(){
				uni.navigateTo({
					url:'./visitor/visitor'
				})
			},
		},
		components: {
			titles
		}
	}
</script>

<style lang="scss">
	.info {
		.info_content {
			.info_nav {
				padding: 20px 36px 20px 39px;
				justify-content: space-between;

				view {
					display: flex;
					flex-direction: column;
					align-content: center;
					align-items: center;

					image {
						width: 32px;
						height: 31px;
					}

					text {
						color: $color88;
						font-size: 0.6rem;
					}
				}
			}

			.info_myinfo_content {
				padding: 0 27px 0 28px;

				.info_myinfo {
					padding: 22px 0 20px 0;
					justify-content: space-between;
					align-content: center;
					align-items: center;


					.info_myinfo_take {
						justify-content: space-between;
						align-content: center;
						align-items: center;
						flex: 1;
						text {
						width: 25%;
							font-size: 0.6rem;
							color: $color88;
						}

						.active {
							
							font-size: $size16;
							color: $colorbtn;
						}
					}
					.info_myinfo_box{
						font-size: 0.6rem;
						color: $color88;
					}
				}
				.info_article{
					padding: 17px 0 15px;
					justify-content: space-between;
					align-content: center;
					align-items: center;
					.info_article_title{
						flex-direction: column;
						view{
							font-size: $size14;
							color: $color55;
							font-weight: 550;
							margin-bottom: 3px;
						}
						text{
							color: $color88;
							font-size: 0.6rem;
						}
					}
					.info_article_number{
						color:#B38B6F;
						font-size: 0.6rem;
						align-content: center;
						align-items: center;
						image{
							width: 6px;
							height: 11px;
						}
					}
				}
			}

		}
	}
</style>
