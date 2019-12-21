<template>
	<div class="jq-main-list">
		<div class='form-contain'>
			<mavon-editor v-model="value" :ishljs="true" />
		</div>
		<div class="footer-form-btn">
			<div class="theme" @click="addOk">确认</div>
			<div class="gray" @click="cancelFun">取消</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {

	},
	data() {
		return {
			value: ''
		}
	},
	methods: {
		// 确认
		addOk() {
			console.log(this.value)
		},
		cancelFun() {
			this.$router.go(-1)
		}
	}


}
</script>
<style lang="less" scoped>
.jq-main-list {
	position: relative;
	height: calc(100% - 30px);
	overflow-y: auto;
	.footer-form-btn {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 14px;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(208, 222, 240, 1);
		display: flex;
		& > div {
			width: 200px;
			height: 100%;
			border-right: 1px solid rgba(208, 222, 240, 1);
			cursor: pointer;
		}
		.theme {
			background: rgba(240, 244, 248, 1);
			color: #4da1ff;
		}
	}
	.form-contain {
		padding: 0 10px 20px 10px;
		height: calc(100% - 50px);
		box-sizing: border-box;
		overflow-y: auto;
	}
}
</style>