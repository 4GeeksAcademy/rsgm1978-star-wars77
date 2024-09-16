import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark m-3">
			<div className="container-fluid d-flex justify-content mx-md-4 mt-4 mb-1">
				<div>					
					<Link className="navbar-brand" to="/">
						<img height="55" src="./star-wars-logo.png"/></Link>						
				</div>
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link link-secondary" to="/characters">Characters</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link link-secondary" to="/planets">Planets</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link link-secondary" to="/starships">Starships</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link link-secondary" to="/contacts">Contacts</Link>
						</li>
						<li className="nav-item">
						<div className="dropdown"><button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">0</span></button>
						<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
							<li><span className="dropdown-item">No favorites selected</span>
							</li>
						</ul>
					</div>
				</li></ul></div></div>
				
		</nav>
	);
};
