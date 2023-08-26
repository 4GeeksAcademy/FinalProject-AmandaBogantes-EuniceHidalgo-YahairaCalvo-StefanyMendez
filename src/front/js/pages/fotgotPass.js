import React from 'react'
import '../../styles/forgotP.css'
import logo from "../../img/logo.png"


const ForgotPass = () => {


    return (

        <div className='container my-5'>

            <h1 className='lh1'>Forgot Password</h1>

            <img src={logo} alt='logo' className='logo1 w-75'></img>


            <form className=" forgot mt-5"  >

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Username'
                    name='username'
                />

                {/*Dop */}


                {/*
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                  Security questions
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li><button class="dropdown-item" type="button">¿Cuál es el nombre de tu primera mascota?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál es tu color favorito?</button></li>
                        <li><button class="dropdown-item" type="button">¿En qué ciudad naciste?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál es el nombre de soltera de tu madre?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál es tu película favorita?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál fue tu primer auto?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál es tu equipo deportivo favorito?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál es tu comida favorita?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál es el nombre de tu mejor amigo de la infancia?</button></li>
                        <li><button class="dropdown-item" type="button">¿Cuál es el segundo nombre de tu hermano/a mayor?</button></li>
                    </ul>
                </div>
                */}



                {/*

                <div className="dropdown">
                    <button className="btn btn-account dropdown-toggle my-1" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-end mt-2" aria-labelledby="dropdownMenuButton2">
                        <li className="dropdown-item">
                            <Link to="/" className="text-decoration-none">
                                <span className="text-white">Change Password</span>
                            </Link>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li className="dropdown-item">
                            <Link to="/" className="text-decoration-none d-flex">
                                <span className="text-white">Logout</span>
                                <i class="fa-solid fa-right-from-bracket ms-auto text-white"></i>
                            </Link>
                        </li>
                    </ul>
                </div>



*/}



                {/* Respuesta */}

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Answer'
                    name='answer'
                />


                <button className='btnforgot btn' >Submid</button>

            </form>

        </div>
    )
}

export default ForgotPass