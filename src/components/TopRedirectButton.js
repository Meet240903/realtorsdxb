import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../assets/css/topRedirectButton.css'
import { Link } from 'react-router-dom'

const TopRedirectButton = () => {
    return (
        <>
            <div className='top-redirect-button-section'>
                <Link to='#' target='_top'>
                    <button><FontAwesomeIcon icon={faChevronUp} /></button>
                </Link>
            </div>
        </>
    )
}

export default TopRedirectButton
