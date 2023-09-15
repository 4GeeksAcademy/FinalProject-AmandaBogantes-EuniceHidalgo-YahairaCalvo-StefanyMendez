import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import MapLocation from "../component/mapLocation";

export const ContactUsTable = () => {
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="container container-contactUs">
            <h5 className='title-contactUs md-3'>We Are Here For You</h5>
            <p className='text-contactus'>Our team are here to help <i className="fa-solid fa-heart i-contactUs"></i></p>
            <div className="row">
                <div className="col-md-6">
                    <form className="form-contactUs" onSubmit={(e) => { actions.handleSubmit(e, formData) }}>
                        <div className="row mb-4">
                            <div className="col">
                                <label for="Name" className="form-label form-labelContactUs">Name</label>
                                <input type="text" className="form-control form-controlContactUs" id="ID" placeholder="Juan" name="name" onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label for="lastName" className="form-label form-labelContactUs">Last Name</label>
                                <input type="text" className="form-control form-controlContactUs" id="lastName" placeholder="Pérez" name="lastName" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label for="phone" className="form-label form-labelContactUs">Phone</label>
                                <input type="tel" className="form-control form-controlContactUs" id="phone" placeholder="(123) 456-7890" name="phone" onChange={handleChange} />
                            </div>
                            <div className="col">
                                <label for="mail" className="form-label form-labelContactUs">Email</label>
                                <input type="email" className="form-control form-controlContactUs" id="mail" placeholder="mail@example.com" name="email" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label for="consult" className="form-label form-labelContactUs">Topic</label>
                            <input type="text" className="form-control form-controlContactUs" id="consult" placeholder="Question" name="question" onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label for="message" className="form-label form-labelContactUs">Message</label>
                            <textarea className="form-control form-controlContactUs" id="message" rows="4" placeholder="Your Message Here" name="message" onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn-contact">Send</button>
                    </form>
                </div>
                <div className="col-md-6 ">
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png" alt="call" className="mb-4 contact-image img-fluid" />
                </div>
            </div>
            <MapLocation />
            <div className="row social-information text-center">
                <div className="col-md-3">
                    <div className="icon-contact"><i className="far fa-address-book i-contactUs"></i> San Jose, Costa Rica</div>
                </div>
                <div className="col-md-2">
                    <div className="icon-contact"><i className="fab fa-whatsapp i-contactUs"></i>88-88-88-88</div>
                </div>
                <div className="col-md-2">
                    <div className="icon-contact"><i className="fas fa-phone i-contactUs"></i> 22-22-22-22</div>
                </div>
                <div className="col-md-2">
                    <div className="icon-contact"><i className="fab fa-facebook i-contactUs"></i> EyASolutions</div>
                </div>
                <div className="col-md-3">
                    <div className="icon-contact"><i className="fab fa-instagram i-contactUs"></i> EyA_Solutions</div>
                </div>
            </div>
        </div>
    );
};
