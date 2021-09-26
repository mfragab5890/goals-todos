import React from 'react'
import {connect} from 'react-redux'
import {handleAddTodo, handleDeleteTodo, handleToggleTodo} from '../actions/todos'

class Todos extends React.Component{

  getTodos = () => {
    const {todos} = this.props
    if (Array.isArray(todos)) {
      const todosItems = todos.map((todo) => {
        const style = todo.complete ? 'line-through':'none'
        return(
          <div className="item" key = {todo.id}>
            <i className="large right triangle middle aligned icon"></i>
            <div className="content">
              <p className="header" style = {{textDecoration : style }}>{todo.name}</p>
              <div className="description" id = {todo.id}>
                <input type="checkbox" name="state" tabIndex="0" className="hidden" onClick={(e) => this.toggleTodo(todo)} defaultChecked = {todo.complete ? true : false}/>
                <label>
                  complete : {todo.complete}
                  <button className="basic mini circular ui icon button" onClick = {(e) => this.removeTodo(todo)}>
                    <i className="red close icon"></i>
                  </button>
                </label>
              </div>
            </div>
          </div>
        );
      })
      return todosItems;
    }
  }

  onTodoAdd = (e) => {
    e.preventDefault();
    const value = this.input.value
    this.addTodo(value)
    this.input.value = ''

  }
  addTodo = (name) => {
    const {dispatch} = this.props
    dispatch(handleAddTodo(name))
  }

  removeTodo = (todo) => {
    const {dispatch} = this.props
    dispatch(handleDeleteTodo(todo))

  }

  toggleTodo = (todo) => {
    const {dispatch} = this.props
    dispatch(handleToggleTodo(todo))
  }

  render(){
    const todos = this.getTodos()
    return (
      <div className="ui segment" id="todos-div">
        <h1>Todo List</h1>
        <div className="ui right labeled left icon input">
          <i className="big icons">
            <i className="calendar alternate outline icon"></i>
            <i className="top right corner plus circle inverted icon"></i>
          </i>
          <input type="text" id="todo" name="todo" placeholder="Add Todo" ref = {(input) => this.input = input}/>
          <button className="ui tag label button" id="addTodo" onClick={this.onTodoAdd}>Add Todo</button>
        </div>
        {todos}
      </div>
    );
  };

}

const ConnectedTodos = connect((state) => ({
  todos : state.todos
}))(Todos)

export default ConnectedTodos
