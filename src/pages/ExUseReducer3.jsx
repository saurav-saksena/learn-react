import React, { useReducer } from 'react'
function reducer(state, action) {
    if (action.type === "increment_age") {
        return {
            name: state.name,
            age: state.age + 1
        }
    }
    if (action.type === "decrement_age") {
        return {
            name: state.name,
            age: state.age - 1
        }
    }

    if (action.type === "changed_name") {
        return {
            age: state.age,
            name: action.nextName
        }
    }
    throw Error("unknow action")
}
const initialState = { name: 'saurav', age: 23 };
export default function ExUseReducer3() {
    const [state, dispatch] = useReducer(reducer, initialState)
    function handleButton() {
        dispatch({ type: 'increment_age' });
    }
    function handleButton2() {
        dispatch({ type: 'decrement_age' })
    }
    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        })
    }
    return (
        <div className='white--ground'>
            <input
                style={{ width: '300px', padding: '7px' }}
                value={state.name}
                onChange={handleInputChange}
            />
            <br /><br />
            <button onClick={handleButton}>Increment Age!</button>
            <button onClick={handleButton2}>Decrement Age!</button>
            <h2>Hello, {state.name}, You are {state.age}.</h2>

        </div>
    )
}
