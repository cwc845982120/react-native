/**
 * Created by caowencheng on 2018/2/1.
 */

"use strict";

// mobx模块
import { observable, useStrict, action } from 'mobx';

useStrict(true);

class Store {
	@observable todo = {
		title: "todo标题",
		done: false
	};
	@action changeTodoTitle(title){
		this.todo.title = title;
	}
}

const store = new Store();

export default store;

