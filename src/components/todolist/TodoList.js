import React, {Component} from  "react";
import TodoItem from "../../modules/TodoItem/TodoItem"
class TodoList extends Component {
	render() {

		const items = [
			{name: "First Item", done: false},
			{name: "Second Item", done: true},
			{name: "Third Item", done: false}
		];
		return (
			<ul>
				{ items.map(item => <TodoItem name={item.name} done={item.done}  />)  }
			</ul>
		);
	}
}

export default TodoList;
