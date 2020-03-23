<template>
	<view class="info">
		<!-- 我的文章   发布收藏  草稿箱 -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
			<view class="info_content">
				<view class="info_myinfo_content bgcf" v-for="(item,index) in articleInfo" :key="index">
					<!-- 我的收藏 -->
					<view class="info_article bgcf flex border-Bottom">
						<view class="info_article_title flex">
							<view>{{item.title}}</view>
							<text v-if="item.publishType == 1">原创 &nbsp;{{item.createTime}}</text>
							<text v-else>转载 &nbsp;{{item.createTime}}</text>
						</view>
						<view class="info_article_number flex">
							<image src="../../static/img/right.png" mode="aspectFit"></image>
						</view>
					</view>
				</view>

			</view>
		</mescroll-body>
	</view>
</template>

<script>
	import titles from '../../components/title.vue'
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import articleServer from '@/api/get_wx_login.js'
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin],
		data() {
			return {
				titles: '我的文章',
				TabCur: 1,
				tabList: [{
						name: '我的发布',
					},
					{
						name: '我的收藏',
					},
					{
						name: '草稿箱',
					},
				],
				// 列表数据
				articleInfo: [], //文章内容
				mescroll: null, //mescroll实例对象 (此行可删,mixins已默认)
				// 下拉刷新的常用配置
				downOption: {
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
					native: false // 启用系统自带的下拉组件,默认false;仅mescroll-body生效,mescroll-uni无效
				},
				// 上拉加载的常用配置
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
			}
		},
		onLoad() {

			// this.getArticleNumber()
		},
		methods: {
			downCallback(page) {


				this.getArticleNumber(page)
				// 第1种: 请求具体接口
				// uni.request({
				// 	url: 'xxxx',
				// 	success: () => {
				// 		// 请求成功,隐藏加载状态
				// 		this.mescroll.endSuccess()
				// 	},
				// 	fail: () => {
				// 		// 请求失败,隐藏加载状态
				// 		this.mescroll.endErr()
				// 	}
				// })
				// 第2种: 下拉刷新和上拉加载调同样的接口, 那么不用第1种方式, 直接mescroll.resetUpScroll()即可
				this.mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				// 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
				this.mescroll.endSuccess()
				// 若整个downCallback方法仅调用mescroll.resetUpScroll(),则downCallback方法可删 (mixins已默认)
			},
			tabChange(index) {
				if (index == 0) {
					uni.navigateTo({
						url: './info'
					})
				} else if (index == 1) {
					uni.navigateTo({
						url: './collection'
					})
				} else if (index == 2) {

					uni.navigateTo({
						url: './drafts'
					})
				}
			},
			upCallback(page) {

				this.getArticleNumber(page)

				// uni.request({
				// 	url: 'xxxx?pageNum=' + pageNum + '&pageSize=' + pageSize,
				// 	success: (data) => {
				// 		// 接口返回的当前页数据列表 (数组)
				// 		let curPageData = data.xxx;
				// 		// 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
				// 		let curPageLen = curPageData.length;
				// 		// 接口返回的总页数 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
				// 		let totalPage = data.xxx;
				// 		// 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
				// 		let totalSize = data.xxx;
				// 		// 接口返回的是否有下一页 (true/false)
				// 		let hasNext = data.xxx;

				// 		//设置列表数据
				// 		if (page.num == 1) this.dataList = []; //如果是第一页需手动置空列表
				// 		this.dataList = this.dataList.concat(curPageData); //追加新数据

				// 		// 请求成功,隐藏加载状态
				// 		//方法一(推荐): 后台接口有返回列表的总页数 totalPage
				// 		this.mescroll.endByPage(curPageLen, totalPage);

				// 		//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
				// 		//this.mescroll.endBySize(curPageLen, totalSize); 

				// 		//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
				// 		//this.mescroll.endSuccess(curPageLen, hasNext); 

				// 		//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
				// 		//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
				// 		//如果传了hasNext,则翻到第二页即可显示无更多数据.
				// 		//this.mescroll.endSuccess(curPageLen);

				// 		// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
				// 		this.$nextTick(() => {
				// 			this.mescroll.endSuccess(curPageLen)
				// 		})



				// 		// 提示: 您无需额外维护页码和判断显示空布局,mescroll已自动处理好.
				// 		// 当您发现结果和预期不一样时, 建议再认真检查以上参数是否传正确
				// 	},
				// 	fail: () => {
				// 		//  请求失败,隐藏加载状态
				// 		this.mescroll.endErr()
				// 	}
				// })
			},
			getArticleNumber(page) {
				// uni.showLoading({
				// 	mask: true,
				// 	title: '加载中'
				// })
				let pageNum = page.num; // 页码, 默认从1开始
				let pageSize = page.size; // 页长, 默认每页10条
				articleServer.getArticle({
					status: 3,
					size: pageNum,
					success: res => {
						console.log(res)
						if (res.statusCode == 200 && res.data.code == 0) {
							// uni.hideLoading()
							// this.articleInfo = res.data.articles

							// 接口返回的当前页数据列表 (数组)
							let curPageData = res.data.data.articles;
							// 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
							let curPageLen = curPageData.length;
							// 0 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
							let x = res.data.data.totle / 10; //分页整数
							let y = res.data.data.totle % 10; //分页余
							let totalPage;
							if (y == 0) {
								// console.log(res.data.data.totle / 10)
								if (x > 1) {
									totalPage = x;
								} else {
									totalPage = 1;
								}

							} else {
								if (x > 1) {
									totalPage = x + 1;
								} else {
									totalPage = 1
								}
							}

							// 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
							let totalSize = res.data.data.totle;
							// 接口返回的是否有下一页 (true/false)
							if (totalPage == 1) {
								let hasNext = false;
							} else {
								let hasNext = true;
							}



							//设置列表数据
							if (page.num == 1) this.articleInfo = []; //如果是第一页需手动置空列表
							this.articleInfo = this.articleInfo.concat(curPageData); //追加新数据
							console.log(this.articleInfo)
							// 请求成功,隐藏加载状态
							//方法一(推荐): 后台接口有返回列表的总页数 totalPage
							this.mescroll.endByPage(curPageLen, totalPage);

							//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
							//this.mescroll.endBySize(curPageLen, totalSize); 

							//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
							//this.mescroll.endSuccess(curPageLen, hasNext); 

							//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
							//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
							//如果传了hasNext,则翻到第二页即可显示无更多数据.
							//this.mescroll.endSuccess(curPageLen);

							// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
							// this.$nextTick(() => {
							// 	this.mescroll.endSuccess(curPageLen)
							// })



							// 提示: 您无需额外维护页码和判断显示空布局,mescroll已自动处理好.
							// 当您发现结果和预期不一样时, 建议再认真检查以上参数是否传正确



						}
					},
					fail: err => {
						// uni.hideLoading()
						console.log(err)
					},
					complete: res => {
						// uni.hideLoading()
						console.log(res)
					}
				})
			},
			goVisitor() {
				uni.navigateTo({
					url: './visitor'
				})
			},
		},
		components: {
			titles,
			WucTab
		}
	}
