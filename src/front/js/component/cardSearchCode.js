import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Logo from "../../img/logo.png";
import { useNavigate } from 'react-router-dom'


const CardSearchCode = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    return (
        <div className="card-code text-center">
            <div>
                <h3 className=" code-title">Review Your Product Progress</h3>
            </div>
            <form className="form mt-auto mb-5" onSubmit={(e)=>{
                e.preventDefault()
                actions.get_job_by_code(store.code)
                e.target.reset()
                navigate('/')
            }}>
                <div className="row mb-3">
                    <div className="col-xs-6">
                        <input
                            name="code"
                            type="code"
                            className="form-control formControlSearchCode"
                            id="Code"
                            placeholder="Your Code Here"
                            onChange={actions.handle_change} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <button
                            type="submit"
                            className="btn btn-code"> 
                            <i className="fas fa-search"></i> Search Code
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

CardSearchCode.propTypes = {
    job: PropTypes.object
};

export default CardSearchCode;
