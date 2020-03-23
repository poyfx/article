<template>
	<view class="user">
		<!-- <titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<view class="user_content">
			<view class="user_group bgcf">
				<view class="list_logo" @tap="setLogo">
					<text>头像</text>
					<view class="list_img flex">
						<image class="user_logo" :src="setuserlogo" mode=""></image>
						<image class="right" src="../../static/img/right.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="list" @tap="modifyInfo">
					<text>称呼</text>
					<view>{{setnickname}}</view>
				</view>
				<view class="list" @tap="modifyInfo">
					<text>手机</text>
					<view>{{setphone}}</view>
				</view>
				<view class="list" @tap="modifyInfo">
					<text>微信</text>
					<view>{{setwechat}}</view>
				</view>
				<view class="list" @tap="modifyInfo">
					<text>公司</text>
					<view>{{setcompany}}</view>
				</view>
				<view class="list" @tap="modifyInfo">
					<text>职位</text>
					<view>{{setposition}}</view>
				</view>
				<view class="list" @tap="showIndustry">
					<text>所属行业</text>
					<view class="list_img flex">
						<view>
							{{setindustry}}
						</view>
						<image src="../../static/img/select.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="user_info flex" @tap="modifyInfo">
					<text>个人简介</text>
					<textarea placeholder="个人简介" v-model="setuserLife" />
					</view>
			</view>
			
			<view class="user_photo flex">
				<view class="user_photolist flex" @tap="addPhoto(index)" v-for="(item,index) in photo" :key="index" v-show="photo.length>0">
					<image :src="item" mode=""></image>
				</view>
				<view class="user_addphoto flex" @tap="addPhoto(photo.length)" v-show="photo.length < 3">
					<view class="add">
						+
					</view>
					<text>添加照片</text>
					
				</view>
				
			</view>
			
			<view class="user_product flex">
				<text>相关产品及服务</text>
				<view class="product_detaile bgcf flex" v-for="(item,index) in setproduct" :key="index" v-show="index<3">
					<view class="product_img">
						<image :src="item.cover" mode="aspectFit"></image>
					</view>
					<view class="product_text">
						<view>{{item.title}}</view>
						<text>{{item.subtitle}}</text>
					<view class="product_btn flex" @tap="getProduct(item.id,item.showType,item.url)">
						查看
					</view>
					</view>
				</view>
			</view>
			
			<view class="user_btn">
				<button type="primary" @tap="sureSet">确认修改</button>
			</view>
			
		</view>
		<lb-picker   v-model="value"  mode="selector"  :list="setindustrys" ref="picker"  @change="handleChange" @confirm="handleConfirm" @cancle="handleCancle"></lb-picker>
		
	</view>
</template>

