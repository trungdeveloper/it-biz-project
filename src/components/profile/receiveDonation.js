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
                            <thead>
                                <tr>
                                    <th />
                                    <th>Tên vật phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Trạng thái</th>
                                    <th>Người trào tặng</th>
                                </tr>
                            </thead>
                            <tbody className="userdonate">
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="dele[]"
                                            id="dele[]"
                                        />
                                    </td>
                                    <td>Ấm siêu tốc</td>
                                    <td>
                                        <img src={IMG} />
                                    </td>
                                    <td>Đã tặng</td>
                                    <td>Nguyễn Văn A</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="dele[]"
                                            id="dele[]"
                                        />
                                    </td>
                                    <td>Ấm siêu tốc</td>
                                    <td>
                                        <img src={IMG} />
                                    </td>
                                    <td>Đã tặng</td>
                                    <td>Nguyễn Văn A</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="dele[]"
                                            id="dele[]"
                                        />
                                    </td>
                                    <td>Ấm siêu tốc</td>
                                    <td>
                                        <img src={IMG} />
                                    </td>
                                    <td>Đã tặng</td>
                                    <td>Nguyễn Văn A</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit" className="prifle-btn-detele">
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
