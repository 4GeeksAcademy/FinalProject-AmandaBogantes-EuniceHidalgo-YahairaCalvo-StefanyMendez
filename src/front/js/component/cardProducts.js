import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const cardProducts = ({ }, ...props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="carousel ">
      <div className="titles-Products">
        <h3 className="text-break">Unveiling Technological Marvels:</h3>
        <h6 className="text-break"> Exploring the Latest Breakthroughs in Tech</h6>
      </div>
      <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://get.wallhere.com/photo/computer-technology-Nvidia-stadium-electronics-GPUs-light-design-screenshot-gadget-personal-computer-hardware-display-device-electronic-instrument-computer-keyboard-184770.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://pbblogassets.s3.amazonaws.com/uploads/2020/07/13110748/Build-an-editing-PC.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.cnet.com/a/img/resize/030de97d0662cd1deac67e0878561d13f82e7e91/hub/2021/06/01/c9b522da-25c1-4265-8738-435a6c06d0fa/nvidia-geforce-rtx-3080-ti-dsc02684.jpg?auto=webp&fit=crop&height=900&width=1200" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
cardProducts.propTypes = {
  oferers: PropTypes.object
}
export default cardProducts