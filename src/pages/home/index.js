import React from "react";
// import "../../assets/css/bootstrap.min.css";
// import "../../assets/css/font-awesome.min.css";
// import "../../assets/css/elegant-fonts.css";
// import "../../assets/css/themify-icons.css";
// import "../../assets/css/swiper.min.css";
// import "../../assets/style.css";
import { Carousel } from "../../components/home/carousel";
import { Event } from "../../components/event/event";
import { NewPlightItem } from "../../components/plight/newPlightItem";
import { PlightItem } from "../../components/plight/plightItem";
import { Product } from "../../components/sponsor/product";
import { Sponsor } from "../../components/home/sponsor";

export const Home = () => {
    return (
        <div>
            <Carousel />
            <div className="featured-cause">
                <div className="container">
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-12 col-lg-6">
                            <div className="upcoming-events">
                                <div className="section-heading">
                                    <h2
                                        className="entry-title"
                                        style={{ marginBottom: "20px" }}
                                    >
                                        Sự Kiện Sắp Tới
                                    </h2>
                                </div>
                            </div>
                            <Event />
                            <div style={{ marginBottom: "50px" }}></div>
                            <Event />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="featured-cause">
                                <div className="section-heading">
                                    <h2
                                        className="entry-title"
                                        style={{ marginBottom: "20px" }}
                                    >
                                        Hoàn Cảnh Mới Cần Hỗ Trợ
                                    </h2>
                                </div>
                            </div>
                            <NewPlightItem />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="upcoming-events">
                                <div className="section-heading">
                                    <h2 className="entry-title">
                                        Hoàn Cảnh Khó Khăn
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <PlightItem />
                        <PlightItem />
                        <PlightItem />
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div
                                className="upcoming-events"
                                style={{ marginTop: "20px" }}
                            >
                                <div className="section-heading">
                                    <h2 className="entry-title">
                                        Vật phẩm được tặng
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                            <Product />
                        </div>
                        <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                            <Product />
                        </div>
                        <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                            <Product />
                        </div>
                        <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="upcoming-events">
                                <div className="section-heading">
                                    <h2 className="entry-title">
                                        Nhà tài trợ của tháng
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <Sponsor />
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <Sponsor />
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <Sponsor />
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <Sponsor />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
