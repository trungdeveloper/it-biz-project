import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import { Product } from "../../components/sponsor/product";
import { CategoryBar } from "../../components/category/category-bar";

export const Donation = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div
                        className="col-xs-3 col-sm-6 col-md-6 col-lg-3"
                        style={{ marginTop: "20px" }}
                    >
                        <CategoryBar />
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
                <div className="row">
                    <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3" />
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
    );
};
