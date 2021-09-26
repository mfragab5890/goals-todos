import API from 'goals-todos-api'

//actions
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'
//action creators
const addGoal = goal => {
  return {
    type: ADD_GOAL,
    goal
  };
}

const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id
  };
}

//action handlers
export const handleAddGoal = (name) => {
  return (dispatch) => {

    return API.saveGoal(name).then((goal) => {
      dispatch(addGoal(goal))
    }).catch( () => {
      alert('There was a proplem updating please try again')
    });
  }

}

export const handleDeleteGoal = (goal) => {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))
    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal))
      alert('There was a proplem updating please try again')
    });
  }
}
