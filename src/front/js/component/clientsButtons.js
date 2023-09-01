import React from 'react';

export const ClientsButtons = () => {
    return (
        <div>
            <div className="container clientsButtons my-3">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-sm-7 my-3">
                        <div className="card clientsCard">
                            <div className="card-body pb-0 pt-0">
                                <div className="d-flex align-items-center py-2">
                                    <input type="text" id="inputSearch" className="form-control" autoComplete="off" aria-describedby="passwordHelpInline" />
                                    <button className="btn btn-login my-1 fw-bold d-flex align-items-center">
                                        <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 my-4">
                        <div className="card clientsCard d-flex justify-content-center align-items-center">
                            <div className="card-body pb-0 pt-0">
                                <button className="btn btn-login my-1 fw-bold"><i class="fa-solid fa-user-plus me-2"></i>Add Client</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
