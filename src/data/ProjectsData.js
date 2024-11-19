import projectImg1 from '../assets/images/home/featuredProjectSectionImgs/projectImg1.jpg'
import projectImg2 from '../assets/images/home/featuredProjectSectionImgs/projectImg2.jpg'
import projectImg3 from '../assets/images/home/featuredProjectSectionImgs/projectImg3.jpg'
import topSectionBgImg from '../assets/images/projectDetails/hartLand2Imgs/topSectionBgImg.webp'
import amenitiesSectionImg1 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg1.png'
import amenitiesSectionImg2 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg2.png'
import amenitiesSectionImg3 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg3.png'
import amenitiesSectionImg4 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg4.png'
import amenitiesSectionImg5 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg5.png'
import amenitiesSectionImg6 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg6.png'
import amenitiesSectionImg7 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg7.png'
import amenitiesSectionImg8 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg8.png'
import amenitiesSectionImg9 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg9.png'
import amenitiesSectionImg10 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg10.png'
import amenitiesSectionImg11 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg11.png'
import amenitiesSectionImg12 from '../assets/images/projectDetails/amenitiesSectionImgs/sectionImg12.png'

import extraordinarySportzImg1 from '../assets/images/projectDetails/extraordinarySectionImgs/sportz/sectionImg1.webp'
import extraordinarySportzImg2 from '../assets/images/projectDetails/extraordinarySectionImgs/sportz/sectionImg2.webp'
import extraordinarySportzImg3 from '../assets/images/projectDetails/extraordinarySectionImgs/sportz/sectionImg3.webp'
import extraordinarySportzImg4 from '../assets/images/projectDetails/extraordinarySectionImgs/sportz/sectionImg4.jpg'
import extraordinarySportzImg5 from '../assets/images/projectDetails/extraordinarySectionImgs/sportz/sectionImg5.jpg'

import extraordinaryHartlandIIImg1 from '../assets/images/projectDetails/extraordinarySectionImgs/hartLandII/sectionImg1.webp'
import extraordinaryHartlandIIImg2 from '../assets/images/projectDetails/extraordinarySectionImgs/hartLandII/sectionImg2.webp'
import extraordinaryHartlandIIImg3 from '../assets/images/projectDetails/extraordinarySectionImgs/hartLandII/sectionImg3.webp'
import extraordinaryHartlandIIImg4 from '../assets/images/projectDetails/extraordinarySectionImgs/hartLandII/sectionImg4.webp'
import extraordinaryHartlandIIImg5 from '../assets/images/projectDetails/extraordinarySectionImgs/hartLandII/sectionImg5.webp'
import extraordinaryHartlandIIImg6 from '../assets/images/projectDetails/extraordinarySectionImgs/hartLandII/sectionImg6.webp'

