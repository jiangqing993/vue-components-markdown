<template>
	<div class="jq-main-list">
		<div class='form-contain'>
			<Content-title title="门店信息"></Content-title>
			<Form ref="store" :model="formValidate" :rules="ruleValidate" :label-width="80">
				<FormItem label="门店名称" prop="storeName">
					<Input v-model="formValidate.storeName" placeholder="请填写门店名称"></Input>
				</FormItem>
				<FormItem label="门店编号" prop="storeSn">
					<Input v-model="formValidate.storeSn" placeholder="请输入门店编号"></Input>
				</FormItem>
				<FormItem label="收货人" prop="consignee">
					<Input v-model="formValidate.consignee" placeholder="请输入收货人"></Input>
				</FormItem>
				<FormItem label="联系方式" prop="tel">
					<Input v-model="formValidate.tel" placeholder="请输入联系方式"></Input>
				</FormItem>
				<FormItem label="地区" prop="city">
					<Select v-model="formValidate.city" clearable placeholder="请选择地区">
						<Option value="beijing">New York</Option>
						<Option value="shanghai">London</Option>
						<Option value="shenzhen">Sydney</Option>
					</Select>
				</FormItem>
				<FormItem label="详细地址" prop="address">
					<Input v-model="formValidate.address" placeholder="请输入收货人"></Input>
				</FormItem>
			</Form>
		</div>
		<div class="footer-form-btn">
			<div class="theme" @click="addOk">确认</div>
			<div class="gray" @click="cancelFun">取消</div>
		</div>
	</div>
</template>
<script>
import ContentTitle from '@/pages/components/contentTitle'
export default {
	components: {
		ContentTitle
	},
	data() {
		return {
			formValidate: {
				storeName: '',
				storeSn: '',
				consignee: '',
				tel: '',
				city: [],
				address: ''
			},
			ruleValidate: {
				storeName: [
					{ required: true, message: '门店名称不能为空', trigger: 'blur' }
				],
				consignee: [
					{ required: true, message: '收货人不能为空', trigger: 'blur' }
				],
				tel: [
					{ required: true, message: '联系方式不能为空', trigger: 'blur' }
				],
				city: [
					{ required: true, message: '地区不能为空', trigger: 'change' }
				],
				address: [
					{ required: true, message: '详细地址不能为空', trigger: 'blur' }
				]
			}
		}
	},
	created() {


	},
	methods: {
		// 确认
		addOk() {
			this.$refs['store'].validate((valid) => {
				if (valid) {
					this.$Message.success('成功!');
					this.$router.go(-1)
				} else {
					this.$Message.error('请填写必选项');
				}
			})
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
		padding: 0 10px;
	}
}
</style>