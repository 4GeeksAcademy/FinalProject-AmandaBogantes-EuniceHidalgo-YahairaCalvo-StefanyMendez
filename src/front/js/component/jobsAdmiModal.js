import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import PropTypes from "prop-types";

export const JobsAdmiModal = (...props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.get_all_clients()
        actions.get_all_users()
    }, [])

    return (
        <form className='modal' id="exampleModal" tabIndex="-1" style={{ display: store.show_modal ? "inline-block" : "none" }} onSubmit={(e) => {
            e.preventDefault()
            if (!!store.job_id) {
                actions.update_job_by_id(store.job_id.id)
                e.target.reset()
            } else {
                actions.add_job()
                e.target.reset()
            }
        }}>
            <div className="modal-dialog modal-dialog-centered p-1 fs-5">
                <div className="modal-content jobsModalContent p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold fs-5">Job</h5>
                        <button type="reset" className="close btn btn-login fw-bold text-center fw-bold fs-5"
                            onClick={() => { actions.handle_delete_modal() }}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <label htmlFor="userId" className="modal-label-input"
                                hidden={store.hidden_id} >Job ID {!!store.job_id ? store.job_id.id : ""}
                            </label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="code" className="modal-label-input">Code</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="code"
                                name="code"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.code : store.code}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="type" className="modal-label-input">Type</label>
                            <div className="input-group group-job-modal mb-3 input-select">
                                <select className="form-select select-jobs-modal" id="inputGroupTypes" onChange={actions.handle_change} name='type'>
                                    <option className='option-job-modal' defaultValue="null">Select the type</option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.type == "laptop" ? true : false}
                                        value="laptop" >Laptop
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.type == "cpu" ? true : false}
                                        value="cpu">Cpu
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.type == "monitor" ? true : false}
                                        value="monitor">Monitor
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.type == "printer" ? true : false}
                                        value="printer">Printer
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.type == "ups" ? true : false}
                                        value="ups">UPS
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="brand" className="modal-label-input">Brand</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="brand"
                                name="brand"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.brand : ""}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="model" className="modal-label-input">Model</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="model"
                                name="model"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.model : ""}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="serial_number" className="modal-label-input">Serial Number</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="serial_number"
                                name="serial_number"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.serial_number : ""}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="status" className="modal-label-input">Status</label>
                            <div className="input-group group-jobs-modal mb-3 input-select">
                                <select className="form-select select-jobs-modal" id="inputGroupStatus" onChange={actions.handle_change}
                                    name='status'>
                                    <option className='option-job-modal' defaultValue="null">Select the status</option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.status == "recieve" ? true : false}
                                        value="recieve">Received
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.status == "review" ? true : false}
                                        value="review">Reviewed
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.status == "repair_in_progress" ? true : false}
                                        value="repair_in_progress">Repair in Progress
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.status == "cancel" ? true : false}
                                        value="cancel">Canceled
                                    </option>
                                    <option className='option-job-modal'
                                        selected={!!store.job_id && store.job_id.status == "finish" ? true : false}
                                        value="finish">Finished
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="issues" className="modal-label-input">Issues</label>
                            <textarea
                                rows="3"
                                className="form-control formModalJobs"
                                id="issues"
                                name="issues"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.issues : ""}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="technical" className="modal-label-input">Technical</label>
                            <div className="input-group group-jobs-modal mb-3 input-select">
                                <select className="form-select select-jobs-modal" id="inputGroupTechnical" onChange={actions.handle_change}
                                    name='technical_id'>
                                    <option className='option-job-modal' defaultValue="null">Select the Technical</option>
                                    {!!store.users && store.users.map((user, index) => {
                                        if (user.role == "technical") {
                                            return (
                                                <option key={index}
                                                    className='option-job-modal'
                                                    selected={!!store.job_id && store.job_id.technical.id == user.id ? true : false}
                                                    value={user.id}>{user.id} - {user.first_name} {user.last_name}
                                                </option>
                                            )
                                        }
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="client" className="modal-label-input">Client</label>
                            <div className="input-group group-jobs-modal mb-3 input-select">
                                <select className="form-select select-jobs-modal" id="inputGroupClient" onChange={actions.handle_change}
                                    name='client_id'>
                                    <option className='option-job-modal' defaultValue="null">Select the Client</option>
                                    {!!store.clients && store.clients.map((client, index) => {
                                        return (
                                            <option key={index}
                                                className='option-job-modal'
                                                selected={!!store.job_id && store.job_id.client.id == client.id ? true : false}
                                                value={client.id}>{client.id} - {client.first_name} {client.last_name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label htmlFor="comments" className="modal-label-input">Comments</label>
                            <textarea
                                rows="3"
                                className="form-control formModalJobs"
                                id="comments"
                                name="comments"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.comments : ""}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="time_stamp" className="modal-label-input" hidden={store.hidden_time_stamp}>
                                <i className="fa-regular fa-clock me-1">
                                </i>Time Stamp: {!!store.job_id ? new Date(store.job_id.time_stamp).toLocaleString() : ""}
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center aligh-items-center">
                        <button type="submit" className="btn btn-login fw-bold text-center fs-5">
                            Save
                        </button>
                        <button type="button" className="btn btn-login fw-bold text-center fs-5"
                            hidden={store.hidden_btn_new_code}
                            onClick={() => { actions.random_code_job() }}>
                            New Code
                        </button>
                        <button type="reset" className="btn btn-login fw-bold text-center fs-5">
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
JobsAdmiModal.propTypes = {
    show: PropTypes.bool
}
JobsAdmiModal.defaultProps = {
    show: false
}

