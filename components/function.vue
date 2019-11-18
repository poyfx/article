<template>
	<view class="function">
		<view class="function_content">
			<view class="function_title flex">
				<text></text>
				<view>功能特色</view>
				<text></text>
			</view>

			<view class="function_group flex">
				<view class="function_list flex">
					<view class="list_title">
						<image src="../static/home.png" mode="aspectFit"></image>
						<text>简单便捷</text>
					</view>
					<text>访客阅读时间，次数，访客时长统计，转发次数一应俱全</text>
				</view>
				<view class="function_list flex">
					<view class="list_title">
						<image src="../static/home.png" mode="aspectFit"></image>
						<text>立体展示</text>
					</view>
					<text>属于你的专属展示位，展示专业形象和言论及服务</text>
				</view>
				<view class="function_list flex">
					<view class="list_title">
						<image src="../static/home.png" mode="aspectFit"></image>
						<text>访客统计</text>
					</view>
					<text>可随处添加注释，独家评论，还可添加关联产品和服务</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		onLoad() {
	
		},
		methods: {
	
		},
		components: {
		
		}
	}
</script>

<style lang="scss">
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
</style>
