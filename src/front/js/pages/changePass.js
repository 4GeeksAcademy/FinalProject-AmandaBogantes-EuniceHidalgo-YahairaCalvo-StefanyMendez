import React, { useContext } from 'react'
import '../../styles/changePass.css'
import logo from "../../img/logo.png"
import { Context } from '../store/appContext'
import { useNavigate } from 'react-router-dom'


const ChangePass = () => {
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()

    store.password_changed ? navigate('/login'): null

    return (

        <div className='container-forgot my-5'>

            <h1 className='lh1'>Change Password</h1>

            <img src={logo} alt='logo' className='logo1 w-75' />


            <form className=" forgot mt-3" onSubmit={(e)=>{
                e.preventDefault()
                actions.change_password();
            }}>

                <input
                    className='form-control mb-3'
                    type='password'
                    placeholder='NewPassword'
                    name='password'
                    onChange={actions.handle_change}
                />

                <input
                    className='form-control mb-3'
                    type='password'
                    placeholder='ConfirmPassword'
                    name='confirm_password'
                    onChange={actions.handle_change}
                />


                <div className='text-center'>
                    <button className='btnforgot btn'>Change Password</button>
                </div>


            </form>

        </div>
    )
}

export default ChangePass