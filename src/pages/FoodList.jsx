import React from 'react'

export default function FoodList({ data }) {
    return (
        <div className='food-container'>
            <p className='food-name'>{data.name}</p>
            <p className='food-category'>category: {data.CategoryName}</p>
            <p className='food-description'>about: {data.description}</p>
            <img className="food-img" src={data.img} alt='...' />
        </div>
    )
}
