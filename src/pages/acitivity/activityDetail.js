import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import { EventDetail } from "../../components/event/eventDetail";
import { NormalEvent } from "../../components/event/normalEvent";

export const ActivityDetail = () => {
    return (
        <div className="highlighted-cause">
            <div className="container">
                <EventDetail />
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-12 col-lg-12">
                        <div className="upcoming-events">
                            <div className="section-heading">
                                <h2 className="entry-title">
                                    Một số hoạt động khác
                                </h2>
                            </div>
                        </div>
                    </div>
                    <NormalEvent />
                    <NormalEvent />
                    <NormalEvent />
                </div>
            </div>
        </div>
    );
};
