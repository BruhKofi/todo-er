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
		const newItems = this.state.items.concat([{ name: name, done: false }]);
		this.setState({items: newItems});
	}

	render() {
		return (

			<div>
				<ul>
					{ this.state.items.map((item, i) => <TodoItem key={i} name={item.name} done={item.done}/>)  }
				</ul>
				<TodoInput onAddItem={this.handleAddItem.bind(this)}/>
			</div>
		);
	}
}

export default TodoList;
