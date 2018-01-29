/**
 * Created by caowencheng on 2018/1/29.
 */

import * as types from '../config/actionType';

const initialCountState = {
	count: 0
};

const addCount = (state = initialCountState, action) => {
	// 判断 action 类型
	switch (action.type) {
		case types.ADD_COUNT:
			return {
				count: state.count + 1
			};
		default:
			return state
	}
};

export default addCount;
