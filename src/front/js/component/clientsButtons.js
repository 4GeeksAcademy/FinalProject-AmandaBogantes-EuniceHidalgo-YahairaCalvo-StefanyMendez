import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const ClientsButtons = () => {
    const {store, actions} = useContext(Context)
    return (
        <div>
            <div className="container clientsButtons my-3">
            <div className="titleClientsTable mb-3 mt-5 text-start">
                    <p>Clients Dashboard</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-sm-7 my-3">
                        <div className="card clientsCard">
                            <div className="card-body pb-0 pt-0">
                                <div className="input-search d-flex align-items-center ">
                                    <input type="text" id="inputSearch" className="form-control formControlSearchButton" 
                                    autoComplete="off" aria-describedby="passwordHelpInline" placeholder='Search by Data'
                                    onKeyUp={(e)=>{
                                        actions.search_clients(e.target.value)
                                    }}/>
                                        <i className="fa-solid fa-magnifying-glass me-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 my-2">
                        <div className="card clientsCard d-flex justify-content-center align-items-center">
                            <div className="card-body pb-0 pt-0">
                                <button className="btn btn-login my-1 fw-bold" onClick={() => {actions.handle_show_modal()}}>
                                    <i className="fa-solid fa-user-plus me-2"></i>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
