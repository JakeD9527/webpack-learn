<template>
	<div>
		<div class="clearfix">
			<img :src="imgUrl" alt="" />
			<img :src="imgUrl" alt="" />
		</div>
		
		<router-view></router-view>
	</div>
    
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				test: 'welcome to vue',
				imgUrl : require("./assets/img/logo.png")
			}
		},
		created(){
			console.log("create app")
		}
	}
</script>

<style lang="less" scoped>
	@base: #f938ab;
	.title{
	    color: @base;
	}
	img{
		float: left;
		width : 375/200rem;
	}
</style>