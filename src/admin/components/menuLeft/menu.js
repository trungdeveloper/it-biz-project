import React from "react";
import "../../../assets/css/cssAdmin/style.css";
import { Link } from "react-router-dom";
export const Menu = () => {
    return (
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="d-xl-none d-lg-none" to="/">
                        Thể Loại
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">Menu</li>
                            <li className="nav-item ">
                                <Link
                                    className="nav-link active"
                                    to="/"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    data-target="#submenu-1"
                                    aria-controls="submenu-1"
                                >
                                    <i className="fa fa-fw fa-user-circle"></i>
                                    Thể Loại
                                    <span className="badge badge-success">
                                        6
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    data-target="#submenu-2"
                                    aria-controls="submenu-2"
                                >
                                    <i className="fa fa-fw fa-rocket"></i>Hoạt
                                    động
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    data-target="#submenu-3"
                                    aria-controls="submenu-3"
                                >
                                    <i className="fas fa-fw fa-chart-pie"></i>
                                    Chart
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    data-target="#submenu-4"
                                    aria-controls="submenu-4"
                                >
                                    <i className="fab fa-fw fa-wpforms"></i>
                                    Forms
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/"
                                    data-toggle="collapse"
                                    aria-expanded="false"
                                    data-target="#submenu-5"
                                    aria-controls="submenu-5"
                                >
                                    <i className="fas fa-fw fa-table"></i>Tables
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};
