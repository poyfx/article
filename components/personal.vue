<template>
	<view class="personal bgcf">
		<view class="personal_content flex">
			<view class="personal_logo flex">
				<view class="personal_img flex" >
					<image src="../../../../static/img/user.jpeg" mode="aspectFit"></image>
				</view>
				<view class="personal_text flex">
						<view>昵称</view>
						<text>公司及职位</text>
				</view>
			</view>
			<view class="personal_add bgcf" @tap="adds">
				<view>+添加该模块</view>
			</view>
		</view>
		<view class="personal_tell">
			<text>个人成功案例或是个人简介</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			adds(){
			uni.navigateTo({
				url:'../../../user/user'
			})
		},
		}
		
	}
</script>

<style lang="scss">
.personal{
		padding: 12px 17px 34px 20px;
	.personal_content{
		margin-bottom: 24px;
		border-radius: 3px;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		.personal_logo{
			justify-content: space-between;
			align-content: center;
			align-items: center;
			.personal_img{
				margin-right: 8px;
				image{
					width: 52px;
					height: 52px;
					border-radius:50%;
				}
			}
			.personal_text{
				flex-direction: column;
					view{
						font-size: $size18;
						color: $color55;
						font-weight: 550;
						margin-bottom: 5px;
					}
					text{
						font-size: 0.65rem;
						color: $color88;
					}
			}
		}
		.personal_add{
			border: 1px solid #dddddd;
			padding: 5px 8px;
			font-size: 0.65rem;
			color: $color55;
		}
	}
	.personal_tell{
		text{
			font-size: 0.65rem;
			color: $color88;
		}
	}
}
</style>
