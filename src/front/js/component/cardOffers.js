import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const cardOffers = ({ }, ...props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card bg-dark text-white">
      <img src="https://www.pcworld.com/wp-content/uploads/2022/08/Wireless-gaming-headset_edited.jpg?quality=50&strip=all" className="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h5 className="card-title">Immerse Yourself in Extraordinary Sound with the Revolutionary AurisSonix Stellar Headset!</h5>
          <p className="card-text">Elevate your auditory experience to new heights with the AurisSonix Stellar Headset.</p>
        </div>
    </div>
  )
}

export default cardOffers