/**
 * Created by caowencheng on 2018/1/26.
 */

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

import Base from '../Base';
import { addCount } from '../ations/addCount';

class CountDemo extends Base {
	render() {
		const { count, addCount } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{ count }</Text>
				<Button onPress={ addCount } title={"增加"} style={styles.button}/>
			</View>
		);
	}
}

// 接受行为
function mapStateToProps(state) {
	return {
		count: state.addCount.count
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

export default connect(mapStateToProps, addCount)(CountDemo)
