import React from "react";
import './footer.css';
import IMG from "../../assets/image/logo-footer.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="foot-about">
                                    <h2><a className="foot-logo" href="#"><img src={IMG} alt="" /></a></h2>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum
                                    mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib
                                    ulum
                                    mauris.Lorem ipsum dolo.</p>
                                </div>{/* .foot-about */}
                            </div>{/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <h2>Liên kết hữu ích</h2>
                                <ul>
                                    <li><a href="#">Chính sách bảo mật</a></li>
                                    <li><a href="#">Trở thành tình nguyên viên</a></li>
                                    <li><a href="#">Tài trợ</a></li>
                                    <li><a href="#">Lời chứng thực</a></li>
                                    <li><a href="#">Nguyên nhân</a></li>
                                    <li><a href="#">Danh mục tài trợ</a></li>
                                    <li><a href="#">Tin tức</a></li>
                                </ul>
                            </div>{/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="foot-latest-news">
                                    <h2>Tin tức mới nhất</h2>
                                    <ul>
                                        <li>
                                            <h3><a href="#">Có thêm một người để giúp</a></h3>
                                            <div className="posted-date">August 04, 2020</div>
                                        </li>
                                        <li>
                                            <h3><a href="#">Chúng tôi muốn giúp đỡ mọi người</a></h3>
                                            <div className="posted-date">August 04, 2020</div>
                                        </li>
                                        <li>
                                            <h3><a href="#">Những ý tưởng mới để giúp đỡ</a></h3>
                                            <div className="posted-date">August 04, 2020</div>
                                        </li>
                                    </ul>
                                </div>{/* .foot-latest-news */}
                            </div>{/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="foot-contact">
                                    <h2>Liên hệ</h2>
                                    <ul>
                                        <li><i className="fa fa-phone" /><span>(+84) 334 133 327</span></li>
                                        <li><i className="fa fa-envelope" /><span>ranghivanhuy@gmail.com</span></li>
                                        <li><i className="fa fa-map-marker" /><span>101B Lê Hữu Trác, Sơn Trà, Đà Nẵng</span></li>
                                    </ul>
                                </div>{/* .foot-contact */}
                                <div className="subscribe-form">
                                    <form className="d-flex flex-wrap align-items-center">
                                        <input type="email" placeholder="Email của bạn" />
                                        <input type="submit" defaultValue="send" />
                                    </form>{/* .flex */}
                                </div>{/* .search-widget */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                    </div>{/* .container */}
                </div>{/* .footer-widgets */}
                <div className="footer-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className="m-0">
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        Copyright ©
                                        All rights reserved | Made <i className="fa fa-heart-o" aria-hidden="true" /> by <Link  target="_blank" to="/">Charity</Link>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>{/* .col-12 */}
                        </div>{/* .row */}
                    </div>{/* .container */}
                </div>{/* .footer-bar */}
            </footer>{/* .site-footer */}
        </div>
    );
};