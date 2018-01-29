/**
 * Created by caowencheng on 2018/1/26.
 * 网络请求
 */

import axios from 'axios';
let querystring = require('querystring');

let mode = process.env.NODE_ENV === 'production' ? 1 : 0; // 0:本地 1:测试 2:生产;

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers = {
	'Content-Type': 'application/x-www-form-urlencoded'
};

if (mode === 0) {
	axios.defaults.baseURL = 'https://mock.lanrenyun.cn/mock';
} else if (mode === 1) {
	axios.defaults.baseURL = 'http://ts.ks.lanrenyun.cn'; // 测试
} else if (mode === 2) {
	axios.defaults.baseURL = 'http://ks.lanrenyun.cn'; // 生产
}

// http request 拦截器
axios.interceptors.request.use(
	config => {
		config.transformRequest = function (data) {
			return querystring.stringify({
				json: JSON.stringify(data)
			});
		};
		return config;
	},
	error => {
		return Promise.reject(error);
	});

// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response.data;
	},
	() => {
		let errResult = {
			isSuccess: 0,
			errorCode: '0000',
			errorMsg: '连接服务器失败',
			result: null
		};

		return Promise.reject(errResult);
	});

export default axios;
