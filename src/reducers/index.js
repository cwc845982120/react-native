/**
 * Created by caowencheng on 2018/1/29.
 */

import { combineReducers } from 'redux';

import addCount from './addCount';

const AppReducer = combineReducers({
	addCount
});

export default AppReducer;
