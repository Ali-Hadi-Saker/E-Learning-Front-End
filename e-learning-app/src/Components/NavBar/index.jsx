import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink 
                        to="/all-classes" 
                        activeClassName="active" 
                        className="nav-link"
                    >
                        All Classes
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/enrolled-classes" 
                        activeClassName="active" 
                        className="nav-link"
                    >
                        Enrolled Classes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
