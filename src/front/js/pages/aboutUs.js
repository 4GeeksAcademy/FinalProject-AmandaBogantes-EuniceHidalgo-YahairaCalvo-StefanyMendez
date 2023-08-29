import React from 'react'
import '../../styles/aboutUs.css'

const AboutUs = () => {

    return (
        
        <div className='body'>

            <div className='about-1'>
                <h1>AboutUs</h1>
                <p>Every single company has a story, so tell yours! Your customers will want to know about your backstory,
                    and what made you want to start your business in the first place. Talk about your breakthroughs,
                    your milestones, and your evolution. Basically, how your business got to become what it is today.
                    Sharing your company story will help your clients to empathize with you and your business.</p>
            </div>

            <div id='about-2'>
                <div className='content-box-lg'>
                    <div className='container'>
                        <div className='row'>

                            <div className='col-md-4'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-book'></i>
                                    <h3>Mission</h3>
                                    <hr />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-globe'></i>
                                    <h3>Vission</h3>
                                    <hr />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className='about-item text-center'>
                                    <i className='fa fa-pencil'></i>
                                    <h3>Achievements</h3>
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