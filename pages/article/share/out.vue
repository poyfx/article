<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:''
			};
		},
		onLoad() {
			this.src = 'http://'+ this.$route.params.url
			console.log(this.src)
		}
	}
</script>

<style lang="scss">

</style>
