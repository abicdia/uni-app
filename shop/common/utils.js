const install = (Vue, vm) => {

	//是否登录
	const isLogin = (() => {
		//如果没有token到登录界面
		const token = vm.vuex_token;

		if (!token) {
			//来自哪个页面
			const currentPage = getCurrentPages().pop();
			//获取页面路径和地址参数
			const {
				options,
				route
			} = currentPage;
			const optionsKeys = Object.keys(options)
			let params = ''
			if (optionsKeys.length !== 0) {
				params = optionsKeys.reduce((pre, cur) => {
					return `${pre}${cur}=${options[cur] }&`
				}, "?").slice(0, -1)
			}
			uni.setStorageSync('back_url', route + params)
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

	//更新用户信息
	const updateUser = async () => {
		//请求用户信息
		const userInfo = await vm.$u.api.userInfo()
		console.log(userInfo)
		//缓存用户信息
		vm.$u.vuex('vuex_user',userInfo)
	}


	vm.$u.utils = {
		isLogin,
		updateUser
	}
}

export default {
	install
}
