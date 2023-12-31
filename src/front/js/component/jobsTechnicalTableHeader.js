import React from "react";

export const JobsTechnicalTableHeader = () => {
    return (
        <section className="intro">
            <div className="h-100">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card tableJobsHeader text-center fs-4">
                                    <div className="card-body cardBodyClients">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="text-white text-center cell-size-technical-jobs">Job ID</th>
                                                        <th scope="col" className="text-white text-center cell-size-technical-jobs">Code</th>
                                                        <th scope="col" className="text-white text-center cell-size-technical-jobs">Type</th>
                                                        <th scope="col" className="text-white text-center cell-size-technical-jobs">Status</th>
                                                        <th scope="col" className="text-white text-center cell-size-technical-jobs">Actions</th>
                                                        <th scope="col" className="text-white text-center cell-size-technical-jobs">Message</th>
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
