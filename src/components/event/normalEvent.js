import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/cause-4.jpg";
import { Link } from "react-router-dom";

export const NormalEvent = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="cause-wrap">
                <figure className="m-0">
                    <img src={IMG} alt="Logo" style={{ height: "200px", width: "340px" }} />
                </figure>

                <div className="cause-content-wrap">
                    <div className="entry-content" style={{ marginTop: 0 }}>
                        <header className="entry-header d-flex flex-wrap align-items-center">
                            <h3 className="entry-title w-100 m-0">
                                <Link to="#">Tặng Sách Giáo Khoa</Link>
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
                        <p className="m-0">
                            Charity đã trao tặng thành công 100 bộ sách giáo
                            khoa cho các em nhỏ ở bản Cà Ròng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
