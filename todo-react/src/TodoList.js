import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos
    return (
      <div style={styles.todoList}>
        {todos.map(todo => (
          <Todo key={todo.id} description={todo.description} />
        ))}
      </div>
    )
  }
}

const styles = {
  todoList: {
    marginTop: '10px',
    marginBottom: '10px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
  },
}

export default TodoList
