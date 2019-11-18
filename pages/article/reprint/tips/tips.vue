<template>
	<view class="tips">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<titles2 :titles="titles2" :color="false"></titles2>

		<view class="tips_content bgcf">
			<view class="tips_step">
				<text>1、打开将要转发的<text>微信公众号文章</text>，点击屏幕右上角“三个点”功能按钮</text>
				<view class="tipes_img">
					<image src="../../../../static/img/tip1.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="tips_step">
				<text>2、在弹出的菜单中选择”复制链接"按钮</text>
				<view class="tipes_img">
					<image src="../../../../static/img/tip2.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="tips_step">
				<text>3、粘贴复制好的地址，打开小助手粘贴到地址框</text>
			</view>
			
			<view class="tips_foot flex">
				<text>• 本次说明以iphone作为示例，所有手机用户同理此操作</text>
				<text>• 仅支持微信公众号文章</text>
			</view>
		</view>
	</view>
</template>

<script>
	import titles from '../../../../components/title.vue'
	import titles2 from '../../../../components/title2.vue'
	export default {
		data() {
			return {
				titles: "发布转载文章",
				titles2: "如何获得文章地址",
			};
		},
		components: {
			titles,
			titles2
		}
	}
</script>

<style lang="scss">
	.tips {
		.tips_content {
			padding: 2.3% 7.2% 0 7.5%;
			.tips_step{
				margin-bottom: 3.6%;
				text{
					color: $color55;
					font-size: $size14;
					margin-bottom: 3.3%;
					display: inline-block;
					font-weight: 550;
					text{
						color: $colorbtn;
					}
				}
				.tipes_img{
					text-align: center;
				}
			}
			.tips_foot{
				padding-bottom: 20px;
				flex-direction: column;
				text{
					color: $color88;
					font-size: 0.6rem;
					margin-bottom: 10px;
				}
			}
		}
	}
</style>
