import React from "react";
export const Register = () => {
    return (
        <div className="row">
            <form action="#">
                <div className="row">
                    <h1>ĐĂNG KÝ</h1>
                </div>
                <div className="row">
                    <div className="col-3">Họ và Tên</div>
                    <div className="col-9">
                        <input type="text" name="txtName" placeholder="Họ và Tên" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Số điện Thoại</div>
                    <div className="col-9">
                        <input type="text" name="txtPhoneNumber" placeholder="Số điện Thoại" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Email</div>
                    <div className="col-9">
                        <input type="email" name="txtEmail" placeholder="Email" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Nghề Nghiệp</div>
                    <div className="col-9">
                        <input type="text" name="txtJob" placeholder="Nghề Nghiệp" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Địa chỉ</div>
                    <div className="col-9">
                        <input type="text" name="txtAddress" placeholder="Địa chỉ" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Tên đăng nhập</div>
                    <div className="col-9">
                        <input type="text" name="txtLastName" placeholder="Tên Đăng nhập" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Mật khẩu</div>
                    <div className="col-9">
                        <input type="password" name="txtPass" placeholder="Mật khẩu" />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="ĐĂNG KÍ" />
                    <input type="submit" value="THOÁT" />
                </div>
            </form>
        </div>
    );
}