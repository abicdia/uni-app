<template>
	<view>
		<u-swiper :list="slides" name="img_url" height="320"></u-swiper>
		<view class="u-text-center u-m-t-30">
			<u-tabs :list="sortlist" bar-width="100" item-width="160" :current="currentsort" @change="change"></u-tabs>
		</view>

		<u-row gutter="16" class="u-skeleton">
			<!-- 	<u-col span="6" v-for="item in goods.length!==0?goods:[{},{},{},{}]"> -->
			<u-col span="6" v-for="item in goods">
				<goods-card :item="item"></goods-card>

			</u-col>
		</u-row>

		<!--引用组件-->
		<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				sortlist: [{
						name: "默认"
					},
					{
						name: "销量"
					},
					{
						name: "推荐"
					},
					{
						name: "最新"
					}
				],
				currentsort: 0,
				slides: [],
				goods: [],
				page: 1,
			}
		},
		async onLoad() {
			const currentPage = getCurrentPages().pop();
			const options = currentPage.options;
			const optionsKeys = Object.keys(options)
			let params = ''
			if (optionsKeys.length !== 0) {
				params = optionsKeys.reduce((pre, cur) => {
					return pre + cur + '=' + options[cur] + '&'
				}, "?").slice(0,-1)
			}
			console.log(params);
			this.getlist()
		},
		onReachBottom() {
			this.page += 1;
			this.getlist()
		},
		methods: {
			async getlist() {
				this.loading = true
				let data = {
					page: this.page
				}
				if (this.currentsort == 1) data.sales = 1
				if (this.currentsort == 2) data.recommend = 1
				if (this.currentsort == 3) data.new = 1
				const res = await this.$u.api.index(data)
				this.loading = false
				this.slides = res.slides;
				this.goods = [...this.goods, ...res.goods.data];
			},
			change(index) {
				this.currentsort = index;
				this.goods = [];
				this.page = 1;
				this.getlist()
			}
		}
	}
</script>
