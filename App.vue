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
	/* uni-page-head {
		display: none;
	} */

	/*每个页面公共css */
	.uni-tabbar .uni-tabbar__bd {
		flex-direction: row;
	}

	.uni-tabbar .uni-tabbar__icon {
		margin: 0;
	}

	.w-e-toolbar .w-e-menu i {
		color: #999;
		font-size: 1.1rem;
	}

	.text {
		-webkit-user-select: text;
	}



	div>p {
		margin: 17px 0;
	}

	img {

		max-width: 100% !important;

	}
</style>
