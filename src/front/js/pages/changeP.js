import React from 'react'
import '../../styles/changeP.css'
import logo from "../../img/logo.png"


const ChangeP = () => {


    return (

        <div className='container-forgot my-5'>

            <h1 className='lh1'>Change Password</h1>

            <img src={logo} alt='logo' className='logo1 w-75' />


            <form className=" forgot mt-3"  >

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='Username'
                    name='username'
                />

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='NewPassword'
                    name='nPassword'
                />

                <input
                    className='form-control mb-3'
                    type='text'
                    placeholder='ConfirmPassword'
                    name='nPassword'
                />




                <div className='text-center'>
                    <button className='btnforgot btn' >Change Password</button>
                </div>


            </form>

        </div>
    )
}

export default ChangeP