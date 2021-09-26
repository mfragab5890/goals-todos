import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'

class List extends React.Component{
  render(){
    return (
      <div>
        <div className="ui relaxed divided list" id="todos-list">
          <ConnectedTodos />
        </div>
        <div className="ui relaxed divided list" id="goals-list">
          <ConnectedGoals />
        </div>
      < /div>
    );
  };
}

export default List
