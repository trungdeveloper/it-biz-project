import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/1.jpg";
import { Link } from "react-router-dom";

export const HightLightEvent = () => {
    return (
        <div className="news-content">
            <Link to="/ActivityDetail">
                <img src={IMG} alt="vvvv" />
            </Link>
            <header
                className="entry-header d-flex flex-wrap justify-content-between align-items-center"
                style={{ marginTop: "0px" }}
            >
                <div className="header-elements">
                    <h2 className="entry-title">
                        <a href="#">Trao tặng áo quần</a>
                    </h2>

                    <div className="post-metas d-flex flex-wrap align-items-center">
                        <span className="cat-links">
                            <a href="#">05/08/2020</a>
                        </span>
                        <span className="post-author">
                            <a href="#">101b Lê hữu Trác, Sơn Trà, Đà Nẵng</a>
                        </span>
                        <span className="post-comments">
                            <a href="#">Hoàng Thanh Vi</a>
                        </span>
                    </div>
                </div>
            </header>

            <div className="entry-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit
                    amet, consectetur. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Mauris tempus vestib ulum mauris quis
                    aliquam. Integer accumsan sodales odio, id tempus velit
                    ullamc.
                </p>
            </div>

            <footer className="entry-footer" style={{ marginTop: "0px" }}>
                <a href="#" className="btn gradient-bg">
                    Xem Thêm
                </a>
            </footer>
        </div>
    );
};
