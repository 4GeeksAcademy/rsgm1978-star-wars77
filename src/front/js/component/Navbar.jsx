import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		/*<nav clasNameName="navbar navbar-dark bg-dark m-3">
			<div clasNameName="container-fluid d-flex justify-content mx-md-4 mt-4 mb-1">
				<div>
					<a clasName="navbar-brand" href="/">
						<img height="55" src="./star-wars-logo.png"/></a>
				</div>
				<div>
					<ul clasName="nav me-auto mb-2 mb-lg-0">
						<li clasName="nav-item">
							<a clasName="nav-link link-secondary" href="/characters">Characters</a>
						</li>
						<li clasName="nav-item">
							<a clasName="nav-link link-secondary" href="/planets">Planets</a>
						</li>
						<li clasName="nav-item">
							<a clasName="nav-link link-secondary" href="/starships">Starships</a>
						</li>
						<li clasName="nav-item">
							<a clasName="nav-link link-secondary" href="/contacts">Contacts</a>
						</li>
						<li clasName="nav-item">
						<div clasName="dropdown"><button clasName="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites<span clasName="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">0</span></button>
						<ul clasName="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
							<li><span clasName="dropdown-item">No favorites selected</span>
							</li>
						</ul>
					</div>
				</li></ul></div></div>
				
		</nav>*/
		<nav clasName="navbar navbar-expand-lg bg-body-tertiary">
  <div clasName="container-fluid">
    <a clasName="navbar-brand" href="#">Navbar</a>
    <button clasName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span clasName="navbar-toggler-icon"></span>
    </button>
    <div clasName="collapse navbar-collapse" id="navbarNavDropdown">
      <ul clasName="navbar-nav">
        <li clasName="nav-item">
          <a clasName="nav-link active" aria-current="page" href="#">Characters</a>
        </li>
        <li clasName="nav-item">
          <a clasName="nav-link" href="#">Planets</a>
        </li>
        <li clasName="nav-item">
          <a clasName="nav-link" href="#">Starships</a>
        </li>
		<li clasName="nav-item">
          <a clasName="nav-link" href="#">Contacts</a>
        </li>
        <li clasName="nav-item dropdown">
          <a clasName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul clasName="dropdown-menu">
            <li><a clasName="dropdown-item" href="#">No Favorites select</a></li>            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
