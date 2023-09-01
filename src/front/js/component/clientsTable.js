import React, { useState } from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { ClientsModal } from "./clientsModal";

export const ClientsTable = (...props) => {

    return (
        <section className="intro">
            <div className="h-100">
                <div className="mask d-flex align-items-center h-100 p-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card tableItems text-center">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-center align-middle">01</th>
                                                        <td className="text-center cell-size align-middle">Stefany María</td>
                                                        <td className="text-center cell-size align-middle">Méndez Salas</td>
                                                        <td className="text-center cell-size align-middle">88528900</td>
                                                        <td className="text-center cell-size align-middle">
                                                            <button className="btn btn-login fw-bold text-center">
                                                                <i className="fa-regular fa-pen-to-square me-2"></i>Edit
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ClientsModal />
        </section >
    );
};

ClientsTable.propTypes = {
    client: PropTypes.object
}
