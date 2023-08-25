import React, { Component } from "react";
import logo from "../../img/logo-laptop2.png"
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3  text-white">
		<div className="row me-5">
			<div className="col-6 text-center mt-4">
				<div className="col">
					<img src={logo} alt="Logo" className="nav-img d-inline-block align-text-center me-2" />
					<span className="mb-0 fs-4">EyA Solutions</span>
					<br></br>
					<span className="mb-0 ">Teléfono: +(506) 8888-8888</span>
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
					<a className="icon"href="https://youtube.com">
					<i className="fa-brands fa-youtube ms-2 fs-5"></i>
					</a>
						
				</div>
			</div>
			<div className="col-2">
				<div className="col mb-2">
					<span className="fs-4 footer-title">Explore</span>
				</div>
				<div className="col">
					<Link to="/" className="link-footer text-decoration-none">
						<span className="footer-span">Users</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/" className="link-footer text-decoration-none">
						<span className="footer-span">Clients</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/" className="link-footer text-decoration-none">
						<span className="footer-span">Jobs</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/" className="link-footer text-decoration-none">
						<span className="footer-span">Services</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/" className="link-footer text-decoration-none">
						<span className="footer-span">About</span>
					</Link>
				</div>

				<div className="col">
					<Link to="/" className="link-footer text-decoration-none">
						<span className="footer-span">Contact</span>
					</Link>
				</div>
			</div>

			<hr className="hr-footer m-auto mt-2"></hr>
			<span className="text-center mt-3">© Copyright EyA Solutions</span>
		</div>
	</footer >
);
