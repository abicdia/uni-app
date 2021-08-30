<template>
	<view>
		<u-upload ref="upload" :multiple="false" width="0" height="0" :deletable="false" :custom-btn="true" :show-progress="false"
			:before-upload="beforeUpload" :action="action" :form-data="formdata" :max-size="5 * 1024 * 1024"
			:show-upload-list="fasle" max-count="1" @on-success="onsuccess">
			<u-avatar :src="vuex_user.avatar_url" size="140" slot="addBtn"></u-avatar>
		</u-upload>

	</view>
</template>

<script>
	let _this = {};
	export default {
		name: "oss-upload",
		data() {
			return {
				action: 'http://www.example.com/upload',
				formdata: {},
				upFileName:''
			};
		},
		beforeCreate() {
			//注意小程序中this指向丢失
			_this = this
		},
		methods: {
			async onsuccess() {
				
				//移除预览区域
				this.$refs.upload.remove(0)
				//请求图片

				//更新头像
				await this.$u.api.userAvatar({"avatar": this.upFileName})
				await this.$u.utils.updateUser()
				this.$u.toast('更新成功')

			},
			async beforeUpload(index, list) {
				// 只上传偶数索引的文件
				console.log(list)
				const {
					file
				} = list[0];

				// #ifdef H5
				const fileName = file.name;
				// #endif

				// #ifndef H5
				const fileName = file.path;
				// #endif


				//处理文件名
				const suffix = fileName.slice(fileName.lastIndexOf('.'))


				const upFileName = _this.$u.guid(20) + suffix

				console.log(fileName, suffix, upFileName)
				_this.upFileName=upFileName;
				console.log(upFileName,888);
				//请求API，获取OSS  token
				const ossToken = await _this.$u.api.authOSSToken()
				_this.action = ossToken.host;
				_this.formdata = {
					'key': upFileName,
					'policy': ossToken.policy,
					'OSSAccessKeyId': ossToken.accessid,
					'success_action_status': '200', //让服务端返回200,不然，默认会返回204
					'signature': ossToken.signature,
				}
				console.log(ossToken);
				return true;

			}
		}
	}
</script>

<style>

</style>
