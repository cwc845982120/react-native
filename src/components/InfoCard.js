

import React from 'react';
import { StyleSheet, Text, View, Platform, PixelRatio, Dimensions, Image } from 'react-native';

import Base from '../Base'
import { Images } from '../resource';

export default class InfoCard extends Base {
	constructor(props) {
		super(props);
	}
	render() {
		const subContent = this.props.dataSource.details.map((item, index) => {
			const contentList = item.content.map((child, childIndex) => {
				return <Text style={styles.content} key={childIndex}>
							<Text style={styles.dot}>·&nbsp;&nbsp;</Text>
							{child}
						</Text>;
			});
			const subTitle = () => {
				if (item.subTitle) {
					return <Text style={styles.subTitle}>{item.subTitle}</Text>;
				}
			};

			return <View key={index}>
						{ subTitle() }
						{ contentList }
					</View>;
		});

		return (
			<View style={styles.container}>
				<View style={styles.item}>
					{/** tips图片 */}
					<Image source={ Images.promiseRule.icon_title } resizeMode={ 'contain' } style={styles.titleImg}/>
					{/** 标题 */}
					<View style={styles.title}>
						<Text style={styles.titleText}>{this.props.dataSource.title}</Text>
					</View>
					{/** 虚线 */}
					<View style={styles.dashlineBlock}>
						<Text style={styles.dashline}>----------------------------------------------------</Text>
					</View>
					{/** 内容 */}
					<View style={styles.contentBlock}>
						{subContent}
					</View>
				</View>
			</View>
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
