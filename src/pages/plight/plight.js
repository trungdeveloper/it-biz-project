import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import { NewPlightItem } from "../../components/plight/newPlightItem";
import { PlightItem } from "../../components/plight/plightItem";

export const Plight = () => {
    return (
        <div classNameName="single-page causes-page">
            <div className="featured-cause">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <NewPlightItem />
                        </div>

                        <div className="col-12 col-lg-6">
                            <NewPlightItem />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row">
                        <PlightItem />
                        <PlightItem />
                        <PlightItem />
                    </div>
                </div>
            </div>
        </div>
    );
};
