<template>
	<view class="reprint">
		<titles :titles="titles" :isIcons='false'></titles>
		<view class="reprint_content">
			<view class="reprint_img">
				<image src="../../../static/logo.png" mode="aspectFill"></image>
			</view>
			
			<view class="index_reprint bgcf">
				<!-- <view class="index_reprint_title flex">
					<view>发转载</view>
					<text>帮你统计谁看了谁转发</text>
				</view> -->
				<view class="index_reprint_input">
					<input type="text" placeholder="请粘贴微信文章地址" />
				</view>
				
				<view class="index_reprint_link flex" @tap="getMethod">
					<view>?</view>
					<text>如何获得文章地址</text>
				</view>
				<view class="index_reprint_btn">
					<button @tap="go">获取文章</button>
				</view>
			</view>
	
			<func></func>


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
			getMethod(){
				uni.navigateTo({
					url:'./tips/tips'
				})
			},
			go(){
				uni.navigateTo({
					url:'./edits/edits'
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
		background-color: #F7F7F7;
		.reprint_content{
			.reprint_img {
				width: 100%;
				height: 170px;
				image {
					width: 100%;
					height: 100%;
				}
			}
			
			.index_reprint {
				// margin-bottom: 10px;
				padding: 32px 27px 32px 28px;
			
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
					margin-bottom: 8px;
			
					input {
						padding: 11px 5px 10px 10px;
						border: $borderE5;
						border-radius: 5px;
					}
			
					.uni-input-placeholder {
						color: #aaaaaa;
					}
				}
			
				.index_reprint_btn {
				
			
					button {
						background-color: $colorbtn;
						box-shadow: $shadowbtn;
						font-size: $size14;
						padding: 5px 0;
						color: #FFFFFF;
					}
				}
			
				.index_reprint_link {
					font-size: 0.65rem;
					color: $colorbtn;
					align-content: center;
					align-items: center;
						margin-bottom: 14px;
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
		}
	}
</style>
