<template>
	<view class="">
		<view class="displaybit" v-show='askUrl != "editingArticles"'>

			<view class="authorinfo_article bgcf">
				<view class="authorinfo flex" v-show="showHead == 1">
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
					<!-- <view class="authorinfo_add bgcf">
						<view v-show="showHead == 0" @tap="addinfo(0)">+添加该模块</view>
						<view v-show="showHead == 1" @tap="addinfo(1)">编辑</view>
					</view> -->
				</view>
				<view class="content_title">
					{{title}}
				</view>
				<!-- 正文内容 -->
				<parser :html="html"></parser>


				<disclaimer></disclaimer>
			</view>
			<!-- 作者信息及产品推荐位 -->
			<view class="personal_info">
				<view class="personal" v-show="showFoot == 1">
					<personal @addinfo="addinfo" :showFoot="showFoot" :footlogo="footlogo" :footposition="footposition" :footcompany='footcompany'
					 :footrecommend="footrecommend" :footnickname="footnickname" :userLife="userLife"></personal>
				</view>
				<!-- 产品案例 -->
				<view class="product" v-show="!productShow">
					<product :id="id" :productTitle="productTitle" :fProductTitle="fProductTitle" :productLogo="productLogo"
					 :productShow="productShow" :footnickname='footnickname'></product>
				</view>

			</view>
			<!-- 用户不可见内容 -->
			<view class="mall">
				<image src="../../static/img/mall.png" mode="aspectFit"></image>
			</view>
			<suspension :askSrc="askSrc" :showAsk="showAsk" :pre='true'></suspension>
		</view>



		<view class="displaybit" v-show='askUrl == "editingArticles"'>
			<view class="authorinfo_article bgcf">
				<view class="authorinfo flex" v-show="showHead == 1">
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
					<!-- <view class="authorinfo_add bgcf">
						<view v-show="showHead == 0" @tap="addinfo(0)">+添加该模块</view>
						<view v-show="showHead == 1" @tap="addinfo(1)">编辑</view>
					</view> -->
				</view>
				<!-- 正文 -->
				<view class="edits_content bgcf">
					<view class="edits_title">
						<text>{{title}}</text>
					</view>
					<view class="edits_samll_title">
						<text>本文由公众号“{{name}}”发布</text>
					</view>
					<view class="set" ref="set" v-for="(item,index) in html" :key="index">
						<!-- <view class="notes" @tap="addNotes(index)">
							+添加注释
						</view>
						<view class="close" @tap="deletes(index)">
							×
						</view> -->
						<!-- {{item}} -->
						<parser :html="item"></parser>
						<!-- <view class="edits_img ">
							<image src="../../../../static/img/photo1.png" mode="aspectFit"></image>
						</view> -->
						<!-- 注释 -->
						<view class="set_notes" v-show="textArr[index]">
							<view></view>
							<text>{{textArr[index]}}</text>
						</view>
					</view>
				</view>

				<disclaimer name="文章助手"></disclaimer>
			</view>
			<!-- 作者信息及产品推荐位 -->
			<view class="personal_info">
				<view class="personal" v-show="comments">
					<personal></personal>
					<view class="personal_content">
						<view class="personal_logo flex">
							<view class="personal_left flex">
								<view class="personal_user">
									<image :src="commnetLogo" mode="aspectFit"></image>
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
								<view class="good">
									<image src="../../../static/img/good.png" mode="aspectFit"></image>
									{{good}}
								</view>
								<view class="msg">
									<image src="../../../static/img/message.png" mode="aspectFit"></image>
									{{msg}}
								</view>
							</view>
						</view>

						<view class="personal_text">
							<text>{{commentContent}}</text>
						</view>

						<!-- <view class="personal_other_content">
							<view>
								<view>张三：</view>
								<text>说的对</text>
							</view>
							<view>
								<view>王国单单：</view>
								<text>非常同意这个说法，但是具体怎么操作常同意这个说法，但是具体怎么操作</text>
							</view>
							<view>
								<view>王国单：</view>
								<text>非常同意这个说法，但是具体怎么操作</text>
							</view>
						</view> -->
					</view>

				</view>

				<view class="product" v-show="!productShow">
					<product :id="id" :productTitle="productTitle" :fProductTitle="fProductTitle" :productLogo="productLogo"
					 :productShow="productShow" :footnickname='footnickname' :url="askUrl" :pre="true"></product>
				</view>

			</view>
			<!-- 用户不可见内容 -->
			<view class="mall">
				<image src="../../../static/img/mall.png" mode="aspectFit"></image>
			</view>

			<!-- 悬浮 -->
			<suspension :askSrc="askSrc" :showAsk="showAsk" :url='askUrl' :pre='true'></suspension>

		</view>
	</view>

</template>

