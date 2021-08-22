<template>
	<view>
		life
<!-- 		<lief></lief> -->
	</view>
</template>

<!-- 	
    应用的生命周期
	
	页面的生命周期
	-----打开----
	App Launch
	App Show
	page onLoad
	page onShow
	page onReady
	-----切后台----
	page onHide
	App Hide
    -----切前台----
	App Show
	page onShow
	
	
	组件的生命周期
	-----打开----
	App Launch
	App Show
	beforeCreate
	created
	page onLoad
	page onShow
    mounted
    page onReady
	-----切页面----
	page onUnload
	destroyed
	
	
 -->
<script>
	export default {
		data() {
			return {

			}
		},
		//页面加载
		onLoad() {
			console.log("page onLoad");
			setTimeout(()=>{
				uni.redirectTo({
					url:'../about/about'
				})
			},2000)
		},
		//页面初次渲染
		onReady() {
			console.log("page onReady");
		},
		//页面显示触发
		onShow() {
			console.log("page onShow");
		},
		//页面卸载触发
		onUnload() {
			console.log("page onUnload");
		},
		//页面隐藏
		onHide() {
			console.log("page onHide");
		},
		methods: {

		}
	}
</script>

<style>

</style>
