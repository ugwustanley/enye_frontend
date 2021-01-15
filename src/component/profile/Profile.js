import React from 'react'
import './Profile.scss'

const Profile = ({record}) => {
    return (
        <div className="profile">
            <div className='profile__box'>
                <p className="profile__title">First Name</p>
                <p className="profile__data">{record.FirstName}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">Last Name</p>
                <p className="profile__data">{record.LastName}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">Email</p>
                <p className="profile__data">{record.Email}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">Gender</p>
                <p className="profile__data">{record.Gender}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">MacAddress</p>
                <p className="profile__data">{record.MacAddress}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">PhoneNumber</p>
                <p className="profile__data">{record.PhoneNumber}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">UserName</p>
                <p className="profile__data">{record.UserName}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">PaymentMethod</p>
                <p className="profile__data">{record.PaymentMethod}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">Latitude</p>
                <p className="profile__data">{record.Latitude}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">Longitude</p>
                <p className="profile__data">{record.Longitude}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">DomainName</p>
                <p className="profile__data">{record.DomainName}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">CreditCardNumber</p>
                <p className="profile__data">{record.CreditCardNumber}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">CreditCardType</p>
                <p className="profile__data">{record.CreditCardType}</p>
            </div>
            <div className="profile__box">
                <p className="profile__title">LastLogin</p>
                <p className="profile__data">{record.LastLogin}</p>
            </div>
            <div className="profile__box url">
                <p className="profile__title">URL</p>
                <p className="profile__data">{record.URL}</p>
            </div>
        </div>
    )
}

export default Profile
