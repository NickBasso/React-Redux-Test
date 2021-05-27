import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/style.css';
import 'antd/dist/antd.css';
import App from './components/App';
import { Provider } from 'react-redux';
import dataReducer from './redux/reducers/rootReducer';
import { createStore } from 'redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(dataReducer)}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);
