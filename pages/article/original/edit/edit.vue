<template>
	<view class="edit bgcf">
	<!-- 	<titles :titles="titles" :isIcons='false' :color="true"></titles> -->
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

		<view class="edit_content bgcf flex">
			<view class="edit_content_img flex" @tap="uploadTitle">
				<view v-if="src == ''">+</view>
				<text v-if="src == ''">封面图</text>
				<image :src="src" mode="aspectFill" v-if="src !== ''"></image>
			</view>

			<view class="edit_content_info">
				<view class="title border-Bottom">
					<input type="text" placeholder="这里是文章标题" v-model="art_title" />
				</view>
				<view class="user">
					<input type="text" placeholder="作者名" v-model="art_name" />
				</view>
			</view>
		</view>

		<!-- <view class="edit_article_title flex">
			<view class="edit_article_left">
				<text>文章正文</text>
			</view>
			<view class="edit_article_right flex">
				<view class="edit_article_img flex">
					<image src="../../../../static/img/pic.png" mode="aspectFit"></image>
					<text>插入图片</text>
				</view>
				<view class="edit_article_img flex">
					<image src="../../../../static/img/mov.png" mode="aspectFit"></image>
					<text>插入视频</text>
				</view>
			</view>
		</view> -->

		<!-- <view class="edit_article bgcf"> -->
		<view class='editor_view'>
			<editors v-model="detail" :isClear="isClear" @change="change" ></editors>
		</view>
		
		<view class="edit_btn bgcf">
			<button @tap="go">下一步</button>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import parser from "@/components/jyf-parser/jyf-parser";
	import editors from "@/components/wangEditor.vue"
	import uploadFileServer from "@/api/uploadFile.js"
	import articleServer from "@/api/article.js"
	export default {
		data() {
			return {
				titles: '发布原创文章',
				src: '',
				detail: '',
				isClear: '',
				art_title: '', //文章标题
				art_name: '', //作者名字
				type: '1', //原创【1】转载【2】
				art_id: '', //保存成功后文章id
				art: {
					title: '',
					content: '',
					id: '',
				},
				// cId:'',//草稿箱传过来id
			};
		},
		onLoad(option) {
			var a = '';
			const drafts = uni.getStorageSync('drafts');
				if(drafts){
					 a = drafts.type;
					 this.art_id = drafts.id;
					 this.getArticleDetile(this.art_id )
				}
		},
		methods: {
			getArticleDetile(id){
				articleServer.getArticle({
					id:id,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
								const art = res.data.result.article
								this.art_name = art.author
								this.art_title = art.title
								this.src = art.cover
								this.detail = art.content
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
								}else if(data.code == -10000){
									const str = window.location.href
									// Router.$router.push({name:'login'})
									const a = str.indexOf('#')
									const b = str.substring(a+1)
									console.log(b)
									uni.setStorageSync('nextURL',{path:b})
									uni.removeStorage({
										key:'Token'
									})
									uni.navigateTo({
										url:'/pages/login/login'
									})
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
								id:this.art_id,
								publish_type: 1,
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
			go() {
				uni.removeStorage({
					key:'head'
				})
				uni.removeStorage({
					key:'foot'
				})
				uni.removeStorage({
					key:'ask'
				})
				uni.removeStorage({
					key:'products'
				})
				if (this.art_title != '') {
					if (this.art_name != '') {
						let lock = false;
						if (!lock) {
							lock = true;
							articleServer.release({
								id:this.art_id,
								publish_type: 1,
								
								title: this.art_title,
								cover: this.src,
								author: this.art_name,
								content: this.detail,
								success: res => {
									console.log(res)
									lock = false;
									if (res.statusCode == 200 && res.data.code == 0) {
										this.id = res.data.article_id;
										this.art.content = this.detail;
										this.art.title = this.art_title;
										this.art.id = this.id;
										this.art.cover = this.src;
										this.art.name = this.art_name;
										uni.setStorage({
											key:'art',
											data:this.art,
										})
										this.$router.push({
											name: 'addDisplayBit',
											params: {
												lock: '1',
												id:this.id,
											}
										})
										
										// uni.navigateTo({
										// 	url: '../addDisplayBit/addDisplayBit?id='+this.id
										// })
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

		.edit_content {
			padding: 26px 30px 29px 31px;

			.edit_content_img {
				width: 70px;
				height: 70px;
				margin-right: 9px;
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

				image {
					width: 70px;
					height: 70px;
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
						margin-left: 3px;
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
		.editor_view{
			 padding: 20px 26px 20px 28px;
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
