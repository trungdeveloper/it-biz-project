import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/oshomah.jpg";

export const EventDetail = () => {
    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <div className="section-heading">
                    <h2 className="entry-title">
                        Tặng một năm uống sữa cho bé A
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-5 order-2 order-lg-1">
                    <img src={IMG} alt="" />
                </div>
                <div className="col-12 col-lg-7 order-1 order-lg-2">
                    <div className="entry-content">
                        <h4>Chi tiết</h4>
                        <p className="plight">Hoàn cảnh: Thiếu sữa bé A</p>
                        <p className="description">
                            Mô tả: Dolor sit amet, consectetur adipiscing elit.
                            Mauris tempus vestib ulum mauris quis aliquam. Lorem
                            ipsum dolor sit amet.Aliquam arcu quam, fermentum
                            vitae massa lobortis, dictum blandit quam. Curabitur
                            quis orci faucibus mi tempus ultricies. Proin sit
                            amet scelerisque lorem. sem at condimentum sceleri
                            sque, odio eros vestibulum tortor, non posuere
                            sapien elit at velit. Vestibulum ac porttitor dolor,
                            ac feugiat nunc. Nulla eleifend massa tortor, nec
                            laoreet lectus varius ac. Fusce scelerisque
                            consequat eros, non venenatis turpis ultricies id.
                            Etiam nec sagittis diam, a tempor risus. Nunc nisl
                            felis, congue non euismod dignissim id eros.
                            Maecenas eu molestie purus, in digni ssim nequeo
                            nsectetur adipiscing elit.
                        </p>
                        <p>
                            Địa điểm trao tặng: 101 b lê hữu trác, an hải đông
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Nhà tài trợ</h5>
                            <p>Tên: Hoàng Thanh Vi</p>
                            <p>Liên hệ: 085 959 7857</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Người trao tặng</h5>
                            <p>Tên: Nguyễn Tấn Trung</p>
                            <p>Liên hệ: 0985 680 999</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
