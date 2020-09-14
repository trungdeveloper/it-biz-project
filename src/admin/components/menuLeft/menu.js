import React, { useState } from "react";
import "../../cssAdmin/style.css";
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import $ from "jquery";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
const Menu = (plight, donation) => {
    const plights = plight.plight;
    const donations = donation.donation;
    let demplight = 0;
    let demdonation = 0;
    donations &&
        donations.map((d) =>
            d.status === "chờ xác nhận"
                ? (demdonation = demdonation + 1)
                : demdonation
        );
    plights &&
        plights.map((p) =>
            p.status === "chờ xác nhận"
                ? (demplight = demplight + 1)
                : demplight
        );

    console.log("plight", plight.plight);
    return (
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="d-xl-none d-lg-none" to="/category">
                        Menu
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">
                                {" "}
                                <BsFillHouseDoorFill /> Menu
                            </li>
                            <Link
                                className="nav-link nav-link-1 "
                                to="/category"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-1"
                                aria-controls="submenu-1"
                                id="nav-link-1"
                                onClick={() => {
                                    $(".nav-link-1").addClass("active");
                                }}
                            >
                                Thể Loại
                            </Link>
                            <Link
                                className="nav-link nav-link-2"
                                to="/donationAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-2"
                                aria-controls="submenu-2"
                                onClick={() => {
                                    $(".nav-link-2").addClass("active");
                                }}
                            >
                                Tài Trợ
                            </Link>
                            <Link
                                className="nav-link nav-link-3"
                                to="/eventAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-3"
                                aria-controls="submenu-3"
                                onClick={() => {
                                    $(".nav-link-3").addClass("active");
                                }}
                            >
                                Sự Kiện
                            </Link>
                            <Link
                                className="nav-link nav-link-7"
                                to="/donatedAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-3"
                                aria-controls="submenu-3"
                                onClick={() => {
                                    $(".nav-link-7").addClass("active");
                                }}
                            >
                                Đã tài trợ
                            </Link>
                            <Link
                                className="nav-link nav-link-4"
                                to="/plightAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-4"
                                aria-controls="submenu-4"
                                onClick={() => {
                                    $(".nav-link-4").addClass("active");
                                }}
                            >
                                Hoàn cảnh
                            </Link>
                            <Link
                                className="nav-link nav-link-5"
                                to="/donationRequestAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-5"
                                aria-controls="submenu-5"
                                onClick={() => {
                                    $(".nav-link-5").addClass("active");
                                }}
                            >
                                Yêu cầu Tài trợ (
                                <p
                                    style={
                                        demdonation != 0
                                            ? { color: "red" }
                                            : null
                                    }
                                >
                                    {demdonation}
                                </p>
                                )
                            </Link>
                            <Link
                                className="nav-link nav-link-6"
                                to="/plightRequestAdmin"
                                data-toggle="collapse"
                                aria-expanded="false"
                                data-target="#submenu-5"
                                aria-controls="submenu-5"
                                onClick={() => {
                                    $(".nav-link-6").addClass("active");
                                }}
                            >
                                Yêu cầu hoàn cảnh(
                                <p
                                    style={
                                        demplight != 0 ? { color: "red" } : null
                                    }
                                >
                                    {demplight}
                                </p>
                                )
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        plight: state.firestore.ordered.plight,
        donation: state.firestore.ordered.donation,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "plight" }]),
    firestoreConnect([{ collection: "donation" }])
)(Menu);
