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
                                                        <th scope="row" className="text-center cell-size-technical-jobs align-middle fs-5">{job.id}</th>
                                                        <td className="text-center cell-size-technical-jobs align-middle fs-5">{job.code}</td>
                                                        <td className="text-center cell-size-technical-jobs align-middle fs-5">{job.type}</td>
                                                        <td className="text-center cell-size-technical-jobs align-middle fs-5">{job.status}</td>
                                                        <td className="text-center users-cell-size align-middle">
                                                            <button className="btn btn-login text-center" onClick={() => { actions.get_job_by_id(job.id) }}>
                                                                <i className="fa-solid fa-circle-info me-2"></i>View Details
                                                            </button>
                                                        </td>
                                                        <td className="text-center cell-size-technical-jobs align-middle">
                                                        <a href={`https://api.whatsapp.com/send?phone=${job.client.phone}&text=Hello ${job.client.first_name} ${job.client.last_name}! The EYA Solutions' team hopes that you're doing great. 
                                                            We want to let you know that the status of your ${job.type} , code ${job.code} is: ${job.status}.`}  
                                                            className="btn btn-login">
                                                                <i className="fa-brands fa-whatsapp fs-3 mt-2"></i>
                                                            </a>
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