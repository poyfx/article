<template>
	<view class="comment">
	<!-- 	<titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<stitles :titles="stitles" :color="false"></stitles>
		<view class="comment_content">
			<textarea  placeholder="请输入评论" v-model="comment"/>
		</view>
		<view class="comment_info bgcf">
			<view class="comment_list flex border-Bottom">
				<text>头像</text>
				<image :src="userlogo" mode=""></image>
			</view>
			<view class="comment_list flex">
				<text>称呼</text>
				<view>{{nickname}}</view>
			</view>
		</view>
		<view class="comment_btn" v-show="first">
			<button type="primary" @tap="comments(1)">提交并启用</button>
		</view>
		<view class="comment_btn" v-show="!first">
			<button class="start" type="primary" @tap="comments(1)">确认</button>
			<button class="delete" type="primary" @tap="comments(0)">删除该模块</button>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import stitles from '@/components/title2.vue'
	import commentServer from '@/api/comment.js'
	import userSevers from '@/api/get_wx_login.js'
	export default {
		data() {
			return {
				titles: '发布转载文章',
				stitles: '发布评论',
				comment:'',
				id:'',
				nickname:'',
				userlogo:'',
				first:true,
			};
		},
		onLoad(option) {
			this.id = option.id;
			if(option.shpows == 0){
				this.first = true;
			}else{
				this.first = false;
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
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					}
				})
			},
			comments(show){
				if(this.comment == ''){
					uni.showToast({
						title:'请输入评论内容',
						icon:'none',
						duration:3000,
					})
				}else{
					commentServer.editComment({
					articleId:this.id,
					comment:this.comment,
					showComment:show,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
							uni.setStorage({
								key:'comment',
								data:res.data.result
							})
							uni.navigateTo({
								url:'../reprint/editingArticles/editingArticles'
							})
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:"none",
								duration:3000
							})
						}
					},
					fail:err=>{
						console.log(err)
					},
					complete:res=>{
						console.log(res)
					}
				})
				}
				
				// uni.navigateTo({
				// 	url:
				// })
			},
		},
		components: {
			titles,
			stitles,
		}
	}
</script>

<style lang="scss">
.comment{
	.comment_content{
		margin-bottom: 10px;
		textarea{
			width: 100%;
			height: 300px;
			display: inline-block;
			box-sizing: border-box;
			padding: 13px 28px;
			background-color: #FFFFFF;
		}
	}
	.comment_info{
		padding: 0 27px 0 28px;
		margin-bottom: 28px;
		.comment_list{
			justify-content: space-between;
			align-content: center;
			align-items: center;
			text{
				color: $color88;
				font-size: $size14;
				line-height: 60px;
			}
			view{
				color: $color55;
				font-size: $size16;
				font-weight: 550;
			}
			image{
				width: 52px;
				height: 52px;
				border-radius: 50%;
			}
		}
	}
	.comment_btn{
		padding-bottom: 15px;
		button{
			width: 90%;
			padding: 6px 0 5px;
			font-size: $size14;
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
