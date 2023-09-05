import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export const JobsTechnicalModal = () => {

    const { store, actions } = useContext(Context)

    return (
        <form tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered p-1 fs-5">
                <div className="modal-content jobsTechnicalModalContent p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold fs-5">Job Details</h5>
                        <button type="button" className="close btn btn-login fw-bold text-center fw-bold fs-5">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <label htmlFor="userId" className="modal-label-input">Job ID</label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="code" className="modal-label-input">Code</label>
                            <input
                                type="text"
                                className="form-control formTechnicalModalJobs"
                                id="code"
                                name="code"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="type" className="modal-label-input">Type</label>
                            <input
                                type="text"
                                className="form-control formModalJobs text-end"
                                id="type"
                                name="type"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="brand" className="modal-label-input">Brand</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="brand"
                                name="brand"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="model" className="modal-label-input">Model</label>
                            <input
                                type="text"
                                className="form-control formModalJobs text-center"
                                id="model"
                                name="model"
                                onChange={actions.handle_change}
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
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="status" className="modal-label-input">Status</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="status"
                                name="status"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="issues" className="modal-label-input">Issues</label>
                            <textarea
                                rows="3"
                                className="form-control formModalJobs"
                                id="issues"
                                name="issues"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="technical_id" className="modal-label-input">Technical ID</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="technical_id"
                                name="technical_id"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="client_id" className="modal-label-input">Client ID</label>
                            <input
                                type="text"
                                className="form-control formModalJobs"
                                id="client_id"
                                name="client_id"
                                onChange={actions.handle_change}
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
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="time_stamp" className="modal-label-input"><i className="fa-regular fa-clock me-1"></i>Time Stamp</label>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center aligh-items-center">
                        <button type="button" className="btn btn-login fw-bold text-center fs-5">
                            Save
                        </button>
                        <button type="button" className="btn btn-login fw-bold text-center fs-5">
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
