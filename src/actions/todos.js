import API from 'goals-todos-api'
//actions
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

//action creators

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  };
}

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
}

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  };
}

//action handlers

export const handleAddTodo = (name) => {
  return (dispatch) => {

    return API.saveTodo(name).then(todo => {
      dispatch(addTodo(todo))
    }).catch(() => {
      alert('There was a proplem updating please try again')
    });
  };
}

export const handleDeleteTodo = (todo) => {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo))
      alert('There was a proplem updating please try again')
    });
  }
}

export const handleToggleTodo = (todo) => {
  return (dispatch) => {
    dispatch(toggleTodo(todo.id))
    return API.saveTodoToggle(todo.id).catch(() => {
      dispatch(toggleTodo(todo.id))
      alert('There was a proplem updating please try again')
    });
  };
}
