<template>
	<view class="u-p-l-40 u-p-r-40">
		<u-form :error-type="errorType" :model="form" ref="uForm">
			<u-form-item label="昵称" prop="name" required>
				<u-input v-model="form.name" />
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: ''
				},
				errorType: ['message'],
				rules: {
					name: [{
						required: true,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
				}

			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
			this.form.name = this.vuex_user.name
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(async (valid) => {
					if (valid) {
						console.log(this.form);
						//更新用户信息
						await this.$u.api.userInfoUpdata(this.form)
						//请求用户信息
						//更新vuex_user
						this.$u.utils.updateUser()
						this.$u.toast('更新成功')
						
					} else {
						console.log('验证失败');
					}
				});
			}
		}
	}
</script>

<style>

</style>
