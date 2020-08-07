import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/amsieutoc.jpg";
import { Link } from "react-router-dom";

export const Product = () => {
    return (
        <div>
            <Link to="/DonationDetail">
                <div className="swiper-container causes-slider ">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="cause-wrap">
                                <figure>
                                    <img
                                        src={IMG}
                                        alt="Logo"
                                        style={{
                                            height: "200px",
                                            width: "340px",
                                        }}
                                    />
                                </figure>
                                <div className="cause-content-wrap">
                                    <header className="entry-header d-flex flex-wrap align-items-center">
                                        <h3 className="entry-title w-100 m-0">
                                            <a href="#">Ấm siêu tốc</a>
                                        </h3>

                                        <div className="posted-date">
                                            <a href="#">5/8/2020 </a>
                                        </div>

                                        <div className="posted-date">
                                            <a href="#">
                                                101B Lê Huữ Trác, Đà Nẵng
                                            </a>
                                        </div>
                                        <div className="cats-links ">
                                            <a href="#">Hồ Văn Huy</a>
                                        </div>
                                    </header>
                                    <div
                                        className="description entry-content"
                                        style={{ marginTop: "5px" }}
                                    >
                                        <p>
                                            Dung tích: 1.7 lít Chân đế 360 độ có
                                            thể tháo rời. Thân ấm bằng nhựa chịu
                                            nhiệt. Nắp và vòi rót dùng dễ dàng.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};