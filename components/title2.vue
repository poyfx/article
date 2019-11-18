<template>
	<view class="header">
		<view class=" flex border-Bottom" :class="color? header_title:header_title_white">
			<view class="left" @tap="back">
				<uni-icons type="arrowleft" size="28" ></uni-icons>
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
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
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
	background-color: #f4f4f4;
	justify-content: center;
	color: #212832;
	font-size: 0.85rem;
		font-weight: 550;
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
/* 左边返回图标 */
.left {
	width: 25px;
	height: 25px;
	margin-left: 5px;
	position: absolute;
	left: 6px;
	top: 20%;
	color: #fff;
}
</style>
