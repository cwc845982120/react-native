/**
 * Created by caowencheng on 2018/1/29.
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import mobxStore from '../store/mobxStore';
import PromiseRuleComponent from '../screens/PromiseRule';
import CountDemo from '../components/CountDemo';
import fetchDemo from '../components/fetchDemo';
import MobxDemo from '../components/MobxDemo';

const backAction = NavigationActions.back();

const HomeScreen = ({ navigation }) =>
	<View style={ styles.container }>
		<Text>Home Screen</Text>
		<Text style={ styles.buttonText } onPress={() => navigation.navigate('Details')}>跳转至详情</Text>
	</View>

;

const DetailsScreen = ({ navigation }) =>
	<View style={ styles.container }>
		<Text>Details Screen</Text>
		<Text style={ styles.buttonText } onPress={() => navigation.navigate('Demo')}>跳转至约课规则页</Text>
		<Text style={ styles.buttonText } onPress={() => navigation.navigate('Demo2')}>reduxDemo2</Text>
		<Text style={ styles.buttonText } onPress={() => navigation.navigate('Demo3')}>网络请求Demo3</Text>
		<Text style={ styles.buttonText } onPress={() => navigation.navigate('Demo4')}>mobxDemo</Text>
		<Text style={ styles.buttonText } onPress={() => navigation.dispatch(backAction) }>返回首页</Text>
	</View>

;

const MobxDemoScreen = ({ navigation }) =>
	<View style={ styles.container }>
		<MobxDemo store={ mobxStore }/>
	</View>

;

const RootNavigator = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			headerTitle: '首页'
		}
	},
	Details: {
		screen: DetailsScreen,
		navigationOptions: {
			headerTitle: '详情'
		}
	},
	Demo: {
		screen: PromiseRuleComponent,
		navigationOptions: {
			headerTitle: '约课规则'
		}
	},
	Demo2: {
		screen: CountDemo,
		navigationOptions: {
			headerTitle: 'Demo2'
		}
	},
	Demo3: {
		screen: fetchDemo,
		navigationOptions: {
			headerTitle: 'Demo3'
		}
	},
	Demo4: {
		screen: MobxDemoScreen,
		navigationOptions: {
			headerTitle: 'MobxDemo'
		}
	}
});


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		marginTop: 100
	}
});

export default RootNavigator;
