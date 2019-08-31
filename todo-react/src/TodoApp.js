import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Search from './Search'
import './TodoApp.css'

class TodoApp extends React.Component {
  constructor() {
    super()
    this.onAddTodo = this.onAddTodo.bind(this)
    this.onSearchTodo = this.onSearchTodo.bind(this)
  }
  state = {todos: [], search: ''}

  async componentDidMount() {
    const request = await fetch('http://127.0.0.1:3000/api/v1/todos')
    const data = await request.json()
    this.setState({todos: data.todos})
  }

  async onAddTodo(description) {
    const request = await fetch('http://127.0.0.1:3000/api/v1/todos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
      }),
    })
    const res = await request.json()
    this.setState({todos: res.todos})
  }

  onSearchTodo(searchText) {
    this.setState({search: searchText})
  }

  render() {
    const {search, todos} = this.state
    const filteredTodos = todos.filter(todo => {
      return todo.description.toLowerCase().includes(search.toLowerCase())
    })

    return (
      <div className="todo-app">
        <h1 className="center">Todo App</h1>
        <h3 className="bold center">Total Todo : {filteredTodos.length}</h3>
        <Search onSearch={this.onSearchTodo} />
        <TodoList todos={filteredTodos} />
        <AddTodo onAdd={this.onAddTodo} />
      </div>
    )
  }
}

export default TodoApp
