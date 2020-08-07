import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/amsieutoc.jpg";

export const ProductDetail = () => {
    return (
        <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12 col-lg-5 order-2 order-lg-1">
                <img src={IMG} alt="" />
            </div>
            <div className="col-12 col-lg-7 order-1 order-lg-2">
                <div className="section-heading">
                    <h2 className="entry-title">Ấm siêu tốc</h2>
                </div>
                <div className="entry-content">
                    <p className="description">
                        Mô tả: Dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris quis aliquam. Lorem
                        ipsum dolor sit amet.Aliquam arcu quam, fermentum vitae
                        massa lobortis, dictum blandit quam. Curabitur quis orci
                        faucibus mi tempus ultricies. Proin sit amet scelerisque
                        lorem. sem at condimentum sceleri sque, odio eros
                        vestibulum tortor, non posuere sapien elit at velit.
                        Vestibulum ac porttitor dolor, ac feugiat nunc.
                    </p>
                    <p>
                        Cách sử dụng: Nulla eleifend massa tortor, nec laoreet
                        lectus varius ac. Fusce scelerisque consequat eros, non
                        venenatis turpis ultricies id. Etiam nec sagittis diam,
                        a tempor risus. Nunc nisl felis, congue non euismod
                        dignissim id eros. Maecenas eu molestie purus, in digni
                        ssim nequeo nsectetur adipiscing elit.
                    </p>
                    <p>Nhà tài trợ: Hoàng Thị Thương</p>
                    <p>Số điện thoại: 098 999 9964</p>
                    <p>Địa chỉ: 101 b lê hữu trác, an hải đông</p>
                </div>
            </div>
        </div>
    );
};
