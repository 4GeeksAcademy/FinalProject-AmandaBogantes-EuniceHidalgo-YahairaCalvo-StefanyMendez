import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Logo from "../../img/logo.png";

const CardSearchCode = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-code text-center">
            <img className="logo ms-auto" src={Logo} alt="Logo" />
            <form className="form mt-auto mb-5">
                <div className="row mb-3">
                    <div className="col-xs-12">
                        <input type="code" className="form-control formControlSearchCode" id="Code" placeholder="Your Code Here" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button type="submit" className="btn btn-code"><i className="fas fa-search"></i> Search Code</button>
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
