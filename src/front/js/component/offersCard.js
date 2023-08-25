import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const OffersCard = ({ }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
       <div className="container-offers">
         <div className="row">
            <div className="col-sm-6">
                <div className="card-offers">
                    <div className="card-body">
                        <h5 className="card-title">Titulo{props.title}</h5>
                        <img src="https://www.tucochinito.com/wp-content/uploads/2020/08/Computadoras.jpg" className="card-img-top" alt="...">{props.img}</img>
                        <p className="card-text">{props.text}</p>
                        <button className="btn">See More<i class="fa-solid fa-eye"></i></button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}
OffersCard.propTypes = {
    oferers: PropTypes.object
}
export default OffersCard