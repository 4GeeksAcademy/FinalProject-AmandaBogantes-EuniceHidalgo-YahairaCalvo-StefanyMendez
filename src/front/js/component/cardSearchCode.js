import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Logo from "../../img/logo.png";

const CardSearchCode = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-code text-center">
            <div>
            <h3 className=" code-title">Consult for your process</h3>
            </div>
            <form className="form mt-auto mb-5">
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
                            type="button"
                            className="btn btn-code"
                            onClick={() => actions.get_job_by_code(store.code)}>
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
