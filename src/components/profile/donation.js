import React from "react";
import "./profileDetail.css";
import IMG from "../../assets/images/amsieutoc.jpg";
export const UserDonate = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="user_profile">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="title">
                            <h5>Thông tin tài trợ</h5>
                        </div>
                        <table className="table table-bordered table-hover">
                            <thead className="user-table">
                                <tr>
                                    <th>Tên vật phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Mô tả</th>
                                    <th>Trạng thái</th>
                                    <th>Hoàn cảnh được cho</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="user-table">
                                <tr>
                                    <td>Ấm siêu tốc</td>
                                    <td>
                                        Đang dư mấy cái ấm siêu tốc,
                                        <br /> sử dụng được nhưng không có nhu
                                        cầu, muốn tặng lại cho ai cần
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
                                        Đang dư mấy cái ấm siêu tốc,
                                        <br /> sử dụng được nhưng không có nhu
                                        cầu, muốn tặng lại cho ai cần
                                    </td>
                                    <td>
                                        <img src={IMG} />
                                    </td>
                                    <td>Đã trào tặng</td>
                                    <td>Nguyễn Thị B</td>
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
