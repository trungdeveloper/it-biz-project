import React from "react";
import "../../cssAdmin/style.css";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import $ from "jquery";
export const Menu = () => {
    return (
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="d-xl-none d-lg-none" to="/category">
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
                            <li className="nav-divider">
                                {" "}
                                <BsFillHouseDoorFill /> Menu
                            </li>
                            <Link
                                className="nav-link nav-link-1 "
                                to="/category"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-1"
                                aria-controls="submenu-1"
                                id="nav-link-1"
                                onClick={() => {
                                    $(".nav-link-1").addClass("active");
                                }}
                            >
                                Thể Loại
                            </Link>
                            <Link
                                className="nav-link nav-link-2"
                                to="/donationAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-2"
                                aria-controls="submenu-2"
                                onClick={() => {
                                    $(".nav-link-2").addClass("active");
                                }}
                            >
                                Tài Trợ
                            </Link>
                            <Link
                                className="nav-link nav-link-3"
                                to="/eventAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-3"
                                aria-controls="submenu-3"
                                onClick={() => {
                                    $(".nav-link-3").addClass("active");
                                }}
                            >
                                Sự Kiện
                            </Link>
                            <Link
                                className="nav-link nav-link-4"
                                to="/"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-4"
                                aria-controls="submenu-4"
                                onClick={() => {
                                    $(".nav-link-4").addClass("active");
                                }}
                            >
                                Hoàn cảnh
                            </Link>
                            <Link
                                className="nav-link nav-link-5"
                                to="/donationRequestAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-5"
                                aria-controls="submenu-5"
                                onClick={() => {
                                    $(".nav-link-5").addClass("active");
                                }}
                            >
                                Yêu cầu hoàn cảnh
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};
