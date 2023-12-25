import React, { useState } from 'react'
import "../App.css"
import FillStar from './FillStar'


export default function Yes() {
    const [isLike, setIsLike] = useState(true)
    // const [color, setColor] = useState("rgb(45, 216, 3)")
    function textChange() {
        setIsLike(preState => !preState)
        // if (!isLike) {
        //     setColor("rgb(45, 216, 3)")
        // } else {
        //     setColor("red")
        // }

    }
    return (
        <>
            <div className='container1'>
                <h1 className='question'>Did you like this page?</h1>
                <div className='question--div' onClick={textChange} style={{ backgroundColor: isLike ? "rgb(45, 216, 3)" : "red" }}>
                    <p className='question--p'>{isLike === true ? "Yes" : "No"}</p>
                </div>
            </div>
            <FillStar />
        </>
    )
}
