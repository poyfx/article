<template>
	<view class="userinfo">
		<!-- <titles :titles="titles" :isIcons='false' :color="true"></titles>
		<stitles :titles="stitles" :color="true"></stitles> -->

		<view class="userinfo_info bgcf flex">
			<view class="info_photo flex border-Bottom">
				<text>头像</text>
				<view class="flex">
					<image class="logo" :src="userlogo" mode=""></image>
					<image class="right" src="../../../static/img/right.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="info_photo flex border-Bottom">
				<text>称呼</text>
				<view>{{nickname}}</view>
			</view>
			<view class="info_photo flex " @tap="rote=!rote">
				<text>推荐语</text>
				<view class="flex">
					<picker @change="bindPickerChange" :value="index" :range="recommends">
						<view class="uni-input">{{headrecommend}}</view>
					</picker>
					<image class="read" src="../../../static/img/select.png" mode="aspectFit" :class="rote?'':'active'"></image>
				</view>

			</view>
		</view>

		<view class="userinfo_content bgcf">
			<view class="userinfo_list flex border-Bottom">
				<text>公司</text>
				<view>{{company}}</view>
			</view>
			<view class="userinfo_list flex border-Bottom">
				<text>职位</text>
				<view>{{position}}</view>
			</view>
			<view class="userinfo_list flex border-Bottom">
				<text>显示手机</text>
				<view>
					<switch :checked="phoneCheck" style="transform: scale(0.7);" @change="showphone" />
				</view>
			</view>
			<view class="userinfo_list flex border-Bottom" v-show="showPhone">
				<text>手机号</text>
				<view>{{phone}}</view>
			</view>
			<view class="userinfo_list flex border-Bottom">
				<text>显示微信</text>
				<view>
					<switch :checked="WXCheck" style="transform: scale(0.7);" @change="WX" />
				</view>
			</view>
			<view class="userinfo_list flex" v-show="showWX">
				<text>微信号</text>
				<view>{{wechat}}</view>
			</view>
		</view>

		<view class="userinfo_synopsis bgcf flex" v-show="showUserLife">
			<text>个人简介</text>
			<textarea maxlength="200" placeholder="填写个人简介" v-model="setuserLife" />
			</view>
		<view class="userinfo_btn" v-show="start" @tap="shartUp(1)">
			<button class="start">确认并启动</button>
		</view>
		<view class="userinfo_btn" v-show="!start">
			<button class="start" @tap="shartUp(1)">启动该模块</button>
			<button class="delete" @tap="shartUp(0)">删除该模块</button>
		</view>
		
		
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import stitles from '@/components/title2.vue'
	import articleServer from '@/api/article.js'
	import userSevers from '@/api/get_wx_login.js'
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				titles: '发布原创文章',
				stitles: '形象展示位',
				showPhone:false,
				showWX:false,
				phoneCheck:false,
				WXCheck:false,
				start:true,//是否启动
				id:'',//文章id
				index:0,
				showHead:'',//是否显示头部展示位
				headlogo:'',//头部展示位头像
				headposition:'',//头部展示位职位
				headcompany:'',//头部展示位公司
				headrecommend:'',//头部展示位推荐
				headnickname:'',//头部昵称
				showUserLife:Boolean,
				setuserLife:'',//个人简介
				type:'',//头部展示位还是其它展示位
				rote:true,
				url:'',//从哪个页面过来
				nickname:'',
				phone:'',
				wechat:'',
				company:'',
				position:'',
				userlogo:'',
				userLife:'',
				recommends:'',
			};
		},
		// computed:{
		// 	...mapState({
		// 		nickname:({user})=>user.nickname,
		// 		phone:({user})=>user.phone,
		// 		wechat:({user})=>user.wechat,
		// 		company:({user})=>user.company,
		// 		position:({user})=>user.position,
		// 		userlogo:({user})=>user.userlogo,
		// 		userLife:({user})=>user.userLife,
		// 		recommends:({user})=>user.recommends
		// 	})
		// },
		onLoad(option) {
			this.getUserInfo()
			this.id = option.id;
			this.type=option.type;
			this.setuserLife = this.userLife
			this.url = option.url;
			if(option.url == 'editingArticles'){
				this.titles = '发布转载文章'
			}else{
				this.titles = '发布原创文章'
			}
			if(this.type =='0'){
				this.start = true;
				this.showUserLife =false;
			}else if(this.type =='1'){
				this.start = false;
				this.showUserLife = true;
			}else if(this.type =='3'){
				this.start = true;
			}else{
				this.start = false;
				const foot = uni.getStorageSync('foot')
				try {
					console.log(foot)
					if (foot) {
						this.showphone = foot.showPhone == 1?true:false;
						this.showWX = foot.showWechat == 1?true:false;
						this.WXCheck = this.showWX;
						this.phoneCheck = this.showPhone
					}
				} catch (e) {
					//TODO handle the exception
				}
				
				
			}
			
			
		},
		methods:{
			getUserInfo(){
				userSevers.getUserInfo({
					success:res=>{
						console.log(res)
						const userinfo = res.data.artUser;
						this.nickname=userinfo.nickname;
						this.phone = userinfo.phone;
						this.wechat=userinfo.wechat;
						this.company=userinfo.company;
						this.position=userinfo.position;
						this.userlogo=userinfo.profilePhoto;
						this.userLife=userinfo.replyContent;
						this.recommends=res.data.recommends;
						this.headrecommend = this.recommends[this.index]
						this.setuserLife = userinfo.introduction
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					}
				})
			},
			bindPickerChange(e) {
				this.index = e.target.value
				
				this.headrecommend = this.recommends[this.index]
			},
			showphone(e){
				console.log(e.detail.value)
				this.showPhone = e.detail.value;
			},
			WX(e){
				console.log(e.detail.value)
				this.showWX = e.detail.value;
			},
			shartUp(show){
				const sPhone = this.showPhone?1:0;
				const sWechat = this.showWX?1:0;
				if(this.type =='0' || this.type =='1'){
					if(show == 1){
						articleServer.startUp({
							id:this.id,
							recommend:this.headrecommend,
							showPhone:sPhone,
							showWechat:sWechat,
							showHead:show,
							success: res => {
								console.log(res)
							
									if(res.statusCode == 200 && res.data.code==0){
										const userinfo = res.data.data.artUser.artUser;
										const article =res.data.data.article;
										const head = {}
										this.headlogo = userinfo.profilePhoto;
										this.headposition = userinfo.position;
										this.headcompany = userinfo.company;
										this.headnickname = userinfo.nickname
										this.headrecommend = article.recommend;
										this.showHead = article.showHead;
										head.headlogo = this.headlogo;
										head.headposition = this.headposition;
										head.headcompany = this.headcompany;
										head.headnickname = this.headnickname;
										head.headrecommend = this.headrecommend;
										head.showHead = this.showHead;
										if(this.url == 'editingArticles'){
											this.$router.push({'name':'editingArticles',
											})
										}else{
											this.$router.push({'name':'addDisplayBit',
											})
										}
										
											uni.setStorage({
												key : 'head',
												data:head
											})
										
									}else{
										uni.showToast({
											title:res.data.msg,
											icon:'none',
											duration:'bottom',
											duration:3000,
										})
									}
							},
							fail: err => {
								console.log(err)
							},
							complete: res => {
								console.log(res)
							}
						})
					}else{
						if(this.url == 'editingArticles'){
							this.$router.push({'name':'editingArticles',
							})
						}else{
							this.$router.push({'name':'addDisplayBit',
							})
						}
							uni.removeStorage({
								key : 'head'
							})
					}
					
				}else{
					if(show == 1){
						articleServer.footUp({
							id:this.id,
							recommend:this.headrecommend,
							showPhone:sPhone,
							showWechat:sWechat,
							introduction:this.setuserLife,
							showFoot:show,
							success: res => {
								console.log(res)
							
									if(res.statusCode == 200 && res.data.code==0){
										const userinfo = res.data.data.artUser.artUser;
										const article =res.data.data.article;
										const foots ={};
										this.headlogo = userinfo.profilePhoto;
										this.headposition = userinfo.position;
										this.headcompany = userinfo.company;
										this.headnickname = userinfo.nickname
										this.headrecommend = article.recommend;
										this.setuserLife = userinfo.introduction
										this.showFoot = article.showFoot;
										
										foots.showPhone = sPhone;
										foots.showWechat = sWechat;
										
										foots.headlogo = this.headlogo;
										foots.headposition = this.headposition;
										foots.headcompany = this.headcompany;
										foots.headnickname = this.headnickname;
										foots.headrecommend = this.headrecommend;
										foots.setuserLife = this.setuserLife;
										foots.showFoot = this.showFoot;
										
										console.log(foots)
										if(this.url == 'editingArticles'){
											this.$router.push({'name':'editingArticles',
											})
										}else{
											this.$router.push({'name':'addDisplayBit',
											})
										}
										//this.$router.push({'name':'addDisplayBit',
										// params:{
										// 	// showFoot:this.showFoot ,//是否显示头部展示位
										// 	// headlogo:this.headlogo,//头部展示位头像
										// 	// headposition:this.headposition,//头部展示位职位
										// 	// headcompany:this.headcompany,//头部展示位公司
										// 	// headrecommend:this.headrecommend,//头部展示位推荐
										// 	// headnickname:this.headnickname,
										// 	// setuserLife:this.setuserLife,
										// 	foot:1
										// },
										//})
										uni.setStorage({
											key : 'foot',
											data:foots
										})
											
										
									}else{
										uni.showToast({
											title:res.data.msg,
											icon:'none',
											duration:'bottom',
											duration:3000,
										})
									}
								
								
							},
							fail: err => {
								console.log(err)
							},
							complete: res => {
								console.log(res)
							}
						})
					}else{
						if(this.url == 'editingArticles'){
							this.$router.push({'name':'editingArticles',
							})
						}else{
							this.$router.push({'name':'addDisplayBit',
							})
						}
							uni.removeStorage({
								key : 'foot'
							})
					}
					
				}
			}
		},
		components: {
			titles,
			stitles,
		}
	}
