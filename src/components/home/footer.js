import React from "react";
import './footer.css';
import IMG from "../../assets/image/logo-footer.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Footer = () => {
    const handleClick = () => {
        console.log("Clicked", );
    }
    return (
        <div>
            <footer className="site-footer">
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="foot-about">
                                    <h2><Link className="foot-logo" href="#"><img src={IMG} alt="" /></Link></h2>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum
                                    mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib
                                    ulum
                                    mauris.Lorem ipsum dolo.</p>
                                </div>{/* .foot-about */}
                            </div>{/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <h2>Liên kết hữu ích</h2>
                                <ul>
                                    <li><Link href="#">Chính sách bảo mật</Link></li>
                                    <li><Link href="#">Trở thành tình nguyên viên</Link></li>
                                    <li><Link href="#">Tài trợ</Link></li>
                                    <li><Link href="#">Lời chứng thực</Link></li>
                                    <li><Link href="#">Nguyên nhân</Link></li>
                                    <li><Link href="#">Danh mục tài trợ</Link></li>
                                    <li><Link href="#">Tin tức</Link></li>
                                </ul>
                            </div>{/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="foot-latest-news">
                                    <h2>Tin tức mới nhất</h2>
                                    <ul>
                                        <li>
                                            <h3><Link href="#">Có thêm một người để giúp</Link></h3>
                                            <div className="posted-date">August 04, 2020</div>
                                        </li>
                                        <li>
                                            <h3><Link href="#">Chúng tôi muốn giúp đỡ mọi người</Link></h3>
                                            <div className="posted-date">August 04, 2020</div>
                                        </li>
                                        <li>
                                            <h3><Link href="#">Những ý tưởng mới để giúp đỡ</Link></h3>
                                            <div className="posted-date">August 04, 2020</div>
                                        </li>
                                    </ul>
                                </div>{/* .foot-latest-news */}
                            </div>{/* .col */}
                            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                                <div className="foot-contact">
                                    <h2>Liên hệ</h2>
                                    <ul>
                                        <li><FontAwesomeIcon icon={['fas', 'phone-alt']} /> <span> (+84) 334 133 327</span></li>
                                        <li><FontAwesomeIcon icon={['fas', 'envelope']} /> <span> ranghivanhuy@gmail.com</span></li>
                                        <li><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> <span> 101B Lê Hữu Trác, Sơn Trà, Đà Nẵng</span></li>
                                    </ul>
                                </div>{/* .foot-contact */}
                                <div className="subscribe-form">
                                    <div className="d-flex flex-wrap align-items-center">
                                        <input type="email" placeholder="Email của bạn" />
                                        <button type="submit" onClick={handleClick}>GỬI</button>
                                    </div>{/* .flex */}
                                </div>{/* .search-widget */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                    </div>{/* .container */}
                </div>{/* .footer-widgets */}
            </footer>{/* .site-footer */}
        </div>
    );
};