<template>
	<view class="reprint">
		<!-- <titles :titles="titles" :isIcons='false'></titles> -->
		<view class="reprint_content">
			<view class="reprint_img">
				<image src="../../../static/img/Reprint-banner.png" mode="aspectFill"></image>
			</view>

			<view class="index_reprint bgcf">
				<!-- <view class="index_reprint_title flex">
					<view>发转载</view>
					<text>帮你统计谁看了谁转发</text>
				</view> -->
				<view class="index_reprint_input">
					<input type="text" placeholder="请粘贴微信文章地址" v-model="url" />
				</view>

				<view class="index_reprint_link flex" @tap="getMethod">
					<view>?</view>
					<text>如何获得文章地址</text>
				</view>
				<view class="index_reprint_btn">
					<button @tap="go">获取文章</button>
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
								<image src="../../../static/img/count.png" mode="aspectFit"></image>
								<text>转发统计</text>
							</view>
							<text>访客阅读时间，次数，访客时长统计，转发次数一应俱全</text>
						</view>
						<view class="function_list flex">
							<view class="list_title flex">
								<image src="../../../static/img/exclusive.png" mode="aspectFit"></image>
								<text>专属展示</text>
							</view>
							<text>属于你的专属展示位，展示专业形象和言论及服务</text>
						</view>
						<view class="function_list flex">
							<view class="list_title flex">
								<image src="../../../static/img/energy.png" mode="aspectFit"></image>
								<text>二次赋能</text>
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
	import articleServer from '@/api/article.js'
	export default {
		data() {
			return {
				titles: '文章小助手',
				url: '',
			}
		},
		onLoad() {
			try {
			    const value = uni.getStorageSync('urlLink');
			    if (value) {
			       this.url = value
			    }
			} catch (e) {
			    // error
			}
		},
		methods: {
			getMethod() {
				uni.navigateTo({
					url: './tips/tips'
				})
			},
			go() {
			
				console.log(this.url.indexOf('mp.weixin.qq.com'))
				if(this.url.indexOf('mp.weixin.qq.com') == -1){
					uni.showToast({
						title:'仅支持输入微信地址',
						icon:'none',
						duration:3000
					})
				}else{
					uni.showLoading({
						mask:true,
						title:'文章获取中'
					})
					uni.setStorage({
						data:this.url,
						key:'urlLink'
					})
					uni.removeStorage({
						key:'drafts'
					})
					uni.removeStorage({
						key:'head'
					})
					uni.removeStorage({
						key:'comment'
					})
					uni.removeStorage({
						key:'foot'
					})
					uni.removeStorage({
						key:'ask'
					})
					uni.removeStorage({
						key:'products'
					})
					articleServer.parsing({
						art_url: this.url,
						success: res => {
							uni.hideLoading()
							console.log(res)
							if (res.statusCode == 200 && res.data.code == 0) {
								uni.removeStorage({
									key:'urlLink'
								})
								uni.setStorage({
									key: 'reprint',
									data: res.data.data
								})
								uni.navigateTo({
									url:'./edits/edits'
								})
							}else{
								uni.showToast({
									title:res.data.msg,
									icon:'none',
									duration:3000
									
								})
							}
					
						},
						fail: err => {
							uni.hideLoading()
							console.log(err)
						},
						complete: res => {
							uni.hideLoading()
							console.log(res)
						},
					})
				}
				
				
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

		.reprint_content {
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
							margin: 0 0px 32px 0px;

							>text {
								font-size: 0.6rem;
								color: $color88;
								transform: scale(0.85);
							}

							.list_title {
								margin: 0 0 5px 15px;
								align-content: center;
								align-items: center;

								image {
									width: 14px;
									height: 14px;
									margin-right: 7px;
								}

								text {
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
