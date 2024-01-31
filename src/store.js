import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/FilterReducer'
import notificationReducer from './reducers/notificationReducer'
import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notification: notificationReducer
    }
})

export default Store