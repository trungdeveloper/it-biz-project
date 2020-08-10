import React from "react";
import "./category-bar.css";
import { NavLink, Link } from "react-router-dom";

export const CategoryBar = () => {
    return (
        <ul className="ul-category">
            <li>
                <Link className="active" to="#home">Danh mục</Link>
            </li>
            <li>
                <Link to="#">Đồ Gia Dụng</Link>
            </li>
            <li>
                <Link to="#">Đồ Điện Tử</Link>
            </li>
            <li>
                <Link to="#">Thời Trang</Link>
            </li>
            <li>
                <Link to="#">Nội Thất</Link>
            </li>
            <li>
                <Link to="#">Văn Phòng</Link>
            </li>
            <li>
                <Link to="#">Nông Nghiệp</Link>
            </li>
            <li>
                <Link to="#">Khác</Link>
            </li>
        </ul>
    );
};
