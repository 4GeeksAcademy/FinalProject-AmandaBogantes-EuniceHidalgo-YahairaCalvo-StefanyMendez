import React from 'react'
import '../../styles/ourServices.css'

const OurServices = () => {
    
    return (
        <div className='body1'>
            <div className='services'>
                <h1 className='tituloH1'>Services</h1>
            </div>
            <div className='content-box-lg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 col-lg-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-desktop'></i>
                                </div>
                                <h4 className='tituloH2'>Maintenance</h4>
                                <hr />
                                <p className=''>Optimize your operations with our comprehensive equipment maintenance services. Our skilled technicians ensure peak performance and longevity of your machinery.</p>
                            </div>
                        </div>
      
                        <div className='col-md-6 col-sm-12 col-lg-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-tablet'></i>
                                </div>
                                <h4 className='tituloH2'>Component purchase</h4>
                                <hr />
                                <p>Explore our extensive inventory of high-quality components. From essential parts to advanced modules, we provide solutions for your specific needs.</p>
                            </div>
                        </div>

                        <div className='col-md-6 col-sm-12 col-lg-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-desktop'></i>
                                </div>
                                <h4 className='tituloH2'>Spare parts sale</h4>
                                <hr />
                                <p>Keep your systems up and running with our premium spare parts. We offer a wide range of genuine components for efficient replacements and repairs</p>
                            </div>
                        </div>

                        <div className='col-md-6 col-sm-12 col-lg-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-tablet'></i>
                                </div>
                                <h4 className='tituloH2'>Repair</h4>
                                <hr />
                                <p>Experience fast and reliable equipment repairs with our dedicated team. We specialize in restoring functionality and minimizing downtime.</p>
                            </div>
                        </div>


                    </div>

                </div>



            </div>


        </div>
    )
}

export default OurServices