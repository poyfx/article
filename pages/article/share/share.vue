<template>
	<view class="displaybit">

		<view class="authorinfo_article bgcf">
			<view class="authorinfo flex" v-show="showHead == 1">
				<view class="authorinfo_logo flex" @tap="articleInfo(userId)">
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
				<!-- <view class="authorinfo_add bgcf">
					<view v-show="showHead == 0" @tap="addinfo(0)">+添加该模块</view>
					<view v-show="showHead == 1" @tap="addinfo(1)">编辑</view>
				</view> -->
			</view>
			<view class="content_title">
				{{content_title}}
			</view>
			<!-- 正文内容 -->
			<view class="article" v-if="publishType ==1">
				<!-- <parser :html="html" lazy-load @error="error" @parse="parse"></parser> -->
				<view class="article_contents" v-html="html">
					
				</view>
			</view>

			<!-- 正文 -->
			<view class="edits_content bgcf" v-else><!-- ="publishType != 1" -->
				<!-- <view class="edits_title">
					<text>{{content_title}}</text>
				</view> -->
				<view class="edits_samll_title">
					<text>本文由公众号“{{name}}”发布</text>
				</view>
				<view class="article" ref="set" v-for="(item,index) in html" :key="index">
					<view class="article_contents" v-html="item">
						
					</view>
					
					<!-- <parser :html="item" lazy-load @parse="parse" @error="error"></parser>
					 -->
					<!-- 注释 -->
					<view class="set_notes" v-show="textArr[index]">
						<view></view>
						<text>{{textArr[index]}}</text>
					</view>
				</view>
				<!-- <view class="" v-else>
					<parser :html="html" lazy-load @error="error" @parse="parse"></parser>
					<view v-html="html">
						
					</view>
				</view> -->
			</view>

			<disclaimer></disclaimer>
		</view>
		<!-- 作者信息及产品推荐位 -->
		<view class="personal_info">
			<!-- 个人foot -->
			<view class="personal bgcf" v-show="showFoot == 1" style="padding:  12px 5px 12px 20px;">
				<view class="personal_content  flex">
					<view class="personal_logo flex" @tap="articleInfo(userId)">
						<view class="personal_img flex">
							<image :src="footlogo" mode=""></image>
						</view>
						<view class="personal_text flex">
							<view>{{footnickname}}</view>
							<text>{{footcompany}}&nbsp;{{footposition}}</text>
						</view>
					</view>
					<!-- 	<view class="personal_add bgcf" v-show="!pre">
						<view v-if="showFoot == 0" @tap="adds(3)">+添加该模块</view>
						<view v-else @tap="adds(4)">编辑</view>
					</view> -->
					<view class="personal_add_pre bgcf">
						<a :href="'tel:'+phone"><image src="../../../static/img/phone.png" v-show="showPhone == 1" mode="aspectFit"></image></a>
						<image src="../../../static/img/wechat.png" v-show="showWechat == 1" mode="aspectFit"></image>
					</view>
				</view>
				<view class="personal_tell">
					<text>{{userLife}}</text>
				</view>
			</view>
			<view class="personal bgcf" v-show="publishType != 1">
				<view class="personal_contents " v-show="!comments">
					<view class="personal_logo flex">
						<view class="personal_left flex">
							<view class="personal_user">
								<image :src="commnetLogo" mode=""></image>
							</view>
							<view class="personal_name flex">
								<view class="user_view flex">
									<text>{{commentName}}</text>发表了看法
								</view>
								<view class="user_date">
									{{commentTime}}
								</view>
							</view>
						</view>
						<view class="personal_right flex">
							<view class="good flex" @tap="likes()">
								<image src="../../../static/img/good.png" mode="aspectFit"></image>
								{{good}}
							</view>
							<view class="msg flex" @tap="showCommentInput = !showCommentInput">
								<image src="../../../static/img/message.png" mode="aspectFit"></image>
								{{msg}}
							</view>
						</view>
					</view>

					<view class="personal_text">
						<text>{{commentContent}}</text>
					</view>

					<view class="personal_other_content" v-show="msg>0">
						<view class="comment_input" v-show="showCommentInput">
							<input type="text" value="" v-model="conment_input" @blur="inputVal" />
						</view>
						<view class="" v-for="(item,index) in commentList" :key="index">
							<view>
								<view>{{item.nickname}}:</view>
								<text>{{item.comment}}</text>
							</view>
							<!-- <view>
								<view>王国单单：</view>
								<text>非常同意这个说法，但是具体怎么操作常同意这个说法，但是具体怎么操作</text>
							</view>
							<view>
								<view>王国单：</view>
								<text>非常同意这个说法，但是具体怎么操作</text>
							</view> -->
						</view>

					</view>
				</view>
			</view>


			<!-- 产品案例 -->
			<view class="product" v-show="productShow ==1">
				<view class="user_product flex">
					<text>{{footnickname}}为您推荐</text>
					<view class="product_detaile bgcf flex">
						<view class="product_img">
							<image :src="productLogo" mode=""></image>
						</view>
						<view class="product_text">
							<view>{{productTitle}}</view>
							<text>{{fProductTitle}}</text>
							<!-- <view class="product_btn flex" @tap="go(1)" v-show="!pre">
								编辑
							</view> -->
							<view class="product_btn_look" @tap="getProduct(productId)">
								查看
							</view>
						</view>



					</view>
				</view>
			</view>

		</view>
		<!-- 用户不可见内容 -->
		<view class="mall">
			<image src="../../../static/img/mall.png" mode="aspectFit"></image>
		</view>

		<view class="suspension flex" v-show="showAsk ==1">
			<!-- <view class="s_edit" v-show="!pre">
				<text  @tap="go(0)"  v-show="showAsk==0">编辑</text>
				<text  @tap="go(1)"  v-show="showAsk==1">编辑</text>
			</view> -->
			<view class="s_logo flex logo_active">
				<image :src="askSrc" mode=""></image>
			</view>
			<view class="s_ask ask_active">
				<text>问一问</text>
			</view>
		</view>
	</view>
