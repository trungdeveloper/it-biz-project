import React from "react";
import "../../cssAdmin/style.css";
const img = require("../../../assets/image/logo-menu.svg");
export const Header = () => {
    return (
        <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <img className="d-block" src={img} alt="logo" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                >
                    {/* <ul className="navbar-nav ml-auto navbar-right-top">
                        <li className="nav-item dropdown nav-user">
                            <div
                                className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                                aria-labelledby="navbarDropdownMenuLink2"
                            >
                                <div className="nav-user-info">
                                    <h5 className="mb-0 text-white nav-user-name">
                                        John Abraham{" "}
                                    </h5>
                                    <span className="status"></span>
                                    <span className="ml-2">Available</span>
                                </div>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-user mr-2"></i>Account
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-cog mr-2"></i>Setting
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fas fa-power-off mr-2"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </div>
    );
};
