<template>
	<view class="suspension flex">
		<view class="s_edit" v-show="!pre">
			<text  @tap="go(0)"  v-show="showAsk==0">编辑</text>
			<text  @tap="go(1)"  v-show="showAsk==1">编辑</text>
		</view>
		<view class="s_logo flex" :class="showAsk == 1? 'logo_active' : ''">
			<image :src="askSrc" mode=""></image>
		</view>
		<view class="s_ask" :class="showAsk == 1? 'ask_active' : ''">
			<text>问一问</text>
		</view>
	</view>
</template>

<script>
	import img from '../static/img/user.jpeg'
	export default {
		props:{
			askSrc:{
				type:String,
				default:'../../../../static/img/user.jpeg',
			},
			showAsk:{
				type:String/Number,
				default:0
			},
			pre:{//预览
				type:Boolean,
				default:false,
			},
			url:{
				type:String,
				default:'',
			}
		},
		data() {
			return {
				

			};
		},
		methods:{
			go(show){
				if(this.url == 'editingArticles'){
					uni.navigateTo({
						url:'../../consultation/consultation?show='+show+'&url='+'editingArticles'
					})
				}else{
					uni.navigateTo({
						url:'../../consultation/consultation?show='+show
					})
				}
				
			},
		}
	}
</script>

<style lang="scss">
	.suspension{
		z-index: 1;
		width: 55px;
		position: fixed;
		right:4px ;
		top:40%;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		.s_edit{
			border: 1px solid #dddddd;
			padding:4px 4px;
			line-height: 17px;
			font-size: 0.65rem;
			color: $color55;
			margin-bottom: 5px;
			text-align: center;
		}
		.s_logo{
			justify-content: center;
			align-content: center;
			align-items: center;
			border-radius: 50%;
			image{
				width:50px;
				height: 50px;
				border-radius: 50%;
				border: 1px solid #888888;
			}
		}
		.s_ask{
			width: 42px;
			background-color: #888888;
			color: #FFFFFF;
			padding: 2px 2px;
			position: relative;
			top: -8px;
			z-index: 2;
			text-align: center;
			margin: 0 auto;
			text{
				display: inline-block;
				font-size: 12px;
				transform: scale(0.8);
			}
		}
		.ask_active{
			background: #3C84EF ;
		}
		.logo_active{
			border:1px solid #3C84EF;
		}
	}
</style>
