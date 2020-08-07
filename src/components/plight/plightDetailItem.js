import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/oshomah.jpg";

export const PLightDetailItem = () => {
    return (
        <div className="cause-wrap d-flex flex-wrap justify-content-between">
            <figure className="m-0">
                <img
                    src={IMG}
                    alt="Logo"
                    style={{ height: "300px", width: "250px" }}
                />
            </figure>

            <div className="cause-content-wrap">
                <div className="row">
                    <div className="upcoming-events">
                        <div className="section-heading">
                            <h2 className="entry-title">Cần tiền chữa bệnh</h2>
                        </div>
                    </div>
                </div>
                <header className="entry-header d-flex flex-wrap align-items-center">
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
                    <p className="m-0">Họ và tên: Lê Thị Mai Thương</p>
                    <p className="m-0">Số điện thoại: 096 998 0038</p>
                    <p className="m-0">Ngày sinh: 10/09/1999</p>
                    <p>
                        Địa chỉ: 101B lê hữu trác, an hải đông, sơn trà, đà nẵng
                    </p>
                    <p>
                        Hoàn cảnh: Ba mẹ bị bệnh ung thư mất sớm, bốn chị em ở
                        với nhau rất khó khăn về kinh tế và sinh hoạt hằng ngày
                    </p>
                </div>

                <div className="entry-footer mt-5">
                    <a href="#" className="btn gradient-bg mr-2">
                        Tài Trợ
                    </a>
                </div>
            </div>
        </div>
    );
};
