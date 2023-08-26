import React from 'react'
import '../../styles/login.css'
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <div className='container my-5 w-sm-25' >

            <h1 className='lh1'>LOGIN</h1>

            <img src={logo} alt='logo' className='logo1' />

            <form className=" login mt-3  "  >

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Username'
                    name='username'
                />

                {/* password */}
                <input
                    className='form-control '
                    type='password'
                    placeholder='Password'
                    name='password'
                />

                <div className='text-end me-2'>
                    <Link to="/forgotPass" className='form-label' >
                        <span className='span-forgot text-white ms-auto'>Forgot password?</span>
                    </Link>
                </div>

                <br></br>

                <div className='text-center'>
                    <button className='btnLogin btn'>login</button>
                </div>


            </form>

        </div>

    )
}

export default Login