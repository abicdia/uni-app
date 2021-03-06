// /common/http.api.js

// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
// api数目多了就不写了
// let indexUrl = '/api/index';

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 此处使用了传入的params参数，一切自定义即可
	vm.$u.api = {}
	//首页
	vm.$u.api.index = (params = {}) => vm.$u.get('/api/index', params);

	//认证
	vm.$u.api.authLogin = (params = {}) => vm.$u.post('/api/auth/login', params); //登录
	vm.$u.api.authRegister = (params = {}) => vm.$u.post('/api/auth/register', params); //注册
	vm.$u.api.authLogout = (params = {}) => vm.$u.post('/api/auth/logout', params); //退出登录
	vm.$u.api.authOSSToken = (params = {}) => vm.$u.get('/api/auth/oss/token'); //OSS Token

	//用户
	//用户详情
	vm.$u.api.userInfo = (params = {}) => vm.$u.get('/api/user'); //用户详情
	vm.$u.api.userInfoUpdata = (params = {}) => vm.$u.put('/api/user', params); //修改用户信息
	vm.$u.api.userAvatar = (params = {}) => vm.$u.patch('/api/user/avatar', params); //更新头像

	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	// vm.$u.api = {
	// 	index,
	// 	authLogin
	// };
}

export default {
	install
}
