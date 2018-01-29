

import React from 'react';
import { StyleSheet, ScrollView, Text, View, Platform, PixelRatio, Dimensions } from 'react-native';

import Base from '../Base'
import InfoCard from '../components/InfoCard';

const ruleList = [{
	title: "约课",
	details: [{
		subTitle: "",
		content: [
			"可预约7天内的任何课程，但同一时间段只能预约一节课（包括团操课和私教课）"
		]
	}]
}, {
	title: "取消/退课",
	details: [{
		subTitle: "团操课:",
		content: [
			"可预约7天内的任何课程，但同一时间段只能预约一节课（包括团操课和私教课）",
			"开课前3小时内不可退。"
		]
	}, {
		subTitle: "私教课:",
		content: [
			"开课前3小时以外取消，退回金额100%(用私教券购买的，则退回私教券)",
			"开课前3小时以内取消，退回金额50%(用私教券购买的不退)",
			"开课后无法取消"
		]
	}]
}, {
	title: "课程签到",
	details: [{
		subTitle: "",
		content: [
			"无需签到，我们会以您进入对应场馆的首次时间为准。",
			"因特殊原因签到失败，可在门店联系前台工作人员进行相关处理。"
		]
	}]
}, {
	title: "迟到旷课",
	details: [{
		subTitle: "",
		content: [
			"因个人原因造成的迟到或旷课，无额外补偿。"
		]
	}]
}, {
	title: "私教课更改时间",
	details: [{
		subTitle: "",
		content: [
			"开课前3小时内不能改签。",
			"开课前3小时外，仅限改签一次。",
			"开课后不能更改时间。"
		]
	}]
}];

export default class App extends Base {
	constructor(props) {
		super(props);
	}
	render() {
		const cardList = ruleList.map((cardItem, index) => {

			return <InfoCard dataSource={cardItem} key={index}/>;
		});

		return (
			<ScrollView contentContainerStyle={styles.contentContainer}>
				{ cardList }
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	contentContainer: {
		paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		flexDirection: 'column',
		backgroundColor: '#e9e9ef',
		alignItems: 'flex-start'
	},
	title: {
		height: 18,
		justifyContent: 'center',
		paddingTop: 8,
		paddingBottom: 13
	},
	titleText: {
		fontSize: 17,
		fontWeight: '600',
		justifyContent: 'center'
	},
	titleImg: {
		position: 'absolute',
		width: 40,
		top: -25,
		left: 4
	},
	dashlineBlock: {
		overflow: 'hidden',
		width: Dimensions.get('window').width * 0.8,
		height: 18
	},
	dashline: {
		color: '#e2e2e2'
	},
	contentBlock: {
		alignItems: 'flex-start',
		width: Dimensions.get('window').width * 0.8
	},
	content: {
		position: 'relative',
		fontSize: 15,
		lineHeight: 20,
		paddingTop: 5,
		alignItems: 'flex-start',
		color: '#5d5d5d'
	},
	subTitle: {
		marginTop: 4,
		marginBottom: 3,
		color: '#5d5d5d',
		fontSize: 15,
		fontWeight: '600'
	},
	dot: {
		fontSize: 15,
		fontWeight: '900'
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#fff',
		width: Dimensions.get('window').width * 0.9,
		borderRadius: 10,
		marginBottom: 30,
		padding: 15
	}
});
