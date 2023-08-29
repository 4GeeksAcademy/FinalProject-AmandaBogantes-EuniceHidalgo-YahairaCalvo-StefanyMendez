import React from 'react'
import '../../styles/changePass.css'
import logo from "../../img/logo.png"


const ChangePass = () => {


    return (

        <div className='container-forgot my-5'>

            <h1 className='lh1'>Change Password</h1>

            <img src={logo} alt='logo' className='logo1 w-75' />


            <form className=" forgot mt-3"  >

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='NewPassword'
                    name='´password'
                />

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='ConfirmPassword'
                    name='confirm_password'
                />


                <div className='text-center'>
                    <button className='btnforgot btn' >Change Password</button>
                </div>


            </form>

        </div>
    )
}

export default ChangePass