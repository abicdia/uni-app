<template>
	<view>
		<u-swiper :list="slides" name="img_url" height="320"></u-swiper>
		<view class="u-text-center u-m-t-30">
			<u-tabs :list="sortlist" bar-width="100" item-width="160" :current="currentsort" @change="change"></u-tabs>
		</view>

		<u-row gutter="16">
			<u-col span="6" v-for="item in goods">

				<navigator class="goods-item">
					<u-image width="100%" height="300rpx" :src="item.cover_url">
					</u-image>
					<view class="title u-line-1">{{item.title}}</view>
					<view class="u-flex u-row-between">
						<view class="price">￥{{item.price}}</view>
						<view class="sale">销量：{{item.sales}}</view>
					</view>
				</navigator>

			</u-col>
		</u-row>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imglist: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				sortlist: [{
						name: "默认"
					},
					{
						name: "销量"
					},
					{
						name: "推荐"
					},
					{
						name: "最新"
					}
				],
				currentsort: 0,
				slides: [],
				goods: []
			}
		},
		async onLoad() {
			const res = await this.$u.api.index()
			console.log(res)
			this.slides = res.slides;
			this.goods = res.goods.data;
		},
		methods: {
			change(index) {
				this.currentsort = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-item {
		padding: 40rpx;
		margin-top: 30rpx;
		box-shadow: 0 12rpx 20rpx 0 rgba(0, 0, 0, .1);

		.title {
			margin: 10rpx 0;
			font-weight: 500;
			font-size: 32rpx;
		}

		.price {
			color: red;
		}

		.sale {
			color: #888;
		}
	}
</style>
