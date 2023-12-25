import React, { useState } from 'react'
import "../scrim.css"

export default function SignUp() {
    const [logData, setLogData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsLetter: true
    })
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setLogData(preData => {
            return {
                ...preData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (logData.email && logData.password && logData.password === logData.confirmPassword) {
            alert("you signedup successfully !")

        } else if (logData.email === "") {
            alert("please provide email id")
            return

        } else {
            alert("password do not match!")
            return
        }
        setLogData({
            email: "",
            password: "",
            confirmPassword: "",
            newsLetter: true
        })
        console.log(logData)
        if (logData.newsLetter) {
            alert("Thanks for signing up for newsLetter")
        }
    }
    return (
        <>
            <div className="white--ground">

                <div className='signup--container'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='email'
                            className='signup--input'
                            name="email"
                            onChange={handleChange}
                            value={logData.email}
                            placeholder='Email Id'
                        />
                        <input
                            type='password'
                            className='signup--input'
                            name="password"
                            onChange={handleChange}
                            value={logData.password}
                            placeholder='create-password'
                        />
                        <input
                            type='password'
                            className='signup--input'
                            name="confirmPassword"
                            onChange={handleChange}
                            value={logData.confirmPassword}
                            placeholder='confirm-password'
                        />
                        <div className='form--marketing'>
                            <input
                                id='newsletter'
                                type='checkbox'
                                name='newsLetter'
                                onChange={handleChange}
                                checked={logData.newsLetter}
                            />
                            <label htmlFor="newsletter">I want to join the newsletter</label>
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}
