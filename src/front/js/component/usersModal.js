import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export const UsersModal = () => {

    const { store, actions } = useContext(Context)

    return (
        <div tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered p-1">
                <div className="modal-content usersModalContent p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">Update User</h5>
                        <button type="button" className="close btn btn-login fw-bold text-center fw-bold">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <label htmlFor="userId" className="modal-label-input">User ID</label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="username" className="modal-label-input">Username</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="username"
                                name="username"
                                onChange={actions.handle_change}
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
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="phone" className="modal-label-input">Phone</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="phone"
                                name="phone"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="role" className="modal-label-input">Role</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="role"
                                name="role"
                                onChange={actions.handle_change}
                            />
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
                        <div className="form-group mb-2">
                            <label htmlFor="securityQuestion" className="modal-label-input">Security Question</label>
                            <input
                                type="text"
                                className="form-control formModalUsers"
                                id="securityQuestion"
                                name="question_security"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
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
                        <button type="button" className="btn btn-login fw-bold text-center">
                            Save
                        </button>
                        <button type="button" className="btn btn-login fw-bold text-center">
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}