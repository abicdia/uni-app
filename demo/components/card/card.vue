<template>
	<view :style="{color,fontSize:size}" @click="ck">
	<slot></slot>
	</view>
</template>

<script>
	export default {
		name:"card",
		props:{
			color:{
				type:String,
				default:'#000'
			},
			size:{
				type:String,
				default:'14px'
			}
		},
		methods:{
			ck()
			{
				console.log('ck');
				this.$emit('myclick','这个数据来自子组件')
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
