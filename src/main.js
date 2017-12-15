import Vue from 'vue';
import App from './App'
import router from './router'

import '@/assets/css/reset'

import 'rem'
import 'http'

new Vue({
	el: '#root',
	template: '<App/>',
	router,
	components: {
		App
	}
})

