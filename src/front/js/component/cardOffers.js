import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const CardOffers = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="oferta">
      <div className="container container-offers">
      <div className="row">
        <div className="col-md-5 col-sm-12  me-1 ">
          <div className="text-white card-offers">
              <h3 className="title-home">Unlock the full potential of your PC with our amazing deals on essential components!</h3>
              <p className="card-text">Don't miss out on the opportunity to optimize your PC at unbeatable prices. Seize our deals now and supercharge your machine!</p>
            </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images6.alphacoders.com/648/thumb-1920-648552.jpg" className="img-carousel" alt="..." />
                <div className="carousel-caption d-none d-md-block d-sm-block">
                  <h5>Customize Your Powerhouse</h5>
                  <p>Prefer the convenience of a ready-to-use PC? We also offer pre-assembled PCs with the latest specifications and stylish designs.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://pcgamia.com/wp-content/uploads/2021/04/Ordenador-PC-Gaming-IP.jpg" className="img-carousel" alt="..." />
                <div className="carousel-caption d-none d-md-block d-sm-block">
                  <h5>Ready-Made Excellence</h5>
                  <p>Whether you're looking to upgrade your current system or build one from scratch, we have the perfect solutions for you.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/torre-gaming-3036108.jpg?tf=3840x" className="img-carousel" alt="..." />
                <div className="carousel-caption d-none d-md-block d-sm-block">
                  <h5>Elevate Your Computing Experience</h5>
                  <p>Power up your computing experience with our products and take your projects and gaming to the next level.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>


  )
}

export default CardOffers;
