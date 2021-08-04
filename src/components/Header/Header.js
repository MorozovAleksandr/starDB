import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand logo" to="/">STAR<br></br>DB</Link>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/people/">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets/">Planets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships/">Starships</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/secret">Secret</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;