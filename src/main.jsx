import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import Store from './store'
import anecdoteService from './services/anecdotes'
import anecdoteReducer, { setAnecdote } from './reducers/anecdoteReducer'
// import anecdoteReducer from './reducers/anecdoteReducer'
// import filterReducer from './reducers/FilterReducer'

// const reducer = combineReducers({
//   anecdotes: anecdoteReducer,
//   filter: filterReducer
// })

// const store = createStore(reducer)

anecdoteService.getAll().then(anecdotes => Store.dispatch(setAnecdote(anecdotes)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)