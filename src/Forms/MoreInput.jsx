import React, { useState } from 'react'

export default function MoreInput() {
    const [moredata, setMoredata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    function handleChange(event) {
        setMoredata((preData) => {
            return {
                ...preData,
                [event.target.name]: event.target.value

            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (moredata.email && moredata.password) {

            console.log("form submitted")
            setMoredata({
                firstName: "",
                lastName: "",
                password: "",
                email: ""
            })
        } else {
            alert("can't leave email or password field")
        }


    }
    // console.log(moredata)

    return (
        <>
            <div className="white--ground">

                <form onSubmit={handleSubmit} className='more--input'>
                    <input
                        type="text"
                        name="firstName"
                        value={moredata.firstName}
                        onChange={handleChange}
                        placeholder='first name'
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={moredata.lastName}
                        onChange={handleChange}
                        placeholder='last name'
                    />
                    <input
                        type="email"
                        name="email"
                        value={moredata.email}
                        onChange={handleChange}
                        placeholder='email@gmail.com'
                    />
                    <input
                        type="password"
                        name="password"
                        value={moredata.password}
                        onChange={handleChange}
                        placeholder='password'
                    />
                    <button type="submit">submit</button>








                </form>
                <h1>{moredata.firstName}</h1>
                <h1>{moredata.lastName}</h1>
                <h1>{moredata.email}</h1>
                <h1>{moredata.password}</h1>
            </div>
        </>
    )
}
