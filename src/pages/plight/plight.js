import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/font-awesome.min.css";
import "../../css/elegant-fonts.css";
import "../../css/themify-icons.css";
import "../../css/swiper.min.css";
import "../../style.css";
import { PlightItem } from "../../components/plight/plight";
import { CategoryBar } from "../../components/category/category-bar";

export const Plight = () => {
    return (
        <div className="top-header-bar container">
            <div className="row">
                <div className="col-3">
                    <CategoryBar />
                </div>
                <div className="col-3">
                    <PlightItem />
                </div>
                <div className="col-3">
                    <PlightItem />
                </div>
                <div className="col-3">
                    <PlightItem />
                </div>
            </div>
            <div className="row">
                <div className="col-3"/>
                <div className="col-3">
                    <PlightItem />
                </div>
                <div className="col-3">
                    <PlightItem />
                </div>
                <div className="col-3">
                    <PlightItem />
                </div>
            </div>
        </div>
    );
};
