<template>
	<view>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-30 u-m-t-30">
			<view class="u-m-r-80 tx">
				<oss-upload></oss-upload>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{vuex_user.name}}</view>
				<view class="u-font-14 u-tips-color">邮箱:{{vuex_user.email}}</view>
			</view>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" @click="toBaseInfo" title="个人信息"></u-cell-item>
			</u-cell-group>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="所有订单"></u-cell-item>
				<u-cell-item icon="star" title="商品收藏"></u-cell-item>
				<u-cell-item icon="map" title="收获地址"></u-cell-item>
			</u-cell-group>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="reload" @click="logout" title="退出登录"></u-cell-item>
			</u-cell-group>
		</view>

		<!-- 	<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置"></u-cell-item>
			</u-cell-group>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: 'https://uviewui.com/common/logo.png',
				show: true
			}
		},
		onLoad() {
			if (!this.$u.utils.isLogin()) return
		},
		methods: {
			toBaseInfo() {
				console.log('ss');
				this.$u.route({
					url: 'pages/center/baseinfo'
				})
			},
			//退出登录
			async logout() {
				await this.$u.api.authLogout()
				this.$u.toast('退出成功')

				//跳转到首页
				setTimeout(() => {
					//清除缓存的token和用户信息
					this.$u.vuex('vuex_token', null)
					this.$u.vuex('vuex_user', {})

					this.$u.route({
						type: "reLaunch",
						url: 'pages/index/index'
					})
				}, 1500)
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}

	.tx {
		margin-top: -70rpx;
		width: 70rpx;
		height: 70rpx;
	}
</style>
