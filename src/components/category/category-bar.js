import React from "react";
import "./category-bar.css";

export const CategoryBar = () => {
    return (
        <ul className="ul-category">
            <li>
                <a className="active" href="#home">
                    Danh mục
                </a>
            </li>
            <li>
                <a href="#news">Đồ Gia Dụng</a>
            </li>
            <li>
                <a href="#contact">Đồ Điện Tử</a>
            </li>
            <li>
                <a href="#about">Thời Trang</a>
            </li>
            <li>
                <a href="#about">Nội Thất</a>
            </li>
            <li>
                <a href="#about">Văn Phòng</a>
            </li>
            <li>
                <a href="#about">Nông Nghiệp</a>
            </li>
            <li>
                <a href="#about">Khác</a>
            </li>
        </ul>
    );
};
