<template>
	<view class="content">
		<titles :titles="titles" :isIcons='true'></titles>
		<view class="index_content">
			<view class="index_video">
				<video src="../../static/video/demo.mp4" controls></video>
			</view>
			<view class="index_reprint bgcf">
				<view class="index_reprint_title flex">
					<view>发转载</view>
					<text>帮你统计谁看了谁转发</text>
				</view>
				<view class="index_reprint_input">
					<input type="text" placeholder="请粘贴微信文章地址" />
				</view>
				<view class="index_reprint_btn">
					<button @tap="edit">获取文章</button>
				</view>
				<view class="index_reprint_link flex">
					<view>?</view>
					<text>如何获得文章地址</text>
				</view>
			</view>
			<view class="index_original bgcf">
				<view class="index_original_title flex">
					<view>发原创</view>
					<text>轻松发原创，找到你的读者</text>
				</view>
				<view class="index_original_btn">
					<button @tap="go"><text>+</text>开始创建</button>
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
				titles: '文章小助手'
			}
		},
		onLoad() {

		},
		methods: {
		go(){
			uni.navigateTo({
				 url:'../user/user'
				
				
			})
		},
		edit(){
			uni.navigateTo({
				url:'../article/reprint/reprint'
			})
		},
		},
		components: {
			titles
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;

		.index_content {
			.index_video {
				width: 100%;

				video {
					width: 100%;
				}
			}

			.index_reprint {
				margin-bottom: 10px;
				padding: 23px 27px 23px 28px;

				.index_reprint_title {
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

				.index_reprint_input {
					margin-bottom: 10px;

					input {
						padding: 8px 5px 8px 10px;
						border: $borderE5;
						border-radius: 5px;
					}

					.uni-input-placeholder {
						color: #aaaaaa;
					}
				}

				.index_reprint_btn {
					margin-bottom: 14px;

					button {
						background-color: $colorbtn;
						box-shadow: $shadowbtn;
						font-size: $size14;
						padding: 3px;
						color: #FFFFFF;
					}
				}

				.index_reprint_link {
					color: $colorbtn;
					align-content: center;
					align-items: center;

					view {
						width: 16px;
						height: 16px;
						border-radius: 50%;
						border: 1px solid $colorbtn;
						font-size: 12px;
						text-align: center;
						margin-right: 5px;
					}
				}
			}

			.index_original {
				margin-bottom: 10px;
				padding: 28px 27px 30px 28px;

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
						padding: 3px;
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
		}
	}
</style>
