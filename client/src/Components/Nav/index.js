
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Service Pro Search</span>
            <Link to="/search"className="nav-link">Search</Link>
            <Link to="/saved" className="nav-link mr-auto">Saved</Link>
        </nav>
    )
}

export default Navbar;