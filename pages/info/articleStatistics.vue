<template>
	<view class="visitor bgcf">
<!-- 
		<titles2 :titles="titles" :color="false"></titles2> -->
		<view class="visitor_content">
			<view class="visitor_number flex">
				<text>{{type}}文章</text>
				<view>
					{{title}}
				</view>
			</view>
			<view class="allNumber">
				<view class="allNumber_title flex">
					<text>访问人数</text>
					<text>访问次数</text>
					<text>转发次数</text>
				</view>
				<view class="allNumber_num flex">
					<text>{{operate.count}}</text>
					<text>{{operate.browse_count}}</text>
					<text>{{operate.forward_count}}</text>
				</view>
			</view>
			<view class="visitor_many" v-for="(item,index) in history" :key="index">
				<view class="visitor_list flex border-Bottom">
					<view class="list_content flex" @tap="visitorDetile(item.borwse_user)">
						<view class="list_img">
							<image :src="item.borwse_photo" mode=""></image>
						</view>
						<view class="list_name">
							<view>{{item.browse_name}} <text>访问{{item.browse_count}}次，转发{{item.forward_count}}次</text></view>
							<text>最近访问&nbsp;&nbsp; {{item.now_time}}</text>
						</view>
					</view>

					<view class="list_right" v-show="item.forward_user != null">
						<image :src="item.forward_photo" mode="aspectFit"></image>
					</view>
				</view>
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
				titles: '访客追踪',
				id:'',//请求接口的文章id
				operate:'',//文章统计次数
				history:[],
				type:'',//文章类型/转载还是原创
				title:'',
			}
		},
		onLoad(option) {
			this.id = option.id;
			if(option.type==1){
				this.type =	'原创';
			}else{
				this.type =	'转发';
			}
			
			this.getArticleInfo()
		},
		methods: {
			getArticleInfo(){
				articleServer.getStatistics({
					id:this.id,
					success:res=>{
						console.log(res)
						if(res.statusCode == 200 && res.data.code == 0){
							this.operate = res.data.result.operate;
							this.history=res.data.result.history;
							this.title = res.data.result.title
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
			visitorDetile(userid){
				uni.navigateTo({
					url:'./visitorDetile?userid='+userid
				})
			},
		},
		components: {
			titles2
		}
	}
</script>

<style lang="scss">
	.visitor {
		height: 100vh;

		.visitor_content {
			padding: 0 8.5% 0 7.5%;

			.visitor_number {
				padding: 20px 0 21px;
				justify-content: space-between;
				align-content: flex-start;
				align-items: flex-start;
				flex-direction: column;

				text {
					color: #B38B6F;
					font-size: 0.6rem;
					margin-bottom: 4px;
				}

				view {
					color: $color55;
					font-size: $size18;
					line-height: 25px;
					margin-bottom: 16px;
				}

			}

			.allNumber {
				margin-bottom: 26px;
				width: 100%;
				padding: 18px 0px 13px;
				background-color: #F7F7F7;
				box-sizing: border-box;

				.allNumber_title {
					justify-content: space-between;
					align-content: center;
					align-items: center;

					text {
						width: 32%;
						font-size: 0.6rem;
						color: $color88;
						text-align: center;
					}
				}

				.allNumber_num {
					justify-content: space-between;
					align-content: center;
					align-items: center;

					text {
						width: 32%;
						font-size: 1.8rem;
						color: $color55;
						text-align: center;
						font-weight: 550;
						letter-spacing: 0;
					}
				}
			}

			.visitor_many {
				.visitor_list {
					justify-content: space-between;
					align-content: center;
					align-items: center;

					.list_content {
						padding: 12px 0 13px;
						align-content: center;
						align-items: center;

						.list_img {
							margin-right: 13px;

							image {
								border-radius: 50%;
								border: 1px solid #f6f6f6;
								width: 44px;
								height: 44px;
							}
						}

						.list_name {
							view {
								font-size: $size14;
								color: $color55;
								font-weight: 550;
								text{
									color: $color88;
									font-size: 0.65rem;
									font-weight: normal;
									margin-left: 15px;
								}
							}

							text {
								color: $color88;
								font-size: 0.65rem;
							}
						}
					}


					.list_right {
						image {
							border-radius: 50%;
							border: 1px solid #f6f6f6;
							width: 44px;
							height: 44px;
						}
					}
				}
			}
		}
	}
</style>
