import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import { PLightDetailItem } from "../../components/plight/plightDetailItem";
import { PlightItem } from "../../components/plight/plightItem";

export const PlightDetail = () => {
    return (
        <div classNameName="single-page causes-page">
            <div className="featured-cause">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <PLightDetailItem />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-12 col-lg-12">
                            <div className="upcoming-events">
                                <div className="section-heading">
                                    <h2 className="entry-title">
                                        Hoàn cảnh khác
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
        </div>
    );
};
