import React from "react";

export const ClientsTableHeader = () => {
    return (
        <section class="intro">
            <div class="h-100">
                <div class="mask d-flex align-items-center h-100">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="card tableHeader text-center">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="text-white text-center cell-size">Client ID</th>
                                                        <th scope="col" className="text-white text-center cell-size">First Name</th>
                                                        <th scope="col" className="text-white text-center cell-size">Full Name</th>
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
