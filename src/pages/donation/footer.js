import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/font-awesome.min.css";
import "../../css/elegant-fonts.css";
import "../../css/themify-icons.css";
import "../../css/swiper.min.css";
import "../../style.css";
import LOGO from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-widgets">
                <div className="container" style={{ padding: "10px" }}>
                    <div className="row" style={{ backgroundColor: "#262222" }}>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="foot-about">
                                <h2 style={{ marginTop: "10px" }}>
                                    <a className="foot-logo" href="#">
                                        <img src={LOGO} alt="Logo" />
                                    </a>
                                </h2>
                                <p>
                                    LeafCharity nơi kết nối những người nghèo,
                                    người khó khăn có cuộc sống không đầy đủ. Và
                                    những người có những vật phẩm nhưng không
                                    dùng tới muốn từ thiện nhưng không có thời
                                    gian và không tìm được ai cần.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <h2 style={{ marginTop: "10px" }}>Useful Links</h2>

                            <ul>
                                <li>
                                    <a href="#">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="#">Hoạt động</a>
                                </li>
                                <li>
                                    <a href="#">Từ thiện</a>
                                </li>
                                <li>
                                    <a href="#">Khó khăn</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <div className="foot-contact">
                                <h2 style={{ marginTop: "10px" }}>Contact</h2>

                                <ul>
                                    <li>
                                        <i className="fa fa-phone"></i>
                                        <span>+45 677 8993000 223</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>
                                        <span>thecharity@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <span>
                                            99 Tô Hiến Thành, An Hải Đông, Sơn
                                            Trà, Đà Nẵng
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="subscribe-form">
                                <form className="d-flex flex-wrap align-items-center">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                    />
                                    <input type="submit" value="send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="m-0">
                                Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                All rights reserved | This template is made with
                                <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                ></i>{" "}
                                by
                                <a href="https://colorlib.com" target="_blank">
                                    Colorlib
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
