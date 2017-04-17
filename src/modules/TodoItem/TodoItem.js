import React, {Component} from  "react";

class TodoItem extends Component {
	render() {


		return (
			<li style={{
				textDecoration: this.prop.done ? "line-through" : "none"
			}}>{ this.prop.name }</li>
		);
	}
}

export default TodoItem;
