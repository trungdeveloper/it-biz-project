import React from "react";
import "./mainProfileDetail.css";
import IMG from "../../assets/image/user.png";
export const MainProfileDetail = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="user_profile">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="title">
                            <h5>Thông tin của tôi</h5>
                        </div>
                        <form>
                            <div className="image-profile">
                                <div className="image-radius">
                                    <img src={IMG} alt />
                                </div>
                                <p>
                                    Thay đổi ảnh đại diện{" "}
                                    <span>
                                        <input type="file" name id="input" />
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <form>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label htmlFor>Họ và tên</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id
                                        placeholder="Nhập họ tên"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label htmlFor>Địa chỉ</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id
                                        placeholder="Nhập địa chỉ"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label htmlFor>Số điện thoại</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label htmlFor>Email</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id
                                        placeholder="Nhập email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label htmlFor>Nghề nghiệp</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id
                                        placeholder="Nhập công việc hiện tại"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <button
                                        type="submit"
                                        className="profile-btn-update"
                                    >
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
