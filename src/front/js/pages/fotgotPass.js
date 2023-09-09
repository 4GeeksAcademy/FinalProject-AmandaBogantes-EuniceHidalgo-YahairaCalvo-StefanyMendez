import React, { useContext, useEffect } from 'react'
import '../../styles/forgotPass.css'
import logo from "../../img/logo.png"
import { Link, useNavigate} from 'react-router-dom'
import { Context } from '../store/appContext'

const ForgotPass = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    useEffect(()=>{
        store.correct_answer ? navigate('/changePass'):null
    })

    return (
        <div className='container-forgot my-5'>
            <img src={logo} alt='logo' className='logo1 w-100' />

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
                <div className="input-group group-forgot-pass mb-3 input-select">
                    <select className="form-select select-forgot-pass" id="inputGroupQuestions" onChange={actions.handle_change} name='question_security'>
                        <option className='option-forgot-pass' defaultValue="null">Select the question</option>
                        <option className='option-forgot-pass' value="pet" >What is the name of your first pet?</option>
                        <option className='option-forgot-pass' value="color">What is your favorite color?</option>
                        <option className='option-forgot-pass' value="movie">What is your favorite movie?</option>
                        <option className='option-forgot-pass' value="food">What is your favorite food?</option>
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