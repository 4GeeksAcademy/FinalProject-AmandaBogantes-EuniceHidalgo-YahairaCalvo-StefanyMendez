import React from "react";

export const ClientsTableHeader = () => {
    return (
        <section className="intro">
            <div className="h-100">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="card tableHeader text-center">
                                    <div className="card-body cardBodyClients fs-4">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="text-white text-center cell-size">Client ID</th>
                                                        <th scope="col" className="text-white text-center cell-size">First Name</th>
                                                        <th scope="col" className="text-white text-center cell-size">Last Name</th>
                                                        <th scope="col" className="text-white text-center cell-size">Phone</th>
                                                        <th scope="col" className="text-white text-center cell-size">Actions</th>
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
