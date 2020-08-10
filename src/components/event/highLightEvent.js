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
                    <Link to="#">Trao tặng quần áo</Link>
                    </h2>

                    <div className="post-metas d-flex flex-wrap align-items-center">
                        <span className="cat-links">
                        <Link to="#">5/8/2020</Link>
                        </span>
                        <span className="post-author">
                        <Link to="#">101B Lê Hữu Trác, Sơn Trà, Đà Nẵng</Link>
                        </span>
                        <span className="post-comments">
                        <Link to="#">Hoàng Thanh Vi</Link>
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
                <Link to="#" className="btn gradient-bg">Xem thêm</Link>
            </footer>
        </div>
    );
};
