import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/hero.jpg";

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
                                        <h1>Donate</h1>
                                        <h4>4 a better world</h4>
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
                                        <a
                                            href="#"
                                            className="btn gradient-bg mr-2"
                                        >
                                            Donate Now
                                        </a>
                                        <a
                                            href="#"
                                            className="btn orange-border"
                                        >
                                            Read More
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-slide hero-content-wrap">
                    <img src={IMG} alt="Logo" />

                    <div className="hero-content-overlay position-absolute w-100 h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1>Donate</h1>
                                        <h4>4 a better world</h4>
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
                                        <a
                                            href="#"
                                            className="btn gradient-bg mr-2"
                                        >
                                            Donate Now
                                        </a>
                                        <a
                                            href="#"
                                            className="btn orange-border"
                                        >
                                            Read More
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-slide hero-content-wrap">
                    <img src={IMG} alt="Logo" />

                    <div className="hero-content-overlay position-absolute w-100 h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1>Donate</h1>
                                        <h4>4 a better world</h4>
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
                                        <a
                                            href="#"
                                            className="btn gradient-bg mr-2"
                                        >
                                            Donate Now
                                        </a>
                                        <a
                                            href="#"
                                            className="btn orange-border"
                                        >
                                            Read More
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pagination-wrap position-absolute w-100">
                <div className="container">
                    <div className="swiper-pagination"></div>
                </div>
            </div>

            <div className="swiper-button-next flex justify-content-center align-items-center">
                <span>
                    <svg
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                    </svg>
                </span>
            </div>

            <div className="swiper-button-prev flex justify-content-center align-items-center">
                <span>
                    <svg
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" />
                    </svg>
                </span>
            </div>
        </div>
    );
};
