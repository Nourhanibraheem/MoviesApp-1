import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./store/reducers/rootReducer";
// import { createStore } from "redux";
import { Provider } from 'react-redux'
// import favReducer from './store/reducers/favReducer';

// const store = createStore(favReducer,rootReducer,composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
