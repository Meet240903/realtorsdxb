import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../assets/css/breadcrumpPage.css'
import { Link } from 'react-router-dom'

const BreadcrumpPage = ({ title, bgImg }) => {
    return (
        <>
            <div
                className='breadcrump-page-section-container'
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <h1>{title}</h1>
                <div className='breadcrump-page-section-links'>
                    <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}><p>Home</p></Link>
                    <p><FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "10px", fontWeight: 'bold' }} /></p>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}

export default BreadcrumpPage
