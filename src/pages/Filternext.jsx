import React, { useState } from 'react'

import foodapi from "../Foodapi"
export default function Filternext() {
    const [index, setIndex] = useState(0)
    const Foodapi = foodapi
    const next = () => {
        setIndex(i => i + 1)
    }
    const pre = () => {
        setIndex(i => i - 1)
    }
    return (
        <div className='white--ground' >
            <button disabled={index === 0} onClick={() => setIndex(0)} className='refresh--1'>refresh</button>
            <button disabled={index === 0} onClick={pre} className='refresh--1'>previous</button>
            <button onClick={next} disabled={index === Foodapi.length - 1} className='refresh--1'>next</button>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className='filter-product-list'>
                    <p className='filter-product-name'>{Foodapi[index].name}</p>
                    <p className='filter-product-brand'>{Foodapi[index].CategoryName} </p>

                    <img className='filter-product-img' src={Foodapi[index].img} alt="..." />


                </div>
            </div>

        </div>
    )
}
