import React from 'react';
import "../css/Navbar.css";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/users">Users</Link>
                        <Link className="nav-link" to="/colors">Colors</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/addblog">Add Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
