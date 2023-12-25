import React, { useEffect, useState } from "react"
import "../App.css"
export default function Counter() {
    const [result, setResult] = useState(0)
    function counterPlus() {
        setResult(preCounter => { return preCounter + 1 })
    }
    function counterMinus() {
        if (result > 1)
            setResult(preCounter => {
                return preCounter - 1

            })
    }


    return (
        <>
            <div className="counter">
                <button className="counter--minus" onClick={counterMinus}>-</button>

                <p className="result">{result}</p>
                <button className="counter--plus" onClick={counterPlus}>+</button>

            </div>


        </>
    )
}