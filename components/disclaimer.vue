<template>
	<view class="disclaimer bgcf">
		<view class="disclaimer_title border-Bottom">
			<text>本文由公众号“{{name}}”代作者发布</text>
		</view>
		<view class="disclaimer_content flex">
			<text>免责声明：</text>
			<text>1.文章版权均为原作者所有，请联系原作者申请授权，如发现版权问题，请联系XXXXXXXX，我们表示诚挚歉意，并予以及时处理</text>
			<text>2.本小程序完全免费，方便网友统计用，其用于商业目的产生的任何责任与本软件及开发者无关</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				value: '文章助手'
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
.disclaimer{
	// padding: 0 30px 0 28px;
	.disclaimer_title{
		padding: 16px 0;
		text{
			font-size:0.65rem;
			color: $color88;
		}
	}
	.disclaimer_content{
		flex-direction: column;
		padding: 12px 0 0px;
		text{
			font-size:0.65rem;
			color: $color88;
			line-height: 17px;
		}
	}
}
</style>
