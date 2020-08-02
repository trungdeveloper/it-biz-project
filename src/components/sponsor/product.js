import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/font-awesome.min.css";
import "../../css/elegant-fonts.css";
import "../../css/themify-icons.css";
import "../../css/swiper.min.css";
import "../../style.css";
import IMG from "../../images/amsieutoc.jpg";

export const Product = () => {
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
                                    <a className="title" href="#">
                                        Ấm siêu tốc
                                    </a>
                                </h3>
                            </header>
                            <div className="description entry-content">
                                <p>
                                    Dung tích: 1.7 lít Chân đế 360 độ có thể
                                    tháo rời. Thân ấm bằng nhựa chịu nhiệt. Nắp
                                    và vòi rót dùng dễ dàng.
                                </p>
                            </div>
                            <div className="sponsor entry-content">
                                Hoàng Thanh Vi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
