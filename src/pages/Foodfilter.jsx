import React, { useState } from 'react'
import Foodapi from "../Foodapi"
import FoodList from './FoodList'

export default function Foodfilter() {
    const [Foods, setFoods] = useState(Foodapi)
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
    }

    return (
        <div className='white--ground'>
            {filterbutton.length && filterbutton.reverse().map((item, index) => {
                return <button key={index + 1} onClick={() => filterData(item)}>{item}</button>
            })}
            <br />
            {Foods.map((item, index) => {
                return <FoodList key={index + 1} data={item} />
            })}
        </div>
    )
}
