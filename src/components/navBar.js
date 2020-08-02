import { Link } from "react-router-dom";
import React from "react";
import { logout } from "../redux/authentication/actions";
import { compose } from "redux";
import { firebaseConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import "./navBar.css";
const img = require("../assets/image/logo-menu.svg");
const icon_search = require("../assets/image/Vector.svg");
const icon_user = require("../assets/image/user.svg");



const NavBar = ({ auth, logout }) => {
    const [activeTab, setActiveTab] = React.useState("activities");
    const [sticky, setSticky] = React.useState("");
    const [showSideMenu, setShowSideMenu] = React.useState(false);

    const handleScroll = () => {
        let header = document.getElementById("nav-bar");
        if (window.pageYOffset > header.offsetTop) {
            setSticky("fixed");
        } else {
            setSticky("");
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <header className="site-header">
                <div className="top-header-bar">
                    <div className="container">
                        <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
                            <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                                <div className="header-bar-email">
                                    MAIL:{" "}
                                    <Link to="#">contact@ourcharity.com</Link>
                                </div>
                                {/* .header-bar-email */}
                                <div className="header-bar-text">
                                    <p>
                                        PHONE:{" "}
                                        <span>
                                            +24 3772 120 091 / +56452 4567
                                        </span>
                                    </p>
                                </div>
                                {/* .header-bar-text */}
                            </div>
                            {/* .col */}
                            <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                                <div className="donate-btn">
                                    <Link to="#">Tài Trợ Ngay</Link>
                                </div>
                                {/* .donate-btn */}
                            </div>
                            {/* .col */}
                        </div>
                        {/* .row */}
                    </div>
                    {/* .container */}
                </div>
                {/* .top-header-bar */}
                <div className={`nav-bar ${sticky}`} id="nav-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                                <div className="site-branding d-flex align-items-center">
                                    <Link
                                        className="d-block"
                                        to="index.html"
                                        rel="home"
                                    >
                                        <img
                                            className="d-block"
                                            src={img}
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                {/* .site-branding */}
                                <nav
                                    className={`site-navigation d-flex justify-content-end align-items-center ${
                                        showSideMenu ? "show" : ""
                                    }`}
                                >
                                    <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                        <li
                                            id="activities"
                                            className={`tag ${
                                                activeTab === "activities"
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setActiveTab("activities")
                                                }
                                                to="/"
                                            >
                                                HOẠT ĐỘNG
                                            </Link>
                                        </li>
                                        <li
                                            id="plight"
                                            className={`tag ${
                                                activeTab === "plight"
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setActiveTab("plight")
                                                }
                                                to="/plight"
                                            >
                                                HOÀN CẢNH KHÓ KHĂN
                                            </Link>
                                        </li>
                                        <li
                                            id="profile"
                                            className={`tag ${
                                                activeTab === "profile"
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setActiveTab("profile")
                                                }
                                                to="/profile"
                                            >
                                                PROFILE
                                            </Link>
                                        </li>
                                        <li
                                            id="donation"
                                            className={`tag ${
                                                activeTab === "donation"
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <Link
                                                onClick={() =>
                                                    setActiveTab("donation")
                                                }
                                                to="/donation"
                                            >
                                                NHÀ TÀI TRỢ
                                            </Link>
                                        </li>
                                        <form className="form-search">
                                            <input
                                                type="text"
                                                name="search"
                                                placeholder="Tìm kiếm..."
                                            />
                                            <button>
                                                <img
                                                    src={icon_search}
                                                    alt="icon search in here"
                                                ></img>
                                            </button>
                                        </form>
                                        <div className="icon_account_user">
                                            <Link
                                                className="account_user"
                                                to="/"
                                            >
                                                <img
                                                    src={icon_user}
                                                    alt="logo in here"
                                                ></img>
                                            </Link>
                                        </div>
                                    </ul>
                                </nav>
                                {/* .site-navigation */}
                                <div className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center "></div>

                                <div
                                    className={`hamburger-menu d-lg-none ${
                                        showSideMenu ? "open" : ""
                                    }`}
                                    onClick={() =>
                                        setShowSideMenu(!showSideMenu)
                                    }
                                >
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                {/* .hamburger-menu */}
                            </div>
                            {/* .col */}
                        </div>
                        {/* .row */}
                    </div>
                    {/* .container */}
                </div>
                {/* .nav-bar */}
            </header>
            {/* .site-header */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(logout(props)),
    };
};

export default compose(
    firebaseConnect(),
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(NavBar);
