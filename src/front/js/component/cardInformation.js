import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const cardInformation = ({ }, ...props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h3>How it works</h3>
      <h6>Find out how to get started</h6>
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card-information">
      <img src="https://img.freepik.com/free-vector/gradient-mobile-isometric-technology-background_52683-4701.jpg?size=626&ext=jpg&ga=GA1.2.700783956.1693189001&semt=sph" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Start</h5>
        <p class="card-text">You should go to the beginning where it says 'Code'.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-information">
      <img src="https://img.freepik.com/free-vector/isometric-buttons-control-panel-interface-elements-music-player_107791-6690.jpg?size=626&ext=jpg&ga=GA1.1.700783956.1693189001&semt=sph" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Code</h5>
        <p class="card-text">Enter your code, and by entering here.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card-information">
      <img src="https://img.freepik.com/free-vector/3d-isometric-violet-laptop-router-with-wi-fi-radio-repeater-ultraviolet-computer_1441-1990.jpg?size=626&ext=jpg&ga=GA1.1.700783956.1693189001&semt=sph" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Information</h5>
        <p class="card-text">You will be able to see the information about the process.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default cardInformation