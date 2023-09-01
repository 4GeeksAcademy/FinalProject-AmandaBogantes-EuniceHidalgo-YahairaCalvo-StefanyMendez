import React, { useContext } from 'react'
import '../../styles/forgotPass.css'
import logo from "../../img/logo.png"
import { Link, useNavigate} from 'react-router-dom'
import { Context } from '../store/appContext'


const ForgotPass = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    store.correct_answer ? navigate('/changePass'):null

    return (
        <div className='container-forgot my-5'>
            <h1 className='lh1'>Forgot Password</h1>
            <img src={logo} alt='logo' className='logo1 w-75' />

            <form hidden={store.hidden_username} onSubmit={(e)=>{
                e.preventDefault()
                actions.forgot_password()
            }}>
                <input
                    className='form-control formControlForgotPassword mb-3'
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={actions.handle_change}
                />

                <div className='text-center'>
                    <button className='btnforgot btn'>Check</button>
                    <Link to="/login">
                        <button className='btnforgot btn ms-2'>Cancel</button>
                    </Link>
                </div>
            </form>

            <form className=" forgot mt-3" hidden={store.hidden_questions_answer} onSubmit={(e) => {
                e.preventDefault()
                actions.check_question_answer()
            }}>

                {/*Dop */}

                <div className="input-group mb-3 input-select">
                    <select className="form-select" id="inputGroupQuestions" onChange={actions.handle_change} name='question_security'>
                        <option defaultValue="null">Select the question</option>
                        <option value="pet" >What is the name of your first pet?</option>
                        <option value="color">What is your favorite color?</option>
                        <option value="movie">What is your favorite movie?</option>
                        <option value="food">What is your favorite food?</option>
                    </select>
                </div>

                {/* Respuesta */}
                <input
                    className='form-control formControlForgotPassword mb-3'
                    type='text'
                    placeholder='Answer'
                    name='answer_security'
                    onChange={actions.handle_change}
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