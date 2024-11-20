import React, { useState } from 'react';
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsGallerySection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';

const ProjectDetailsGallarySection = ({ sectionData }) => {
    const [currentTab, setCurrentTab] = useState(sectionData[0]);
    const [fade, setFade] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 9; // Number of images per page
    const totalPages = Math.ceil(currentTab?.contentData?.length / itemsPerPage);

    const [showModal, setShowModal] = useState(false);
    const [modalImgIndex, setModalImgIndex] = useState(null);

    const handleTabClick = (newTab) => {
        if (currentTab.tabTitle !== newTab.tabTitle) {
            setFade(true); // Trigger fade out
            setTimeout(() => {
                setCurrentTab(newTab); // Change the tab after fade-out
                setCurrentPage(1); // Reset to the first page
                setFade(false); // Trigger fade-in
            }, 300); // Match the duration of fade-out animation
        }
    };

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setFade(true);
            setTimeout(() => {
                setCurrentPage(pageNumber);
                setFade(false);
            }, 300);
        }
    };

    // Calculate the items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = currentTab?.contentData?.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const openModal = (index) => {
        setModalImgIndex(index); // Store the index of the clicked image
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalImgIndex(null);
    };

    const totalImages = currentTab?.contentData?.length; // Total number of images

    const handleImgChange = () => {
        setModalImgIndex((prevIndex) => {
            if (prevIndex + 1 < totalImages) {
                return prevIndex + 1; // Move to the next image
            } else {
                return 0; // Loop back to the first image
            }
        });
    };


    return (
        <>
            <div className="project-details-gallary-section-container">
                <div className="project-details-gallary-section-title">
                    <h2>Gallery</h2>
                </div>
                <div className="project-details-gallary-section-tab">
                    {sectionData?.map((data, index) => (
                        <p
                            key={index}
                            onClick={() => handleTabClick(data)}
                            style={{
                                borderBottom:
                                    currentTab?.tabTitle === data?.tabTitle
                                        ? '2px solid #bda588'
                                        : '',
                            }}
                        >
                            {data?.tabTitle}
                        </p>
                    ))}
                </div>
                <div
                    className={`project-details-gallary-section-content ${fade ? 'fade-out' : 'fade-in'}`}
                >
                    {currentItems?.map((data, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            onClick={() => openModal(startIndex + index)}
                        >
                            <img
                                src={data?.sectionImg}
                                className="img-fluid"
                                alt="section-img"
                            />
                            <div className="overlay">
                                <FontAwesomeIcon
                                    className="gallery-search-icon"
                                    icon={faSearch}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="prev-btn"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={currentPage === page ? 'active' : ''}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="next-btn"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
            {showModal && modalImgIndex !== null && (
                <div className="project-details-gallery-section-modal">
                    <img
                        src={currentTab?.contentData[modalImgIndex]?.sectionImg}
                        className="img-fluid"
                        alt="section-img"
                        onClick={handleImgChange}
                    />
                    <p>{`${modalImgIndex + 1} of ${totalImages}`}</p>
                    <FontAwesomeIcon
                        onClick={closeModal}
                        icon={faClose}
                        className="modal-close-icon"
                    />
                </div>
            )}
        </>
    );
};

export default ProjectDetailsGallarySection;