</script>

<style lang="scss">
	.userinfo{
		.userinfo_info{
			padding: 0 27px 0px 28px ;
			margin-bottom: 12px;
			flex-direction: column;
			.info_photo{
				padding: 20px 0 17px;
				justify-content: space-between;
				align-content: center;
				align-items: center;
				text{
					color: $color88;
					font-size: $size14;
				}
				view{
					align-content: center;
					align-items: center;
					font-size: $size16;
					color: $color55;
					
					
				}
				.logo{
					width: 52px;
					height: 52px;
					border-radius: 50%;
					
				}
				.right{
					margin-left: 7px;
					width: 6px;
					height: 11px;
				}
				.read{
					width: 6px;
					height: 11px;
					margin-left: 6px;
				}
				.active{
					transform: rotate(90deg);
				}
			}
		}
		.userinfo_content{
			padding: 0 27px 0px 28px ;
			margin-bottom: 27px;
			.userinfo_list{
				padding: 20px 0 17px;
				justify-content: space-between;
				align-content: center;
				align-items: center;
				text{
					color: $color88;
					font-size: $size14;
				}
				view{
					align-content: center;
					align-items: center;
					font-size: $size16;
					color: $color55;
				}
			}
		}
		.userinfo_synopsis{
			padding: 0 27px 30px 28px ;
			margin-bottom: 37px;
			flex-direction: column;
			text{
				padding: 20px 0 18px;
				font-size: $size14;
				color: $color88;
			}
			textarea{
				width: 100%;
				height: 48px;
				color: $color55;
				font-size: $color55;
			}
		}
		.userinfo_btn{
			padding: 0 27px 0px 28px ;
			margin-bottom: 37px;
			button{
				width: 100%;
				font-size: $size14;
				padding: 6px 0 5px;
				font-weight: 550;
				border-radius: 5px;
			}
			.start{
				background-color:#3C84EF ;
				color: #FFFFFF;
				margin-bottom: 10px;
			}
			.delete{
				background-color: #FFFFFF;
				color: #EA4141;
			}
		}
	}
</style>
