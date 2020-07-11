import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/authentication/actions";

const Login = ({ loginHandle }) => {
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
            <button onClick={() => loginHandle({ email, password })}>
                Đăng nhập
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandle: (data) => {
            dispatch(loginRequest(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
