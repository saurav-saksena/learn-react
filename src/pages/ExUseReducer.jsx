import React, { useReducer } from 'react'
const reducer = (state, action) => {
    if (action.type === 'buy-ingredients') return { money: state.money - 10 };
    if (action.type === 'sell-a-meal') return { money: state.money + 50 };
    if (action.type === 'celebrity-visit') return { money: state.money + 500 };
    return state;
}

export default function ExUseReducer() {
    const initialstate = { money: 100 }
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <div className='white--ground'>
            <h1 className='news--title'>Wallet: {state.money}</h1>
            <button onClick={() => dispatch({ type: 'buy-ingredients' })}>Shopping for Veggies</button>

            <button style={{ width: "auto" }} onClick={() => dispatch({ type: 'sell-a-meal' })}>Serve a meal to the customer</button>
            <button onClick={() => dispatch({ type: 'celebrity-visit' })}>celebrity visit !</button>

        </div>
    )
}
