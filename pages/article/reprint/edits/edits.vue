<template>
	<view class="edits">
	<!-- 	<titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<view class="header_save">
			<view class="header_title_white_save_fff flex">
				<view class="left_save" @tap="back">
					<uni-icons type="arrowleft" size="28"></uni-icons>
				</view>
				<view>编辑文章</view>
				<view class="right_save_collection flex" @tap="likeIt">
					<image src="../../../../static/img/nolike.png" mode="aspectFit" v-show="like"></image>
					<image src="../../../../static/img/like.png" mode="aspectFit" v-show="!like"></image>
					<text>收藏</text>
				</view>
			</view>
		</view>

		<view class="edits_content bgcf">
			<view class="edits_title">
				<text>{{title}}</text>
			</view>
			<view class="edits_samll_title">
				<text>本文由公众号“{{name}}”发布</text>
			</view>
			<view v-for="(item,index)  in html" :key="index">
				<view v-html="item"></view>
			</view>
			<!-- <parser :html="html"></parser> -->
			<!-- <view class="edits_img">
				<image src="../../../../static/img/photo1.png" mode="aspectFit"></image>
			</view>
			<view class="edits_text">
				<text>8月25日下午5点18分，央行通过官网发布公告，宣布从10月8日开始全面调整房贷利率计算方式！</text>
			</view>
			<view class="edits_img">
				<image src="../../../../static/img/photo2.png" mode="aspectFit"></image>
			</view> -->
			<disclaimer name="文章助手"></disclaimer>
		</view>
		<view class="edits_btn flex">
			<view class="edits_edit flex" @click="edits">
				<image src="../../../../static/img/edit.png" mode="aspectFit"></image>
				编辑
			</view>
			<view class="edits_deract flex" @tap="saveAdd(1)">
				直接转发
			</view>
		</view>
		
		<view class="share_tip" v-show="modelShow" @tap="modelShow = false;">
			<view class="">
				分享好友及朋友圈，请点击<text>右上角</text>进行分享
			</view>
			<uni-icons type="arrowthinup" size="28" color="#fff"></uni-icons>
		</view>
		
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import disclaimer from '@/components/disclaimer.vue'
	import parser from "@/components/jyf-parser/jyf-parser";
	import articleServer from '@/api/article.js'
		import WXServer from '@/api/uploadFile.js'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				titles: '发布转载文章',
				like: true,
				name:'',//原创作者
				title:'',//文章标题
				html: '',
				id:'',
				modelShow:false
			};
		},
		onLoad() {
			this.getReprint()
			this.share()
		},

		methods: {
			share() {
				var jweixin = require('jweixin-module')
				WXServer.getWX({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							jweixin.config({
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
						title: that.title, // 分享标题
						link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fasset.go-tech.cn%2fh5%2f%23%2fpages%2farticle%2fshare%2fshare%3fshareId%3d' + that.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'http://api.asset.go-tech.cn/upload/article_parsing/2020-02-26/img_1853838384245573708.jpg', // 分享图标
						success: function(res) {
							// 设置成功
							that.modelShow =false
							console.log(res)
							console.log(1)
						}
					})
					jweixin.updateAppMessageShareData({
						title:  that.title, // 分享标题
						desc: '这是一篇写得非常好的文章', // 分享描述
						link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fasset.go-tech.cn%2fh5%2f%23%2fpages%2farticle%2fshare%2fshare%3fshareId%3d' + that.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'http://api.asset.go-tech.cn/upload/article_parsing/2020-02-26/img_1853838384245573708.jpg', // 分享图标
						success: function() {
							// 设置成功
							that.modelShow =false
						},
					})
				});
			},
			saveAdd(num){
			
				var lock = false;
				var textHtml = JSON.stringify(this.html)
				if (!lock) {
					lock = true;
					articleServer.saveShare({
						id:this.id,
						publish_type: 2,
						
						title: this.title,
						cover: '',
						author: this.name,
						content:textHtml,
						success: res => {
							console.log(res)
							lock = false;
							if (res.statusCode == 200 && res.data.code == 0) {
									this.modelShow = true;
							}else {
								uni.showToast({
									title: res.data.msg,
									icon: 'none',
									position: 'bottom',
									duration: 3000,
								})
							}
						},
						fail: err => {
							console.log(err)
							lock = false;
						},
						complete: res => {
							lock = false;
							// console.log(res)
						}
					})
				}
					
			},
			getReprint() {
				const reprint = uni.getStorageSync('reprint')
				try {
					if (reprint) {
						this.name = reprint.art_public;
						this.title = reprint.title;
						this.id = reprint.article.id;
						// reprint.content.map(el=>{
						// 	this.html += el
							
						// })
						this.html = reprint.content
						console.log(this.html)

					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			likeIt() {
				console.log(this.id)
				this.like = !this.like;
				articleServer.favorite({
					articleId:this.id,
					success:res=>{
						console.log(res)
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					},
				})
			},
			edits() {
				uni.navigateTo({
					url: '../editingArticles/editingArticles'
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
		},
		components: {
			titles,
			disclaimer,
			parser,
			uniIcons
		}
	}
</script>

<style lang="scss">
	.edits {
		padding-bottom: 49px;

		.edits_content {
			padding: 17px 28px 20px 32px;

			.edits_title {
				line-height: 24px;
				margin-bottom: 10px;

				text {
					// word-break: keep-all;
					word-wrap: break-word;
					// white-space: pre-wrap;
					font-size: 1rem;
					color: $color55;
					font-weight: 550;
				}
			}

			.edits_samll_title {
				line-height: 17px;
				margin-bottom: 10px;

				text {
					font-size: 0.65rem;
					color: $color88;
					font-weight: 100;
				}
			}

			.edits_img {
				width: 100%;
				margin: 10px 0 25px;

				image {
					width: 100%;
					height: 180px;
				}
			}

		}

		.edits_btn {
			width: 100%;
			height: 48px;
			box-shadow: 0 1px 0 0 #eeeeee;
			position: fixed;
			bottom: 0;
			left: 0;
			border: 1px solid #eeeeee;

			.edits_edit {
				width: 40%;
				height: 100%;
				background-color: #FFFFFF;
				color: $color55;
				align-content: center;
				align-items: center;
				justify-content: center;

				image {
					width: 16px;
					height: 16px;
					margin-right: 5px;
				}

			}

			.edits_deract {
				height: 100%;
				flex: 1;
				background-color: #3C84EF;
				color: #FFFFFF;
				align-content: center;
				align-items: center;
				justify-content: center;

			}
		}
		.share_tip{
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
			view{
				
				font-size: 0.8rem;
				color: #fff;
				text{
					color: #9DC4FF;
				}
			}
		}
	}
</style>
