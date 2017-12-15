import axios from 'axios'

window.$http = {}

let ipConfig = "http://10.1.105.99:8131"

$http.get = function(path, param, successFn, failFn) {
	const Url = ipConfig + path;

	axios({
			method: 'get',
			params: param,
			url: Url,
		})
		.then((res) => {
			console.log("success", Url, "\n", res.data);
			successFn && successFn(res.data);
		})
		.catch((failRes) => {
			console.log("fail", Url, failRes);
			failFn && failFn(failRes);
		})
}

