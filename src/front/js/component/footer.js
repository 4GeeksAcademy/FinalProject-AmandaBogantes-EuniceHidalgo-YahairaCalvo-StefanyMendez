import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import { Context } from "../store/appContext";

export const Footer = () => {
	const {store, actions} = useContext(Context)
	return(
	<footer className="footer mt-auto py-3 text-white">
		<div className="row me-0">
			<div className="col-lg-4 col-md-12 col-sm-12 text-center">
				<img src={logo} alt="Logo" className="m-auto logo-footer" />
			</div>

			<div className="col-lg-1 col-md-12 col-sm-12 text-center m-auto">
				<div className="col mb-2">
					<span className="fs-4 footer-title">Explore</span>
				</div>
				<div className="col">
					<Link to="/users" className="link-footer text-decoration-none" hidden={store.buttons_admin_tech.users}>
						<span className="footer-span">Users</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/clients" className="link-footer text-decoration-none" hidden={store.buttons_admin_tech.clients}>
						<span className="footer-span">Clients</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/jobs/admi" className="link-footer text-decoration-none" hidden={store.buttons_admin_tech.jobs_admin}>
						<span className="footer-span">Jobs</span>
					</Link>
				</div>
				
				<div className="col">
					<Link to="/jobs/technical" className="link-footer text-decoration-none" hidden={store.buttons_admin_tech.jobs_technical}>
						<span className="footer-span">My Jobs</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/ourServices" className="link-footer text-decoration-none">
						<span className="footer-span">Services</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/aboutus" className="link-footer text-decoration-none">
						<span className="footer-span">About</span>
					</Link>
				</div>

				<div className="col mb-5">
					<Link to="/contactUs" className="link-footer text-decoration-none">
						<span className="footer-span">Contact</span>
					</Link>
				</div>
				
			</div>
			<div className="col-md-12 col-lg-2 col-sm-12 text-center m-auto">
				<div className="col">
					<span className="mb-0 fs-4">EyA Solutions</span>
					<br></br>
					<span className="mb-0 ">Phone: +(506) 8888-8888</span>
				</div>
				<div className="col my-2 ">
					<span className="mb-0 fs-5">Join our community</span>
				</div>

				<div className="col icons">
					<a className="icon" href="https://facebook.com">
						<span className="tooltip">Facebook</span>
						<i className="fa-brands fa-facebook ms-2 fs-5"></i>
					</a>
					<a className="icon" href="https://instagram.com">
						<i className="fa-brands fa-instagram ms-2 fs-5"></i>
					</a>
					<a className="icon" href="https://twitter.com">
						<i className="fa-brands fa-twitter ms-2 fs-5"></i>
					</a>
					<a className="icon" href="https://youtube.com">
						<i className="fa-brands fa-youtube ms-2 fs-5"></i>
					</a>
				</div>
			</div>
			<hr className="mt-2 hr-footer"></hr>
			<span className="text-center mt-3">© Copyright EyA Solutions</span>
		</div>
	</footer >
)};