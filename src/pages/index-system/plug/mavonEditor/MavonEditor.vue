<template>
	<div class="jq-main-body">
		<jq-breadcrumb :breadList='breadList' :subMenuList="subMenuList"></jq-breadcrumb>
		<router-view></router-view>
	</div>
</template>
<script>
import JqBreadcrumb from '@/components/others/JqBreadcrumb'
export default {
	components: {
		'jq-breadcrumb': JqBreadcrumb
	},
	data() {
		return {
			breadList: [
				{
					name: "插件",
					path: ''
				},
				{
					name: "mavonEditor",
					path: '/plug/mavonEditor/list'
				}
			],
			subMenuList: [
				{
					name: '列表',
					path: '/plug/mavonEditor/list'
				},
				{
					name: '新增',
					path: '/plug/mavonEditor/add'
				}
			]
		}
	}
}
</script>