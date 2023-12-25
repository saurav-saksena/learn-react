import React, { useState } from 'react'

export default function UseStateRevision() {
    const [greet, setGreet] = useState({
        greeting: "Hello World!",
        place: true
    })
    function update() {
        setGreet(pre => {
            return {
                ...pre,
                greeting: "Namaste Duniya !",
                place: false
            }
        })
    }

    return (
        <div className='white--ground'>

            <h1>{greet.greeting}</h1>
            <h2>{greet.place ? "India" : "Bharat"}</h2>
            {greet.place && <button onClick={update}>update</button>}


        </div>
    )
}
