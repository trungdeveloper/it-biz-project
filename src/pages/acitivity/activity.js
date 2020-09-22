import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import { HightLightEvent } from "../../components/event/highLightEvent";
import { Event } from "../../components/event/event";
import { NormalEvent } from "../../components/event/normalEvent";

export const Activity = () => {
    return (
        <div className="news-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <HightLightEvent />
                    </div>
                    <div className="col-12 col-lg-5">
                        <Event />
                        <Event />
                        <Event />
                    </div>
                </div>
                <div className="row">
                    <NormalEvent />
                    <NormalEvent />
                    <NormalEvent />
                </div>
                <div className="row">
                    <table className="table table-condensed table-hover">
                        <thead>
                            <tr>
                                <th>Ngày</th>
                                <th>Hình ảnh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>21685</td>
                                <td>Hình ảnh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
