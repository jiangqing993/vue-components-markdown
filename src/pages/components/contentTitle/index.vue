<template>
	<div class='title'>{{title}}</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default() {
				return ''
			}
		}
	}
}
</script>
<style lang="less" scoped>
.title {
	width: 100%;
	height: 40px;
	background: linear-gradient(
		270deg,
		rgba(237, 241, 246, 0.51) 0%,
		rgba(208, 222, 240, 0.8) 100%
	);
	font-size: 16px;
	font-weight: 500;
	color: rgba(51, 51, 51, 1);
	line-height: 40px;
	text-indent: 20px;
	margin-bottom: 20px;
}
</style>