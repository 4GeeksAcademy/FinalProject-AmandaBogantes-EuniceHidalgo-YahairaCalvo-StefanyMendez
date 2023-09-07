import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const ContactUsTable = () => {
    const {store, actions} = useContext(Context)
    return (
        <div className="container">
            <h5 className='title-contactUs md-3'>We Are For You</h5>
            <p className='text-contactus'>Our team are here to help <i className="fa-solid fa-heart"></i></p>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={actions.handleSubmit}>
                        <div className="row mb-4">
                            <div className="col">
                                <label for="Name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="ID" placeholder="Juan" />
                            </div>
                            <div className="col">
                                <label for="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Pérez" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label for="phone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="phone" placeholder="(123) 456-7890" />
                            </div>
                            <div className="col">
                                <label for="mail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="mail" placeholder="mail@example.com" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label for="consult" className="form-label">Topic</label>
                            <input type="text" className="form-control" id="consult" placeholder="Question" />
                        </div>
                        <div className="mb-4">
                            <label for="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message Here"></textarea>
                        </div>
                        <button type="submit" className="btn-contact">Send</button>
                    </form>
                </div>
                <div className="col-md-6 ">
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png" alt="call" className="mb-4 contact-image img-fluid" />
                </div>
            </div>
            <div className="row social-information">
                <div className="col-md-2">
                    <div className="icon-contact"><i className="far fa-address-book"></i> San Jose, Costa Rica</div>
                </div>
                <div className="col-md-2">
                    <div className="icon-contact"><i className="fab fa-whatsapp"></i> (506) 88-88-88-88</div>
                </div>
                <div className="col-md-2">
                    <div className="icon-contact"><i className="fas fa-phone"></i> 22-22-22-22</div>
                </div>
                <div className="col-md-2">
                    <div className="icon-contact"><i className="fab fa-facebook"></i> EyASolutions</div>
                </div>
                <div className="col-md-2">
                    <div className="icon-contact"><i className="fab fa-instagram"></i> EyA_Solutions</div>
                </div>
            </div>
        </div>
    );
};
