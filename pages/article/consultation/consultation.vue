<template>
	<view class="consultation">
		<titles :titles="titles" :isIcons='false' :color="true"></titles>
		<stitles :titles="stitles" :color="true"></stitles>

		<view class="follow">
			<text>请关注公众号“文章助手”，新的留言将自动推送给您</text>
		</view>

		<view class="autoReply bgcf">
			<view class="switch flex border-Bottom">
				<text>自动回复</text>
				<view>
					<switch checked="true" style="transform: scale(0.7);" @change="swit" />
				</view>
			</view>
			<view class="autoReply_content flex" v-show="switchs">
				<text>设置自动回复内容</text>
				<textarea placeholder="请输入自动回复内容" />
			</view>
		</view>
		<view class="consultation_name bgcf">
			<view class="list flex border-Bottom">
				<text>头像</text>
				<image src="../../../static/img/user.jpeg" mode="aspectFit"></image>
			</view>
			<view class="list flex">
				<text>称呼</text>
				<view>王晓达</view>
			</view>
		</view>
		<view class="consultation_btn">
			<view class="use" v-show="used">
				<button @tap="sure">确认并使用</button>
			</view>
			<view class="used" v-show="!used">
				<button class="confirm">确认</button>
				<button class="detele">删除该模块</button>
			</view>
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
				stitles: '快速咨询',
				used:true,
				switchs:true,
			};
		},
		methods:{
			swit(e){
				console.log(e)
				this.switchs = e.detail.value
			},
			sure(){
				this.used = false
			}
		},
		components: {
			titles,
			stitles,
		}
	}
</script>

<style lang="scss">
.consultation{
	.follow{
		padding: 12px 17px 12px 28px;
		margin-bottom: 10px;
		background-color:#FFF8D8 ;
		text{
			font-size: 0.65rem;
			color: $color55;
			line-height: 26px;
		}
	}
	.autoReply{
		padding: 0 27px 0px 28px;
		margin-bottom: 10px;
		.switch{
			padding: 15px 0 12px;
			justify-content: space-between;
			align-content: center;
			align-items: center;
			text{
				color: $color88;
				font-size: $size14;
			}
		}
		.autoReply_content{
			flex-direction: column;
			text{
				padding: 22px 0 19px;
				color: $color88;
				font-size: $size14;
			}
			textarea{
				height: 55px;
				font-size: $size16;
				color: $color55;
			}
		}
		
	}
	.consultation_name{
		padding: 0 27px 0px 28px;
		margin-bottom: 72px;
		.list{
			justify-content: space-between;
			align-content: center;
			align-items: center;
			padding: 22px 0 17px;
			text{
				font-size: $size14;
				color: $color88;
				
			}
			image{
				width: 52px;
				height: 52px;
				border-radius: 50%;
			}
			view{
				font-size: $size16;
				color: $color55;
				font-weight: 550;
			}
		}
	}
	.consultation_btn{
		padding-bottom: 30px;
		button{
			width:90%;
			font-size: $size14;
			padding: 6px 0 5px;
		}
		.use{
			button{
				color: #FFFFFF;
				background-color: $colorbtn;
				box-shadow: 0 2px 6px 0 #9DC4FF;
			}
		}
		.used{
			.confirm{
				
					color: #FFFFFF;
					background-color: $colorbtn;
					box-shadow: 0 2px 6px 0 #9DC4FF;
					margin-bottom: 10px;
			}
			.detele{
				
					color: #EA4141;
					box-shadow: 0 2px 6px 0 rgba($color: #000000, $alpha: 0.13);
				
			}
		}
	}
}
</style>
