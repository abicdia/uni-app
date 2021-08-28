<template>
	<view class="content">
		个人中心1
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
				console.log('ss')
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
