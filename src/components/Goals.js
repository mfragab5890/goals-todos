import React from 'react'
import {connect} from 'react-redux'
import {handleAddGoal, handleDeleteGoal} from '../actions/goals'

class Goals extends React.Component{

  getGoals = () => {
    const {goals} = this.props
    if (Array.isArray(goals)) {
      const goalsItems = goals.map((goal) => {
        return (
          <div className="item" key = {goal.id}>
            <i className="large right triangle middle aligned icon"></i>
            <div className="content">
              <p className="header">
                {goal.name}
                <button className="basic mini circular ui icon button" onClick = {(e) => this.removeGoal(goal)}>
                  <i className="red close icon"></i>
                </button>
              </p>
              <div className="description" id = {goal.id} >
                <label>
                  goal added on {new Date().toLocaleString()}
                </label>
              </div>
            </div>

          </div>
        );
      })
      return goalsItems;
    }
  }

  onGoalAdd = (e) => {
    e.preventDefault();
    const value = this.input.value
    this.addGoal(value)
    this.input.value = ''

  }

  addGoal = (name) => {
    const {dispatch} = this.props
    dispatch(handleAddGoal(name))

  }

  removeGoal = (goal) => {
    const {dispatch} = this.props
    dispatch(handleDeleteGoal(goal))
  }

  render(){
    const goals = this.getGoals()
    return (
      <div className="ui segment" id="goals-div">
        <h1>Goals List</h1>
        <div className="ui right labeled left icon input">
          <i className="big icons">
            <i className="bullseye icon"></i>
            <i className="top right corner plus circle inverted icon"></i>
          </i>
          <input type="text" id="goal" name="goal"  placeholder="Add Goal" ref = {(input) => this.input = input}/>
          <button className="ui tag label button" id="addGoal" onClick={this.onGoalAdd}>Add Goal</button>
        </div>
        {goals}
      </div>

    );
  };

}

const ConnectedGoals = connect((state) => ({
  goals : state.goals
}))(Goals)

export default ConnectedGoals
