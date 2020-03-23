<template>
	<view class="edit bgcf">
		<!-- <titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<view class="header_save">
			<view class="header_title_white_save_f7 flex">
				<view class="left_save" @tap="back">
					<uni-icons type="arrowleft" size="28"></uni-icons>
				</view>
				<view>创建文章</view>
				<view class="right_savebtn flex">
					<text @tap="save">保存</text>
				</view>
			</view>
		</view>
		<editors v-model="detail" :isClear="isClear" @change="change" :shows="true"></editors>
		<view class="edit_btn bgcf">
			<button @tap="go(aksUrl)">下一步</button>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import parser from "@/components/jyf-parser/jyf-parser";
	import editors from "@/components/wangEditorLeft.vue"
	import uploadFileServer from "@/api/uploadFile.js"
	import articleServer from "@/api/article.js"
	export default {
		data() {
			return {
				titles: '编辑内容正文',
				detail: '',
				isClear: false,
				type: '1', //原创【1】转载【2】
				art_id: '', //保存成功后文章id
				aksUrl:'',
			};
		},
		onLoad(option) {
			this.aksUrl = option.url
			const product = uni.getStorageSync('products')
			try {
				console.log(product)
				if (product) {
					this.detail =product.content
				}
			} catch (e) {
				//TODO handle the exception
			}
		},
		methods: {
			uploadTitle() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album '],
					success: (choose) => {
						uni.showLoading({
							title: '图片上传中...',
							mask: true,
						})
						uploadFileServer.uploadfiles({
							photo: choose.tempFilePaths[0],
							success: res => {
								uni.hideLoading()
								console.log(res)
								const data = JSON.parse(res.data)
								if (res.statusCode == 200 && data.code == 0) {
									this.src = data.path
								}
							},
							fail: err => {
								uni.hideLoading()
								console.log(err)
							},
							complete: res => {
								uni.hideLoading()
								// console.log(res)
							}
						})

					}
				})
			},
			save() {
				if (this.art_title != '') {
					if (this.art_name != '') {
						let lock = false;
						if (!lock) {
							lock = true;
							articleServer.release({
				
								title: this.art_title,
								cover: this.src,
								author: this.art_name,
								content: this.detail,
								success: res => {
									console.log(res)
									lock = false;
									if (res.statusCode == 200 && res.data.code == 0) {
										this.id = res.data.article_id;
										uni.showToast({
											title: '保存成功',
											duration: 3000,
										})
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
						}
					} else {
						uni.showToast({
							title: '请输入作者名',
							icon: 'none',
							duration: 3000,
							position: 'bottom',
						})
					}
				} else {
					uni.showToast({
						title: '请输入文章标题',
						icon: 'none',
						duration: 3000,
						position: 'bottom',
					})
				}

			},
			change(e) {
				console.log(e)
			},
			go(aksUrl) {
				uni.setStorage({
					key:'productArticle',
					data:this.detail
				})
				uni.redirectTo({
					url: './productInfo?open='+'1' + '&url='+aksUrl
				});
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
			editors
		}
	}
</script>

<style lang="scss">
	.edit {
		height: 100vh;


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
			padding-bottom: 20px;

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
