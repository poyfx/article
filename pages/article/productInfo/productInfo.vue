<template>
	<view class="productInfo">
		<!-- <titles :titles="titles" :isIcons='false' :color="true"></titles> -->
		<!-- <stitles :titles="stitles" :color="true"></stitles> -->
		<view class="productInfo_type bgcf flex">
			<text>请选择展示方式</text>
			<view class="flex">
				<!-- <view>外部链接</view> -->
				<picker @change="bindPickerChange" :value="index" :range="lists">
					<view class="uni-input">{{list}}</view>
				</picker>
				<image src="../../../static/img/right.png" mode="aspectFit"></image>
			</view>
		</view>
		<view class="productInfo_logo bgcf">
			<view class="productInfo_title border-Bottom">
				<input type="text" placeholder="请输入标题" v-model="productTitle"/>
			</view>
			<view class="productInfo_title border-Bottom">
				<input type="text" placeholder="请输入副标题"  v-model="fProductTitle"/>
			</view>
			<view class="productInfo_photo flex" @tap="upload">
				<text v-show="src == ''">请上传封面图</text>
				<text v-show="src != ''">封面图</text>
				<view class="right_img flex">
					<image class="cover_map" :src="src" mode=""></image>
					<image class="right" src="../../../static/img/right.png" mode="aspectFit"></image>
				</view>

			</view>
		</view>
		<view class="productInfo_link bgcf" v-if="list == '外部链接'">
			<input type="text" placeholder="请输入外部链接地址" v-model="url" />
		</view>
		<view class="productInfo_type edit_type bgcf flex" v-else>
			<text>文章正文</text>
			<view class="flex">
				
				<view class="edit" @tap="edits(askUrl)">
					<text>去编辑</text>
					<image src="../../../static/img/right.png" mode="aspectFit"></image>
				</view>
				
			</view>
		</view>
		<view class="productInfo_btn" v-show="start">
			<button type="primary" @tap="up(1)">确定并启用</button>
		</view>
		<view class="productInfo_btn" v-show="!start">
			<button class="start" @tap="up(1)">确认</button>
			<button class="delete" @tap="up(0)">删除该模块</button>
		</view>
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import stitles from '@/components/title2.vue'
	import uploadfile from '@/api/uploadFile.js'
	import articleServer from '@/api/article.js'
	export default {
		data() {
			return {
				titles: '发布原创文章',
				stitles: '添加产品/案例/服务',
				index: 0,
				lists: [
					'外部链接',
					'文章'
				],
				src: '',
				list:'',
				productTitle:'',
				fProductTitle:'',
				id:'',
				content:'',//文章正文
				url:'',//外部链接
				start:true,
				showproducet:'',
				aksUrl:'',//从哪个页面过来
			}
		},
		onLoad(option) {
			this.list = this.lists[this.index]
			this.id = option.id || '';
			this.askUrl = option.url;
			if(option.open == 1){
				const product = uni.getStorageSync('product')
				try {
					if (product) {
						console.log(product)
						this.src=product.src;
						this.list = product.list;
						this.productTitle = product.productTitle;
						this.fProductTitle = product.fProductTitle;
						this.id = product.id
					}
				} catch (e) {
					//TODO handle the exception
				}
				this.content = uni.getStorageSync('productArticle')
				console.log(this.content)
			}
			
			if(option.have == 1){
				this.start = false;
				const product = uni.getStorageSync('products')
				try {
					if (product) {
						console.log(product)
						this.src=product.cover;
						this.list = product.showType;
						this.productTitle = product.title;
						this.fProductTitle = product.subtitle;
						this.content =product.content
					}
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		methods: {
			bindPickerChange(e) {
				console.log(e)
				this.index = e.detail.value,
				this.list = this.lists[this.index]
			},
			upload() {
				const that = this;
				uni.chooseImage({
					count: 1,
					success: res => {
						uni.showLoading({
							mask: true,
							title: '上传中'
						})
						console.log(res)
						uploadfile.uploadfiles({
							photo: res.tempFilePaths[0], // 要上传文件资源的路径。
							// 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
							name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
							formData: {}, // HTTP 请求中其他额外的 form data
							success: upres => {
								uni.hideLoading()
								console.log(upres)
								const data = JSON.parse(upres.data)

								if (upres.statusCode == 200 && data.code == 0) {
									that.src = data.path;
								}
							},
							fail: err => {
								console.log(err)
								uni.hideLoading()
							},
							complete: err => {
								// console.log(err)
								uni.hideLoading()
							}
						})
					}
				})
			},
			//编辑正文
			edits(url){
				console.log(this.askUrl)
				const product = {};
				product.list =this.list;
				product.productTitle = this.productTitle,
				product.fProductTitle = this.fProductTitle
				product.src = this.src,
				product.id = this.id
				uni.setStorage({
					key:'product',
					data:product,
				})
				uni.navigateTo({
					url:'./productArticle?url='+url
				})
			},
			up(show){
				if(this.productTitle != ''){
					if(this.list == '文章'){
						if(this.content != ''){
							this.upLoadUrl(show)
						}else{
							uni.showToast({
								title:'请输入文章正文',
								icon:'none',
								position:'bottom',
								duration:3000,
							})
						}
					}else{
						if(this.link != ''){
							this.upLoadUrl(show)
						}else{
							uni.showToast({
								title:'请输入链接',
								icon:'none',
								position:'bottom',
								duration:3000,
							})
						}
					}
				}else{
					uni.showToast({
						title:'请输入文章标题',
						icon:'none',
						position:'bottom',
						duration:3000,
					})
				}
				
			},
			//启用模块
			upLoadUrl(show){
				articleServer.productUp({
					article_id:this.id,
					show_type:this.list,
					title:this.productTitle,
					subtitle:this.fProductTitle,
					cover:this.src,
					url:this.url,
					content:this.content,
					success: upres => {
						uni.hideLoading()
						console.log(upres)
						const data = upres.data.artProduct;
						
						 data.showproducet = show;
						if (upres.statusCode == 200 && upres.data.code == 0 ) {
							uni.setStorage({
								key : 'products',
								data:data,
								success() {
									uni.removeStorage({
										  key: 'product',
									})
									uni.removeStorage({
										  key: 'productArticle',
									})
								}
							});
							if(this.askUrl == 'editingArticles'){
								this.$router.push({
									name:'editingArticles'
								})
							}else{
								this.$router.push({
									name:'addDisplayBit'
								})
							}
							
							// uni.redirectTo({
							// 	url: '../original/addDisplayBit/addDisplayBit'
							// });
						}
					},
					fail: err => {
						console.log(err)
						uni.hideLoading()
					},
					complete: err => {
						// console.log(err)
						uni.hideLoading()
					}
				})
			},
		},
		
		components: {
			titles,
			stitles,
		}
	}
</script>

<style lang="scss">
	.productInfo {
		.productInfo_type {
			padding: 21px 27px 18px 28px;
			margin-bottom: 12px;
			justify-content: space-between;
			align-content: center;
			align-items: center;

			text {
				color: $color88;
				font-size: $size14;
			}

			view {
				align-content: center;
				align-items: center;

				view {
					color: $color55;
					font-size: $size16;
					
					font-weight: 550;
				}

				image {
					width: 6px;
					height: 11px;
					margin-left: 7px;
				}
			}
		}
		.edit_type{
				margin-bottom: 108px;
		}
		.productInfo_logo {
			padding: 0px 27px 0px 28px;
			margin-bottom: 10px;

			.productInfo_title {
				input {
					font-size: $size14;
					color: $color55;
					padding: 21px 0 19px;
				}
			}

			.productInfo_photo {
				padding: 22px 0 19px;
				justify-content: space-between;
				align-content: center;
				align-items: center;

				.right_img {
					align-content: center;
					align-items: center;

					.cover_map {
						height: 50px;
						width: 50px;
					}

					.right {
						width: 6px;
						height: 11px;
						margin-left: 16px;
					}
				}


				text {
					font-size: $size14;
					color: $color88;
				}
			}
		}

		.productInfo_link {
			padding: 0px 27px 0px 28px;
			margin-bottom: 108px;

			input {
				font-size: $size14;
				color: $color55;
				padding: 21px 0 19px;
			}
		}

		.productInfo_btn {
			padding: 0px 27px 15px 28px;

			button {
				width: 100%;
				background-color: $colorbtn;
				color: #FFFFFF;
				font-size: $size14;
				padding: 6px 0 5px;
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
