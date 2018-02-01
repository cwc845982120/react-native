/**
 * Created by caowencheng on 2018/2/1.
 */

"use strict";

/**
 * Created by caowencheng on 2018/1/26.
 */

import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Base from '../Base';

// 观察者
@observer
class MobxDemo extends Base {
	render() {
		const { store } = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.text}>{ store.todo.title }</Text>
				<Button onPress={ () => { store.changeTodoTitle("哈哈哈")} } title={"修改"} style={styles.button}/>
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

export default MobxDemo;
