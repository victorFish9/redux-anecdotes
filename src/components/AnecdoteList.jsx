import { useSelector, useDispatch } from 'react-redux'
import { voteIncrease, createAnecdote } from '../reducers/anecdoteReducer'
import Filter from './Filter'
import { useState } from 'react'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterText = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase()
        .includes(filterText.toLowerCase()))

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteIncrease(id, 'VOTE'))
    }

    const sortedAnecdote = [...anecdotes].sort((a, b) => b.votes - a.votes)

    return (
        <div>

            <h2>Anecdotes</h2>
            {filteredAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
            <h2>create new</h2>
        </div>
    )
}

export default AnecdoteList