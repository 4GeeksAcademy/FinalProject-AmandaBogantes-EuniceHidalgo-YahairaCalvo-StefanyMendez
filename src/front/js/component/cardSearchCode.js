import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const cardSearchCode = ({ }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
      
          <div className="row">
            <div className="col-sm-8">
                <div className="card-code">
                    <div className="card-body">
                        <h1 className="card-title">WelcomeWelcomeWelcomeWelcomeWelcome{props.title}</h1>
                        <img src="https://www.tucochinito.com/wp-content/uploads/2020/08/Computadoras.jpg" className="card-img-top" alt="...">{props.img}</img>
                        <p className="card-text">{props.text}</p>
                        <button className="btn btn-code -sm-8">Search Code<i class="fa-solid fa-magnifying-glass"></i></button>
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