import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/font-awesome.min.css";
import "../../css/elegant-fonts.css";
import "../../css/themify-icons.css";
import "../../css/swiper.min.css";
import "../../style.css";
import { MenuBar } from "../../components/menu-bar";
import { Product } from "../../components/sponsor/product";
import { CategoryBar } from "../../components/category/category-bar";
// import "../../js/jquery.js";
// import "../../js/jquery.collapsible.min.js";
// import "../../js/swiper.min.js";
// import "../../js/jquery.countdown.min.js";
// import "../../js/circle-progress.min.js";
// import "../../js/jquery.barfiller.js";
// import "../../js/custom.js";

export const Donation = () => {
    return (
        <div>
            {/* <MenuBar /> */}
            <div className="top-header-bar container">
                <div className="row">
                    <div className="col-3">
                        <CategoryBar />
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
                <div className="row">
                    <div className="col-3"/>
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
            {/* <Footer /> */}
        </div>
    );
};
