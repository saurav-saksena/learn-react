import React, { useState } from 'react'
import Foodapi from "../Foodapi"
import FoodList from './FoodList'

export default function Foodfilter() {
    const [Foods, setFoods] = useState(Foodapi)
    const [buttonstate, setButtonstate] = useState("all")
    // const filterbutton = Foodapi.reduce((value, current) => {
    //     if (!value.includes(current.CategoryName))
    //         value.push(current.CategoryName)
    //     return value
    // }, ["all"])

    const filterbutton = [...new Set(Foodapi.map(item => item.CategoryName)), "all"]

    let filterData = (item) => {
        if (item === "all") {
            setFoods(Foodapi)
        } else {
            setFoods(Foodapi.filter(current => current.CategoryName === item))
        }
        setButtonstate(item)
    }

    return (
        <div className='white--ground'>
            <div className='filter-buttons'>
                {filterbutton.length && filterbutton.reverse().map((item, index) => {
                    return <span className={buttonstate === item ? "fitler-button-span1" : "fitler-button-span"} key={index + 1} onClick={() => filterData(item)}>{item}</span>
                })}
            </div>

            {Foods.map((item, index) => {
                return <FoodList key={index + 1} data={item} />
            })}
        </div>
    )
}
