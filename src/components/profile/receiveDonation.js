import React from "react";
export const ReceiveDonation = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="user_profile">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="title">
                            <h5>Thông tin nhận tài trợ</h5>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <table className="table table-bordered table-hover">
                            <form />
                            <thead>
                                <tr>
                                    <th />
                                    <th>Ngày</th>
                                    <th>Vật phẩm được nhận</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="dele[]"
                                            id="dele[]"
                                        />
                                    </td>
                                    <td>31/05/2020</td>
                                    <td>Ấm siêu tốc</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="dele[]"
                                            id="dele[]"
                                        />
                                    </td>
                                    <td>31/05/2020</td>
                                    <td>Ly nước</td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="dele[]"
                                            id="dele[]"
                                        />
                                    </td>
                                    <td>31/05/2020</td>
                                    <td>
                                        Nhận tài trợ 1 ấm siêu tốc từ bà Nguyễn
                                        Thị B tại Hòa Vang, Đà Nẵng
                                    </td>
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
