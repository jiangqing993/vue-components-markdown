<template>
	<div class="jq-breadcrumbItem">
		<Breadcrumb separator="/">
			<BreadcrumbItem v-for="(item,index) in breadPath" :key="index" :to="item.path">{{item.name}}</BreadcrumbItem>
			<BreadcrumbItem :to="activeItem.path" v-if="activeItem.name">{{activeItem.name}}</BreadcrumbItem>
		</Breadcrumb>
	</div>
</template>
<script>
export default {
	name: 'jq-breadcrumb',
	data() {
		return {

		}
	},
	props: {
		rootBread: {
			type: Object,
			default() {
				return {
					name: '您当前所在位置',
					path: ''
				}
			}
		},
		subMenuList: {
			type: Array,
			default() {
				return []
			}
		},
		breadList: {
			type: Array,
			default() {
				return []
			}
		}
	},
	computed: {
		breadPath() {
			let breadcrumbList = this.breadList
			let rootBread = this.rootBread
			if (rootBread) {
				breadcrumbList.unshift(rootBread)
			}
			return breadcrumbList
		},
		activeItem() {
			let checkedItem = {}
			if (this.subMenuList && this.subMenuList.length) {
				let path = this.subMenuList.find(item => item.path === this.$route.path)
				path && (checkedItem = path)
			}
			return checkedItem
		}
	},
	created() {

	},
	mounted() {
	},
	methods: {

	}
}
</script>
<style lang="less" scoped>
.jq-breadcrumbItem {
	padding-left: 10px;
	/deep/.ivu-breadcrumb {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
	}
}
</style>