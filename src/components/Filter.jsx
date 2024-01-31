import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../reducers/FilterReducer';
const Filter = () => {
    const dispatch = useDispatch()
    const filterText = useSelector((state) => state.filter)

    const handleChange = (event) => {
        // input-kentän arvo muuttujassa event.target.value
        const newFilterText = event.target.value
        dispatch(filterChange(newFilterText))
        console.log("HANDLECHANGE: ", event.target.value)
    }
    const style = {
        marginBottom: 10
    }

    return (

        <div style={style}>
            <h2>Filter</h2>
            filter  <input value={filterText} onChange={handleChange} />
        </div>
    )
}

export default Filter