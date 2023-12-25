import React, { useReducer } from 'react'
function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return { age: state.age + 1 }
    }
    if (action.type === 'decremented_age') {
        return { age: state.age - 1 }
    }
    throw Error('unknown action')
}

export default function ExUseReducer2() {
    const [state, dispatch] = useReducer(reducer, { age: 18 })
    console.log(state.age)
    return (
        <div className='white--ground'>
            <button onClick={() => { dispatch({ type: 'incremented_age' }) }}>increase age</button>
            <button onClick={() => { dispatch({ type: 'decremented_age' }) }}>decrease  age</button>

            {state.age >= 18 ? <h3>Hello you are {state.age}.</h3> : <h2>Ohh no, below 18 are not allowed, try to increase age or please refresh page and then set you age !</h2>}
        </div>
    )
}
