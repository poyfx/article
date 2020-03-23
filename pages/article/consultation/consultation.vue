<template>
	<view class="consultation">
		<!-- 	<titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<stitles :titles="stitles" :color="true"></stitles>

		<view class="follow">
			<text>请关注公众号“文章助手”，新的留言将自动推送给您</text>
		</view>

		<view class="autoReply bgcf">
			<view class="switch flex border-Bottom">
				<text>自动回复</text>
				<view>
					<switch :checked="switchs" style="transform: scale(0.7);" @change="swit" />
				</view>
			</view>
			<view class="autoReply_content flex" v-show="switchs">
				<text>设置自动回复内容</text>
				<textarea placeholder="请输入自动回复内容" v-model="auto_content" />
				</view>
		</view>
		<view class="consultation_name bgcf">
			<view class="list flex border-Bottom">
				<text>头像</text>
				<image :src="userlogo" mode=""></image>
			</view>
			<view class="list flex">
				<text>称呼</text>
				<view>{{nickname}}</view>
			</view>
		</view>
		<view class="consultation_btn">
			<view class="use" v-show="used">
				<button @tap="sure(1)">确认并使用</button>
			</view>
			<view class="used" v-show="!used">
				<button class="confirm"  @tap="sure(1)">确认</button>
				<button class="detele"  @tap="sure(0)">删除该模块</button>
			</view>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import stitles from '@/components/title2.vue'
	import articleServer from '@/api/article.js'
	import userSevers from '@/api/get_wx_login.js'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				titles: '发布原创文章',
				stitles: '快速咨询',
				used:true,
				switchs:false,
				auto:'',
				auto_content:'',//自动回复内容
				url:'',//跳转来源
				nickname:'',
				userlogo:'',
			};
		},
		computed:{
			// ...mapState(['nickname','phone','wechat','company','position','industry','user_logo'])
			// ...mapState({
			// 	nickname:({user})=>user.nickname,
			// 	userlogo:({user})=>user.userlogo,
			// })
		},
		onLoad(option) {
			this.url = option.url;
			if(option.show == 1){
				this.used = false
			}else{
				this.used = true
			}
			this.getUserInfo()
		},
		methods:{
			getUserInfo(){
				userSevers.getUserInfo({
					success:res=>{
						console.log(res)
						const userinfo = res.data.artUser;
						this.nickname=userinfo.nickname;
						this.userlogo=userinfo.profilePhoto;
						if(userinfo.autoReply == 0){
							this.switchs = false
							this.auto = userinfo.autoReply
						}else{
							this.switchs = true
							this.auto_content = userinfo.replyContent
							this.auto = userinfo.autoReply
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
			swit(e){
				console.log(e)
				this.switchs = e.detail.value;
				if(this.switchs == true){
					this.auto =1
				}else{
					this.auto = 0
				}
			},
			sure(show){
				// this.used = false
				
				let lock = false;
				if(!lock){
					lock = true;
					if(show == 1){
						console.log('this.auto')
						articleServer.autoReply({
							auto_reply:this.auto,
							reply_content:this.auto_content,
							success: res => {
								console.log(res)
								lock = false;
								const ask = {};
								if (res.statusCode == 200 && res.data.code == 0) {
									ask.showask = show,
									ask.logo =	this.userlogo
									uni.setStorage({
										key : 'ask',
										data:ask
									});
									if(this.url == 'editingArticles'){
										this.$router.push({'name':'editingArticles'})
									}else{
										this.$router.push({'name':'addDisplayBit'})
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
					}else{
						console.log('000_____')
						uni.removeStorage({
							key : 'ask'
						})
						if(this.url == 'editingArticles'){
							this.$router.push({'name':'editingArticles'})
						}else{
							this.$router.push({'name':'addDisplayBit'})
						}
							
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
.consultation{
	.follow{
		padding: 12px 17px 12px 28px;
		margin-bottom: 10px;
		background-color:#FFF8D8 ;
		text{
			font-size: 0.65rem;
			color: $color55;
			line-height: 26px;
		}
	}
	.autoReply{
		padding: 0 27px 0px 28px;
		margin-bottom: 10px;
		.switch{
			padding: 15px 0 12px;
			justify-content: space-between;
			align-content: center;
			align-items: center;
			text{
				color: $color88;
				font-size: $size14;
			}
		}
		.autoReply_content{
			flex-direction: column;
			text{
				padding: 22px 0 19px;
				color: $color88;
				font-size: $size14;
			}
			textarea{
				height: 55px;
				font-size: $size16;
				color: $color55;
			}
		}
		
	}
	.consultation_name{
		padding: 0 27px 0px 28px;
		margin-bottom: 72px;
		.list{
			justify-content: space-between;
			align-content: center;
			align-items: center;
			padding: 22px 0 17px;
			text{
				font-size: $size14;
				color: $color88;
				
			}
			image{
				width: 52px;
				height: 52px;
				border-radius: 50%;
			}
			view{
				font-size: $size16;
				color: $color55;
				font-weight: 550;
			}
		}
	}
	.consultation_btn{
		padding-bottom: 30px;
		button{
			width:90%;
			font-size: $size14;
			padding: 6px 0 5px;
		}
		.use{
			button{
				color: #FFFFFF;
				background-color: $colorbtn;
				box-shadow: 0 2px 6px 0 #9DC4FF;
			}
		}
		.used{
			.confirm{
				
					color: #FFFFFF;
					background-color: $colorbtn;
					box-shadow: 0 2px 6px 0 #9DC4FF;
					margin-bottom: 10px;
			}
			.detele{
				
					color: #EA4141;
					box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.13);
				
			}
		}
	}
}
</style>
