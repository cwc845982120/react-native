/**
 * Created by caowencheng on 2018/1/26.
 */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Base from '../Base'

export default class CountDemo extends Base {
	constructor(props) {
		super(props);
		this.state = {
			json: "暂无"
		}
	}
	getData() {
		this.getResponse('/food/menu_list',{}).then((res) => {
			this.setState({
				json: res.studioNanme
			})
		})
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{ this.state.json }</Text>
				<Button onPress={ this.getData.bind(this) } title={"获取数据"} style={styles.button}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: '#e9e9ef',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		marginTop: 100
	},
	button: {
		position: 'relative',
		top: 200
	}
});
