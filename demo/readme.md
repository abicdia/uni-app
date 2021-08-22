## 目录结构
```
pages 页面存放目录
static 静态文件资源目录
App.vue 应用入口文件  和小程序app.js类似
main.js  应用入口文件 注册vue组件
manifest.json 项目配置
pages.json  页面配置
uni.scss  全局变量

common 存放公用文件
components 自定义组件
store vuex目录


unpackage 编译后的文件

```
## 笔记

```
v-bind  :绑定属性
v-on @  绑定事件
v-model 双向绑定
v-if   条件判断
v-show  条件判断  <block>空标签不起作用
v-for  列表渲染

```
## 事件绑定
```
v-on @  绑定事件

.stop 阻止冒泡

	<view @click="c1">
			我是父子
			<view @click.stop="c2">
				我是儿子
			</view>
		</view>
```

## 自定义组件

```
<!--
 easycom 可以直接使用组件
父->子  props传递数据
子->父  通过自定义事件 
父  @myclick="myclick"   
	myclick(msg) {
				console.log('myclick'+msg)
			}
子  this.$emit('myclick','这个数据来自子组件')
子组件可以用插槽slot，让父组件显示内容
-->
```

## rpx使用

```
px em rem vh wh rpx
推荐使用rpx 会根据不同设备进行换算
在750标准型 2rpx=1px
推荐使用flex布局
```
## 生命周期

```
    应用的生命周期 App.vue
	export default {
		// 应用初始化完成执行 ，全局只执行一次
		onLaunch: function() {
			//登录处理，全局变量
			console.log('App Launch')
		},
		// 应用显示执行，或后台进入前台 
		onShow: function() {
			console.log('App Show')
		},
		// 应用隐藏执行，或前台进入后台 
		onHide: function() {
			console.log('App Hide')
		}
	}
	
	页面的生命周期
	onLoad() {
		console.log("page onLoad");
		setTimeout(()=>{
			uni.redirectTo({
				url:'../about/about'
			})
		},2000)
	},
	//页面初次渲染
	onReady() {
		console.log("page onReady");
	},
	//页面显示触发
	onShow() {
		console.log("page onShow");
	},
	//页面卸载触发
	onUnload() {
		console.log("page onUnload");
	},
	//页面隐藏
	onHide() {
		console.log("page onHide");
	},
	
	-----打开----
	App Launch
	App Show
	page onLoad
	page onShow
	page onReady
	-----切后台----
	page onHide
	App Hide
    -----切前台----
	App Show
	page onShow
	
	
	组件的生命周期
	//在实例初始化后，数据观测和event和wacther事件配置之前被调用
	beforeCreate() {
		console.log("beforeCreate");
	},
	//实例创建完成，未挂载，完成数据观测和event和wacther事件配置...,$el property 不可以用
	created() {
		console.log("created");
	},
	//实例挂载可以操作dom
	mounted() {
		console.log("mounted");
	},
	//组件销毁
	destroyed() {
		console.log("destroyed");
	}
	
	-----打开----
	App Launch
	App Show
	beforeCreate
	created
	page onLoad
	page onShow
    mounted
    page onReady
	-----切页面----
	page onUnload
	destroyed
```