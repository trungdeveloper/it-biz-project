import React from "react";
import "../../cssAdmin/style.css";
import { logout } from "./../../../redux/authentication/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
const img = require("../../../assets/image/logo-menu.svg");

const Header = ({ auth, logout }) => {
    return (
        <div className="dashboard-header">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <img className="d-block" src={img} alt="logo" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                >
                    <Link
                        className="btn btn-success"
                        style={{
                            marginLeft: "84%",
                            backgroundColor: "#006600",
                            color: "white",
                        }}
                        to="/"
                        onClick={logout}
                    >
                        ĐĂNG XUẤT
                    </Link>
                </div>
            </nav>
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
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
