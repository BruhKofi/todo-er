import React, {Component} from  "react";
import TodoItem from "../../modules/TodoItem/TodoItem";
import TodoInput from "../../modules/TodoInput/TodoInput";
class TodoList extends Component {
	render() {

		const items = [
			{name: "First Item", done: false},
			{name: "Second Item", done: true},
			{name: "Third Item", done: false}
		];
		return (

			<div>
				<ul>
				{ items.map(item => <TodoItem name={item.name} done={item.done}  />)  }
			</ul>
				<TodoInput/>
			</div>
		);
	}
}

export default TodoList;
