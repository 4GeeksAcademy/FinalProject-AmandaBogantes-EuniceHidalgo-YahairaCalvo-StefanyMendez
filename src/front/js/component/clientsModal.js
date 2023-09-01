import React from 'react';

export const ClientsModal = () => {

    return (
        <div tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered p-1">
                <div className="modal-content p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">Update Client</h5>
                        <button type="button" className="close btn btn-login fw-bold text-center fw-bold">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <label htmlFor="clientId">Client ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="clientId"
                                name="clientId"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
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
    );
};
