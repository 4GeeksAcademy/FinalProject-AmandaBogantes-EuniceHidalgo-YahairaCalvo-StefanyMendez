import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import PropTypes from "prop-types";

export const UsersModal = (...props) => {

    const { store, actions } = useContext(Context)

    return (
        <form className='modal' tabIndex="-1" style={{ display: store.show_modal ? "inline-block" : "none" }} onSubmit={(e) => {
            e.preventDefault()
            if (!!store.user_id) {
                actions.update_user_by_id(store.user_id.id)
                e.target.reset()
            } else {
                actions.add_user()
                e.target.reset()
            }
        }}>
            <div className="modal-dialog modal-dialog-centered p-1">
                <div className="modal-content usersModalContent p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">User</h5>
                        <button type="reset" className="close btn btn-login fw-bold text-center fw-bold"
                            onClick={() => actions.handle_delete_modal()}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-1 fs-5">
                            <label htmlFor="userId" className="modal-label-input" hidden={store.hidden_id}
                            >User ID {!!store.user_id ? store.user_id.id : null}</label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="username" className="modal-label-input">Username</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="username"
                                name="username"
                                onChange={actions.handle_change}
                                defaultValue={!!store.user_id ? store.user_id.username : ""}
                                readOnly={store.read_only_username}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="firstName" className="modal-label-input">First Name</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="firstName"
                                name="first_name"
                                onChange={actions.handle_change}
                                defaultValue={!!store.user_id ? store.user_id.first_name : ""}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="lastName" className="modal-label-input">Last Name</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="lastName"
                                name="last_name"
                                onChange={actions.handle_change}
                                defaultValue={!!store.user_id ? store.user_id.last_name : ""}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="phonePreffix" className="modal-label-input">Phone</label>
                                <input
                                    type="text"
                                    className="form-control formModalUsers"
                                    id="phone"
                                    name="phone"
                                    onChange={actions.handle_change}
                                    defaultValue={!!store.user_id ? store.user_id.phone : ""}
                                /> 
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="role" className="modal-label-input">Role</label>
                            <div className="input-group group-user-modal mb-3 input-select">
                                <select className="form-select select-user-modal" id="inputGroupRoles" onChange={actions.handle_change} name='role'>
                                    <option className='option-user-modal' defaultValue="null">Select the role</option>
                                    <option className='option-user-modal' selected={!!store.user_id && store.user_id.role == "admin" ? true : false} value="admin" >Admin</option>
                                    <option className='option-user-modal' selected={!!store.user_id && store.user_id.role == "technical" ? true : false} value="technical">Technical</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="password" className="modal-label-input">Password</label>
                            <input
                                type="password"
                                className="form-control formModalUsers"
                                id="password"
                                name="password"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2" hidden={store.hidden_input_question_answer}>
                            <label htmlFor="securityQuestion" className="modal-label-input"  >Security Question</label>
                            <div className="input-group group-user-modal mb-3 input-select">
                                <select className="form-select select-user-modal" id="inputGroupQuestions" onChange={actions.handle_change} name='question_security'>
                                    <option className='option-user-modal' defaultValue="null">Select the question</option>
                                    <option className='option-user-modal' value="pet" >What is the name of your first pet?</option>
                                    <option className='option-user-modal' value="color">What is your favorite color?</option>
                                    <option className='option-user-modal' value="movie">What is your favorite movie?</option>
                                    <option className='option-user-modal' value="food">What is your favorite food?</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-2" hidden={store.hidden_input_question_answer}>
                            <label htmlFor="securityAnswer" className="modal-label-input">Security Answer</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="securityAnswer"
                                name="answer_security"
                                onChange={actions.handle_change}
                            />
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center aligh-items-center">
                        <button type="submit" className="btn btn-login fw-bold text-center">
                            Save
                        </button>
                        <button type="reset" className="btn btn-login fw-bold text-center">
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </form>

    )
}
UsersModal.propTypes = {
    show: PropTypes.bool
}
UsersModal.defaultProps = {
    show: false
}