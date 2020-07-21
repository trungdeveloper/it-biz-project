import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/authentication/actions";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

const Login = ({ login, authError }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <div className="row">
            <div className="row">
                <h1>ĐĂNG NHẬP</h1>
            </div>
            <div className="row">
                <label htmlFor="email" className="col">
                    Email
                </label>
                <div className="col">
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(val) => setEmail(val.target.value)}
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="row">
                <label htmlFor="password" className="col">
                    Mật Khẩu
                </label>
                <div className="col">
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(val) => setPassword(val.target.value)}
                        placeholder="Mật KhẩU"
                    />
                </div>
            </div>
            <button onClick={() => login({ email, password })}>
                Đăng nhập
            </button>
            {authError ? <p>{authError}</p> : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.error,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (data) => dispatch(loginRequest(data, props)),
    };
};

export default compose(
    firebaseConnect(),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