</script>

<style lang="scss">
	.info {
		.info_content {
			.info_nav {
				padding: 20px 36px 20px 39px;
				justify-content: space-between;

				view {
					display: flex;
					flex-direction: column;
					align-content: center;
					align-items: center;

					image {
						width: 32px;
						height: 31px;
					}

					text {
						color: $color88;
						font-size: 0.6rem;
					}
				}
			}

			.info_myinfo_content {
				padding: 0 27px 0 28px;

				.info_myinfo {

					justify-content: space-between;
					align-content: center;
					align-items: center;


					.info_myinfo_take {
						justify-content: space-between;
						align-content: center;
						align-items: center;
						flex: 1;

						text {
							width: 25%;
							padding: 22px 0 20px 0;
							font-size: 0.6rem;
							color: $color88;
						}

						.active {

							font-size: $size16;
							color: $colorbtn;
						}
					}

					.info_myinfo_box {
						font-size: 0.6rem;
						color: $color88;
					}
				}

				.info_article {
					padding: 17px 0 15px;
					justify-content: space-between;
					align-content: center;
					align-items: center;

					.info_article_title {
						flex-direction: column;
						flex-grow: 1;
						margin-right: 30px;

						view {
							text-overflow: ellipsis;
							font-size: $size14;
							color: $color55;
							font-weight: 550;
							margin-bottom: 3px;
						}

						text {
							color: $color88;
							font-size: 0.6rem;
						}
					}

					.info_article_number {
						color: #B38B6F;
						font-size: 0.6rem;
						align-content: center;
						align-items: center;

						image {
							width: 6px;
							height: 11px;
						}
					}
				}
			}

		}
	}
</style>
