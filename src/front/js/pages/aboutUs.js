import React from 'react'
import '../../styles/aboutUs.css'

const AboutUs = () => {

    return (

        <div className='body-about '>


            <div className='container '>
                <div className='row  '>
                    <div className='about-1 ms-auto mt-5'>
                        <h1 className="fw-bold">AboutUs</h1>
                        <p>Every single company has a story, so tell yours! Your customers will want to know about your backstory,
                            and what made you want to start your business in the first place. Talk about your breakthroughs,
                            your milestones, and your evolution and what made you want to start your.</p>
                    </div>
                </div>
            </div>



            <div id='about-2'>
                <div className='content-box-lg'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-4'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-book'></i>
                                    <h2 className='itemH3'>Mission</h2>
                                    <hr />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-globe'></i>
                                    <h2 className='itemH3'>Vission</h2>
                                    <hr />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-pencil'></i>
                                    <h2 className='itemH3'>Achievements</h2>
                                    <hr />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy</p>
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