<template>
	<view class="displaybit">
	

		<view class="authorinfo_article bgcf">
			<view class="content_title">
				{{content_title}}
			</view>
			<!-- 正文内容 -->
			<parser :html="html"></parser>


	
		</view>
	</view>
</template>

<script>

	import parser from "@/components/jyf-parser/jyf-parser";
	import commentServer from '@/api/comment.js'
	import WXServer from '@/api/uploadFile.js'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"

	export default {
		data() {
			return {
				id:'',
				html: '',
				content_title: '', //内容标题
			
			};
		},
		onLoad() {
			console.log(this.$route.params.id)
			this.getAll(this.$route.params.id)
		},
		methods: {

			share() {
				var wx = require('jweixin-module')
				WXServer.getWX({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							wx.config({
								//debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
								appId: res.data.appId, // 必填，公众号的唯一标识
								timestamp: res.data.timestamp, // 必填，生成签名的时间戳
								nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
								signature: res.data.signature, // 必填，签名
								jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
							});
							this.shareAll()
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})

			},
			// 分享朋友圈
			shareAll() {
				const that = this;
				var jweixin = require('jweixin-module')
				jweixin.ready(function(res) {
					console.log(res)
					jweixin.updateTimelineShareData({
						title: that.content_title, // 分享标题
						link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fasset.go-tech.cn%2fh5%2f%23%2fpages%2farticle%2fshare%2fshare%3fshareId%3d' +
							that.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: that.art_photo, // 分享图标
						success: function(res) {
							// 设置成功
							that.modelShow = false
							console.log(res)
							console.log(1)
						}
					})
					jweixin.updateAppMessageShareData({
						title: that.content_title, // 分享标题
						desc: '这是一篇写得非常好的文章', // 分享描述
						link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fasset.go-tech.cn%2fh5%2f%23%2fpages%2farticle%2fshare%2fshare%3fshareId%3d' +
							that.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: that.art_photo, // 分享图标
						success: function() {
							// 设置成功
							that.modelShow = false
						},
					})
				});
			},
			getAll(id) {
				commentServer.getProduct({
					productId: id,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							//文章作者内容部分
							const product = res.data.artProduct
							this.html = product.content;
							this.content_title = product.title
							
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			},

			

		
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
		},
		components: {
		
			parser,
			
		}
	}
</script>

<style lang="scss">
	.displaybit {
		padding-bottom: 48px;

		.authorinfo_article {
			margin-bottom: 40px;
			padding: 24px 30px 34px 28px;

			.authorinfo {
				margin: 0px 0px 24px;
				padding: 10px 17px 10px 12px;
				border-radius: 3px;
				background-color: #f2f2f2;
				justify-content: space-between;
				align-content: center;
				align-items: center;

				.authorinfo_logo {
					justify-content: space-between;
					align-content: center;
					align-items: center;

					.authorinfo_img {
						margin-right: 8px;

						image {
							width: 40px;
							height: 40px;
							border-radius: 50%;
						}
					}

					.authorinfo_text {
						flex-direction: column;

						view {
							align-content: center;
							align-items: center;
							margin-bottom: 1px;

							view {
								font-size: $size14;
								color: $color55;
								margin-right: 8px;
							}

							text {
								font-size: 0.60rem;
								color: $color55;
							}

						}

						>text {
							font-size: 0.60rem;
							color: $color88;
						}
					}
				}

				.authorinfo_add {
					padding: 5px 8px;
					font-size: 0.65rem;
					color: $color55;
				}
			}
		}

		.content_title {
			font-size: 1rem;
			color: $color55;
			line-height: 26px;
			font-weight: 550;
		}

	

		

		.share_tip {
			position: fixed;
			padding: 0 15px;
			z-index: 10000;
			height: 49px;
			width: 100%;
			top: 0;
			left: 0;
			background-color: rgba($color: #000000, $alpha: 0.5);
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-content: center;

			view {

				font-size: 0.8rem;
				color: #fff;

				text {
					color: #9DC4FF;
				}
			}
		}
	}
</style>
