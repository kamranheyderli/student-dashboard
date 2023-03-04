import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {



    return (
        <div className='header'>
            <header>
                <div className="logo">
                    <img src="https://ingress.academy/static/media/ingress_logo.b2717126.svg" alt="" />
                </div>
                <nav>
                    <ul>
                        <Link to='/Home'><li>Home</li></Link>
                        <Link to='/Form'><li>Register</li></Link>
                        <Link to='/Table'><li>Table</li></Link>
                        
                    </ul>
                </nav>
            </header>

        </div>
    )
}
export default Navbar
