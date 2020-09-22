import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/oshomah.jpg";
import { Link } from "react-router-dom";
import "./plight-style.css";

export const NewPlightItem = () => {
    return (
        <div className="cause-wrap d-flex flex-wrap justify-content-between">
            <figure className="m-0">
                <Link to="/PlightDetail">
                    <img
                        src={IMG}
                        alt="Logo"
                        style={{ height: "300px", width: "250px" }}
                    />
                </Link>
            </figure>
            <div className="cause-content-wrap">
                <header className="entry-header d-flex flex-wrap align-items-center">
                    <h3 className="entry-title w-100 m-0">
                        <Link to="#">Học sinh nghèo vượt khó</Link>
                    </h3>
                    <div className="posted-date">
                        <Link to="#">5/8/2020</Link>
                    </div>
                    <div className="posted-date">
                        <Link to="#">
                            K111/9 đường 2 Tháng 9 (quận Hải Châu) Đà Nẵng
                        </Link>
                    </div>
                    <div className="cats-links ">
                        <Link to="#">Lê Thành Tâm</Link>
                    </div>
                </header>
                <div className="entry-content">
                    <p className="m-0">
                        Hiện tại em Lê Thành Tâm là học sinh lớp 7a1 Trường
                        Trung học cơ sở Tây Sơn, gia đình nghèo khổ bố bệnh nặng
                        không lao động được một mình mẹ là lao động...
                    </p>
                </div>
                <div className="entry-footer mt-5">
                    <Link to="/donate" className="btn gradient-bg mr-2">
                        Tài trợ
                    </Link>
                </div>
            </div>
        </div>
    );
};