</template>

<script>
	import parser from "@/components/jyf-parser/jyf-parser";
	import disclaimer from '@/components/disclaimer.vue'
	import personal from '@/components/personal.vue'
	import product from '@/components/product.vue'
	import suspension from '@/components/suspension.vue'
	import imgs from '@/static/img/user.jpeg'
	import articleServer from '@/api/article.js'
	import commentServer from '@/api/comment.js'
	import WXServer from '@/api/uploadFile.js'

	export default {
		data() {
			return {
				titles: '发布原创文章',
				html: '',
				name: '', //转载文章作者
				// title: '', //转载文章标题
				textArr: [], //注释数组
				showPhone: Number / String,
				showWechat: Number / String,
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
				publishType: '',
				footlogo: '', //头部展示位头像
				footposition: '职位', //头部展示位职位
				footcompany: '公司', //头部展示位公司
				footrecommend: '分享好文', //头部展示位推荐
				footnickname: '昵称',
				userLife: '', //个人简介
				good: 0, //点赞数
				msg: 0, //评论数
				comments: true,
				commentContent: '',
				commentName: '',
				commentTime: '',
				commnetLogo: '',
				modelShow: false,
				askSrc: '', //问一问头像
				showAsk: '', //是否显示问一问头像
				productTitle: '', //产品主标题
				fProductTitle: '', //副标题
				productLogo: '', //产品logo
				productShow: '',
				userId: '',
				conment_input: '', //评论内容
				showCommentInput: false, //是否显示评论输入框
				commentList: [],
				productId: '',
				productType: '', //产品类型
				productHref: '',
				current_user: '', //访客id
				lastUserId: '', //上个访客id
				cover: '',
				phone: '',
				lazy: true,
				cache: true,
				noteslist:Boolean,
			};
		},
		onLoad() {
			// uni.setStorage({
			// 	key:'query',
			// 	 data:'http://asset.go-tech.cn/h5/#/pages/article/share/share?shareId=276&userId=12'//&from=singlemessage
			// })


			try {
				const query = uni.getStorageSync('query')
				console.log(query)
				if (query) {
					const num1 = query.indexOf("shareId=")
					const numUser = query.indexOf("userId=")
					const num = query.indexOf('&')
					const _num = query.indexOf('from')
					if (_num == -1) {
						if (numUser == -1) {
							this.id = query.substring(num1 + 8)
							this.getAll(this.id)
						} else {
							this.id = query.substring(num1 + 8, num)
							this.lastUserId = query.substring(numUser + 7)
							this.getAll(this.id)
							console.log(this.lastUserId)
						}


					} else {
						if (numUser == -1) {
							this.id = query.substring(num1 + 8, num)
							this.getAll(this.id)
						} else {
							this.id = query.substring(num1 + 8, num)
							this.lastUserId = query.substring(numUser + 7, _num - 1)
							this.getAll(this.id)
						}

					}
					// uni.removeStorageSync('query')
				}
			} catch (e) {

			};
			
		},
		methods: {

			share() {
				var wx = require('jweixin-module')
				WXServer.getWX({
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							wx.config({
								debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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
							that.id + '&userId%3d' + that.current_user, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: that.cover, // 分享图标
						success: function(res) {
							// 设置成功

						}
					})
					jweixin.updateAppMessageShareData({
						title: that.content_title, // 分享标题
						desc: '', // 分享描述
						link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fasset.go-tech.cn%2fh5%2f%23%2fpages%2farticle%2fshare%2fshare%3fshareId%3d' +
							that.id + '&userId%3d' + that.current_user, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: that.cover, // 分享图标
						success: function() {
							// 设置成功

						},
					})
				});
			},

			getallUser(id, user) {

				articleServer.getArticleUser({
					id: id,
					repostUser: user,
					success: res => {
						uni.hideLoading()
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {

							// this.getStatistics()
							//文章作者内容部分
							// const reprint = res.data.result.article
							// const head = res.data.result.artUser
							// const product = res.data.result.artProduct;
							// if (reprint.publishType == 1) {

							// 	this.publishType = reprint.publishType;
							// 	if (reprint.showFoot == 1) {
							// 		this.showFoot = reprint.showFoot
							// 		// console.log(this.showFoot)
							// 		this.footlogo = head.profilePhoto;
							// 		this.footposition = head.position;
							// 		this.footcompany = head.company;
							// 		this.footrecommend = head.recommend;
							// 		this.footnickname = head.nickname;
							// 		this.userLife = head.introduction
							// 		this.showPhone = reprint.showPhone
							// 		this.showWechat = reprint.showWechat
							// 		this.html = reprint.content;
							// 		console.log(this.html)
							// 	}
							// } else {
							// 	this.publishType = reprint.publishType;
							// 	this.html = JSON.parse(reprint.content);
							// 	this.textArr.length = this.html.length;
							// 	this.textArr = res.data.result.annotates;
							// 	console.log(this.textArr)

							// 	if (reprint.showComment == 1) {
							// 		this.comments = false;
							// 		this.commentContent = reprint.comment
							// 		this.commentName = head.nickname
							// 		this.commentTime = reprint.commentTime
							// 		this.commnetLogo = head.profilePhoto

							// 	}
							// }
							// this.good = res.data.result.likeCounts
							// this.name = reprint.author;
							// this.content_title = reprint.title;
							// this.userId = head.id
							// this.id = reprint.id;
							// this.current_user = res.data.result.current_user
							// this.cover = reprint.cover
							// this.phone = head.phone
							// // this.sourceUrl = reprint.article.sourceUrl
							// if (reprint.showHead == 1) {
							// 	this.showHead = reprint.showHead
							// 	this.headlogo = head.profilePhoto;
							// 	this.headposition = head.position;
							// 	this.headcompany = head.company;

							// 	this.headrecommend = reprint.recommend;
							// 	this.headnickname = head.nickname
							// }

							// if (res.data.result.artProduct != null) {
							// 	this.productTitle = product.title
							// 	this.fProductTitle = product.subtitle
							// 	this.productLogo = product.cover
							// 	this.productId = product.id
							// 	this.productType = product.showType
							// 	this.productHref = product.url
							// 	this.productShow = 1
							// } else {
							// 	this.productShow = 0
							// }
							// if (head.autoReply == 1) {
							// 	this.askSrc = head.profilePhoto;
							// 	console.log(this.askSrc)
							// 	this.showAsk = head.autoReply
							// }


						}
					},
					fail: err => {
						uni.hideLoading()
						console.log(err)
					},
					complete: res => {
						uni.hideLoading()
						console.log(res)
					}
				})
			},
			getAll(id) {
				uni.showLoading({
					mask: true,
					title: '加载中'
				})

				articleServer.getArticle({
					id: id,
					success: res => {
							uni.hideLoading()
						
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {

							// this.getStatistics()
							//文章作者内容部分
							var reprint = res.data.result.article
							var head = res.data.result.artUser
							var product = res.data.result.artProduct;
						
								this.publishType = reprint.publishType
								if (reprint.publishType == 1) {


									this.html = reprint.content
									if (reprint.showFoot == 1) {
										this.showFoot = reprint.showFoot
										// console.log(this.showFoot)
										this.footlogo = head.profilePhoto;
										this.footposition = head.position;
										this.footcompany = head.company;
										this.footrecommend = head.recommend;
										this.footnickname = head.nickname;
										this.userLife = head.introduction
										this.showPhone = reprint.showPhone
										this.showWechat = reprint.showWechat

									}
								} else {
									this.publishType = reprint.publishType;
									
									if(res.data.result.annotates != undefined){
										this.html = JSON.parse(reprint.content)
										
										console.log(this.html) 
										this.textArr.length = res.data.result.annotates.length;
										if(res.data.result.annotates.length > 0){
											this.textArr = res.data.result.annotates;
										}
										console.log(this.textArr)
										this.noteslist = true
									}else{
										this.html = JSON.parse(reprint.content);
										this.noteslist = false
									}
									
									if (reprint.showComment == 1) {
										this.comments = false;
										this.commentContent = reprint.comment
										this.commentName = head.nickname
										this.commentTime = reprint.commentTime
										this.commnetLogo = head.profilePhoto

									}
								}
								this.good = res.data.result.likeCounts
								this.name = reprint.author;
								this.content_title = reprint.title;
								this.userId = head.id
								this.id = reprint.id;
								this.current_user = res.data.result.current_user
								this.cover = reprint.cover
								this.phone = head.phone
								// this.sourceUrl = reprint.article.sourceUrl
								if (reprint.showHead == 1) {
									this.showHead = reprint.showHead
									this.headlogo = head.profilePhoto;
									this.headposition = head.position;
									this.headcompany = head.company;

									this.headrecommend = reprint.recommend;
									this.headnickname = head.nickname
								}

								if (res.data.result.artProduct != null) {
									this.productTitle = product.title
									this.fProductTitle = product.subtitle
									this.productLogo = product.cover
									this.productId = product.id
									this.productType = product.showType
									this.productHref = product.url

									this.productShow = 1
								} else {
									this.productShow = 0
								}
								if (head.autoReply == 1) {
									this.askSrc = head.profilePhoto;
									console.log(this.askSrc)
									this.showAsk = head.autoReply
								}
								if (res.data.result.current_user != head.id) {
									this.getallUser(this.id, this.lastUserId)

								}
								this.share()
								this.getConmentLists(this.id)
						
							
						}
					
					},
					fail: err => {
						uni.hideLoading()
						console.log(err)
					},
					complete: res => {
						uni.hideLoading()
						console.log(res)
					}
				})
			},

			getConmentLists(id) {
				commentServer.getConmentList({
					articleId: id,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.msg = res.data.artComments.length;
							this.commentList = res.data.artComments
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

			isussConmnets() {
				commentServer.issueConment({
					articleId: this.id,
					comment: this.conment_input,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.getConmentLists(this.id)
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
			parse(res) {
				console.log("parse finish", res);
			},
			error(res) {
				console.error(res);
			},
			likes() {
				commentServer.getLike({
					articleId: this.id,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.good = res.data.likeCounts
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
			inputVal(e) {
				console.log(e.detail.value)
				if (e.detail.value == '') {
					this.showCommentInput = false;
				} else {
					this.showCommentInput = false;
					this.conment_input = e.detail.value
					this.isussConmnets()
				}

			},
			articleInfo(id) {
				console.log(id)
				this.$router.push({
					name: 'shareArticleInfo',
					params: {
						id: id
					}
				})
				// uni.navigateTo({
				// 	url:'./shareArticleInfo?id='+id
				// })
			},
			getProduct(id) {
				if (this.productType == '文章') {
					this.$router.push({
						name: 'shareProduct',
						params: {
							id: id
						},

					})
				} else {
					this.$router.push({
						name: 'out',
						params: {
							url: this.productHref
						},

					})
				}

			}

		},
		components: {
			parser,
			disclaimer,
			personal,
			product,
			suspension
		}
	}
</script>

<style lang="scss">
	
	.displaybit {
		max-width: 100%;

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
			.article{
				width: 100%;
				.article_contents{
					width: 100%;
					
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

				.personal_content {
					margin: 12px 5px 12px 20px;
					margin-bottom: 24px;
					border-radius: 3px;
					justify-content: space-between;
					align-content: center;
					align-items: center;

					.personal_logo {
						justify-content: space-between;
						align-content: center;
						align-items: center;

						.personal_img {
							margin-right: 8px;

							image {
								width: 52px;
								height: 52px;
								border-radius: 50%;
							}
						}

						.personal_text {
							flex-direction: column;

							view {
								font-size: $size18;
								color: $color55;
								font-weight: 550;
								margin-bottom: 5px;
							}

							text {
								font-size: 0.65rem;
								color: $color88;
							}
						}
					}

					.personal_add {
						border: 1px solid #dddddd;
						padding: 5px 8px;
						font-size: 0.65rem;
						color: $color55;

					}

					.personal_add_pre {
						// padding: 5px 8px;
						width: 43%;
						font-size: 0.65rem;
						color: $color55;

						image {
							width: 26px;
							height: 26px;
							margin-right: 10px;
						}
					}
				}

				.personal_contents {
					padding: 12px 5px 12px 20px;

					.personal_logo {
						justify-content: space-between;
						align-content: center;
						align-items: center;
						margin-bottom: 18px;

						.personal_left {
							justify-content: space-between;

							.personal_user {
								image {
									width: 40px;
									height: 40px;
									border-radius: 50%;
								}
							}

							.personal_name {
								flex-direction: column;

								.user_view {
									margin-left: 10px;
									font-size: $size14;
									color: $color55;
									font-weight: 550;

									text {
										margin-right: 5px;
									}
								}

								.user_date {
									color: $color88;
									transform: scale(0.8);
								}
							}
						}

						.personal_right {

							color: $color88;
							align-content: flex-start;
							align-items: flex-start;

							.good {
								align-content: center;
								align-items: center;
								margin-right: 5px;

								image {
									width: 12px;
									height: 15px;
									margin-right: 5px;
								}
							}

							.msg {
								align-content: center;
								align-items: center;

								image {
									width: 14px;
									height: 12px;
									margin-right: 5px;
								}
							}
						}
					}

					.personal_text {
						margin-bottom: 11px;

						text {
							font-size: $size14;
							color: $color55;
							line-height: 20px;
						}
					}

					.personal_other_content {
						background: #f0f0f0;
						border-radius: 4px;

						padding: 11px 16px 13px;

						.comment_input {
							input {
								border: 1px solid #666666;
								padding: 2px;
								border-radius: 4px;
							}
						}

						view {
							view {
								display: inline-block;
								margin-right: 8px;
								color: #2e7ff1;
								font-size: $size14;

							}

							text {
								font-size: $size14;
								color: #3a3a3a;
								font-weight: 200;
							}
						}
					}
				}


				.personal_tell {
					text {
						font-size: 0.65rem;
						color: $color88;
					}
				}
			}
		}

		.product {
			.user_product {
				margin-bottom: 30px;
				flex-direction: column;

				>text {
					font-size: $size14;
					color: $color88;
					margin-bottom: 10px;
				}

				.product_detaile {
					border-radius: 5px;
					padding: 16px 24px 15px 25px;

					.product_img {
						width: 64px;
						height: 64px;
						margin-right: 10px;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.product_text {
						flex: 1;

						view {
							font-size: $size14;
							color: $color55;
							font-weight: 550;
							line-height: 20px;
						}

						text {
							display: inline-block;
							font-size: 0.6rem;
							color: $color55;

							line-height: 18px;
						}

						.product_btn {
							text-align: center;
							justify-content: center;
							align-items: center;
							align-content: center;
							width: 3.4rem;
							padding: 1px 0px 1px 0px;
							border: 1px solid #d3d3d3;
							background: #FFFFFF;
							font-size: 0.6rem;
							border-radius: 3px;
						}

						.product_btn_look {
							text-align: center;
							width: 59px;
							padding: 1px 0px 1px 0px;
							border: 1px solid #d3d3d3;
							background: #2E7FF1;
							font-size: 0.6rem;
							border-radius: 3px;
							color: #FFFFFF;
						}
					}
				}
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

		.suspension {
			z-index: 1;
			width: 55px;
			position: fixed;
			right: 4px;
			top: 40%;
			flex-direction: column;
			justify-content: center;
			align-content: center;

			.s_edit {
				border: 1px solid #dddddd;
				padding: 4px 4px;
				line-height: 17px;
				font-size: 0.65rem;
				color: $color55;
				margin-bottom: 5px;
				text-align: center;
			}

			.s_logo {
				justify-content: center;
				align-content: center;
				align-items: center;
				border-radius: 50%;

				image {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					border: 1px solid #888888;
				}
			}

			.s_ask {
				width: 42px;
				background-color: #888888;
				color: #FFFFFF;
				padding: 2px 2px;
				position: relative;
				top: -8px;
				z-index: 2;
				text-align: center;
				margin: 0 auto;

				text {
					display: inline-block;
					font-size: 12px;
					transform: scale(0.8);
				}
			}

			.ask_active {
				background: #3C84EF;
			}

			.logo_active {
				border: 1px solid #3C84EF;
			}
		}
	}

	.set_notes {
		width: 100%;
		padding: 13px 17px 13px 19px;
		background-color: #eeeeee;
		position: relative;

		view {
			width: 0px;
			height: 0px;
			border-width: 8px;
			border-style: solid;
			border-color: transparent transparent #eeeeee transparent;
			position: absolute;
			top: -16px;
			left: 5%;
		}
	}
</style>
