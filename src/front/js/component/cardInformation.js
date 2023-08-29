import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const cardInformation = ({ }, ...props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-information">
      <h3>How it works</h3>
      <h6>Find out how to get started</h6>
      <div className="card-group card-group-information">
        <div className=" card card-information mx-3">
          <img src="https://img.freepik.com/free-vector/gradient-mobile-isometric-technology-background_52683-4701.jpg?size=626&ext=jpg&ga=GA1.2.700783956.1693189001&semt=sph" className="card-img-top" alt="..." />
          <div className="card-body card-body-information">
            <h5 className="card-title card-title-information">Start</h5>
            <p className="card-text card-text-information">You should go to the beginning where it says 'Code'.</p>
          </div>
        </div>
        <div className="card card-information mx-3 rounded">
          <img src="https://img.freepik.com/free-vector/isometric-buttons-control-panel-interface-elements-music-player_107791-6690.jpg?size=626&ext=jpg&ga=GA1.1.700783956.1693189001&semt=sph" className="card-img-top" alt="..." />
          <div className="card-body card-body-information">
            <h5 className="card-title card-title-information">Code</h5>
            <p className="card-text card-text-information">Enter your code, and by entering here.</p>
          </div>
        </div>
        <div className="card card-information mx-3 ">
          <img src="https://img.freepik.com/free-vector/3d-isometric-violet-laptop-router-with-wi-fi-radio-repeater-ultraviolet-computer_1441-1990.jpg?size=626&ext=jpg&ga=GA1.1.700783956.1693189001&semt=sph" className="card-img-top" alt="..." />
          <div className="card-body card-body-information">
            <h5 className="card-title card-title-information">Information</h5>
            <p className="card-text card-text-information">You will be able to see the information about the process.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cardInformation