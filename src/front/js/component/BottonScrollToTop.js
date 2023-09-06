import React from 'react'
import "../../styles/BottonScrollToTop.css";
import arrow from "../../img/arrow.png"

const BottonScrollToTop = () => {
  return (
    <div>
        <button className="go-top-btn">
                  <img src={arrow.png} alt="arrow"/>
        </button>
    </div>
  )
}

export default BottonScrollToTop