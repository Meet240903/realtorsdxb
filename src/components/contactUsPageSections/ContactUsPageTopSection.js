import React from 'react';
import '../../assets/css/contactUsPageSectionCSS/contactUsPageTopSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import mapImg from '../../assets/images/contactUs/mapImg.png';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ContactUsPageTopSection = () => {
    // Locations with tooltip information
    const locations = [
        { top: '40%', left: '20%', name: 'Riga, Latvia' },
        { top: '30%', left: '30%', name: 'Dubrovnik, Croatia' },
        { top: '25%', left: '60%', name: 'Jakarta, Indonesia' },
        { top: '30%', left: '70%', name: 'Budapest, Hungary' },
        { top: '50%', left: '75%', name: 'Bangkok, Thailand' },
        { top: '70%', left: '55%', name: 'Singapore, Singapore' }
    ];

    return (
        <div className='contact-us-page-top-section-container'>
            <div className='row mx-0 contact-us-page-top-section-content'>
                <div className='col-md-4 contact-us-page-top-section-left-content'>
                    <small>get in touch</small>
                    <h2>Visit one of our agency locations or contact us today</h2>
                    <h3>Head Office</h3>
                    <p><FontAwesomeIcon icon={faMap} /> Business Bay, Dubai</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> contact@uaeinvestmenthub.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +971 50 9192430</p>
                    <p><FontAwesomeIcon icon={faClock} /> Monday to Saturday: 9.00am to 16.pm</p>
                </div>
                <div className='col-md-8 contact-us-page-top-section-right-content position-relative'>
                    <img src={mapImg} className='img-fluid' alt='map-img' />

                    {/* Location Markers with Tooltips */}
                    {locations.map((location, index) => (
                        <OverlayTrigger
                            key={index}
                            placement="top"
                            overlay={<Tooltip className="custom-tooltip" id={`tooltip-${index}`}>{location.name}</Tooltip>}
                        >
                            <div
                                className='location-marker'
                                style={{ top: location.top, left: location.left }}
                            ></div>
                        </OverlayTrigger>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactUsPageTopSection;
