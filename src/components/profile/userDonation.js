import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/oshomah.jpg";

export const UserDonation = () => {
    return (
        <div className="container">
            <h3 style={{ marginBottom: "30px", marginTop: "30px" }}>
                Vật Phẩm Đã Cho
            </h3>
            <table className="table table-striped">
                <thead>
                    <tr className="info">
                        <th>Vật phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Trạng thái</th>
                        <th>Hoàn cảnh được cho</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="success">
                        <td>Ấm siêu tốc</td>
                        <td>
                            <img
                                src={IMG}
                                style={{ height: "100px", width: "100px" }}
                            />
                        </td>
                        <td>Đã trao</td>
                        <td>Bé A</td>
                        <td>
                            <a href="#">
                                <button className="btn btn-primary">
                                    Cập nhật
                                </button>
                            </a>
                            <a href=" #">
                                <button className="btn btn-danger">Xoá</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
