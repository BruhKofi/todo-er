import React, {Component} from  "react";
import TodoItem from "../../modules/TodoItem/TodoItem";
import TodoInput from "../../modules/TodoInput/TodoInput";
class TodoList extends Component {
	constructor() {
		super();

		this.state = {
			items: []
		};
	}

	handleAddItem(name) {
		console.log("handle add item", name);
		const newItems = this.state.items.concat({ name: name, done: false });
		console.log("handle add item", name);
		this.setState({items: newItems});
	}

	render() {

		return (

			<div>
				<ul>
					{ this.state.items.map(item => <TodoItem name={item.name} done={item.done}/>)  }
				</ul>
				<TodoInput onAddItem={this.handleAddItem}/>
			</div>
		);
	}
}

export default TodoList;
