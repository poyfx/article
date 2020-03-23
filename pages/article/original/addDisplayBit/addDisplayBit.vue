<template>
	<view class="displaybit">
		<!-- <titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<view class="header_save">
			<view class="header_title_white_save_fff flex">
				<view class="left_save" @tap="back">
					<uni-icons type="arrowleft" size="28"></uni-icons>
				</view>
				<view>添加额外展示位</view>
				<view class="right_savebtn flex">
					<text @tap="save">保存</text>
				</view>
			</view>
		</view>

		<view class="authorinfo_article bgcf">
			<view class="authorinfo flex">
				<view class="authorinfo_logo flex">
					<view class="authorinfo_img flex">
						<image :src="headlogo" mode=""></image>
					</view>
					<view class="authorinfo_text flex">
						<view class="flex">
							<view>{{headnickname}}</view>
							<text>{{headcompany}}&nbsp; {{headposition}}</text>
						</view>
						<text>{{headrecommend}}</text>
					</view>
				</view>
				<view class="authorinfo_add bgcf">
					<view v-show="showHead == 0" @tap="addinfo(0)">+添加该模块</view>
					<view v-show="showHead == 1" @tap="addinfo(1)">编辑</view>
				</view>
			</view>
			<view class="content_title">
				{{content_title}}
			</view>
			<!-- 正文内容 -->
			<parser :html="html"></parser>


			<disclaimer></disclaimer>
		</view>
		<!-- 作者信息及产品推荐位 -->
		<view class="personal_info">
			<view class="personal">
				<personal @addinfo="addinfo" :showFoot="showFoot" :footlogo="footlogo" :footposition="footposition" :footcompany='footcompany'
				 :footrecommend="footrecommend" :footnickname="footnickname" :userLife="userLife"></personal>
			</view>
			<!-- 产品案例 -->
			<view class="product">
				<product :id="id" :productTitle="productTitle" :fProductTitle="fProductTitle" :productLogo="productLogo"
				 :productShow="productShow" :footnickname='footnickname'></product>
			</view>

		</view>
		<!-- 用户不可见内容 -->
		<view class="mall">
			<image src="../../../../static/img/mall.png" mode="aspectFit"></image>
		</view>
		<view class="add_btn flex">
			<view class="flex look" @tap="preview(1)">
				<image src="../../../../static/img/preview.png" mode="aspectFit"></image>预览
			</view>
			<text class="flex save" @tap="saves(2)">保存并转发</text>
		</view>
		<suspension :askSrc="askSrc" :showAsk="showAsk"></suspension>
		<view class="share_tip" v-show="modelShow" @tap="modelShow = false;">
			<view class="">
				分享好友及朋友圈，请点击<text>右上角</text>进行分享
			</view>
			<uni-icons type="arrowthinup" size="28" color="#fff"></uni-icons>
		</view>
		<!-- <view class="share" v-show="modelShow" @tap.self.prevent="modelShow =false">
			<view class="share_content flex">
				<view class="share_title border-Bottom">
					分享后，可在个人中心查看文章访问记录
				</view>
				<view class="share_icon flex">
					<view class="flex"  >
						<image class="img_f" src="../../../../static/img/wechat.png"></image>
						<text>微信好友</text>
					</view>
					<view class="flex" >
						<image src="../../../../static/img/quan.png"></image>
						<text>微信朋友圈</text>
					</view>
				</view>
				<view class="share_close">
					<uni-icons type="closeempty" size="36" @tap="modelShow = false"></uni-icons>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import parser from "@/components/jyf-parser/jyf-parser";
	import disclaimer from '@/components/disclaimer.vue'
	import personal from '@/components/personal.vue'
	import product from '@/components/product.vue'
	import suspension from '@/components/suspension.vue'
	import imgs from '@/static/img/user.jpeg'
	import articleServer from '@/api/article.js'
	import WXServer from '@/api/uploadFile.js'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"

	export default {
		data() {
			return {
				titles: '发布原创文章',
				html: '',
				content_title: '', //内容标题
				art_name: '',
				art_photo: '',
				id: '', //文章id
				showHead: '0', //是否显示头部展示位
				headlogo: '', //头部展示位头像
				headposition: '职位', //头部展示位职位
				headcompany: '公司', //头部展示位公司
				headrecommend: '分享好文', //头部展示位推荐
				headnickname: '昵称',
				showFoot: 0, //是否显示头部展示位
				footlogo: '', //头部展示位头像
				footposition: '职位', //头部展示位职位
				footcompany: '公司', //头部展示位公司
				footrecommend: '分享好文', //头部展示位推荐
				footnickname: '昵称',
				userLife: '', //个人简介
				modelShow: false,
				askSrc: '', //问一问头像
				showAsk: '', //是否显示问一问头像
				productTitle: '', //产品主标题
				fProductTitle: '', //副标题
				productLogo: '', //产品logo
				productShow: '',
			};
		},
		onLoad() {
		
			this.headlogo = imgs;
			this.footlogo = imgs;

			this.share()
			var a = '';
			const drafts = uni.getStorageSync('drafts');
			if (drafts) {
				a = drafts.type;
				this.id = drafts.id;
			}
			if (a == 'drafts') {
				this.getAll(this.id)

			} else {
				this.getFoot()
				this.getHead()
				this.rich();
				this.getAsk();
				this.getProduct();
			}

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
						desc: '', // 分享描述
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
				articleServer.getArticle({
					id: id,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							//文章作者内容部分
							const reprint = res.data.result.article
							const head = res.data.result.artUser
							const product = res.data.result.artProduct;
							this.name = reprint.author;
							this.content_title = reprint.title;
							this.html = reprint.content;
							this.textArr = [];
							this.textArr.length = this.html.length;
							this.id = reprint.id;
							if (reprint.cover != null) {
								this.art_photo = reprint.cover
							}
							// this.sourceUrl = reprint.article.sourceUrl
							if (reprint.showHead == 1) {
								this.showHead = reprint.showHead
								this.headlogo = head.profilePhoto;
								this.headposition = head.position;
								this.headcompany = head.company;
								console.log(this.headcompany)
								this.headrecommend = reprint.recommend;
								this.headnickname = head.nickname
							}
							if (reprint.showFoot == 1) {
								this.showFoot = reprint.showFoot
								// console.log(this.showFoot)
								this.footlogo = head.profilePhoto;
								this.footposition = head.position;
								this.footcompany = head.company;
								this.footrecommend = head.recommend;
								this.footnickname = head.nickname;
								this.userLife = head.introduction
							}
							if (res.data.result.artProduct == '' || res.data.result.artProduct == null) {
								this.productShow = true
							} else {

								this.productTitle = product.title
								this.fProductTitle = product.subtitle
								this.productLogo = product.cover
								this.productShow = false
							}
							if (head.autoReply == 1) {
								this.askSrc = head.profilePhoto;
								console.log(this.askSrc)
								this.showAsk = head.autoReply
							}
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

			getHead() {
				const head = uni.getStorageSync('head')
				try {
					if (head) {

						if (head.showHead == 1) {
							this.showHead = head.showHead
							this.headlogo = head.headlogo;
							this.headposition = head.headposition;
							this.headcompany = head.headcompany;
							this.headrecommend = head.headrecommend;
							this.headnickname = head.headnickname
						}
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			getFoot() {
				const foot = uni.getStorageSync('foot')
				try {
					if (foot) {
						if (foot.showFoot == 1) {

							this.showFoot = foot.showHead
							this.footlogo = foot.headlogo;
							this.footposition = foot.headposition;
							this.footcompany = foot.headcompany;
							this.footrecommend = foot.headrecommend;
							this.footnickname = foot.headnickname;
							this.userLife = foot.setuserLife
							console.log(this.userLife)
						}
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			getAsk() {
				const ask = uni.getStorageSync('ask')
				try {
					if (ask) {
						if (ask.showask == 1) {
							this.askSrc = ask.logo;
							this.showAsk = ask.showask
						}
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			getProduct() {
				const products = uni.getStorageSync('products')
				try {
					if (products) {
						if (products.showproducet == 1) {
							this.productShow = false
						} else {
							this.productShow = true
						}
						this.productTitle = products.title
						this.fProductTitle = products.subtitle
						this.productLogo = products.cover
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			go() {
				this.$refs.child.go();
			},
			rich() {
				try {
					const values = uni.getStorageSync('art');
					if (values) {
						this.html = values.content
						this.content_title = values.title;
						this.id = values.id
						this.art_name = values.name
						this.art_photo = values.cover
					}
				} catch (e) {

					//TODO handle the exception
				}


			},
			// 添加该模块
			addinfo(type) {

				uni.navigateTo({
					url: '../../userinfo/userinfo?id=' + this.id + "&type=" + type
				})
			},

			preview(num) {
				this.save(num)
			},
			save(text) {
				console.log(this.art_name)
				var lock = false;
				// var textHtml = JSON.stringify(this.html)
				if (!lock) {
					lock = true;
					articleServer.release({
						id: this.id,
						publish_type: '1', //类型1为原创2位转载
						title: this.content_title,
						cover: this.art_photo,
						author: this.art_name,
						content: this.html,
						success: res => {
							console.log(res)
							lock = false;
							if (res.statusCode == 200 && res.data.code == 0) {
								this.id = res.data.article_id;

								if (text == '1') {
									uni.navigateTo({
										url: '../../preview/preview?id=' + this.id + '&url=' + 'addDisplayBit'
									})
								} else {
									uni.showToast({
										title: '保存成功',
										duration: 3000,
									})
								}
							} else {
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

			saves(num) {
				var lock = false;
				if (!lock) {
					lock = true;
					articleServer.saveShare({
						id:this.id,
						publish_type: 1,
						title: this.content_title,
						cover:  this.art_photo,
						author: this.art_name,
						content:this.html,
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
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
		},
		components: {
			titles,
			parser,
			disclaimer,
			personal,
			product,
			suspension,
			uniIcons
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

		.personal_info {
			margin: 24px 30px 34px 28px;

			.personal {
				margin-bottom: 20px;
			}
		}

		.mall {
			width: 100%;
			height: 100px;
			margin-bottom: 16px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.add_btn {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 48px;
			justify-content: space-between;
			align-content: center;
			align-items: center;

			.look {
				width: 40%;
				background-color: #FFFFFF;
				color: $color55;
				size: $size14;
				height: 100%;
				align-content: center;
				align-items: center;
				text-align: center;
				justify-content: center;
				font-weight: 550;

				image {
					width: 20px;
					height: 13px;
					margin-right: 5px;
				}
			}

			.save {
				width: 60%;
				background-color: #3C84EF;
				color: #FFFFFF;
				size: $size14;
				height: 100%;
				align-content: center;
				align-items: center;
				text-align: center;
				justify-content: center;
				font-weight: 550;
			}
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

		.share {
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.2);

			.share_content {
				width: 100%;
				position: absolute;
				left: 0;
				bottom: 0;
				padding: 0 17px 0 16px;
				background: #FFFFFF;
				flex-direction: column;
				justify-content: center;
				align-content: center;
				align-items: center;

				.share_title {
					width: 100%;
					font-size: $size14;
					color: $color88;
					line-height: 20px;
					padding: 16px 0 14px;
					text-align: center;

				}

				.share_icon {
					width: 100%;
					justify-content: center;
					align-content: center;
					align-items: center;
					padding: 29px 0 27px;

					view {
						width: 50%;
						flex-direction: column;
						align-content: center;
						align-items: center;
						justify-content: center;
						flex: 1;

						image {
							width: 38px;
							height: 38px
						}

						.img_f {
							width: 48px;
							height: 40px;
						}
					}
				}

				.share_close {
					padding-bottom: 20px;
				}
			}
		}
	}
</style>
