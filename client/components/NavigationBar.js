import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='about'>About</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='signup'>Signup</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default NavigationBar;