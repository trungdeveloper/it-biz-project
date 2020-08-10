import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/font-awesome.min.css";
import "../../css/elegant-fonts.css";
import "../../css/themify-icons.css";
import "../../css/swiper.min.css";
import "../../style.css";
import "./plight-style.css";
import IMG from "../../images/cause-2.jpg";


export const PlightItem = () => {
    return (
        <div className="swiper-container causes-slider ">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="cause-wrap">
                        <figure>
                            <img src={IMG} alt="Logo" />
                        </figure>
                        <div className="cause-content-wrap">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                                <h3 className="entry-title w-100 m-0">
                                    <Link to="#">Bé Praku cần sách</Link>
                                </h3>
                            </header>
                            <div className="entry-content">
                                <p>
                                    Em năm nayb đã 7 tuổi chuẩn bị vào lớp 1
                                    nhưng gia đình không có đủ tiền mua sách
                                    giáo khoa chon em. Em cần lắm một bộ sách giáo khoa lớp 1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
