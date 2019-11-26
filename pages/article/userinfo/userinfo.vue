<template>
	<view class="userinfo">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<stitles :titles="stitles" :color="true"></stitles>

		<view class="userinfo_info bgcf flex">
			<view class="info_photo flex border-Bottom">
				<text>头像</text>
				<view class="flex">
					<image class="logo" src="../../../static/img/user.jpeg" mode="aspectFit"></image>
					<image class="right" src="../../../static/img/right.png" mode="aspectFit"></image>
				</view>
			</view>
			<view class="info_photo flex border-Bottom">
				<text>称呼</text>
				<view>王晓达</view>
			</view>
			<view class="info_photo flex ">
				<text>推荐语</text>
				<view class="flex" @click="openPopup">
					<picker @change="bindPickerChange" :value="index" :range="items">
						<view class="uni-input">{{items[index]}}</view>
					</picker>
					<image class="read" src="../../../static/img/select.png" mode="aspectFit"></image>
				</view>

			</view>
		</view>

		<view class="userinfo_content bgcf">
			<view class="userinfo_list flex border-Bottom">
				<text>公司</text>
				<view>章鱼科技</view>
			</view>
			<view class="userinfo_list flex border-Bottom">
				<text>职位</text>
				<view>产品经理</view>
			</view>
			<view class="userinfo_list flex border-Bottom">
				<text>显示手机</text>
				<view>
					<switch :checked="phoneCheck" style="transform: scale(0.7);" @change="phone" />
				</view>
			</view>
			<view class="userinfo_list flex border-Bottom" v-show="showPhone">
				<text>手机号</text>
				<view>13756780394</view>
			</view>
			<view class="userinfo_list flex border-Bottom">
				<text>显示微信</text>
				<view>
					<switch :checked="WXCheck" style="transform: scale(0.7);" @change="WX" />
				</view>
			</view>
			<view class="userinfo_list flex" v-show="showWX">
				<text>微信号</text>
				<view>kennyjl1243</view>
			</view>
		</view>

		<view class="userinfo_synopsis bgcf flex">
			<text>个人简介</text>
			<textarea maxlength="200" placeholder="填写个人简介" />
			</view>
		<view class="userinfo_btn">
			<button class="start">启动该模块</button>
			<button class="delete">删除该模块</button>
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
				stitles: '形象展示位',
				showPhone:false,
				showWX:false,
				phoneCheck:false,
				WXCheck:false,
				items:[
					'阅读推荐',
					'分享好文',
					'深度解读',
					'观点浅析',
				],
				index:1,
			};
		},
		methods:{
			  bindPickerChange: function(e) {
			          
			            this.index = e.target.value
			     },
			phone(e){
				console.log(e.detail.value)
				this.showPhone = e.detail.value;
			},
			WX(e){
				console.log(e.detail.value)
				this.showWX = e.detail.value;
			},
		},
		components: {
			titles,
			stitles,
		}
	}
</script>

<style lang="scss">
	.userinfo{
		.userinfo_info{
			padding: 0 27px 0px 28px ;
			margin-bottom: 12px;
			flex-direction: column;
			.info_photo{
				padding: 20px 0 17px;
				justify-content: space-between;
				align-content: center;
				align-items: center;
				text{
					color: $color88;
					font-size: $size14;
				}
				view{
					align-content: center;
					align-items: center;
					font-size: $size16;
					color: $color55;
				}
				.logo{
					width: 52px;
					height: 52px;
					margin-right: 7px;
				}
				.right{
					width: 6px;
					height: 11px;
				}
				.read{
					width: 6px;
					height: 11px;
					transform: rotate(90deg);
					margin-left: 6px;
				}
			}
		}
		.userinfo_content{
			padding: 0 27px 0px 28px ;
			margin-bottom: 10px;
			.userinfo_list{
				padding: 20px 0 17px;
				justify-content: space-between;
				align-content: center;
				align-items: center;
				text{
					color: $color88;
					font-size: $size14;
				}
				view{
					align-content: center;
					align-items: center;
					font-size: $size16;
					color: $color55;
				}
			}
		}
		.userinfo_synopsis{
			padding: 0 27px 30px 28px ;
			margin-bottom: 37px;
			flex-direction: column;
			text{
				padding: 20px 0 18px;
				font-size: $size14;
				color: $color88;
			}
			textarea{
				width: 100%;
				height: 48px;
				color: $color55;
				font-size: $color55;
			}
		}
		.userinfo_btn{
			padding: 0 27px 0px 28px ;
			margin-bottom: 37px;
			button{
				width: 100%;
				font-size: $size14;
				padding: 6px 0 5px;
				font-weight: 550;
				border-radius: 5px;
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
