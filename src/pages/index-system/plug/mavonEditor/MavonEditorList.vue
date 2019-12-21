<template>
	<div class="jq-page-contian">
		<jq-com-search :data="searchList" :rightList="rightList" @on-button="openModal"></jq-com-search>
		<vue-easy-print tableShow ref="easyPrint">
			<Table max-height="200" border :columns="columns" :data="dataList"></Table>
		</vue-easy-print>
		<Page :total="100" show-sizer />
	</div>
</template>
<script>
import vueEasyPrint from "vue-easy-print";
export default {
	components: {
		vueEasyPrint
	},
	computed: {
		btnStyle() {
			return type => {
				return {
					type
				}
			}
		}
	},
	data() {
		return {
			searchList: [
				{
					type: 'input',
					name: 'productName',
					disabled: false,
					value: '',
					attr: {
						clearable: true,
						placeholder: '输入门店名称'
					}
				}
			],
			rightList: [
				{
					type: 'button',
					color: 'theme',
					label: '添加',
					name: 'add',
					disabled: false,
					icon: 'icon-jia'
				},
				{
					type: 'button',
					color: 'gray',
					label: '刷新',
					name: 'updata',
					disabled: false,
					icon: 'icon-shuaxin'
				}
			],
			columns: [
				{
					title: '门店名称',
					key: 'name'
				},
				{
					title: '门店编号',
					key: 'sn'
				},
				{
					title: '创建时间',
					key: 'date'
				},
				{
					title: '操作',
					width: 100,
					render: (h) => {
						return h('div', [
							h('span', { class: 'table-btn' }, '编辑')
						])
					}
				}
			],
			dataList: [
				{
					name: '上海避风塘有限公司',
					sn: 'XL4424424423',
					date: '2017-12-23'
				},
				{
					name: '上海喜之郎有限公司',
					sn: 'XL426788687688',
					date: '2017-01-23'
				}
			]
		}
	},
	methods: {
		openModal(name) {
			// 添加
			if (name === 'add') {
				//this.$router.push('/plug/mavonEditor/add')
				this.$refs.easyPrint.print()
			}
		}
	}
}
</script>
<style lang="less" scoped>
</style>