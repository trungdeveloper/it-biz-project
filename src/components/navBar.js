import { Link } from "react-router-dom";
import React from "react";
import { logout } from "../redux/authentication/actions";
import { compose } from "redux";
import { firebaseConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";

const NavBar = ({ auth, logout }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/activity">Activity</Link>
                </li>
                <li>
                    <Link to="/donation">Users</Link>
                </li>
                <li>
                    <Link to="/plight">Plight</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                {!auth.uid ? (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/" onClick={logout}>
                            Log out
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
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
