import React, { Component } from 'react';
import './App.css';
import Header from "../components/header/Header";
import TodoList from "../components/todolist/TodoList"

class App extends Component {
  render() {
    return (
    	<div>
		    <Header/>
		    <TodoList/>
	    </div>

    );
  }
}

export default App;