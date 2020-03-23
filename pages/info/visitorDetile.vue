<template>
	<view class="visitor bgcf">

	<!-- 	<titles2 :titles="titles" :color="false"></titles2> -->
		<view class="visitor_content">
			<view class="visitor_info flex border-Bottom">
				<image :src="user.profilePhoto" mode=""></image>
				<text>{{user.nickname}}</text>
			</view>
			<view class="visitor_article flex border-Bottom" v-for="(item,index) in list" :key="index">
				<view>
					<text v-show="item.accessType=='2'">转载了</text>
					<text v-show="item.accessType=='1'">浏览了</text>
					“{{item.title}}”
				</view>
				<text>于{{item.createTime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import titles2 from '@/components/title2.vue'
	import articleServer from '@/api/article.js'
	export default {
		data() {
			return {
				titles: '访客详细',
				userid: '', //个人id
				user: '',
				list: [], //

			}
		},
		onLoad(option) {
			this.userid = option.userid
			this.getDetile()
		},
		methods: {
			getDetile() {
				articleServer.getStatisticsDetile({
					id: this.userid,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							this.list = res.data.data.articleLogs;
							this.user = res.data.data.artUser;
						}
					},
					fail: err => {
						console.log(err)
					},
					complete: res => {
						console.log(res)
					}
				})
			}

		},
		components: {
			titles2
		}
	}
</script>

<style lang="scss">
	.visitor {
		.visitor_content {
			padding: 0 27px 0 28px;

			.visitor_info {
				padding: 0 0 13px;
				flex-direction: column;
				justify-content: center;
				align-content: center;
				align-items: center;

				text {
					font-size: $size14;
					color: #333333;
					line-height: 20px;
					font-weight: 550;
				}

				image {
					margin: 18px 0 6px;
					width: 53px;
					height: 53px;
					border-radius: 50%;
					border: 1px solid #f6f6f6;
				}
			}

			.visitor_article {
				flex-direction: column;
				justify-content: center;
				align-content: flex-start;
				align-items: flex-start;
				padding: 10px 0 13px;

				view {
					font-size: $size14;
					color: $color55;
					font-weight: 550;
					line-height: 30px;
					text{
						font-size: $size14;
						color: $color55;
						font-weight: 550;
						line-height: 30px;
					}
				}

				text {
					font-size: 0.65rem;
					color: $color88;
				}
			}
		}
	}
</style>
