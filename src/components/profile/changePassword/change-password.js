import React from "react";
import { SideBar } from "./../sideBar/sideBar";
export const ChangePassword = () => {
    return (
        <div className="row">
            <div className="col-3">
                <SideBar />
            </div>
            <div className="col-9">
                <form action="#">
                    <div className="row">
                        <h1>THAY ĐỔI MẬT KHẨU</h1>
                    </div>
                    <div className="row">
                        <div className="col">Tên Đăng nhập</div>
                        <div className="col">
                            <input
                                type="text"
                                name="txtUsername"
                                placeholder="Tên Đăng nhập"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">Mật Khẩu cũ</div>
                        <div className="col">
                            <input
                                type="text"
                                name="txtOldPass"
                                placeholder="Mật Khẩu cũ"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">Mật khẩu mới</div>
                        <div className="col">
                            <input
                                type="email"
                                name="txtNewPass"
                                placeholder="Mật khẩu mới"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="CẬP NHẬT" />
                    </div>
                </form>
            </div>
        </div>
    );
};
