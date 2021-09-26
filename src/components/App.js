import React from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import List from './List'

class App extends React.Component {
  state = {
    todos : [],
    goals : [],
    loading : true
  }

  async componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading === true) {
      return(
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      );
    }
    else{
      return(
          <List/>
        );
    }

    }
  }

const ConnectedApp = connect((state) => ({
  loading : state.loading
}))(App)

export default ConnectedApp;
