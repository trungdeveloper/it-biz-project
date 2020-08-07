import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-fonts.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/swiper.min.css";
import "../../assets/style.css";
import IMG from "../../assets/images/oshomah.jpg";

export const UsePlight = () => {
    return (
        <div className="container">
            <h3 style={{ marginBottom: "30px", marginTop: "30px" }}>
                Vật Phẩm Đã Nhận
            </h3>
            <table className="table table-striped">
                <thead>
                    <tr className="info">
                        <th>Hoàn cảnh</th>
                        <th>Hình ảnh</th>
                        <th>Trạng thái</th>
                        <th>Vật phẩm được nhận</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="success">
                        <td>Bé A</td>
                        <td>
                            <img src={IMG} />
                        </td>
                        <td>Đã trao</td>
                        <td>Ấm siêu tốc</td>
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
