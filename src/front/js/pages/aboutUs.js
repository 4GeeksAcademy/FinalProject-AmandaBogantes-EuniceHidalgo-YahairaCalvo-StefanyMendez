import React from 'react'
import '../../styles/aboutUs.css'

const AboutUs = () => {

    return (

        <div className='body-about '>


            <div className='container '>
                <div className='row  '>
                    <div className='about-1 ms-auto mt-5'>
                        <h1 className="fw-bold">About Us</h1>
                        <p className='textAboutUs'>In the year 2023, four visionary women, experts in different areas of technology, joined forces to found EYA Solutions, a company that has become a beacon of innovation in the world of web development and asset management.

                            Each of these women brought a unique and valuable perspective to the company. With backgrounds in artificial intelligence, cybersecurity, user experience design, and software development, they combined their skills to create a revolutionary web platform aimed at equipment maintenance.</p>
                    </div>
                </div>
            </div>



            <div id='about-2'>
                <div className='content-box-lg'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-6'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-book'></i>
                                    <h2 className='itemH3'>Mission</h2>
                                    <hr />
                                    <p className='textAboutUs'>At EYA Solutions, our mission is to simplify and enhance the equipment maintenance process through advanced technological solutions. We aim to provide companies of all sizes with an intuitive and efficient web platform that optimizes asset management, reducing costs and maximizing productivity.</p>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-globe'></i>
                                    <h2 className='itemH3'>Vission</h2>
                                    <hr />
                                    <p className='textAboutUs'>Our vision at EYA Solutions is to lead the way towards a future where equipment maintenance is synonymous with efficiency and operational excellence. We envision a world where every company, regardless of their industry, leverages our platform to ensure the longevity and optimal performance of their assets.

                                        With the EYA Solutions website, you won't just be managing your equipment more efficiently; you'll be paving the way towards a more sustainable and profitable tomorrow. Together, we are shaping the future of industrial maintenance.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs