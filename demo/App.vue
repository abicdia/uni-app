<script>
	/**
	应用的生命周期
	
	页面的生命周期
		
	组件的生命周期
	
	**/
	export default {
		// 应用初始化完成执行 ，全局只执行一次
		onLaunch: function() {
			//登录处理，全局变量
			console.log('App Launch')
		},
		// 应用显示执行，或后台进入前台 
		onShow: function() {
			console.log('App Show')
		},
		// 应用隐藏执行，或前台进入后台 
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
