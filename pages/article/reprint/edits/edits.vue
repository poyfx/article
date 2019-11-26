<template>
	<view class="edits">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
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
				<text>看不懂？“央行房贷利率新政”白话版来了！</text>
			</view>
			<view class="edits_samll_title">
				<text>本文由公众号“惠州发布”</text>
			</view>
			<view class="edits_img">
				<image src="../../../../static/img/photo1.png" mode="aspectFit"></image>
			</view>
			<view class="edits_text">
				<text>8月25日下午5点18分，央行通过官网发布公告，宣布从10月8日开始全面调整房贷利率计算方式！</text>
			</view>
			<view class="edits_img">
				<image src="../../../../static/img/photo2.png" mode="aspectFit"></image>
			</view>
			<disclaimer name="小黑"></disclaimer>
		</view>
		<view class="edits_btn flex">
			<view class="edits_edit flex" @click="edits">
				<image src="../../../../static/img/edit.png" mode="aspectFit"></image>
				编辑
			</view>
			<view class="edits_deract flex">
				直接转发
			</view>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import disclaimer from '@/components/disclaimer.vue'
	export default {
		data() {
			return {
				titles: '发布转载文章',
				like:true,
			};
		},
		methods:{
			likeIt(){
				this.like=!this.like;
			},
			edits(){
				uni.navigateTo({
					url:'../editingArticles/editingArticles'
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
			disclaimer
		}
	}
</script>

<style lang="scss">
.edits{
	padding-bottom: 49px;
	.edits_content{
		padding: 17px 28px 20px 32px;
		.edits_title{
			line-height: 24px;
			margin-bottom: 10px;
			text{
				font-size: 1rem;
				color: $color55;
				font-weight: 550;
			}
		}
		.edits_samll_title{
			line-height: 17px;
			margin-bottom: 10px;
			text{
				font-size: 0.65rem;
				color: $color88;
				font-weight: 100;
			}
		}
		.edits_img{
			width: 100%;
			margin: 10px 0 25px;
			image{
				width: 100%;
				height: 180px;
			}
		}
		
	}
	.edits_btn{
		width: 100%;
		height: 48px;
		box-shadow: 0 1px 0 0 #eeeeee;
		position: fixed;
		bottom: 0;
		left: 0;
			border: 1px solid #eeeeee;
		.edits_edit{
			width: 40%;
			height: 100%;
			background-color: #FFFFFF;
			color: $color55;
			align-content: center;
			align-items: center;
			justify-content: center;
			image{
				width: 16px;
				height: 16px;
				margin-right: 5px;
			}
			
		}
		.edits_deract{
			height: 100%;
			flex: 1;
			background-color: #3C84EF;
			color: #FFFFFF;
			align-content: center;
			align-items: center;
			justify-content: center;
			
		}
	}
}
</style>
