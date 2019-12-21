<template>
	<div class="jq-main-body">
		<jq-breadcrumb :breadList='breadList' :subMenuList="subMenuList"></jq-breadcrumb>
		<div class="markdown-contain">
			<router-view></router-view>
		</div>
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
					name: "组件",
					path: ''
				}
			],
			subMenuList: [
				{
					name: '面包屑',
					path: '/component/jqbreadcrumb'
				}
			]
		}
	}
}
</script>
<style lang="less">
.markdown-contain {
	background: #fff;
	padding: 20px;
}
</style>