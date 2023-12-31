import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import { store } from './store/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Breadcrumb } from 'react-bootstrap'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter >
      <Provider store={store}>
        
        <App />
        
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)
