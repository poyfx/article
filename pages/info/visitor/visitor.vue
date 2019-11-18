<template>
	<view class="visitor bgcf">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<titles2 :titles="titles2" :color="false"></titles2>
		<view class="visitor_content">
			<view class="visitor_number flex border-Bottom">
				<text>共18个好友访问</text>
				<view class="flex">
					<text>访问量</text>
					<image src="../../../static/img/select.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="visitor_many">
				<view class="visitor_list flex border-Bottom">
					<view class="list_content flex">
						<view class="list_img">
							<image src="../../../static/logo.png" mode="aspectFit"></image>
						</view>
						<view class="list_name">
							<view>张虎</view>
							<text>访问13次，转发13次</text>
						</view>
					</view>

					<view class="list_right">
						<image src="../../../static/img/right.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titles from '../../../components/title.vue'
	import titles2 from '../../../components/title2.vue'
	export default {
		data() {
			return {
				titles: '我的文章',
				titles2: '访客追踪'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			titles,
			titles2
		}
	}
</script>

<style lang="scss">
	.visitor {
		height: 100vh;

		.visitor_content {
			padding: 0 8.5% 0 7.5%;

			.visitor_number {
				padding: 20px 0 21px;
				justify-content: space-between;
				align-content: center;
				align-items: center;

				text {
					color: $color88;
					font-size: 0.65rem;
				}

				view {
					align-content: center;
					align-items: center;

					image {
						width: 6px;
						height: 11px;
						margin-left: 5px;
					}

					text {
						color: #B38B6F;
					}
				}
			}

			.visitor_many {
				.visitor_list {
					justify-content: space-between;
					align-content: center;
					align-items: center;
					.list_content {
						padding: 12px 0 13px;
						align-content: center;
						align-items: center;
						.list_img {
							margin-right: 13px;

							image {
								width: 44px;
								height: 44px;
							}
						}
						.list_name{
							view{
								font-size: $size14;
								color: $color55;
								font-weight: 550;
							}
							text{
								color: $color88;
								font-size: 0.65rem;
							}
						}
					}


					.list_right {
						image {
							width: 6px;
							height: 11px;
						}
					}
				}
			}
		}
	}
</style>
