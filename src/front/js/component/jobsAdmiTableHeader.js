import React from "react";

export const JobsAdmiTableHeader = () => {
    return (
        <section className="intro">
            <div className="h-100">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container-job m-auto w-75">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card tableJobsHeader text-center fs-4">
                                    <div className="card-body cardBodyClients">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="text-white text-center cell-size-jobs">Job ID</th>
                                                        <th scope="col" className="text-white text-center cell-size-jobs">Code</th>
                                                        <th scope="col" className="text-white text-center cell-size-jobs">User</th>
                                                        <th scope="col" className="text-white text-center cell-size-jobs">Type</th>
                                                        <th scope="col" className="text-white text-center cell-size-jobs">Status</th>
                                                        <th scope="col" className="text-white text-center cell-size-jobs">Actions</th>
                                                        <th scope="col" className="text-white text-end cell-size-jobs">Delete</th>
                                                        <th scope="col" className="text-white text-end cell-size-jobs">Message</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
