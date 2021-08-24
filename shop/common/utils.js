const install = (Vue, vm) => {

	//是否登录
	const isLogin = (() => {
		//如果没有token到登录界面
		const token = vm.vuex_token;
		if (!token) {
			vm.$u.toast('请登录')
			setTimeout(() => {
				vm.$u.route({
					type: 'redirectTo',
					url: "pages/auth/login",
				})
			}, 1500)
			return false
		}
		return true
	})
	vm.$u.utils = {
		isLogin
	}
}

export default {
	install
}
