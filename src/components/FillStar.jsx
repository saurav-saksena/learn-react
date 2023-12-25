import React, { useState } from 'react'
import "../App.css"

export default function FillStar() {
    const [contact, setContact] = useState({
        firstName: "Chris",
        lastName: "Evans",
        phone: "+1 (719) 555-1212",
        email: "chrisevans719@gmail.com",
        isFavorite: false,
        img: "./img/evans.webp"
    })

    function changeStar() {
        setContact(prevContact => ({

            ...prevContact,
            isFavorite: !prevContact.isFavorite

        }))


    }


    let starIcon = contact.isFavorite ? "./img/star-outline-filled.png" : "./img/star-outline.png"
    return (
        <>


            <div className='card'>
                <img src={contact.img} className='card-img' alt='img' />
                <div className='card-info'>
                    <img src={starIcon} className='card-star' alt='like it' onClick={changeStar} />
                    <h2 className='card-title'>{contact.firstName} {contact.lastName}</h2>
                    <h3 className='card-num'>{contact.phone}</h3>
                    <h3 className='card-email'>{contact.email}</h3>

                </div>

            </div>
        </>
    )
}
