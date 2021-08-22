<template>
	<view>
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		async onLoad() {
			// await this.$u.get('/api/index').then(res => {
			// 	console.log(res)
			// })
			// console.log('sss');
			// const res =await this.$u.get('/api/index')
			// console.log(res);
			// console.log("111");

			// const res1=await this.$u.patch('/api/orders/1/confirm',{name:'tom'})
			// console.log(res1,'op');

			//集中管理api
			// const res =await this.$u.api.index()
			// console.log(res)

			//测试登录
			const data = {
				email: 'test@a.com',
				password: '123123'
			}
			const res=await this.$u.api.authLogin(data)
			console.log(res)
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
