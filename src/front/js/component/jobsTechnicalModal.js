import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import PropTypes from "prop-types";

export const JobsTechnicalModal = () => {

    const { store, actions } = useContext(Context)

    return (
        <form className="modal" tabIndex="-1" style={{ display: store.show_modal ? "inline-block" : "none" }} onSubmit={(e) => {
            e.preventDefault()
            actions.update_job_by_id(store.job_id.id)
            e.target.reset()

        }}>
            <div className="modal-dialog modal-dialog-centered p-1 fs-5">
                <div className="modal-content jobsTechnicalModalContent p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold fs-5">Job Details</h5>
                        <button type="reset" className="close btn btn-login fw-bold text-center fw-bold fs-5"
                            onClick={() => actions.handle_delete_modal()}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <label htmlFor="userId" className="modal-label-input" hidden={store.hidden_id}>Job ID {!!store.job_id ? store.job_id.id : ""}</label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="code" className="modal-label-input">Code</label>
                            <input
                                type="text"
                                className="form-control formTechnicalModalJobs readonly"
                                id="code"
                                name="code"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.code : ""}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="type" className="modal-label-input">Type</label>
                            <input
                                type="text"
                                className="form-control formModalJobs readonly"
                                id="type"
                                name="type"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.type : ""}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="brand" className="modal-label-input">Brand</label>
                            <input
                                type="text"
                                className="form-control formModalJobs readonly"
                                id="brand"
                                name="brand"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.brand : ""}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="model" className="modal-label-input">Model</label>
                            <input
                                type="text"
                                className="form-control formModalJobs readonly"
                                id="model"
                                name="model"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.model : ""}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="serial_number" className="modal-label-input">Serial Number</label>
                            <input
                                type="text"
                                className="form-control formModalJobs readonly"
                                id="serial_number"
                                name="serial_number"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.serial_number : ""}
                                readOnly
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
                                        value="recieve">Recieved
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
                                className="form-control formModalJobs readonly"
                                id="issues"
                                name="issues"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? store.job_id.issues : ""}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="technical_id" className="modal-label-input">Technical ID</label>
                            <input
                                type="text"
                                className="form-control formModalJobs readonly"
                                id="technical_id"
                                name="technical_id"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? `${store.job_id.technical.id} - ${store.job_id.technical.first_name} ${store.job_id.technical.last_name}` : ""}
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="client_id" className="modal-label-input">Client ID</label>
                            <input
                                type="text"
                                className="form-control formModalJobs readonly"
                                id="client_id"
                                name="client_id"
                                onChange={actions.handle_change}
                                defaultValue={!!store.job_id ? `${store.job_id.client.id} - ${store.job_id.client.first_name} ${store.job_id.client.last_name}` : ""}
                                readOnly
                            />
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
                                <i className="fa-regular fa-clock me-1"></i>
                                Time Stamp: {!!store.job_id ? new Date(store.job_id.time_stamp).toLocaleString() : ""}
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center aligh-items-center">
                        <button type="submit" className="btn btn-login fw-bold text-center fs-5">
                            Save
                        </button>
                        <button type="reset" className="btn btn-login fw-bold text-center fs-5" onClick={() => actions.handle_delete_modal()}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

JobsTechnicalModal.propTypes = {
    show: PropTypes.bool
}
JobsTechnicalModal.defaultProps = {
    show: false
}