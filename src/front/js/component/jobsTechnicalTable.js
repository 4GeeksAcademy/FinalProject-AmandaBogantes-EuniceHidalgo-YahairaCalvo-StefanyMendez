import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";

export const JobsTechnicalTable = ({ job }, ...props) => {

    const { store, actions } = useContext(Context)

    return (
        <section className="intro">
            <div className="h-100">
                <div className="mask d-flex align-items-center h-100 p-0">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card tableJobsItems text-center">
                                    <div className="card-body cardBodyJobs">
                                        <div className="table-responsive">
                                            <table className="table table-hover mb-0">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-center cell-size-jobs align-middle fs-5">{job.id}</th>
                                                        <td className="text-center cell-size-jobs align-middle fs-5">{job.code}</td>
                                                        <td className="text-center cell-size-jobs align-middle fs-5">{job.type}</td>
                                                        <td className="text-center cell-size-jobs align-middle fs-5">{job.status}</td>
                                                        <td className="text-center users-cell-size align-middle">
                                                            <button className="btn btn-login text-center" onClick={() => { actions.get_job_by_id(job.id) }}>
                                                                <i className="fa-solid fa-circle-info me-2"></i>View Details
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
        </section >
    );
};

JobsTechnicalTable.propTypes = {
    job: PropTypes.object
}