<template>
	<view class="comment">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<stitles :titles="stitles" :color="false"></stitles>
		<view class="comment_content">
			<textarea  placeholder="请输入评论" />
		</view>
		<view class="comment_info bgcf">
			<view class="comment_list flex border-Bottom">
				<text>头像</text>
				<image src="../../../static/img/user.jpeg" mode="aspectFit"></image>
			</view>
			<view class="comment_list flex">
				<text>称呼</text>
				<view>王小达</view>
			</view>
		</view>
		<view class="comment_btn">
			<button type="primary">提交并启用</button>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import stitles from '@/components/title2.vue'
	export default {
		data() {
			return {
				titles: '发布原创文章',
				stitles: '发布评论'
			};
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
			}
		}
	}
	.comment_btn{
		button{
			width: 90%;
			padding: 6px 0 5px;
			font-size: $size14;
		}
	}
}
</style>
