import React from "react";
export const Login = () => {
    return (
        <div className="row">
            <form action="#">
                <div className="row">
                    <h1>ĐĂNG NHẬP</h1>
                </div>
                <div className="row">
                    <div className="col">Tên Đăng nhập</div>
                    <div className="col">
                        <input type="text" name="txtUsername" placeholder="Tên Đăng nhập" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">Mật Khẩu</div>
                    <div className="col">
                        <input type="text" name="txtPass" placeholder="Mật KhẩU" />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="ĐĂNG NHẬP BAWGF EMAIL" />
                </div>
                <div className="row">
                    <input type="submit" value="ĐĂNG NHẬP BAWGF FACEBOOK" />
                </div>
                <div className="row">
                    <input type="submit" value="ĐĂNG NHẬP" />
                    <input type="submit" value="THOÁT" />
                </div>
            </form>
        </div>
    );
}