import { useDispatch } from "react-redux";
import { createAnecdote } from '../reducers/anecdoteReducer'
import { sendNotification, clearNotification } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()


    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(sendNotification({ message: `${content} anecdote created`, type: 'info' }))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
        //const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(content))
    }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}

export default AnecdoteForm