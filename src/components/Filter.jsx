import React from 'react';
import { useDispatch } from 'react-redux';
const Filter = ({ }) => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        // input-kentän arvo muuttujassa event.target.value
        console.log("HANDLECHANGE: ", event.target.value)
    }
    const style = {
        marginBottom: 10
    }

    return (

        <div style={style}>
            <h2>Filter</h2>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter