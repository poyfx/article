<template>
	<view class="user">
		<!-- <titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<view class="user_content">
			<view class="user_group bgcf">
				<view class="list">
					<text>称呼</text>
					<view><input type="text" :placeholder="placeholder.nicknamep" v-model="nickname" /></view>
				</view>
				<view class="list">
					<text>手机</text>
					<view> <input type="text" :placeholder="placeholder.phonep" v-model="phone" /></view>
				</view>
				<view class="list">
					<text>微信</text>
					<view> <input type="text" :placeholder="placeholder.wechatp" v-model="wechat" /></view>
				</view>
				<view class="list">
					<text>公司</text>
					<view> <input type="text" :placeholder="placeholder.companyp" v-model="company" /></view>
				</view>
				<view class="list">
					<text>职位</text>
					<view> <input type="text" :placeholder="placeholder.positionp" v-model="position" /></view>
				</view>
				<view class="user_info flex">
					<text>个人简介</text>
					<textarea :placeholder="placeholder.userLifep" v-model="userLife" />
					</view>
			</view>
			
			<view class="user_btn">
				<button type="primary" @tap="go">提交信息</button>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import titles from '../../../components/title.vue'
	import userSevers from '@/api/get_wx_login.js'
	import uploadfile from '@/api/uploadFile.js'
	export default {
		data() {
			return {
				titles: "修改个人资料",
				
				nickname:'',//称呼
				phone:'',//手机
				wechat:'',//微信
				company:'',//公司
				position:'',//职位
				industry:'',//行业
				userLife:'',
				placeholder:{
					nicknamep:'',//称呼
					phone:'',//手机
					wechat:'',//微信
					company:'',//公司
					position:'',//职位
					industry:'',//行业
					userLife:'',
				},
			
				
			};
		},
		onLoad() {
			console.log(this.$route.params.nickname)
			if(this.$route.params.nickname == null ||  this.$route.params.nickname == undefined || this.$route.params.nickname == ''){
				this.placeholder.nicknamep ='请输入您的称呼';
			}else{
				this.nickname = this.$route.params.nickname
			}
			
			if(this.$route.params.phone == null ||  this.$route.params.phone == undefined || this.$route.params.phone == ''){
				this.placeholder.phonep ='请输入您的电话';
			}else{
				this.phone = this.$route.params.phone
			}
			if(this.$route.params.wechat == null ||  this.$route.params.wechat == undefined || this.$route.params.wechat == ''){
				this.placeholder.wechatp ='请输入您的微信号码';
			}else{
				this.wechat = this.$route.params.wechat
			}
			if(this.$route.params.company == null ||  this.$route.params.company == undefined || this.$route.params.company == ''){
				this.placeholder.companyp ='请输入您的公司';
			}else{
				this.company = this.$route.params.company
			}
			if(this.$route.params.position == null ||  this.$route.params.position == undefined || this.$route.params.position == ''){
				this.placeholder.positionp ='请输入您的职位';
			}else{
				this.position = this.$route.params.position
			}
			console.log(this.$route.params.userLife)
			if(this.$route.params.userLife == null ||  this.$route.params.userLife == undefined || this.$route.params.userLife == ''){
				this.placeholder.userLifep ='请输入您的个人简介';
			}else{
				this.userLife = this.$route.params.userLife
			}
			
		},
		methods:{
			
			go(){
				const user={};
				user.nickname = this.nickname;
				user.phone = this.phone;
				user.wechat = this.wechat;
				user.company = this.company;
				user.userLife = this.userLife;
				user.position = this.position;
				uni.setStorage({
					key:'userinfo',
					data:user
				})
				// uni.redirectTo({
				// 	url: '../user?nickname='+this.nickname + '&phone=' + this.phone + '&wechat=' +this.wechat+'&company='+this.company+'&userLife='+this.userLife + '&position=' + this.position
				// });
				this.$router.push({
					name:"user",
					params:{
						set:1
					}
				})
			},
		},
		components: {
			titles,
		}
	}
</script>

<style lang="scss">
	.user {
		.user_content {
			.user_group {
				padding: 0 7.2% 0 7.5%;

				.list_logo {
					display: flex;
					justify-content: space-between;
					align-content: center;
					align-items: center;
					padding: 10px 0 10px;
					border-bottom: $borderE5;
					text{
						color: $color88;
						font-size: $size14;
					}
					.list_img {
						align-content: center;
						align-items: center;

						.user_logo {
							width: 52px;
							height: 52px;
							border-radius: 50%;
							margin-right: 5px;
						}

						.right {
							width: 6px;
							height: 11px;
						}
					
						
					}
				}

				.list {
					display: flex;
					justify-content: space-between;
					align-content: center;
					align-items: center;
					padding: 20px 0 20px;
					border-bottom: $borderE5;

					text {
						color: $color88;
						font-size: $size14;
					}
					.list_img{
						align-content: center;
						align-items: center;
						view{
							margin-right: 5px;
						}
						image{
							width: 6px;
							height: 11px;
						}
					}
					
				}
				.user_info{
					flex-direction: column;
					padding: 20px 0 20px;
					text{
						color: $color88;
						font-size: $size14;
					}
					textarea{
						width: 100%;
						min-height:48px ;
						max-height: 84px;
						font-size: $size16;
						color: $color55;
					}
				}
			}
		
			.user_btn{
				margin-bottom: 30px;
				button{
					width: 90%;
					box-shadow: $shadowbtn;
					color: $colorbtn;
					color: #FFFFFF;
					font-size: $size14;
					padding: 5px 0 6px;
				}
			}
		}
	}
	
</style>
