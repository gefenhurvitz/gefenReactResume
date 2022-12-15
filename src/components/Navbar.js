import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">GEFEN</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={'/home'}>home</Link>
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={'/about'}>About</Link>
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={'/contact'}>Contact</Link>
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={'/team'}>Team</Link>
                            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to={'/products'}>Products</Link>

                    </ul>
                </div>
            </div>
        </nav>


    </div>
  )
}

export default Navbar