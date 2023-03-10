import React from 'react';
import LOGO from '../img/image 2 (1).svg'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div id='header'>
            <div className="container">
                <div className='header'>
                    <div className='header-logo '>
                        <img src={LOGO}  alt=""/>
                    </div>
                    <div className='right-side '>
                            <nav className='header-nav'>
                                <Link to="/">Menu</Link>
                                <Link to="/orders">Orders</Link>
                                <Link to="/admin">Admin</Link>
                            </nav>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;