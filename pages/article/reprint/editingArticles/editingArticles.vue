<template>
	<view class="displaybit">
		<!-- <titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<view class="header_save">
			<view class="header_title_white_save_fff flex">
				<view class="left_save" @tap="back">
					<uni-icons type="arrowleft" size="28"></uni-icons>
				</view>
				<view>编辑文章</view>
				<view class="right_savebt_next  flex">
					<view @tap="resetting">重置</view>
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
			<!-- <view class="authorinfo flex">
				<view class="authorinfo_logo flex">
					<view class="authorinfo_img flex">
						<image src="../../../../static/img/user.jpeg" mode="aspectFit"></image>
					</view>
					<view class="authorinfo_text flex">
						<view class="flex">
							<view>昵称</view>
							<text>公司及职位</text>
						</view>
						<text>分享好文</text>
					</view>
				</view>
				<view class="authorinfo_add bgcf">
					<view @tap="addinfo">+编辑</view>
				</view>
			</view> -->
			<!-- 正文 -->
			<view class="edits_content bgcf">
				<view class="edits_title">
					<text>{{title}}</text>
				</view>
				<view class="edits_samll_title">
					<text>本文由公众号“{{name}}”发布</text>
				</view>
				<view class="set" ref="set" v-for="(item,index) in html" :key="index">
					<view class="notes" @tap="addNotes(index)">
						+添加注释
					</view>
					<view class="close" @tap="deletes(index)">
						×
					</view>
					<!-- {{item}} -->
				<!-- 	<parser :html="item"></parser> -->
				<view v-html="item">
					
				</view>
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
			<view class="personal">
				<!-- <personal></personal> -->
				<button type="primary" @tap="comment(0)" v-show="comments">发表专属评论</button>
				<view class="personal_content" v-show="!comments">
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
							<view class="good" @tap="comment(1)">
								<!-- <image src="../../../../static/img/good.png" mode="aspectFit"></image> -->
								编辑
							</view>
							<!-- 	<view class="msg">
								<image src="../../../../static/img/message.png" mode="aspectFit"></image>
								{{msg}}
							</view> -->
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

			<view class="product">
				<product :id="id" :productTitle="productTitle" :fProductTitle="fProductTitle" :productLogo="productLogo"
				 :productShow="productShow" :footnickname='footnickname' :url="askUrl"></product>
			</view>

		</view>
		<!-- 用户不可见内容 -->
		<view class="mall">
			<image src="../../../../static/img/mall.png" mode="aspectFit"></image>
		</view>
		<view class="add_btn flex">
			<view class="flex look" @tap="previews(1)">
				<image src="../../../../static/img/preview.png" mode="aspectFit"></image>预览
			</view>
			<text class="flex save" @tap="saveAdd(2)">保存并转发</text>
		</view>
		<!-- 悬浮 -->
		<suspension :askSrc="askSrc" :showAsk="showAsk" :url='askUrl'></suspension>
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
		<view class="notes_content" v-show="area">
			<view class="notes_text">
				<view class="title">
					<text>添加注释</text>
					<view class="close_text" @tap="area=false">
						×
					</view>
				</view>
				<view class="textarea">
					<textarea v-model="text" placeholder="输入你的评论内容" />
					</view>
				
				<view class="text_btn">
					<button type="primary" @tap="set">确定</button>
				</view>
			</view>
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
	import WXServer from '@/api/uploadFile.js'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	
	export default {
		data() {
			return {
				titles: '发布转载文章',
				richs: '',
				id: '', //文章id
				text:'',//注释
				area:false,//显示注释框
				sets:'set',
				showNotes:false,//显示注释内容
				Xclose:true,
				good:3,//点赞数
				msg:3,//评论数
				comments:true,
				commentContent:'',
				commentName:'',
				commentTime:'',
				commnetLogo:'',
				name:'',//原创作者
				title:'',//文章标题
				html: '',
				textArr:[],//注释数组
				notesIndx:'',//注释下标
				showHead: '0', //是否显示头部展示位
				headlogo: '', //头部展示位头像
				headposition: '职位', //头部展示位职位
				headcompany: '公司', //头部展示位公司
				headrecommend: '分享好文', //头部展示位推荐
				headnickname: '昵称',
				footnickname: '',
				modelShow: false,
				askSrc: '', //问一问头像
				showAsk:'',//是否显示问一问头像
				productTitle: '', //产品主标题
				fProductTitle: '', //副标题
				productLogo: '', //产品logo
				productShow: '',
				askUrl:'editingArticles',
				sourceUrl:'',//转载链接
			};
		},
		onLoad() {
			this.share()
		var a = '';
		const drafts = uni.getStorageSync('drafts');
			if(drafts){
				 a = drafts.type;
				 this.id = drafts.id;
			}
			if(a == 'drafts'){
				this.getAll(this.id )
				
			}else{
				this.getReprint();
				this.getAsk();
				this.getHead();
				this.getProduct();
				this.getComment();
			}
			
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
						desc: '', // 分享描述
						link: 'http://wx.go-tech.cn/redirect.html?url=http%3a%2f%2fasset.go-tech.cn%2fh5%2f%23%2fpages%2farticle%2fshare%2fshare%3fshareId%3d' + that.id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
						imgUrl: 'http://api.asset.go-tech.cn/upload/article_parsing/2020-02-26/img_1853838384245573708.jpg', // 分享图标
						success: function() {
							// 设置成功
							that.modelShow =false
						},
					})
				});
			},
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
							this.html =JSON.parse(reprint.content) ;
							this.textArr = res.data.result.annotates;
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
							if(reprint.showComment == 1){
								this.comments = false;
								this.commentContent = reprint.comment
								this.commentName= head.nickname
								this.commentTime= reprint.commentTime
								this.commnetLogo= head.profilePhoto
							}
							if(res.data.result.artProduct != ''){
								this.productTitle = product.title
								this.fProductTitle = product.subtitle
								this.productLogo = product.cover
								this.footnickname = head.nickname
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

			getAsk() {
				const ask = uni.getStorageSync('ask')
				try {
					if (ask) {
						if (ask.showask == 1) {
							this.askSrc = ask.logo;
							this.showAsk  = ask.showask
						}
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			getProduct() {
				const products = uni.getStorageSync('products')
				try {
					console.log(products)
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
			getComment() {
				const comment = uni.getStorageSync('comment')
				try {
					if (comment) {
						this.comments = false;
						this.commentContent = comment.article.comment
						this.commentName= comment.artUser.nickname
						this.commentTime= comment.article.commentTime
						this.commnetLogo= comment.artUser.profilePhoto
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			
			getReprint() {
				const reprint = uni.getStorageSync('reprint')
				try {
					console.log(reprint)
					if (reprint) {
						this.name = reprint.art_public;
						this.title = reprint.title;
						this.html = reprint.content;
						this.textArr = [];
						this.textArr.length = this.html.length;
						this.id =  reprint.article.id;
						this.sourceUrl = reprint.article.sourceUrl
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			go() {
				this.$refs.child.go();
			},
			//保存
			save(text){
				var lock = false;
				var textHtml = JSON.stringify(this.html)
				if (!lock) {
					lock = true;
					articleServer.release({
						id:this.id,
						publish_type: '2',//类型1为原创2位转载
						title: this.title,
						cover: '',
						author: this.name,
						content:textHtml,
						annotates:this.textArr,
						success: res => {
							console.log(res)
							lock = false;
							if (res.statusCode == 200 && res.data.code == 0) {
								this.id = res.data.article_id;
								
								if(text == '1' ){
									uni.navigateTo({
										url:'../../preview/preview?id='+this.id+'&url='+'editingArticles'
									})
								}else{
									uni.showToast({
										title: '保存成功',
										duration: 3000,
									})
								}
							} else if(res.data.code == -10000){
								
								uni.navigateTo({
									url:'../../../login/login'
								})
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
			// 保存并转发
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
						annotates:this.textArr,
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
			//预览
			previews(num){
				this.save(num)
			},
			rich() {

			},
			//注释输入内容
			set(){
				if(this.text == ''){
					uni.showToast({
						title:'请输入内容',
						icon:'none',
						duration:3000,
					})
				}else{
					this.showNotes=true;
					this.area = false;
					this.textArr.splice(this.notesIndx,1,this.text)
				}
			},
			
			// 添加该模块
			addinfo(type) {
			
				uni.navigateTo({
					url: '../../userinfo/userinfo?id=' + this.id + "&type=" + type+'&url='+'editingArticles'
				})
			},
			//添加注释
			addNotes(index){
				this.text = '';
				this.area=true;
				this.notesIndx = index;
			},
			//重置
			resetting(){
				this.getReprint()
			},
			comment(shows){
				uni.navigateTo({
					url:'../../comment/comment?id='+this.id+'&show='+shows
				})
			},
			deletes(idx){
				this.html.splice(idx,1)
				this.textArr.splice(idx,1)
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
	.set {
		border: 1px solid #e2e2e2;
		padding: 5px 3px;
		margin: 40px 0 30px;
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
			border-color: transparent transparent #eeeeee transparent   ;
			position: absolute;
			top: -16px;
			left: 5%;
		}
	}
.notes_content{
	height:100vh ;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba($color: #000000, $alpha: 0.4);
	z-index: 9999;
	.notes_text{
		width: 100%;
		position: relative;
		top:30%;
		left: 0;
		padding-bottom:23px ;
		background-color: #FFFFFF;
		.title{
			padding: 10px 0;
			text-align: center;
			text{
				color: #212832;
				font-size: $size16;
				font-weight: 550;
			}
			.close_text{
				width: 20px;
				position: absolute;
				right: 10px;
				top: 10px;
			}
			
		}
		.textarea{
			padding: 0 20px 12px;
		
			width: 100%;
			textarea{
				display: inline-block;
				box-sizing: border-box;
				width: 100%;
				background-color: #eeeeee;
				padding: 12px 16px;
			}
		}
		.text_btn{
			button{
				width: 80%;
				font-size: $size14;
				padding: 4px 0 3px ;
			}
		}
	}
}

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
				.personal_content{
					.personal_logo{
						justify-content: space-between;
						align-content: center;
						align-items: center;
						margin-bottom: 18px;
						.personal_left{
							justify-content: space-between;
							.personal_user{
								image{
									width: 40px;
									height: 40px;
									border-radius: 50%;
								}
							}
							.personal_name{
								flex-direction: column;
								.user_view{
									margin-left: 10px;
									font-size: $size14;
									color: $color55;
									font-weight: 550;
									text{
										margin-right: 5px;
									}
								}
								.user_date{
									color: $color88;
									transform: scale(0.8);
								}
							}
						}
						.personal_right{
					
						color: $color88;
						align-content: flex-start;
						align-items: flex-start;
							.good{
								margin-right: 5px;
								padding:5px 12px;
								border: 1px solid #999999;
								image{
									width: 12px;
									height: 15px;
									margin-right: 5px;
								}
							}
							.msg{
								image{
									width: 14px;
									height: 12px;
									margin-right: 5px;
								}
							}
						}
					}
					.personal_text{
						margin-bottom: 11px;
						text{
							font-size: $size14;
							color: $color55;
							line-height: 20px;
						}
					}
					.personal_other_content{
						background: #f0f0f0;
						border-radius: 4px;
						
						padding: 11px 16px 13px;
						view{
							view{
								display: inline-block;
								margin-right: 8px;
								color:#2e7ff1;
								font-size:$size14;
								
							}
							text{
								font-size: $size14;
								color:#3a3a3a;
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
				image{
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
