import {combineReducers} from 'redux'
import todos from './todos'
import goals from './goals'
import loading from './loading'

const reducer = combineReducers({
  todos,
  goals,
  loading
})

export default reducer
