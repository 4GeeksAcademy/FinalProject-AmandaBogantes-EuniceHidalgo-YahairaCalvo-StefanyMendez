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

                        <div className='col-md-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-desktop'></i>
                                </div>
                                <h4 className='tituloH2'>Servicio 1</h4>
                                <hr />
                                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-tablet'></i>
                                </div>
                                <h4 className='tituloH2'>Servicio 2</h4>
                                <hr />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-desktop'></i>
                                </div>
                                <h4 className='tituloH2'>Servicio 3</h4>
                                <hr />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='item-service text-center'>
                                <div className='icon-service'>
                                    <i className='fa fa-tablet'></i>
                                </div>
                                <h4 className='tituloH2'>Servicio 4</h4>
                                <hr />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>


                    </div>

                </div>



            </div>


        </div>
    )
}

export default OurServices