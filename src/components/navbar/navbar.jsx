import React, { useState } from 'react';
import "./navbar.css"


const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <>
            <header className='pt-3'>
                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container ">
                        <a id="navbar-brand">
                        Turistoe
                        </a>
                        <button className="navbar-toggler p-2" type="button" onClick={handleNavCollapse}>
                            <span className=""><img src="/assets/icons/hamburger.svg" alt="" /></span>
                        </button>
                        <div className={`collapse justify-content-end  navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
                            <ul className="navbar-nav ml-auto  border border-1 border-white rounded-5 px-3 gap-3" style={{fontSize:"14px"}}>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="#trip">Trip</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white " href="#review">Reviews</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
