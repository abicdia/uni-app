<template>
	<view class="content">
		个人中心
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return
			// 
			console.log('sss')
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
