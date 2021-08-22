<template>
	<view :title="title" :date="1+1" @click="show()">{{title}}
		<input v-model="title" />
		<view v-if="flag">1</view>
		<view v-else>0</view>
		<block v-if="flag">
			<!-- 空标签 -->
			<view>show</view>
		</block>

		<block v-show="flag">
			<!-- 空标签 -->
			<view>show</view>
		</block>

		<view v-for="(item,index) in arr">
			{{index}}-{{item}}
		</view>

		<view v-for="(item,key) in person">
			{{key}}-{{item}}
		</view>
		
		
		<!-- #ifdef H5 -->
	<view v-for="(item,key) in persons">
			{{key}}-{{item.name}}-{{item.age}}
		</view>
		<!-- #endif -->
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				name: "2ss",
				flag: true,
				persons: [{
					name: 'aaa',
					age: 15
				}, {
					name: 'bb',
					age: 12
				}],
				person: {
					name: 'aaa',
					age: 15
				},
				arr: [
					1, 2, 3
				]
			}
		},
		onLoad() {
			setTimeout(() => {
				this.title += " tom"
				this.flag = false
			}, 2000)
		},
		methods: {
			show() {
				console.log("ddd")
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
