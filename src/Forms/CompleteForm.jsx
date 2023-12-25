import React, { useState } from 'react'
import "../scrim.css"

export default function CompleteForm() {
    const [completeData, setCompleteData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setCompleteData(preData => {
            return {
                ...preData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (completeData.firstName === "" || completeData.lastName === "") {
            alert("please fill first-name and last-name")
            return
        }
        console.log(completeData)
        setCompleteData({
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        })
    }

    return (
        <>
            <div className="white--ground">

                <form className='complete--form' onSubmit={handleSubmit}>
                    <input
                        className='input-text'
                        type='text'
                        placeholder='First-Name'
                        onChange={handleChange}
                        name='firstName'
                        value={completeData.firstName}
                    />

                    <input
                        className='input-text'
                        type='text'
                        placeholder='Last-Name'
                        onChange={handleChange}
                        name='lastName'
                        value={completeData.lastName}
                    />

                    <input
                        className='input-text'
                        type='email'
                        placeholder='Email'
                        onChange={handleChange}
                        name='email'
                        value={completeData.email}
                    />

                    <textarea
                        placeholder="Please Comments"
                        onChange={handleChange}
                        name='comments'
                        value={completeData.comments}
                    />

                    <input
                        type='checkbox'
                        id='isFriendly'
                        onChange={handleChange}
                        name='isFriendly'
                        checked={completeData.isFriendly}

                    />
                    <label htmlFor='isFriendly'>Are you friendly ?</label>

                    <br />
                    <br />
                    <fieldset>
                        <legend>Currently employment status..</legend>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="employment"
                                value="unemployed"
                                onChange={handleChange}
                                checked={completeData.employment === "unemployed"}
                                id="radioId1" />

                            <label
                                className="form-check-label"
                                htmlFor="radioId1">
                                Unemployed
                            </label>
                        </div>


                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="employment"
                                value="part-time"
                                onChange={handleChange}
                                checked={completeData.employment === "part-time"}

                                id="radioId2" />

                            <label
                                className="form-check-label"
                                htmlFor="radioId2">
                                Part-Time
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="employment"
                                value="full-time"
                                onChange={handleChange}
                                checked={completeData.employment === "full-time"}

                                id="radioId3" />

                            <label
                                className="form-check-label"
                                htmlFor="radioId3">
                                Full-Time
                            </label>
                        </div>
                    </fieldset>

                    <br />
                    <br />
                    <label htmlFor="favColor">What is your favorite Color ?</label>
                    <br />
                    <select
                        id="favColor"
                        name="favColor"
                        value={completeData.favColor}
                        onChange={handleChange}
                    >
                        <option value="">--choose-color-- </option>
                        <option value="red">Red</option>
                        <option value="yellow"> Yellow</option>
                        <option value="black">Black </option>
                        <option value="blue"> Blue</option>
                        <option value="pink"> Pink</option>
                        <option value="green"> Green</option>
                        <option value="white">White </option>
                        <option value="violet">Violet </option>


                    </select>
                    <br /><br />
                    <button>submit</button>


                </form>
            </div>
        </>
    )
}
