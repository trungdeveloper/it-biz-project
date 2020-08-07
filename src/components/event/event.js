import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/u-1.jpg";

export const Event = () => {
    return (
        <div className="event-wrap d-flex flex-wrap justify-content-between">
            <figure className="m-0">
                <img src={IMG} alt="img" />
            </figure>

            <div className="event-content-wrap">
                <header className="entry-header d-flex flex-wrap align-items-center">
                    <h3 className="entry-title w-100 m-0">
                        <a href="#">Bàn ghế cho lớp học</a>
                    </h3>
                    <div className="posted-date">
                        <a href="#">5/8/2020 </a>
                    </div>

                    <div className="posted-date">
                        <a href="#">101B Lê Huữ Trác, Đà Nẵng</a>
                    </div>
                    <div className="cats-links ">
                        <a href="#">Hồ Văn Huy</a>
                    </div>
                </header>

                <div className="entry-content">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris.
                    </p>
                </div>

                <div className="entry-footer">
                    <a href="#">Xem thêm</a>
                </div>
            </div>
        </div>
    );
};
