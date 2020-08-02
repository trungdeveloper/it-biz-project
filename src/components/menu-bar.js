import React from "react";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/elegant-fonts.css";
import "../css/themify-icons.css";
import "../css/swiper.min.css";
import "../style.css";
import LOGO from "../images/logo.png";
import { Link } from "react-router-dom";

export const MenuBar = () => {
    return (
        <div className="site-header">
            <div className="top-header-bar">
                <div className="top-header-bar container">
                    <div
                        className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center"
                        style={{ backgroundColor: "#ff4800" }}
                    >
                        <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0 ">
                            <div className="header-bar-email">
                                MAIL: <a href="#">contact@ourcharity.com</a>
                            </div>

                            <div className="header-bar-text">
                                <p>
                                    PHONE:{" "}
                                    <span>+24 3772 120 091 / +56452 4567</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center  ">
                            <div className="donate-btn">
                                <a href="#">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            <div className="site-branding d-flex align-items-center">
                                <a
                                    className="d-block"
                                    href="index.html"
                                    rel="home"
                                >
                                    <img src={LOGO} alt="Logo" />
                                </a>
                            </div>

                            <nav className="site-navigation d-flex justify-content-end align-items-center">
                                <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                    <li className="current-menu-item">
                                        <Link to="/">TRANG CHỦ</Link>
                                    </li>
                                    <li>
                                        <Link to="/activity">HOẠT ĐỘNG</Link>
                                    </li>
                                    <li>
                                        <Link to="/donation">TỪ THIỆN</Link>
                                    </li>
                                    <li>
                                        <Link to="/plight">KHÓ KHĂN</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile">TRANG CÁ NHÂN</Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="hamburger-menu d-lg-none">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
