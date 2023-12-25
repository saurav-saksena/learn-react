import React, { useState } from 'react'

export default function Feedback() {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
    const [text, setText] = useState("Excellents")
    const scoreHandle = (e) => {
        setScore(e.target.value)
        let newScore = Number(score)
        if (newScore <= 10 && newScore > 8) {

            setText("excellent")
        }
        else if (newScore <= 8 && newScore > 6) {

            setText("very good")
        }
        else if (newScore <= 6 && newScore > 4)
            setText("good")
        else if (newScore <= 4 && newScore > 2)
            setText("poor")
        else if (newScore <= 2)
            setText("very poor")
        else
            setText("idk")

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why the experience was poor");
            return;
        }
        setComment("")
        setScore("10")


    }

    return (
        <>
            <div className="white--ground">
                <form className="feedbackform" onSubmit={handleSubmit}>

                    <div className='container'>
                        <h2>Feedback Form: {text}</h2>


                        <label className='feedback-label'>Score: {score}<span className={Number(score) <= 5 ? "Poor" : "Good"}>
                            {Number(score) <= 5 ? "Poor" : "Good"}
                        </span></label>
                        <input
                            type="range"
                            min="0" max="10"
                            value={score}
                            onChange={scoreHandle}
                        />
                    </div>
                    <div className='container'>
                        <label htmlFor="textarea1">Comment:</label>
                        <textarea
                            id='textarea1'
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder='Please Give Your Opinion'
                        />
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
