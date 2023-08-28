import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";
import Logo from "../../img/logo.png"

export const cardSearchCode = ({ }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card-code">
            <img className="ms-auto me-3 h-25 w-25" src={Logo}></img>
            <div className="form mt-auto mb-5 text-center">
                <div className="row mb-3">
                    <div className="col-xs-12 col-sm-6 col-md-8">
                        <input type="code" className="form-control" id="Code" placeholder="Your Code Here" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-8">
                        <button type="submit" className=" btn btn-code"><i class="fa-solid fa-magnifying-glass"></i>  Search Code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
cardSearchCode.propTypes = {
    job: PropTypes.object
}
export default cardSearchCode