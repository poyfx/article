<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.uni-tabbar .uni-tabbar__bd {
		flex-direction: row;
	}

	.uni-tabbar .uni-tabbar__icon {
		margin: 0;
	}

</style>
