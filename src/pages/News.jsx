import React from 'react'

export default function News(props) {
    return (
        <div className='news--container'>
            <img src={props.image ? props.image : "https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE="} alt='hello..' />

            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}
