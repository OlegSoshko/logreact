import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Wrapper from './wrapper/wrapper.js'

//Redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ViewLotReducer from './store/ViewLot/reducers/viewLotReducer';


const store = createStore(ViewLotReducer)

const app = (
  <Provider store = {store}>
    <React.StrictMode>
      <Wrapper />
    </React.StrictMode>
  </Provider>
)

ReactDOM.render(app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
