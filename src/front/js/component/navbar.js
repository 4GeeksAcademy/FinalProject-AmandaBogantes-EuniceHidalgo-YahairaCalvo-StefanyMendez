import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-laptop2.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/" className="text-decoration-none text-white ms-5">
					<img src={logo} alt="Logo" className="nav-img d-inline-block align-text-center me-2" />
					<span className="navbar-brand mb-0 h1 fs-3">EyA Solutions</span>
				</Link>
				<button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<i className="fa-solid fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ms-auto mb-lg-0">
						<li className="nav-link nav-item nav-menu ms-3" hidden={store.buttons_admin_tech.users}>
							<Link to="/users" className="nav-link text-decoration-none" >
								<span className="nav-span">Users</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3" hidden={store.buttons_admin_tech.clients}>
							<Link to="/clients" className="nav-link text-decoration-none">
								<span className="nav-span">Clients</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3" hidden={store.buttons_admin_tech.jobs_admin}>
							<Link to="/jobs/admi" className="nav-link text-decoration-none">
								<span className="nav-span">Jobs</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3" hidden={store.buttons_admin_tech.jobs_technical}>
							<Link to="/jobs/technical" className="nav-link text-decoration-none" >
								<span className="nav-span">My Jobs</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/ourServices" className="nav-link text-decoration-none">
								<span className="nav-span">Services</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/aboutus" className="nav-link text-decoration-none">
								<span className="nav-span">About</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/contactUs" className="nav-link text-decoration-none">
								<span className="nav-span">Contact</span>
							</Link>
						</li>
						<li className="nav-item ms-3 me-2 mt-2" hidden={store.buttons_admin_tech.login}>
							<Link to="/login" className="text-decoration-none" >
								<button className="btn btn-login"><i className="fa-regular fa-user me-2"></i>Login</button>
							</Link>
						</li>
						<li className="nav-item ms-3 me-2 mt-2" hidden={store.buttons_admin_tech.account}>
							<Link to="/" className="text-decoration-none" >
								<button className="btn btn-login" onClick={() => actions.logout()}><i className="fa-solid fa-right-from-bracket ms-auto text-white"></i>Logout</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};