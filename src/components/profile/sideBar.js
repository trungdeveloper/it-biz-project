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
                <Link to="/profile/donationHistory">Tài trợ</Link>
            </li>
            <li className="tablinks">
                <Link to="/profile/plightHistory">Hoàn cảnh chia sẽ</Link>
            </li>
            <li className="tablinks">
                <Link to="/profile/changepassword">Đổi mật khẩu</Link>
            </li>
        </ul>
    );
};
