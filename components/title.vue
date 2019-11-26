<template>
	<view class="header">
		<view :class="color?header_bar:header_bar_white">
			<view :class="color?top_view:top_view_white"></view>
		</view>
		<view class=" flex" :class="color? header_title:header_title_white">
			<view class="left" @tap="back">
				<uni-icons type="closeempty" size="32" :class="{'icons':isIcons}"></uni-icons>
			</view>
			<view>{{titles}}</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		props:{
			titles:{
				type:String,
				value:'',
			},
			color:{
				type:Boolean,
				value:true,
			},
			isIcons:{
				type:Boolean,
				value:false,
			},
		},
		data() {
			return {
				header_title:'header_title',
				header_title_white:'header_title_white',
				header_bar:'header_bar',
				header_bar_white:'header_bar_white',
				top_view_white:'top_view_white',
				top_view:'top_view',
			};
		},
		methods:{
			back(){
				uni.reLaunch({
					url:'../../index/index'
				})
			},
		},
		components:{
			uniIcons
		}
	}
</script>

<style lang="scss">

/* 整个头部 */
.header {
	width: 100%;
	height: 44px;
	flex-direction: column;
	// box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.12);
	position: relative;
	z-index: 999;
}

/* 手机顶部状态栏 */
.header_bar {
	height: var(--status-bar-height);
	width: 100%;
	background: #EDEDED;
}

/* VIP标题 */
.header_title {
	width: 100%;
	height: 44px;
	padding: 7px 3px;
	box-sizing: border-box;
	/* background-color: black; */
	position: fixed;
	align-content: center;
	align-items: center;
	align-self: center;
	background-color: #EDEDED;
	justify-content: center;
	color: #212832;
	font-size: 0.85rem;
		font-weight: 550;
}
.top_view {
	height: var(--status-bar-height);
	width: 100%;
	position: fixed;
	background-color: #EDEDED;
	top: 0;
	z-index: 9999;
}
/* 手机顶部状态栏 */
.header_bar_white {
	height: var(--status-bar-height);
	width: 100%;
	background: #FFFFFF;
}
/* VAT标题 */
.header_title_white {
	width: 100%;
	height: 44px;
	padding: 7px 3px;
	box-sizing: border-box;
	/* background-color: black; */
	position: fixed;
	align-content: center;
	align-items: center;
	align-self: center;
	background-color: #FFFFFF;
	justify-content: center;
	color: #212832;
	font-size: 0.85rem;
		font-weight: 550;
}
.top_view_white {
	height: var(--status-bar-height);
	width: 100%;
	position: fixed;
	background-color: #FFFFFF;
	top: 0;
	z-index: 9999;
}
/* 左边返回图标 */
.left {
	width: 32px;
	height: 32px;
	margin-left: 5px;
	position: absolute;
	left: 6px;
	top: 20%;
	color: #fff;
}
.icons {
	display: none;
}
</style>
