/**
 * Created by caowencheng on 2018/1/29.
 */

/**
 * 计数器demo页的actions
 */

import * as types from '../config/actionType';

export function addCount(dispatch) {
	return {
		addCount: () => {
			dispatch({
				type: types.ADD_COUNT
			})
		}
	}
}

