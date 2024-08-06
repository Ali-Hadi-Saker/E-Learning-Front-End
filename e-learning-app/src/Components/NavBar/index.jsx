import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 

const NavBar = () => {
    return (
        <nav className="navbar flex">
            <ul className="nav-list flex">
                <li className="nav-item">
                    <Link 
                        to="" 
                        activeClassName="active" 
                        className="nav-link"
                    >
                        All Classes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="enrolledClasses" 
                        activeClassName="active" 
                        className="nav-link"
                    >
                        Enrolled Classes
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
