import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../images/chung-tay-vi-nguoi-ngheo.jpg";

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
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Mauris
                                            tempus vestibulum mauris quis
                                            aliquam. Integer accumsan sodales
                                            odio, id tempus ullamcorper
                                        </p>
                                    </div>

                                    <footer className="entry-footer d-flex flex-wrap align-items-center mt-5">
                                        <button type="button" class="btn btn-success">Tài trợ ngay</button>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
