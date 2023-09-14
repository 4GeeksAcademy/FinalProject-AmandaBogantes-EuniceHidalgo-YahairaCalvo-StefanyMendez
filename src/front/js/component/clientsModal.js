import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import PropTypes from "prop-types";
import { Clients } from '../pages/clients';

export const ClientsModal = (...props) => {

    const { store, actions } = useContext(Context)

    return (
        <form className="modal" tabIndex="-1" style={{ display: store.show_modal ? "inline-block" : "none" }} onSubmit={(e) => {
            e.preventDefault()
            if (!!store.client_id) {
                actions.update_client_by_id(store.client_id.id)
                e.target.reset()
            }
            else {
                actions.add_client()
                e.target.reset()
            }
        }
        }>
            <div className="modal-dialog modal-dialog-centered p-1">
                <div className="modal-content clientsModalContent p-2">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold">Client</h5>
                        <button type="reset" className="close btn btn-login fw-bold text-center fw-bold"
                            onClick={() => { actions.handle_delete_modal() }}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-2">
                            <label htmlFor="clientId" className="modal-label-input" hidden={store.hidden_id}>Client ID {!!store.client_id ? store.client_id.id : ""}</label>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="firstName" className="modal-label-input">First Name</label>
                            <input
                                type="text"
                                className="form-control formModalClients"
                                id="firstName"
                                name="first_name"
                                onChange={actions.handle_change}
                                defaultValue={!!store.client_id ? store.client_id.first_name : ""}
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
                                defaultValue={!!store.client_id ? store.client_id.last_name : ""}
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
                                defaultValue={!!store.client_id ? store.client_id.phone : ""}
                            />
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center aligh-items-center">
                        <button type="submit" className="btn btn-login fw-bold text-center">
                            Save
                        </button>
                        <button type="reset" className="btn btn-login fw-bold text-center">Clear
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};
ClientsModal.propTypes = {
    show: PropTypes.bool
}
ClientsModal.defaultProps = {
    show: false
}