<script>
	import titles from '@/components/title.vue'
	import parser from "@/components/jyf-parser/jyf-parser";
	import disclaimer from '@/components/disclaimer.vue'
	import personal from '@/components/personal.vue'
	import product from '@/components/product.vue'
	import suspension from '@/components/suspension.vue'
	import articleServer from '@/api/article.js'
	export default {
		data() {
			return {
				titles: '发布转载文章',
				richs: '',
				id: '', //文章id
				text: '', //注释
				area: false, //显示注释框
				sets: 'set',
				showNotes: false, //显示注释内容
				Xclose: true,
				good: 3, //点赞数
				msg: 3, //评论数
				comments: false,
				commentContent: '',
				commentName: '',
				commentTime: '',
				commnetLogo: '',
				name: '', //原创作者
				title: '', //文章标题
				html: '',
				textArr: [], //注释数组
				notesIndx: '', //注释下标
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
				askUrl: 'editingArticles',
				sourceUrl: '', //转载链接
			};
		},
		onLoad(option) {
			this.askUrl = option.url;
			this.getAll(option.id)
		},
		methods: {
			getAll(id){
				articleServer.getArticle({
					id:id,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
						//文章作者内容部分
						const reprint = res.data.result.article
						const head = res.data.result.artUser
						const product = res.data.result.artProduct;
							this.name = reprint.author;
							this.title = reprint.title;
							this.html =JSON.parse( reprint.content) ;
							this.textArr = [];
							this.textArr.length = this.html.length;
							this.id =  reprint.id;
							// this.sourceUrl = reprint.article.sourceUrl
							if(reprint.showHead == 1){
								this.showHead = reprint.showHead
								this.headlogo = head.profilePhoto;
								this.headposition = head.position;
								this.headcompany = head.company;
								console.log(this.headcompany)
								this.headrecommend = reprint.recommend;
								this.headnickname = head.nickname
							}
							if(this.askUrl == 'editingArticles'){
								if(reprint.showComment == 1){
									this.comments = false;
									this.commentContent = reprint.comment
									this.commentName= head.nickname
									this.commentTime= reprint.commentTime
									this.commnetLogo= head.profilePhoto
								}
							}else{
								if(reprint.showFoot == 1){
								 this.showFoot = reprint.showFoot
								// console.log(this.showFoot)
								this.footlogo = head.profilePhoto;
								this.footposition = head.position;
								this.footcompany = head.company;
								this.footrecommend = head.recommend;
								this.footnickname = head.nickname;
								this.userLife = head.introduction
							}
							}
							
							if(res.data.result.artProduct != null){
								this.productTitle = product.title
								this.fProductTitle = product.subtitle
								this.productLogo = product.cover
								this.productShow = false
							}else{
								this.productShow = true
							}
							if(head.autoReply == 1){
								this.askSrc = head.profilePhoto;
								console.log(this.askSrc)
								this.showAsk = head.autoReply
							}
						}
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					}
				})
			},
					
		},
		components: {
			titles,
			parser,
			disclaimer,
			personal,
			product,
			suspension
		}
	}
</script>

<style lang="scss">
	.set {
		// border: 1px solid #e2e2e2;
		padding: 5px 3px;
		margin: 20px 0 15px;
		position: relative;

		.notes {
			position: absolute;
			top: -23px;
			left: -1px;
			background-color: #626262;
			color: #FFFFFF;
			font-size: 0.65rem;
			padding: 2px 4px;
			text-align: center;
			border-radius: 3px 3px 0 0;
		}

		.close {
			position: absolute;
			top: -23px;
			right: -1px;
			background-color: #626262;
			color: #FFFFFF;
			font-size: 1rem;
			line-height: 1rem;
			padding: 1px 6px;
			text-align: center;
			border-radius: 3px 3px 0 0;
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

	.notes_content {
		height: 100vh;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba($color: #000000, $alpha: 0.4);
		z-index: 9999;

		.notes_text {
			width: 100%;
			position: relative;
			top: 30%;
			left: 0;
			padding-bottom: 23px;
			background-color: #FFFFFF;

			.title {
				padding: 10px 0;
				text-align: center;

				text {
					color: #212832;
					font-size: $size16;
					font-weight: 550;
				}

				.close_text {
					width: 20px;
					position: absolute;
					right: 10px;
					top: 10px;
				}

			}

			.textarea {
				padding: 0 20px 12px;

				width: 100%;

				textarea {
					display: inline-block;
					box-sizing: border-box;
					width: 100%;
					background-color: #eeeeee;
					padding: 12px 16px;
				}
			}

			.text_btn {
				button {
					width: 80%;
					font-size: $size14;
					padding: 4px 0 3px;
				}
			}
		}
	}

	.displaybit {
		// padding-bottom: 48px;

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

							view {
								font-size: $size14;
								color: $color55;
								margin-right: 8px;
							}

							text {
								font-size: 0.65rem;
								color: $color55;
							}

						}

						>text {
							font-size: 0.65rem;
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

			.edits_content {
				// padding-bottom: 29px;

				.edits_title {
					line-height: 24px;
					margin-bottom: 10px;

					text {
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
						height: 150px;
					}
				}

				.edits_text {
					margin-bottom: 25px;
					font-size: 0.65rem;
					color: $color88;
				}
			}
		}

		.personal_info {
			margin: 24px 30px 34px 28px;

			.personal {
				margin-bottom: 20px;

				button {
					font-size: $size14;
					background-color: #3C84EF;
					padding: 4px 0 3px;
				}

				.personal_content {
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
								margin-right: 5px;

								image {
									width: 12px;
									height: 15px;
									margin-right: 5px;
								}
							}

							.msg {
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

			text {
				height: 100%;
				align-content: center;
				align-items: center;
				text-align: center;
				justify-content: center;
				font-weight: 550;
			}

			.look {
				height: 100%;
				align-content: center;
				align-items: center;
				text-align: center;
				justify-content: center;
				font-weight: 550;
				width: 40%;
				background-color: #FFFFFF;
				color: $color55;
				size: $size14;

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
			}
		}
	}
</style>
