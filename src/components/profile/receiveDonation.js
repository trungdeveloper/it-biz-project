import React from "react";
import IMG from "../../assets/images/amsieutoc1.jpg";
export const ReceiveDonation = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="user_profile">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="title">
                            <h5>Thông tin nhận tài trợ</h5>
                        </div>
                        <table className="table table-bordered table-hover">
                            <thead className="user-table">
                                <tr>
                                    <th>Tên vật phẩm</th>
                                    <th>Mô tả</th>
                                    <th>Hình ảnh</th>
                                    <th>Trạng thái</th>
                                    <th>Người cho</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="user-table">
                                <tr>
                                    <td>Ấm siêu tốc</td>
                                    <td>
                                        Tôi cần một ấm siêu tốc,
                                        <br /> gia đình khó khăn nên không mua
                                        được, cảm ơn nhiều.
                                    </td>
                                    <td>
                                        <img src={IMG} />
                                    </td>
                                    <td>Đang chờ xét duyệt</td>
                                    <td></td>
                                    <td className="action">
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ấm siêu tốc</td>
                                    <td>
                                        Tôi cần một ấm siêu tốc,
                                        <br /> gia đình khó khăn nên không mua
                                        được, cảm ơn nhiều.
                                    </td>
                                    <td>
                                        <img src={IMG} />
                                    </td>
                                    <td>Đã nhận</td>
                                    <td>Nguyễn Văn A</td>
                                    <td className="action"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
