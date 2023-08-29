import React from 'react'
import '../../styles/forgotPass.css'
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'


const ForgotPass = () => {


    return (

        <div className='container-forgot my-5'>

            <h1 className='lh1'>Forgot Password</h1>

            <img src={logo} alt='logo' className='logo1 w-75' />

            <form className=" forgot mt-3"  >

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Username'
                    name='username'
                />

                {/*Dop */}

                <div className="input-group mb-3 input-select">
                    <select className="form-select" id="inputGroupQuestions">

                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                {/* Respuesta */}
                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Answer'
                    name='answer'
                />

                <div className='text-center'>
                    <button className='btnforgot btn'>Continue</button>
                    <Link to="/login">
                        <button className='btnforgot btn ms-2'>Cancel</button>
                    </Link>
                </div>

            </form>

        </div>
    )
}

export default ForgotPass