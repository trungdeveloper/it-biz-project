import React from "react";
import "./footer.css";
import IMG from "../../assets/image/logo-footer.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
            <footer className="site-footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="foot-about">
                                    <h2>
                                        <Link className="foot-logo" to="">
                                            <img src={IMG} alt="" />
                                        </Link>
                                    </h2>
                                    <p>
                                        Nhường cơm sẻ áo. Tái sử dụng đồ, bảo vệ
                                        môi trường. Chúng tôi sẽ mang nhà hảo
                                        tâm đến gần hơn với những hoàn cảnh khó
                                        khăn. Để biến việc từ thiện trở nên dễ
                                        dàng hơn.
                                    </p>
                                </div>
                                {/* .foot-about */}
                            </div>
                            {/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <h2>Liên kết hữu ích</h2>
                                <ul>
                                    <li>
                                        <Link to="">Chính sách bảo mật</Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            Trở thành tình nguyên viên
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">Tài trợ</Link>
                                    </li>
                                    <li>
                                        <Link to="">Lời chứng thực</Link>
                                    </li>
                                    <li>
                                        <Link to="">Nguyên nhân</Link>
                                    </li>
                                    <li>
                                        <Link to="">Danh mục tài trợ</Link>
                                    </li>
                                    <li>
                                        <Link to="">Tin tức</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="foot-latest-news">
                                    <h2>Tin tức mới nhất</h2>
                                    <ul>
                                        <li>
                                            <h3>
                                                <Link to="">
                                                    Có thêm một người để giúp
                                                </Link>
                                            </h3>
                                            <div className="posted-date">
                                                August 04, 2020
                                            </div>
                                        </li>
                                        <li>
                                            <h3>
                                                <Link to="">
                                                    Chúng tôi muốn giúp đỡ mọi
                                                    người
                                                </Link>
                                            </h3>
                                            <div className="posted-date">
                                                August 04, 2020
                                            </div>
                                        </li>
                                        <li>
                                            <h3>
                                                <Link to="">
                                                    Những ý tưởng mới để giúp đỡ
                                                </Link>
                                            </h3>
                                            <div className="posted-date">
                                                August 04, 2020
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* .foot-latest-news */}
                            </div>
                            {/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="foot-contact">
                                    <h2>Liên hệ</h2>
                                    <ul>
                                        <li>
                                            <i className="fa fa-phone" />
                                            <span> (+84) 334 133 327</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope" />
                                            <span> ranghivanhuy@gmail.com</span>
                                        </li>
                                        <li>
                                            <i className="fa fa-map-marker" />
                                            <span>
                                                {" "}
                                                101B Lê Hữu Trác, Sơn Trà, Đà
                                                Nẵng
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                {/* .foot-contact */}
                                <div className="subscribe-form">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <input
                                            type="email"
                                            placeholder="Email của bạn"
                                        />
                                        <button>GỬI</button>
                                    </div>
                                    {/* .flex */}
                                </div>
                                {/* .search-widget */}
                            </div>
                            {/* .col */}
                        </div>
                        {/* .row */}
                    </div>
                    {/* .container */}
                </div>
                {/* .footer-widgets */}
            </footer>
    );
};
