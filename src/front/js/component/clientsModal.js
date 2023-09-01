import React, { useContext } from 'react';
import { Context } from '../store/appContext'

export const ClientsModal = () => {

    const { store, actions } = useContext(Context)

    return (
        <div tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered p-1">
                <div className="modal-content clientsModalContent p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">Update Client</h5>
                        <button type="button" className="close btn btn-login fw-bold text-center fw-bold">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <label htmlFor="clientId" className="modal-label-input">Client ID</label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="firstName" className="modal-label-input">First Name</label>
                            <input
                                type="text"
                                className="form-control formModalClients"
                                id="firstName"
                                name="first_name"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="lastName" className="modal-label-input">Last Name</label>
                            <input
                                type="text"
                                className="form-control formModalClients"
                                id="lastName"
                                name="last_name"
                                onChange={actions.handle_change}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="phone" className="modal-label-input">Phone</label>
                            <input
                                type="text"
                                className="form-control formModalClients"
                                id="phone"
                                name="phone"
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
    );
};
