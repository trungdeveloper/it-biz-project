import { Link } from "react-router-dom";
import React, { useState } from "react";

// import IMG from "../../assets/image/logo-menu.svg";
import "./navBar.css";
import { useEffect } from "react";
const img = require("../assets/image/logo-menu.svg");
const icon_search = require("../assets/image/Vector.svg");
const icon_user = require("../assets/image/user.svg");

export const NavBar = () => {
    const [activeTab, setActiveTab] = useState("activities");
    const [sticky, setSticky] = useState("");

    const handleScroll = () => {
        let header = document.getElementById("menu_under");
        if (window.pageYOffset > header.offsetTop) {
            setSticky("fixed");
        } else {
            setSticky("");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="main_menu">
            <div className="menu_top">
                <div className="menu_top_left">
                    <p>
                        Mail: <a href="">ranghivanhuy@gmail.com</a>
                    </p>
                    <p>
                        Phone: <a>(+84) 334 133 327</a>
                    </p>
                </div>
                <div className="menu_top_righ">
                    <button className="btn_dona">Tài trợ ngay</button>
                </div>
            </div>
            <div className={`menu_under ${sticky}`} id="menu_under">
                <div className="logo_menu">
                    <a href="/">
                        <img src={img} alt="logo in here"></img>
                    </a>
                </div>
                <div className="menu_left">
                    <ul className="menu_list" id="menu_list">
                        <li
                            id="activities"
                            className={`tag ${
                                activeTab === "activities" ? "active" : ""
                            }`}
                        >
                            <Link
                                onClick={() => setActiveTab("activities")}
                                to="/"
                            >
                                HOẠT ĐỘNG
                            </Link>
                        </li>
                        <li
                            id="plight"
                            className={`tag ${
                                activeTab === "plight" ? "active" : ""
                            }`}
                        >
                            <Link
                                onClick={() => setActiveTab("plight")}
                                to="/plight"
                            >
                                HOÀN CẢNH KHÓ KHĂN
                            </Link>
                        </li>
                        <li
                            id="profile"
                            className={`tag ${
                                activeTab === "profile" ? "active" : ""
                            }`}
                        >
                            <Link
                                onClick={() => setActiveTab("profile")}
                                to="/profile"
                            >
                                PROFILE
                            </Link>
                        </li>
                        <li
                            id="donation"
                            className={`tag ${
                                activeTab === "donation" ? "active" : ""
                            }`}
                        >
                            <Link
                                onClick={() => setActiveTab("donation")}
                                to="/donation"
                            >
                                NHÀ TÀI TRỢ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="search-container">
                    <form action="">
                        <input
                            type="text"
                            name="search"
                            placeholder="Tìm kiếm..."
                        />
                        <button type="submit">
                            <img
                                src={icon_search}
                                alt="icon search in here"
                            ></img>
                        </button>
                    </form>
                    <div className="icon_account_user">
                        <a className="account_user" href="/">
                            <img src={icon_user} alt="logo in here"></img>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
