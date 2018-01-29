/**
 * 基类 供组件继承
 */
import React, { Component } from 'react'
import axiox from './common/http'

class Base extends Component {
	constructor(props){
		super(props);
	}

	/**
	 * 网络请求获取服务器返回值
	 * @param url
	 * @param params
	 * @returns {Promise}
	 */
	getResponse(url, params){
		return new Promise( (resolve, reject) => {
			axiox.post(url, params).then( (res) => {
				resolve(res);
			})
				.catch(e => {
					console.log(e.message);
					resolve(e);
				})
		})
	}
}

export default Base;
