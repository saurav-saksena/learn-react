import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

export default function DataFetch() {
    const [user, setUser] = useState([])
    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then((response) => response.json())
            .then((data) => { setUser(data) })

    }
    useEffect(() => {
        fetchData();
    }, [])
    return Object.keys(user).length > 0 ? (
        <div className='white--ground'>
            <h1>{user.results[0].name.first}</h1>
            <img src={user.results[0].picture.large} alt='..' />
        </div>
    ) : (
        <div className='white--ground'>

            <h1 className='text-center fw-bold'>Loading....</h1>
            <Spinner />

        </div>
    )
}
