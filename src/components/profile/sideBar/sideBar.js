import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
    return (
        <div>
            <h1>TÀI KHOẢN CỦA TÔI</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Profile">Thông tin của tôi</Link>
                    </li>
                    <li>
                        <ul>
                            <Link to="/profile/donationInformationProfile">
                                Lịch sử hoạt động
                            </Link>
                            <li>
                                <Link to="/profile/donationInformationProfile">
                                    Tài Trợ
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile/receiveDonationProfile">
                                    Nhận tài trợ
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/profile/changepassword">Đổi Mật khẩu</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
