<template>
	<div>
		<p>home</p>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

			}
		},
		created() {
			$http.get("/api/browseHistory.do", {
				channel: 'baidu'
			}, (res) => {

			})
		},
		components: {

		},
	}
</script>

<style lang="less" scoped>

</style>