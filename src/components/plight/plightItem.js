import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/cause-5.jpg";
import { Link } from "react-router-dom";

export const PlightItem = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="cause-wrap">
                <figure className="m-0">
                    <img src={IMG} alt="Logo" />
                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                        <Link to="#" className="btn gradient-bg mr-2">Tài trợ</Link>
                    </div>
                </figure>

                <div className="cause-content-wrap" style={{ border: "1px solid #e0e0e0" }}>
                    <header className="entry-header d-flex flex-wrap align-items-center">
                        <h3 className="entry-title w-100 m-0">
                            <Link to="#">Sách vở tới trường</Link>
                        </h3>
                        <div className="posted-date">
                            <Link to="#">5/8/2020</Link>
                        </div>
                        <div className="posted-date">
                            <Link to="#">101B Lê Hữu Trác, Sơn Trà, Đà Nẵng</Link>
                        </div>
                        <div className="cats-links ">
                            <Link to="#">Nguyễn Văn A</Link>
                        </div>
                    </header>

                    <div className="entry-content">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris tempus vestib ulum mauris.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
