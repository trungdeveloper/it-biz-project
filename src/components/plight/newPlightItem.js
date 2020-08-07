import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/oshomah.jpg";
import { Link } from "react-router-dom";

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
                        <a href="#">Trẻ mồ côi</a>
                    </h3>
                    <div className="posted-date">
                        <a href="#">5/8/2020 </a>
                    </div>

                    <div className="posted-date">
                        <a href="#">101B Lê Huữ Trác, Đà Nẵng</a>
                    </div>
                    <div className="cats-links ">
                        <a href="#">Hồ Văn Huy</a>
                    </div>
                </header>

                <div className="entry-content">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit
                        amet, consectetur.
                    </p>
                </div>

                <div className="entry-footer mt-5">
                    <a href="#" className="btn gradient-bg mr-2">
                        Tài Trợ
                    </a>
                </div>
            </div>
        </div>
    );
};
