<template>
	<view class="displaybit">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<view class="header_save">
			<view class="header_title_white_save_fff flex">
				<view class="left_save" @tap="back">
					<uni-icons type="arrowleft" size="28"></uni-icons>
				</view>
				<view>编辑文章</view>
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
					<view @tap="addinfo">+编辑</view>
				</view>
			</view>
			<!-- 正文 -->
			<view class="edits_content bgcf">
				<view class="edits_title">
					<text>看不懂？“央行房贷利率新政”白话版来了！</text>
				</view>
				<view class="edits_samll_title">
					<text>本文由公众号“惠州发布”</text>
				</view>
				<view class="set" v-show="deletes">
					<view class="notes">
						+添加注释
					</view>
					<view class="close" @tap="deletes=false">
						x
					</view>
					<view class="edits_img ">
						<image src="../../../../static/img/photo1.png" mode="aspectFit"></image>
					</view>
				</view>
				<view :class="deletes1?sets:''">
					<view class="notes" @tap="area=true" v-show='deletes1'>
						+添加注释
					</view>
					<view class="close" @tap="deletes1=false" v-show='deletes1'>
						x
					</view>
					<view class="edits_text">

						<text>8月25日下午5点18分，央行通过官网发布公告，宣布从10月8日开始全面调整房贷利率计算方式！</text>
					</view>

					<!-- 注释 -->
					<view class="set_notes" v-show="!deletes1">
						<view></view>
						<text>{{text}}</text>
					</view>
				</view>
				<view class="set" v-show="deletes2">
					<view class="notes">
						+添加注释
					</view>
					<view class="close" @tap="deletes2=false">
						x
					</view>
					<view class="edits_text">

						<text>8月25日下午5点18分，央行通过官网发布公告，宣布从10月8日开始全面调整房贷利率计算方式！月25日下午5点18分，央行通过官网发布公告，宣布从10月8日开始全面调整房贷利率计算方式！月25日下午5点18分，央行通过官网发布公告，宣布从10月8日开始全面调整房贷利率计算方式！</text>
					</view>
				</view>


				<view class="set" v-show="deletes3">
					<view class="notes">
						+添加注释
					</view>
					<view class="close" @tap="deletes3=false">
						x
					</view>
					<view class="edits_img">

						<image src="../../../../static/img/photo2.png" mode="aspectFit"></image>
					</view>
				</view>

			</view>
			<!-- <parser :html="html"></parser> -->
			<disclaimer name="小黑"></disclaimer>
		</view>
		<!-- 作者信息及产品推荐位 -->
		<view class="personal_info">
			<view class="personal">
				<!-- <personal></personal> -->
				<button type="primary" @tap="comment">发表专属评论</button>
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
		<!-- 悬浮 -->
		<suspension></suspension>
		<view class="notes_content" v-show="area">
			<view class="notes_text">
				<view class="title">
					<text>添加注释</text>
					<view class="close_text">
						X
					</view>
				</view>
				<view class="textarea">
					<textarea v-model="text" placeholder="输入你的评论内容" />
					</view>
				
				<view class="text_btn">
					<button type="primary" @tap="set">确定</button>
				</view>
			</view>
		</view>
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
				titles: '发布转载文章',
				html: '<div>hello world</div>',
				richs: '',
				deletes: true,
				deletes1: true,
				deletes2: true,
				deletes3: true,
				text:'',
				area:false,
				sets:'set',
			};
		},
		methods: {
			go() {
				this.$refs.child.go();
			},
			rich() {

			},
			set(){
				if(this.text == ''){
					return this.area = false;
				}else{
					this.area = false;
				this.deletes1 = false;
				}
			},
			comment(){
				uni.navigateTo({
					url:'../../comment/comment'
				})
			},
			// 添加该模块
			addinfo() {
				uni.navigateTo({
					url: '../../userinfo/userinfo'
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
			parser,
			disclaimer,
			personal,
			product,
			suspension
		}
	}
</script>

<style lang="scss">
	.set {
		border: 1px solid #e2e2e2;
		padding: 5px 3px;
		margin: 40px 0 30px;
		position: relative;

		.notes {
			position: absolute;
			top: -20px;
			left: -1px;
			background-color: #626262;
			color: #FFFFFF;
			font-size: 0.65rem;
			padding: 2px 4px;
			text-align: center;
			border-radius: 3px 3px 0 0;
		}

		.close {
			position: absolute;
			top: -20px;
			right: -1px;
			background-color: #626262;
			color: #FFFFFF;
			font-size: 1rem;
			line-height: 1rem;
			padding: 1px 6px;
			text-align: center;
			border-radius: 3px 3px 0 0;
		}
	}

	.set_notes {
		width: 100%;
		padding: 13px 17px 13px 19px;
		background-color: #eeeeee;
		position: relative;

		view {
			width: 0px;
			height: 0px;
			border-width: 8px;
			border-style: solid;
			border-color: transparent transparent #eeeeee transparent   ;
			position: absolute;
			top: -16px;
			left: 5%;
		}
	}
.notes_content{
	height:100vh ;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba($color: #000000, $alpha: 0.4);
	z-index: 9999;
	.notes_text{
		width: 100%;
		position: relative;
		top:30%;
		left: 0;
		padding-bottom:23px ;
		background-color: #FFFFFF;
		.title{
			padding: 10px 0;
			text-align: center;
			text{
				color: #212832;
				font-size: $size16;
				font-weight: 550;
			}
			.close_text{
				width: 20px;
				position: absolute;
				right: 10px;
				top: 10px;
			}
			
		}
		.textarea{
			padding: 0 20px 12px;
		
			width: 100%;
			textarea{
				display: inline-block;
				box-sizing: border-box;
				width: 100%;
				background-color: #eeeeee;
				padding: 12px 16px;
			}
		}
		.text_btn{
			button{
				width: 80%;
				font-size: $size14;
				padding: 4px 0 3px ;
			}
		}
	}
}

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

			.edits_content {
				// padding-bottom: 29px;

				.edits_title {
					line-height: 24px;
					margin-bottom: 10px;

					text {
						font-size: 1rem;
						color: $color55;
						font-weight: 550;
					}
				}

				.edits_samll_title {
					line-height: 17px;
					margin-bottom: 10px;

					text {
						font-size: 0.65rem;
						color: $color88;
						font-weight: 100;
					}
				}

				.edits_img {
					width: 100%;

					margin: 10px 0 25px;

					image {
						width: 100%;
						height: 150px;
					}
				}

				.edits_text {
					margin-bottom: 25px;
					font-size: 0.65rem;
					color: $color88;
				}
			}
		}

		.personal_info {
			margin: 24px 30px 34px 28px;

			.personal {
				margin-bottom: 20px;

				button {
					font-size: $size14;
					background-color: #3C84EF;
					padding: 4px 0 3px;
				}
			}
		}

		.mall {
			width: 100%;
			height: 100px;
			margin-bottom: 16px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.add_btn {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 48px;
			justify-content: space-between;
			align-content: center;
			align-items: center;

			text {
				height: 100%;
				align-content: center;
				align-items: center;
				text-align: center;
				justify-content: center;
				font-weight: 550;
			}

			.look {
				width: 40%;
				background-color: #FFFFFF;
				color: $color55;
				size: $size14;
			}

			.save {
				width: 60%;
				background-color: #3C84EF;
				color: #FFFFFF;
				size: $size14;
			}
		}
	}
</style>
