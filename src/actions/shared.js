import API from 'goals-todos-api'

//actions
export const RECEIVE_DATA = 'RECEIVE_DATA'
//action creators
const receiveData = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  }
}
//action handlers
export const handleInitialData = () => {
  return (dispatch) => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(receiveData(todos,goals))
    })
  };
}