<script>
	import titles from '../../components/title.vue'
	import lbPicker from '@/components/lb-picker'
	import userSevers from '@/api/get_wx_login.js'
	import uploadfile from '@/api/uploadFile.js'
	import {mapState,mapActions} from 'vuex'
	export default {
		data() {
			return {
				// titles: "个人中心",
				setuserlogo:'',//头像
				// userinfo:{},
				setnickname:'',//称呼
				setphone:'',//手机
				setwechat:'',//微信
				setcompany:'',//公司
				setposition:'',//职位
				setindustry:'',//行业
				setindustry_id:'',//行业id
				value:'',
				setindustrys:[],//行业数组
				setuserLife:'',
				photo:[],
				setproduct:'',
				setinfo:'',//修改信息
			};
		},
		onLoad(option) {
				this.getUserInfo();
				if(this.$route.params.set==1){
					this.setinfo = this.$route.params.set;
					try {
					   const userinfo = uni.getStorageSync('userinfo')
					    if (userinfo) {
					      this.setnickname=userinfo.nickname;
					      this.setphone = userinfo.phone;
					      this.setwechat=userinfo.wechat;
					      this.setcompany=userinfo.company;
					      this.setposition=userinfo.position;
					      this.setuserLife=userinfo.userLife;
					    }
					} catch (e) {
					    // error
					}
					
					
					
				}
				console.log(this.$route.params.set)
		},
		methods:{
			getUserInfo(){
				userSevers.getUserInfo({
					success:res=>{
						console.log(res)
						const userinfo = res.data.artUser;
						if(this.setinfo != 1){
							this.setnickname=userinfo.nickname;
							this.setphone = userinfo.phone;
							this.setwechat=userinfo.wechat;
							this.setcompany=userinfo.company;
							this.setposition=userinfo.position;
							this.setuserLife=userinfo.introduction;
						}else{
							
						}
						this.setindustry_id = userinfo.industryId
						this.setrecommends=res.data.recommends;
						this.setindustry = userinfo.industry;
						this.setindustrys = res.data.industrys;
						this.setuserlogo=userinfo.profilePhoto;
						this.setproduct = res.data.artProducts;
						if(userinfo.personalPhoto1 != null && userinfo.personalPhoto1 != '')  this.photo.splice(0,1,userinfo.personalPhoto1)
						if(userinfo.personalPhoto2 != null && userinfo.personalPhoto2 != '')  this.photo.splice(1,1,userinfo.personalPhoto2)
						if(userinfo.personalPhoto3 != null && userinfo.personalPhoto3 != '')  this.photo.splice(2,1,userinfo.personalPhoto3)
					
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					}
				})
			},
			setLogo(){
				const that = this
				uni.chooseImage({
					count:1,
					success:res=>{
						uni.showLoading({
							mask:true,
							 title: '上传中'
						})
							uploadfile.uploadfiles({
								photo: res.tempFilePaths[0], // 要上传文件资源的路径。
								// 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
								name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
								formData: {}, // HTTP 请求中其他额外的 form data
								success: upres => {
									uni.hideLoading()
									const data = JSON.parse(upres.data)
									
									if(upres.statusCode == 200 && data.code == 0){
										that.setuserlogo = data.path;
									}
								},
								fail:err=>{
									console.log(err)
									uni.hideLoading()
								},
								complete:err=>{
									// console.log(err)
									uni.hideLoading()
								}
							})
					}
				})
			},
			// 修改信息
			modifyInfo(){
				this.$router.push({
					name:'modifyUser',
					params:{
						nickname:this.setnickname,
						phone:this.setphone,
						wechat:this.setwechat,
						company:this.setcompany,
						userLife:this.setuserLife,
						position:this.setposition
					}
				
				})
				
				// uni.navigateTo({
				// 	url:'./modifyUser/modifyUser?user='+this.userinfo.nickname + '&phone=' + this.userinfo.phone + '&wechat=' +this.userinfo.wechat+'&company='+this.userinfo.company+'&userLife='+this.userLife + '&position=' + this.userinfo.position
				// })
			},
			//行业
			showIndustry(){
				this.$refs.picker.show()
			},
			handleChange (item) {
				
			},
			handleConfirm (item) {
				console.log(item)
				this.setindustry = item.item.name
				this.setindustry_id = item.item.id
			
			},
			handleCancle (item) {
				
			},
			
			//上传照片
			addPhoto(idx){
				// uni.showLoading({
				// 	mask:true,
				// 	 title: '上传中'
				// })
				const that = this
				uni.chooseImage({
					count:1,
					success:res=>{
					
						uni.showLoading({
							mask:true,
							 title: '上传中'
						})
							uploadfile.uploadfiles({
								photo: res.tempFilePaths[0], // 要上传文件资源的路径。
								// 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
								name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
								formData: {}, // HTTP 请求中其他额外的 form data
								success: upres => {
									console.log(upres)
									uni.hideLoading()
									const data = JSON.parse(upres.data)
								
									if(upres.statusCode == 200 && data.code == 0){
										that.photo.splice(idx ,1 ,data.path)
										
									}
								},
								fail:err=>{
									console.log(err)
									uni.hideLoading()
								},
								complete:err=>{
									// console.log(err)
									uni.hideLoading()
								}
							})
					}
				})
			},
			sureSet(){
				const that = this;
				var photo1 = '',photo2= '',photo3 = '';
					switch (this.photo.length){
						case 0:
							photo1 = '';
							photo2 = ''
							photo3 = '';
							break;
						case 1:
							photo1 = this.photo[0];
							break;
						case 2:
							photo1 = this.photo[0];
							photo2 = this.photo[1];
							break;	
						case 3:
							photo1 = this.photo[0];
							photo2 = this.photo[1];
							photo3 = this.photo[2];
							break;			
						default:
							break;
					}
				let lock = false;
				if(!lock){
					lock = true;
					console.log(lock)
					userSevers.setUserInfo({
					logo: that.setuserlogo,
					nickname: that.setnickname,
					industry_id: that.setindustry_id,
					phone: that.setphone,
					wechat: that.setwechat,
					company: that.setcompany,
					position: that.setposition,
					Introduction: that.setuserLife,
					personal_photo1: photo1,
					personal_photo2: photo2,
					personal_photo3: photo3,
					success:res=>{
						console.log(res)
					
						if(res.statusCode == 200 && res.data.code == 0){
							uni.showToast({
								title:'修改信息成功',
								// icon:"none",
								duration:3000
							})
						}
						lock = false;
					},
					fail:err=>{
						console.log(err)
						lock = false;
					},
					complete:res=>{
						console.log(res)
						lock = false;
					}
				})
				}
				
			},
			getProduct(id,type,url) {
				if (type == '文章') {
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
							url:  url
						},
					
					})
				}
			
			}
		},
		
		components: {
			titles,
			 lbPicker
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
						height:48px ;
						font-size: $size16;
						color: $color55;
					}
				}
			}
			.user_photo{
				// justify-content: space-between;
				padding: 20px 7.2% 20px 7.5%;
				.user_photolist{
					width: 31%;
					height: 100px;
					margin: 0 5px;
					align-content: center;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					image{
						width: 100%;
						height: 100%;
					}
					.add{
						color: #DDDDDD;
						font-size: 40px;
						line-height: 40px;
					}
					text{
						color: $color88;
					}
				}
				.user_addphoto{
					width: 31%;
					height: 100px;
					margin: 0 5px;
					background-color: #FFFFFF;
					align-content: center;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					image{
						width: 100%;
						height: 100%;
					}
					.add{
						color: #DDDDDD;
						font-size: 40px;
						line-height: 40px;
					}
					text{
						color: $color88;
					}
				}
			}
			.user_product{
				padding: 0 7.2% 0 7.5%;
				margin-bottom: 30px;
				flex-direction: column;
				>text{
					font-size: $size14;
					color: $color88;
					margin-bottom: 10px;
				}
				.product_detaile{
					border-radius: 5px;
					padding: 16px 24px 15px 25px;
					margin-bottom: 15px;
					box-shadow: 0 1px 1px 0 rgba(0,0,0,0.16);
					.product_img{
						width: 64px;
						height: 64px;
						margin-right: 10px;
						image{
							width:100%;
							height: 100%;
						}
					}
					.product_text{
						flex: 1;
						view{
							font-size: $size14;
							color: $color55;
							font-weight: 550;
							margin-bottom: 3px;
						}
						text{
							display: inline-block;
							font-size: 0.6rem;
							color: $color55;
							margin-bottom: 6px;
						}
						.product_btn{
							text-align: center;
							    justify-content: center;
								align-items: center;
								align-content: center;
							width: 3.4rem;
							padding: 2px 17px 2px 18px;
							background-color: $colorbtn;
							font-size: 0.6rem;
							color: #FFFFFF;
							border-radius: 3px;
						}
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
