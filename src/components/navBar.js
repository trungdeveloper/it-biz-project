import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../redux/authentication/actions";
import { compose } from "redux";
import { firebaseConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import "./navBar.css";
const img = require("../assets/image/logo-menu.svg");
// const icon_search = require("../assets/image/Vector.svg");
// const icon_user = require("../assets/image/user.svg");

const NavBar = ({ auth, logout }) => {
    const [activeTab, setActiveTab] = React.useState("activities");
    const [sticky, setSticky] = React.useState("");
    const [showSideMenu, setShowSideMenu] = React.useState(false);
    const [showDropdownMenu, setShowDropdownMenu] = React.useState(false);

    const dropdownRef = React.useRef(null);

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

        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowDropdownMenu(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const renderTopHeading = () => {
        return (
            <div className="top-header-bar">
                <div className="container">
                    <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
                        <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                            <div className="header-bar-email">
                                MAIL: <Link to="#">contact@ourcharity.com</Link>
                            </div>
                            <div className="header-bar-text">
                                <p>
                                    PHONE:{" "}
                                    <span>+24 3772 120 091 / +56452 4567</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                            <div className="donate-btn">
                                <Link to="#">Tài Trợ Ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderLogo = () => {
        return (
            <div className="site-branding d-flex align-items-center">
                <Link className="d-block" to="/" rel="home">
                    <img className="d-block" src={img} alt="logo" />
                </Link>
            </div>
        );
    };

    const renderDropdown = () => {
        return (
            <div ref={dropdownRef} className="icon_account_user">
                <button
                    className={`dropbtn`}
                    onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                >
                    <i className="fa fa-user"></i>
                </button>
                <div
                    id="userInforDropdown"
                    className={`dropdown-content ${
                        showDropdownMenu ? "show" : ""
                    }`}
                >
                    {!auth.uid ? (
                        <>
                            <Link className="userLogin" to="/login">
                                Đăng nhập
                            </Link>
                            <Link className="userRegister" to="/register">
                                Đăng ký
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link className="userProfile" to="/profile">
                                Profile
                            </Link>{" "}
                            <Link
                                className="userLogout"
                                to="/"
                                onClick={logout}
                            >
                                Đăng xuất
                            </Link>
                        </>
                    )}
                </div>
            </div>
        );
    };

    const renderHamburgerMenu = () => {
        return (
            <div
                className={`hamburger-menu d-lg-none ${
                    showSideMenu ? "open" : ""
                }`}
                onClick={() => setShowSideMenu(!showSideMenu)}
            >
                <span />
                <span />
                <span />
                <span />
            </div>
        );
    };

    const renderSearchForm = () => {
        return (
            <div className="div-search">
                <input
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    type="text"
                    name="search"
                    placeholder="Tìm kiếm..."
                />
                <button>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        );
    };

    const renderNavBarMenu = () => {
        return (
            <nav
                className={`site-navigation d-flex justify-content-end align-items-center ${
                    showSideMenu ? "show" : ""
                }`}
            >
                <ul className=" flex-column flex-lg-row justify-content-lg-end align-content-center">
                    <li
                        id="home"
                        className={`tag ${
                            activeTab === "home" ? "active" : ""
                        }`}
                    >
                        <Link onClick={() => setActiveTab("home")} to="/">
                            TRANG CHỦ
                        </Link>
                    </li>
                    <li
                        id="activities"
                        className={`tag ${
                            activeTab === "activities" ? "active" : ""
                        }`}
                    >
                        <Link
                            onClick={() => setActiveTab("activities")}
                            to="/Activity"
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
                        id="donation"
                        className={`tag ${
                            activeTab === "donation" ? "active" : ""
                        }`}
                    >
                        <Link
                            onClick={() => setActiveTab("donation")}
                            to="/donation"
                        >
                            TÀI TRỢ
                        </Link>
                    </li>
                    {renderSearchForm()}
                    {renderDropdown()}
                </ul>
            </nav>
        );
    };

    return (
        <header className="site-header">
            {renderTopHeading()}
            <div className={`nav-bar ${sticky}`} id="nav-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                            {renderLogo()}
                            {renderNavBarMenu()}
                            {renderHamburgerMenu()}
                        </div>
                    </div>
                </div>
            </div>
        </header>
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
