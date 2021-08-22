<template>
	<view>
		wsioyhdeioyu
	</view>
</template>

<script>
	export default {
		name: "lief",
		data() {
			return {

			};
		},
		//在实例初始化后，数据观测和event和wacther事件配置之前被调用
		beforeCreate() {
			console.log("beforeCreate");
		},
		//实例创建完成，未挂载，完成数据观测和event和wacther事件配置...,$el property 不可以用
		created() {
			console.log("created");
		},
		//实例挂载可以操作dom
		mounted() {
			console.log("mounted");
		},
		//组件销毁
		destroyed() {
			console.log("destroyed");
		}
	}
</script>

<style>

</style>
