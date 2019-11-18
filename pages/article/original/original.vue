<template>
	<view class="reprint">
		<titles :titles="titles" :isIcons='false'></titles>
		<view class="reprint_content">
			<view class="reprint_img">
				<image src="../../../static/logo.png" mode="aspectFill"></image>
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
		}
	}
</style>
