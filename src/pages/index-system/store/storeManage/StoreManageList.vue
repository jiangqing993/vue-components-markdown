<template>
	<div class="jq-page-contian">
		<jq-com-search :data="searchList" :rightList="rightList" @on-button="openModal"></jq-com-search>
		<Table max-height="200" border :columns="columns" :data="dataList"></Table>
		<Page :total="100" show-sizer />
	</div>
</template>
<script>
import _ from 'lodash'
export default {
	components: {

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
				},
				{
					type: 'select',
					name: 'unit',
					disabled: false,
					value: '',
					attr: {
						clearable: true,
						filterable: true,
						placeholder: '请选择单位',
						options: []
					}
				},
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
			],
			list: [
				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": null
				},
				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": {
						"packingId": 27,
						"packingUnitId": 47,
						"packingName": "箱",
						"packingInfoId": 24,
						"packageValue": 10,
						"weightUnitId": 5,
						"weightValue": 2,
						"volumeUnitId": 8,
						"volumeValue": 4,
						"smallUnitId": 15,
						"smallUnitName": "台",
						"smallUnitType": "Quantity_Unit",
						"childList": null,
						"sort": 0,
						"supplierPackingId": 15
					}
				},
				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": {
						"packingId": 28,
						"packingUnitId": 48,
						"packingName": "托",
						"packingInfoId": 25,
						"packageValue": 1,
						"weightUnitId": 5,
						"weightValue": 1,
						"volumeUnitId": 8,
						"volumeValue": 1,
						"smallUnitId": 47,
						"smallUnitName": "箱",
						"smallUnitType": "package_Unit",
						"childList": null,
						"sort": 1,
						"supplierPackingId": 15
					}
				},

				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": {
						"packingId": 41,
						"packingUnitId": 54,
						"packingName": "车",
						"packingInfoId": 39,
						"packageValue": 2,
						"weightUnitId": 5,
						"weightValue": 1,
						"volumeUnitId": 8,
						"volumeValue": 1,
						"smallUnitId": 48,
						"smallUnitName": "托",
						"smallUnitType": "package_Unit",
						"childList": null,
						"sort": 2,
						"supplierPackingId": 15
					}
				},
				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": {
						"packingId": 41,
						"packingUnitId": 54,
						"packingName": "车",
						"packingInfoId": 38,
						"packageValue": 10,
						"weightUnitId": 5,
						"weightValue": 2,
						"volumeUnitId": 8,
						"volumeValue": 2,
						"smallUnitId": 48,
						"smallUnitName": "托",
						"smallUnitType": "package_Unit",
						"childList": null,
						"sort": 2,
						"supplierPackingId": 15
					}
				},
				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": {
						"packingId": 93,
						"packingUnitId": 108,
						"packingName": "箱",
						"packingInfoId": 97,
						"packageValue": 12,
						"weightUnitId": 5,
						"weightValue": 1,
						"volumeUnitId": 8,
						"volumeValue": 1,
						"smallUnitId": 107,
						"smallUnitName": "托",
						"smallUnitType": "package_Unit",
						"childList": null,
						"sort": 1,
						"supplierPackingId": 99
					}
				},
				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": {
						"packingId": 92,
						"packingUnitId": 107,
						"packingName": "托",
						"packingInfoId": 95,
						"packageValue": 20,
						"weightUnitId": 5,
						"weightValue": 1,
						"volumeUnitId": 8,
						"volumeValue": 1,
						"smallUnitId": 15,
						"smallUnitName": "台",
						"smallUnitType": "Quantity_Unit",
						"childList": null,
						"sort": 0,
						"supplierPackingId": 99
					}
				},
				{
					"baseUnitId": "63",
					"baseUnitName": "台",
					"unitType": "Quantity_Unit",
					"packingUnitDTO": {
						"packingId": 93,
						"packingUnitId": 108,
						"packingName": "箱",
						"packingInfoId": 96,
						"packageValue": 2,
						"weightUnitId": 5,
						"weightValue": 2,
						"volumeUnitId": 8,
						"volumeValue": 2,
						"smallUnitId": 107,
						"smallUnitName": "托",
						"smallUnitType": "package_Unit",
						"childList": null,
						"sort": 1,
						"supplierPackingId": 99
					}
				},

			]
		}
	},
	mounted() {
		// console.log(_.cloneDeep(this.list))
		let options = []
		let packingUnitDTO = []
		let unitObj = {}
		this.list.forEach(item => {
			// 存在下级单位
			if (item.packingUnitDTO) {
				item.sort = item.packingUnitDTO.sort
				let key = item.packingUnitDTO.supplierPackingId
				if (unitObj[key]) {
					unitObj[key].push(item)
				} else {
					unitObj[key] = [item]
				}
			}
		})
		console.log('unitObj0', unitObj)

		// 单位级别--排序--升序
		Object.keys(unitObj).forEach(key => {
			unitObj[key].sort((a, b) => { return a.sort - b.sort })

		})
		console.log('unitObj1', unitObj)

		// 根据上级Id，分大组
		let count = 0
		Object.keys(unitObj).forEach(key => {
			packingUnitDTO[count] = []
			unitObj[key].forEach(item => {
				if (packingUnitDTO[count][item.sort]) {
					packingUnitDTO[count][item.sort].push(item)
				} else {
					packingUnitDTO[count][item.sort] = [item]
				}
			})
			count++
		})
		console.log('packingUnitDTO', packingUnitDTO)


		// 分小组，从最低级开始
		let listArr = []
		packingUnitDTO.forEach((item) => {
			let pushList = []
			item.forEach(v => {
				pushList.push(v)
				listArr.push(_.cloneDeep(pushList))
			})
		})


		console.log('listArr', _.cloneDeep(listArr))

		// 笛卡尔积--组合
		packingUnitDTO = listArr.map(item => {
			return this.cartesianProductOf(item)
		})
		console.log('packingUnitDTO2', packingUnitDTO)

		// 排序-降序
		packingUnitDTO.forEach(item => {
			item.forEach(v => {
				v.sort((a, b) => { return b.sort - a.sort })
			})
		})

		console.log('packingUnitDTO2', _.cloneDeep(packingUnitDTO))

		//显示label-value
		packingUnitDTO.forEach(item => {
			item.forEach(child => {
				let labelArr = []
				child.forEach((v, vIndex) => {
					let content = `${v.packingUnitDTO.packageValue}${v.packingUnitDTO.smallUnitName}/${v.packingUnitDTO.packingName}`

					if (vIndex === 0) {
						content = `${v.baseUnitName} ${content}`
					}
					if (child.length > 1 && (child.length - 1 === vIndex)) {
						content = '(' + content + ')'
					}

					labelArr.push(content)
				})
				options.push({
					label: labelArr.join(','),
					value: labelArr.join(','),
					data: child
				})
			})
		})

		console.log('options', _.cloneDeep(options))

		let index = this.searchList.findIndex(item => item.name === 'unit')
		this.searchList[index].attr.options = options
	},
	methods: {
		openModal(name) {
			// 添加
			if (name === 'add') {
				this.$router.push('/store/storeManege/add')
			}
		},
		// 笛卡尔积
		cartesianProductOf(array) {
			function addTo(current, args) {
				var i, copy;
				var rest = args.slice(1);
				var isLast = !rest.length;
				var result = [];
				for (i = 0; i < args[0].length; i++) {
					copy = current.slice();
					copy.push(args[0][i]);
					if (isLast) {
						result.push(copy);
					} else {
						result = result.concat(addTo(copy, rest));
					}
				}
				return result;
			}
			return addTo([], array);
		}
	}
}
</script>
<style lang="less" scoped>
</style>