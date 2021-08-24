<template>
	<view>
		<navigator class="goods-item">
			<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="item.cover_url">
			</u-image>
			<view class="title u-line-1 u-skeleton-rect">{{item.title ? item.title:'商品名称'}}</view>
			<view class="u-flex u-row-between">
				<view class="price u-skeleton-rect">￥{{item.price}}</view>
				<view class="sale u-skeleton-rect">销量：{{item.sales}}</view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		name: "goods-card",
		data() {
			return {

			};
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
			width: 40%;
		}

		.sale {
			color: #888;
			width: 40%;
		}
	}
</style>
