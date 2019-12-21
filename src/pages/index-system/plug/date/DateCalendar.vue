<template>
	<div>
		<leapCalendar></leapCalendar>
	</div>
</template>
<script>
import LeapCalendar from '@/components/leapCalendar/LeapCalendar';
export default {
	components: {
		LeapCalendar
	},
	data() {
		return {
			calendarClass: {
				schedule: '', // 日程样式
				otherMonth: '', // 不是本月日期
				curDay: 'col-red', // 今天样式
				btnPrev: '',
				btnToday: '',
				btnNext: ''
			}
		}
	}
}
</script>
<style lang="less" scoped>
</style>