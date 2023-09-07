import React from 'react'
import { useState, useEffect } from 'react'



const BackToTopBtn = () => {

    const [backToTopBtn, setbackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setbackToTopBtn(true)
            } else {
                setbackToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo
        top: 0;
        behavior: "smooth";
    }
    return (
        <div className=''>

            {backToTopBtn && (

                <button onClick={scrollUp}  >
                    <i className="fa-solid fa-angles-up"></i>
                </button>
            )
            }

        </div>
    )
}

export default BackToTopBtn