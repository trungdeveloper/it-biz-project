import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import { ProfileDetail } from "../../components/profile/profileDetail";

export const UserProfile = () => {
    return (
        <div classNameName="single-page causes-page">
            <div className="featured-cause">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <ProfileDetail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
