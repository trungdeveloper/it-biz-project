import { Link } from "react-router-dom";
import React from "react";

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/activity">Activity</Link>
                </li>
                <li>
                    <Link to="/donation">Users</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/Register">Register</Link>
                </li>
                <li>
                    <Link to="/plight">Plight</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
};
