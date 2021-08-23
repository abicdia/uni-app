<template>
	<view>
		首页{{vuex_name}}
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
			// const data = {
			// 	email: 'test@a.com',
			// 	password: '123123'
			// }
			// const res=await this.$u.api.authLogin(data)
			// console.log(res)

			// 测试  vuex
			console.log(this.vuex_version, 888);
			this.$u.vuex('vuex_name', 'tom');
			console.log(this.vuex_name)
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>
