<template>
	<view>
		api
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			uni.showToast({
				icon:'loading',
				title: 'ji',
				duration: 2000
			})
			
			setTimeout(()=>{
				uni.redirectTo({
					url:'../about/about'
				})
				
			},5000)
		},
		methods: {

		}
	}
</script>

<style>

</style>
