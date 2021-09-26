import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import ConnectedApp from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer,middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
