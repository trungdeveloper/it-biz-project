import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
    return (
        <ul className="profile-category">
            <li>
                <label className="tablinks">Tài khoản của tôi</label>
            </li>
            <li className="tablinks active1">
                <Link to="/profile">Thông tin của tôi</Link>
            </li>
            <li className="tablinks">
                <Link to="/profile/donation">Tài trợ</Link>
            </li>
            <li className="tablinks">
                <Link to="/profile/receiveDonate">Nhận tài trợ</Link>
            </li>
            <li className="tablinks">
                <Link to="/profile/changepassword">Đổi mật khẩu</Link>
            </li>
        </ul>
    );
};
