import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo-laptop2.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/" className="text-decoration-none text-white ms-5">
					<img src={logo} alt="Logo" className="nav-img d-inline-block align-text-center me-2" />
					<span className="navbar-brand mb-0 h1 fs-4">EyA Solutions</span>
				</Link>
				<button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<i class="fa-solid fa-bars"></i>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ms-auto mb-lg-0">
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/" className="nav-link text-decoration-none">
								<span className="nav-span">Users</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/" className="nav-link text-decoration-none">
								<span className="nav-span">Clients</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/" className="nav-link text-decoration-none">
								<span className="nav-span">Jobs</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/" className="nav-link text-decoration-none">
								<span className="nav-span">Services</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/" className="nav-link text-decoration-none">
								<span className="nav-span">About</span>
							</Link>
						</li>
						<li className="nav-link nav-item nav-menu ms-3">
							<Link to="/" className="nav-link text-decoration-none">
								<span className="nav-span">Contact</span>
							</Link>
						</li>
						<li className="nav-item ms-3 me-2 mb-2">
							<Link to="/login" className="text-decoration-none">
								<button className="btn btn-login my-1"><i className="fa-regular fa-user me-2"></i>Login</button>
							</Link>
						</li>

						<li className="nav-item ms-3 me-2 mb-1">
							<div className="dropdown">
								<button className="btn btn-account dropdown-toggle my-1" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
									Account
								</button>
								<ul className="dropdown-menu dropdown-menu-lg-end mt-2" aria-labelledby="dropdownMenuButton2">
									<li className="dropdown-item">
										<Link to="/changePass" className="text-decoration-none">
											<span className="text-white">Change Password</span>
										</Link>
									</li>
									<li><hr className="dropdown-divider" /></li>
									<li className="dropdown-item">
										<Link to="/" className="text-decoration-none d-flex">
											<span className="text-white">Logout</span>
											<i className="fa-solid fa-right-from-bracket ms-auto text-white"></i>
										</Link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
