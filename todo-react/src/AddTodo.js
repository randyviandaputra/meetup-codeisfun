import React from 'react'

class AddTodo extends React.Component {
  constructor() {
    super()
    this.state = {description: ''}
    this.handleChangeTodo = this.handleChangeTodo.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleChangeTodo(e) {
    this.setState({description: e.target.value})
  }

  handleAddTodo(e) {
    this.props.onAdd(this.state.description)
    this.setState({description: ''})
  }

  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="Masukan Todo ..."
          value={this.state.description}
          onChange={this.handleChangeTodo}
          style={styles.textInput}
        />
        <button
          style={styles.btnCustom}
          type="submit"
          onClick={this.handleAddTodo}
        >
          Add Todo
        </button>
      </div>
    )
  }
}

const styles = {
  textInput: {
    height: '25px',
    fontSize: '14px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
  },
  btnCustom: {
    height: '35px',
    fontSize: '14px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
    marginLeft: '5px',
    backgroundColor: '#ccc',
  },
}

export default AddTodo
