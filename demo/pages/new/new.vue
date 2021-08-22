<template>
	<view>
		新闻界面
		<card color="red" size="40px">sss</card>
		<card color="green" @myclick="myclick">ddd</card>

		<view class="bg">
			<view>111</view>
			<view class="bgtext font">222</view>
		</view>
	</view>
</template>

<!--
 easycom 可以直接使用组件
父->子  props传递数据
子->父  通过自定义事件 
父  @myclick="myclick"   
	myclick(msg) {
				console.log('myclick'+msg)
			}
子  this.$emit('myclick','这个数据来自子组件')
子组件可以用插槽slot，让父组件显示内容
-->
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			myclick(msg) {
				console.log('myclick' + msg)
			}
		}
	}
</script>


<style lang="less" scoped>
	@import './new.css';
	.bg {
		background-color: red;
		.bgtext{
			font-size: 36rpx;
		}
	}
</style>
