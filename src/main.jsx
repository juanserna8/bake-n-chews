import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import { getTotals } from './reducers/shoppingCartSlice'
import Amplify from "aws-amplify"
import awsExports from "./aws-exports"
Amplify.configure(awsExports)

store.dispatch(getTotals())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)