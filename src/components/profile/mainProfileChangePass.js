import React from "react";
import "./profileDetail.css";
export const ChangePassword = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="user_profile">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="title">
                            <h5>Thay đổi mật khẩu</h5>
                        </div>
                        <form className="profile-infor">
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label>Mật khẩu cũ</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id
                                        defaultValue="**********"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label htmlFor>Mật khẩu mới</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id
                                        defaultValue="**********"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label htmlFor>Xác nhận mật khẩu mới</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id
                                        defaultValue="**********"
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
