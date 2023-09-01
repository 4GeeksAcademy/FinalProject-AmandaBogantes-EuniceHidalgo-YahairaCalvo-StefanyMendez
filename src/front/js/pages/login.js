import React, { useContext } from 'react'
import '../../styles/login.css'
import logo from "../../img/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'

const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    store.is_logued ? navigate('/') : null
    return (
        <div className='container-login my-5 ' >
            <h1 className='lh1'>LOGIN</h1>
            <img src={logo} alt='logo' className='logo1 w-75' />

            <form className=" login mt-3  " onSubmit={e => {
                e.preventDefault()
                actions.login_user()
            }
            }>
                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={actions.handle_change}
                />

                {/* password */}
                <input
                    className='form-control '
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={actions.handle_change}
                />

                <div className='text-end me-2'>
                    <Link to="/forgotPass" className='form-label' onClick={() => actions.reset_hidden_username_question(false, true)}>
                        <span className='span-forgot text-white ms-auto'>Forgot password?</span>
                    </Link>
                </div>

                <br></br>

                <div className='text-center'>
                    <button className='btnLogin btn'>Login</button>
                </div>
            </form>

        </div>

    )
}

export default Login