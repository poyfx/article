<template>
	<view class="edit bgcf">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<view class="header_save">
			<view class="header_title_white_save_f7 flex">
				<view class="left_save" @tap="back">
					<uni-icons type="arrowleft" size="28"></uni-icons>
				</view>
				<view>创建文章</view>
				<view class="right_savebtn flex">
					<text>保存</text>
				</view>
			</view>
		</view>

		<view class="edit_content bgcf flex">
			<view class="edit_content_img flex">
				<view>+</view>
				<text>封面图</text>
			</view>

			<view class="edit_content_info">
				<view class="title border-Bottom">
					<input type="text" placeholder="这里是文章标题" />
				</view>
				<view class="user">
					<input type="text" placeholder="作者名" />
				</view>
			</view>
		</view>

		<view class="edit_article_title flex">
			<view class="edit_article_left">
				<text>文章正文</text>
			</view>
			<view class="edit_article_right flex">
				<view class="edit_article_img flex">
					<image src="../../../../static/logo.png" mode="aspectFit"></image>
					<text>插入图片</text>
				</view>
				<view class="edit_article_img flex">
					<image src="../../../../static/logo.png" mode="aspectFit"></image>
					<text>插入视频</text>
				</view>
			</view>
		</view>

		<view class="edit_article">
			<parser :html="html">
			</parser>
			<view class="rich" ref='rich' contenteditable="true" data-placeholder="请输入文章正文" @tap="rich">

			</view>
			<!-- <textarea value="" placeholder="请输入文章正文" maxlength="-1" /> -->
		</view>
		<view class="edit_btn">
			<button @tap="go">下一步</button>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import parser from "@/components/jyf-Parser/index"
	export default {
		data() {
			return {
				titles: '发布原创文章',
				html: '<div>hello world</div>',
				richs: ''
			};
		},
		methods: {
			rich() {

			},
			go(){
				uni.navigateTo({
					url:'../addDisplayBit/addDisplayBit'
				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
		},
		components: {
			titles,
			parser
		}
	}
</script>

<style lang="scss">
	.edit {
		height: 100vh;

		.edit_content {
			padding: 26px 30px 29px 31px;

			.edit_content_img {
				width: 70px;
				height: 70px;
				margin-right: 12px;
				justify-content: center;
				align-content: center;
				align-items: center;
				flex-direction: column;
				background-color: #eeeeee;

				view {
					color: #dddddd;
					font-size: 46px;
					line-height: 36px;
					font-weight: 100;
				}

				text {
					color: #888888;
					font-size: 0.65rem;
				}
			}

			.edit_content_info {
				flex: 1;
				color: #555555;

				view {
					padding: 7px 5px;
				}

				.title {
					input {
						font-size: 0.95rem;
					}

				}

				.user {
					input {
						font-size: 0.85rem;
					}

				}

			}
		}

		.edit_article_title {
			background-color: #f7f7f7;
			padding: 0 0px 0 28px;
			align-content: center;
			align-items: center;
			justify-content: space-between;

			.edit_article_left {
				text {
					font-size: $size14;
					color: $color55;
					font-weight: 550;
				}
			}

			.edit_article_right {
				padding: 23px 0 20px;

				.edit_article_img {
					align-content: center;
					align-items: center;
					margin-right: 20px;

					image {
						width: 20px;
						height: 20px;
						margin-right: 5px;
					}

					text {
						color: $color88;
						font-size: 0.65rem;
					}
				}

			}
		}

		.edit_article {
			height: 300px;
			max-height: 300px;
			padding: 20px 26px 20px 28px;

			.rich {
				width: 100%;
				height: 100%;
				max-height: 300px;
				overflow: auto;
				outline: none;
			}

			.rich:empty:before {
				content: attr(data-placeholder);
				color: #bbb;
			}

			.rich:focus:before {
				content: none;
			}
		}

		.edit_btn {
			margin-bottom: 20px;

			button {
				width: 90%;
				background-color: #3C84EF;
				font-size: $size14;
				color: #FFFFFF;
				padding: 6px 0 5px;
			}
		}
	}
</style>
