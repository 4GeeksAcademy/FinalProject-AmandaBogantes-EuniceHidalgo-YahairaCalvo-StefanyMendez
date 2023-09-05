import React from 'react';

export const JobsAdmiButtons = () => {
    return (
        <div>
            <div className="container jobsButtons my-3">
            <div className="titleJobsTable mb-3 mt-5 text-start">
                <p>Jobs Dashboard</p>
            </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-sm-7 my-3">
                        <div className="card jobsCard">
                            <div className="card-body pb-0 pt-0">
                                <div className="d-flex align-items-center py-2">
                                    <input type="text" id="inputSearch" className="form-control formControlJobsSearchButton" autoComplete="off" aria-describedby="passwordHelpInline" />
                                    <button className="btn btn-login my-1 fw-bold d-flex align-items-center fs-5">
                                        <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 my-4">
                        <div className="card clientsCard d-flex justify-content-center align-items-center">
                            <div className="card-body pb-0 pt-0">
                                <button className="btn btn-login my-1 fw-bold fs-5"><i className="fa-solid fa-user-plus me-2"></i>Add Client</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
