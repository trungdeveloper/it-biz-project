import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import { Product } from "../../components/sponsor/product";
import { ProductDetail } from "../../components/sponsor/productDetail";

export const DonationDetail = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <ProductDetail />
                </div>
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-12 col-lg-12">
                        <div className="upcoming-events">
                            <div className="section-heading">
                                <h2 className="entry-title">
                                    Vật phẩm trao tặng khác
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <Product />
                    </div>
                    <div className="col-3">
                        <Product />
                    </div>
                    <div className="col-3">
                        <Product />
                    </div>
                    <div className="col-3">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
};
