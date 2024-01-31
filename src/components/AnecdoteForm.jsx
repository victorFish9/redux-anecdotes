import { useDispatch } from "react-redux";
import { createAnecdote } from '../reducers/anecdoteReducer'
import { sendNotification, clearNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()


    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(sendNotification({ message: `${content} anecdote created`, type: 'info' }))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
    }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}

export default AnecdoteForm