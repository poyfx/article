<template>
	<view class="personal bgcf">
		<view class="personal_content flex">
			<view class="personal_logo flex">
				<view class="personal_img flex">
					<image :src="footlogo" mode=""></image>
				</view>
				<view class="personal_text flex">
					<view>{{footnickname}}</view>
					<text>{{footcompany}}&nbsp;{{footposition}}</text>
				</view>
			</view>
			<view class="personal_add bgcf" v-show="!pre">
				<view v-if="showFoot == 0" @tap="adds(3)">+添加该模块</view>
				<view v-else @tap="adds(4)">编辑</view>
			</view>
			<view class="personal_add_pre bgcf" v-show="pre">
				<image src="../../../static/img/phone.png" v-show="showPhone == 1" mode="aspectFit"></image>
				<image src="../../../static/img/wechat.png" v-show="showWechat == 1" mode="aspectFit"></image>
			</view>
		</view>
		<view class="personal_tell">
			<text>{{userLife}}</text>
		</view>
	</view>
</template>

<script>
	import imgs from '@/static/img/user.jpeg'
	export default {
		props: {
			showFoot: {
				type: String/Number,
				default: 2,
			},
			footlogo: {
				type: String,
				default: '../static/img/user.jpeg',
			},
			footposition: {
				type: String,
				default: '职位',
			},

			footcompany: {
				type: String,
				default: '公司',
			},
			userLife: {
				type: String,
				default: '个人成功案例或是个人简介',
			},
			footnickname: {
				type: String,
				default: '昵称',
			},
			pre:{
				type:Boolean,
				default:false
			},
			showWechat:{
				type:String/Number,
				default:0,
			},
			showPhone:{
				type:String/Number,
				default:0,
			},
		},
		data() {
			return {
				showOhter: true,
			};
		},
		onLoad() {

		},
		methods: {
			adds(type) {
				this.$emit('addinfo', type)
			},
		}

	}
</script>

<style lang="scss">
	.personal {
		padding: 12px 17px 34px 20px;

		.personal_content {
			margin-bottom: 24px;
			border-radius: 3px;
			justify-content: space-between;
			align-content: center;
			align-items: center;

			.personal_logo {
				justify-content: space-between;
				align-content: center;
				align-items: center;

				.personal_img {
					margin-right: 8px;

					image {
						width: 52px;
						height: 52px;
						border-radius: 50%;
					}
				}

				.personal_text {
					flex-direction: column;

					view {
						font-size: $size18;
						color: $color55;
						font-weight: 550;
						margin-bottom: 5px;
					}

					text {
						font-size: 0.65rem;
						color: $color88;
					}
				}
			}

			.personal_add {
				border: 1px solid #dddddd;
				padding: 5px 8px;
				font-size: 0.65rem;
				color: $color55;
				
			}
			.personal_add_pre{
				padding: 5px 8px;
				font-size: 0.65rem;
				color: $color55;
				image{
					width: 26px;
					height: 26px;
					margin-right: 10px;
				}
			}
		}

		.personal_tell {
			text {
				font-size: 0.65rem;
				color: $color88;
			}
		}
	}
</style>