const projectData = [
    {
        sectionImg: projectImg1,
        slugs: 'sportz',
        title: "Sportz",
        location: "Sports City, Dubai",
        overviewSectionData: {
            sectionImg: projectImg1,
            mainContent: "Sportz by Danube Properties is a brand-new residential development that graces Dubai’s skyline with a diverse range of luxurious residences. This project stands as a beacon of futuristic living in a thriving and vibrant community. With its innovative and stylish architectural design, residents can immerse themselves in breathtaking green landscapes. This address redefines the concept of upscale living, offering leisure and well-being experiences that are truly engaging.",
            smallContent: "For those who enjoy running or walking, the athletic concourses offer the ideal tracks to stay in shape while enjoying the scenic beauty of the development. Whether you are a seasonal runner or someone who enjoy leisurely jog, the tracks are designed to accommodate all levels of fitness. Whereas the indoor courts offer access to fantastic opportunity to enjoy a game of badminton, paddle tennis and many such to explore and enjoy",
            projectDetails: [
                { title: "Status", value: "Under Construction" },
                { title: "Area", value: "8,413.39 Sq. Ft" },
                { title: "Location", value: "Sports City, Dubai" },
                { title: "Type", value: "Apartments" },
                { title: "Payment Plan", value: "1% per Month" },
                { title: "Down Payment", value: "20%" },
                { title: "Handover", value: "Q2 2027" },
                { title: "Apartment starting price", value: "590K AED" },
                { title: "Price Range", value: "AED580k - AED250k" },
            ]
        },
        amenitiesSectionData: {
            mainTitle: "Embrace a Lifestyle of Sports with Over 40 Amenities",
            contentData: [
                { sectionImg: amenitiesSectionImg1, title: "BASKETBALL COURT" },
                { sectionImg: amenitiesSectionImg2, title: "JOGGING TRACK" },
                { sectionImg: amenitiesSectionImg3, title: "Badminton Court" },
                { sectionImg: amenitiesSectionImg4, title: "Swimming Pool" },
                { sectionImg: amenitiesSectionImg5, title: "Children's play area" },
                { sectionImg: amenitiesSectionImg6, title: "Dancing / Zumba Center" },
                { sectionImg: amenitiesSectionImg1, title: "Basketball court" },
                { sectionImg: amenitiesSectionImg7, title: "Fitness Center" },
            ]
        },
        extraordinarySectionData: [
            { title: 'Badminton Court', sectionImg: extraordinarySportzImg1 },
            { title: 'Cinema', sectionImg: extraordinarySportzImg2 },
            { title: 'Cricket Pitch', sectionImg: extraordinarySportzImg3 },
            { title: 'Aquatic Gym', sectionImg: extraordinarySportzImg4 },
            { title: 'Community Views', sectionImg: extraordinarySportzImg5 },
            { title: 'Badminton Court', sectionImg: extraordinarySportzImg1 },
            { title: 'Cinema', sectionImg: extraordinarySportzImg2 },
            { title: 'Cricket Pitch', sectionImg: extraordinarySportzImg3 },
        ]
    },
    {
        sectionImg: projectImg2,
        slugs: 'hart-land-ii',
        title: "Hart land II",
        location: "MBR City, Dubai",
        bgImg: topSectionBgImg,
        overviewSectionData: {
            sectionImg: projectImg2,
            mainContent: "Sobha Hartland is a luxury lifestyle destination where you may live, work, and play all at the same time. This mixed-use development will be a renovated version of Sobha Hartland, complete with plenty of greenery, open space, and contemporary infrastructure. The newest neighborhoods of Dubai's well-planned MBR City The greatest resort for individuals who like the isolation of green and tranquility while still having easy access to the metropolis",
            smallContent: "Sobha Hartland II is a testament to the phenomenal success of Sobha Hartland. It’s a new luxury residential waterfront community of 8 million sq. ft. abounding with lush green spaces, community gardens, and many amenities to support a sustainable lifestyle. Life at Sobha Hartland II embodies an exultant sense of connection in a close-knit community and superior-quality homes crafted for the discerning eye.",
            projectDetails: [
                { title: "Status", value: "Under Construction" },
                { title: "Area", value: "8,413.39 Sq. Ft" },
                { title: "Location", value: "MBR City, Dubai" },
                { title: "Type", value: "Apartments and Villas" },
                { title: "Payment Plan", value: "60/40" },
                { title: "Down Payment", value: "20%" },
                { title: "Handover", value: "Q2 2025" },
                { title: "Apartment starting price", value: "590K AED" },
                { title: "Villa starting price", value: "22M AED" },
                { title: "Price Range", value: "AED1mil - AED25mil" },
            ]
        },
        amenitiesSectionData: {
            mainTitle: "DISCOVER A PREMIUM LIFESTYLE",
            content: "Sobha doesn’t just offer homes; it provides a lifestyle filled with leisure delights and top-class amenities.",
            contentData: [
                { sectionImg: amenitiesSectionImg1, title: "BASKETBALL COURT" },
                { sectionImg: amenitiesSectionImg2, title: "JOGGING TRACK" },
                { sectionImg: amenitiesSectionImg8, title: "Firefighting System" },
                { sectionImg: amenitiesSectionImg4, title: "Swimming Pool" },
                { sectionImg: amenitiesSectionImg5, title: "Children's play area" },
                { sectionImg: amenitiesSectionImg9, title: "Landscape Garden" },
                { sectionImg: amenitiesSectionImg10, title: "AC Community Hall" },
                { sectionImg: amenitiesSectionImg7, title: "Fitness Center" },
            ]
        },
        extraordinarySectionData: [
            { title: 'Retail Space', sectionImg: extraordinaryHartlandIIImg1 },
            { title: 'Boardwalk', sectionImg: extraordinaryHartlandIIImg2 },
            { title: 'Gym', sectionImg: extraordinaryHartlandIIImg3 },
            { title: 'Schools', sectionImg: extraordinaryHartlandIIImg4 },
            { title: 'Lagoons', sectionImg: extraordinaryHartlandIIImg5 },
            { title: 'Parks', sectionImg: extraordinaryHartlandIIImg6 },
            { title: 'Retail Space', sectionImg: extraordinaryHartlandIIImg1 },
            { title: 'Boardwalk', sectionImg: extraordinaryHartlandIIImg2 },
            { title: 'Gym', sectionImg: extraordinaryHartlandIIImg3 },
        ]
    },
    {
        sectionImg: projectImg3,
        slugs: 'aqua-dimore',
        title: "Aqua Dimore",
        location: "Dubai Science Park, Dubai, UAE",
        overviewSectionData: {
            sectionImg: projectImg3,
            mainContent: "Experience a new realm of luxury living with Vincitore Aqua Dimore at Dubai Science Park, an exquisite project by Vincitore Real Estate with luxury studios, 1 & 2 bedroom apartments, and 2 and 3 bedroom aqua villas with designer private pools. This development promises to be a grand new landmark on the horizon, offering a unique and opulent lifestyle in the heart of a vibrant city. It is not just a residence; it's an invitation to reimagine experiential living in your private oasis.",
            smallContent: "Situated in the prime address at Dubai Science Park (DSP), the development is part of a thriving and buzzing community. It enjoys excellent connectivity to prominent business areas, shopping destinations, education, medical facilities, and leisure avenues. For those seeking to elevate their lifestyle to new heights, this is the perfect address to call home.",
            projectDetails: [
                { title: "Status", value: "Under Construction" },
                { title: "Area", value: "415 to 1,835 Sq Ft" },
                { title: "Location", value: "Dubai Science Park, Dubai, UAE" },
                { title: "Type", value: "Apartment" },
                { title: "Payment Plan", value: "5 Years" },
                { title: "Down Payment", value: "20%" },
                { title: "Handover", value: "Q2 2026" },
                { title: "Price Range", value: "AED695k - AED1mil" },
            ]
        },
        amenitiesSectionData: {
            mainTitle: "Amenities",
            content: "Aqua Dimore doesn’t just offer homes; it provides a lifestyle filled with leisure delights and amenities of top-class.",
            contentData: [
                { sectionImg: amenitiesSectionImg11, title: "Surveillance System" },
                { sectionImg: amenitiesSectionImg12, title: "24x7 Security" },
                { sectionImg: amenitiesSectionImg8, title: "Firefighting System" },
                { sectionImg: amenitiesSectionImg4, title: "Swimming Pool" },
                { sectionImg: amenitiesSectionImg5, title: "Children's play area" },
                { sectionImg: amenitiesSectionImg9, title: "Landscape Garden" },
                { sectionImg: amenitiesSectionImg10, title: "AC Community Hall" },
                { sectionImg: amenitiesSectionImg7, title: "Fitness Center" },
            ]
        }
    },
]

export default projectData;