import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/amsieutoc.jpg";

export const Sponsor = () => {
    return (
        <div className="testimonial-cont">
            <div className="entry-footer d-flex flex-wrap align-items-center mt-5">
                <img src={IMG} alt="aaa" />
                <h4>
                    Maria Williams,
                    <span>Volunteer</span>
                </h4>
            </div>
        </div>
    );
};
