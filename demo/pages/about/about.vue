<template>
	<view>
		<view @click="show">点击事件</view>

		<view @click="c1">
			我是父子
			<view @click.stop="c2">
				我是儿子
			</view>
		</view>

		<text>222</text>

		<text>333</text>

		<scroll-view class="scroll" :scroll-y="true" @scroll="scroll">
			<view v-for="i in 100">{{i}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			show() {
				console.log('jhijhk');
			},
			c1() {
				console.log('c1');
			},
			c2() {
				console.log('c2');
			},
			scroll(e)
			{
				console.log(e);
			}
		}
	}
</script>

<style>
	.scroll {
		height: 400rpx;
	}
</style>
