<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'app',
	components: {

	}
}
</script>

<style lang="less">
@import './style/Base.less';

#app {
	.markdown-contain {
		height: calc(100vh - 110px);
		overflow-y: auto;
		margin: 0 10px 10px 10px;
		table {
			font-size: 12px;
			width: 100%;
			border: 1px solid #e9e9e9;
			border-collapse: collapse;
			border-spacing: 0;
			empty-cells: show;
			font-family: Consolas, Menlo, Courier, monospace;
			th,
			td {
				border: 1px solid #e9e9e9;
				padding: 8px 16px;
				text-align: left;
			}
			th {
				background: #f7f7f7;
			}
		}
		h1 {
		}
		h2 {
			padding: 10px 0;
			font-weight: 400;
			font-size: 20px;
		}
		h3 {
			font-weight: 400;
			font-size: 18px;
		}
	}
}
</style>
