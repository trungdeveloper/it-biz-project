import React from "react";
import IMG from "../../images/chung-tay-vi-nguoi-ngheo.jpg";
import { Link } from "react-router-dom";

export const Carousel = () => {
    return (
        <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide hero-content-wrap">
                    <img src={IMG} alt="Logo" />
                    <div className="hero-content-overlay position-absolute w-100 h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1>Tài trợ</h1>
                                    </header>
                                    <div className="entry-content mt-4">
                                        <p>
                                            Nhường cơm sẻ áo. Tái sử dụng đồ,
                                            bảo vệ môi trường. Chúng tôi sẽ mang
                                            nhà hảo tâm đến gần hơn với những
                                            hoàn cảnh khó khăn. Để biến việc từ
                                            thiện trở nên dễ dàng hơn.
                                        </p>
                                    </div>

                                    <div className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                        <Link
                                            to="/donate"
                                            type="button"
                                            className="btn btn-success"
                                        >
                                            Tài trợ ngay
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
