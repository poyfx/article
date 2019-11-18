<template>
	<view class="displaybit">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<view class="header_save">
			<view class="header_title_white_save_fff flex">
				<view class="left_save" @tap="back">
					<uni-icons type="arrowleft" size="28"></uni-icons>
				</view>
				<view>添加额外展示位</view>
				<view class="right_savebtn flex">
					<text>保存</text>
				</view>
			</view>
		</view>
	
		<view class="authorinfo_article bgcf">
			<view class="authorinfo flex">
				<view class="authorinfo_logo flex">
					<view class="authorinfo_img flex">
						<image src="../../../../static/img/user.jpeg" mode="aspectFit"></image>
					</view>
					<view class="authorinfo_text flex">
						<view class="flex">
							<view>昵称</view>
							<text>公司及职位</text>
						</view>
						<text>分享好文</text>
					</view>
				</view>
				<view class="authorinfo_add bgcf">
					<view @tap="addinfo">+添加该模块</view>
				</view>
			</view>
			<parser :html="html"></parser>
			<disclaimer name="小黑"></disclaimer>
		</view>
		<!-- 作者信息及产品推荐位 -->
		<view class="personal_info">
			<view class="personal">
				<personal></personal>
			</view>
			<view class="product">
				<product></product>
			</view>

		</view>
		<!-- 用户不可见内容 -->
		<view class="mall">
			<image src="../../../../static/img/mall.png" mode="aspectFit"></image>
		</view>
		<view class="add_btn flex">
			<text class="flex look">预览</text>
			<text class="flex save">保存并转发</text>
		</view>
		<suspension></suspension>
		
	</view>
</template>

<script>
	import titles from '@/components/title.vue'
	import parser from "@/components/jyf-Parser/index"
	import disclaimer from '@/components/disclaimer.vue'
	import personal from '@/components/personal.vue'
	import product from '@/components/product.vue'
	import suspension from '@/components/suspension.vue'
	export default {
		data() {
			return {
				titles: '发布原创文章',
				html: '<div>hello world</div>',
				richs: ''
			};
		},
		methods: {
			go(){
				  this.$refs.child.go();
			},
			rich() {

			},
			// 添加该模块
			addinfo(){
				uni.navigateTo({
					url:'../../userinfo/userinfo'
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
			parser,
			disclaimer,
			personal,
			product,
			suspension
		}
	}
</script>

<style lang="scss">
	.displaybit {
		padding-bottom: 48px;
		.authorinfo_article {
			margin-bottom: 40px;
			padding: 24px 30px 34px 28px;
			.authorinfo {
				margin: 0px 0px 24px;
				 padding: 10px 17px 10px 12px;
				border-radius: 3px;
				background-color: #f2f2f2;
				justify-content: space-between;
				align-content: center;
				align-items: center;
			
				.authorinfo_logo {
					justify-content: space-between;
					align-content: center;
					align-items: center;
			
					.authorinfo_img {
						margin-right: 8px;
			
						image {
							width: 40px;
							height: 40px;
							border-radius: 50%;
						}
					}
			
					.authorinfo_text {
						flex-direction: column;
			
						view {
							align-content: center;
							align-items: center;
			
							view {
								font-size: $size14;
								color: $color55;
								margin-right: 8px;
							}
			
							text {
								font-size: 0.65rem;
								color: $color55;
							}
			
						}
			
						>text {
							font-size: 0.65rem;
							color: $color88;
						}
					}
				}
			
				.authorinfo_add {
					padding: 5px 8px;
					font-size: 0.65rem;
					color: $color55;
				}
			}
		}

		.personal_info {
			margin: 24px 30px 34px 28px;
			.personal{
				margin-bottom: 20px;
			}
		}
		.mall{
			width: 100%;
			height: 100px;
			margin-bottom: 16px;
			image{
				width: 100%;
			height: 100%;
			}
		}
		.add_btn{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 48px;
			justify-content: space-between;
			align-content: center;
			align-items: center;
			text{
				height: 100%;
				align-content: center;
				align-items: center;
				text-align: center;
					justify-content: center;
					font-weight: 550;
			}
			.look{
				width: 40%;
				background-color: #FFFFFF;
				color: $color55;
				size: $size14;
			}
			.save{
				width: 60%;
				background-color: #3C84EF;
				color: #FFFFFF;
				size: $size14;
			}
		}
	}
</style>
