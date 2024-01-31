import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import Store from './store'
// import anecdoteReducer from './reducers/anecdoteReducer'
// import filterReducer from './reducers/FilterReducer'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })

// const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)