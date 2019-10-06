import React , {Component} from 'react'
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';


class App extends Component {
  state = {
    todos : [
      {id:1,content: "play with coding"},
      {id:2,content: "practice to learn anything!"}
    ],
    content : ""
  }

  deleteTodo = (id) => {
    const {todos} = this.state;
    const todosList = todos.filter(todo => {
      return todo.id !==id
    })
    this.setState({
      todos : todosList
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render(){
    const {todos} = this.state;
    return (
    <div className="todo-app container">
      <h1 className="center red-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
}
}

export default App;
