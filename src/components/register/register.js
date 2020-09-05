import React from "react";
import { Link } from "react-router-dom";
import { register } from "../../redux/authentication/actions";
import { compose } from "redux";
import { firebaseConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import "./register.css";
import IMG from "../../assets/image/user.svg";

const Register = (props) => {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const { auth, error, register } = props;

    const handleSubmit = () => {
        password === confirmPassword
            ? register({ name, email, phone, address, password })
            : alert("mat khau sai");
    };

    return auth.uid ? (
        <Redirect to={"/"} />
    ) : (
        <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src={IMG} className="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form className="form-horizontal">
                            <div className="alert">
                                {error && <p>{error}</p>}
                            </div>
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i
                                                className="fa fa-user fa"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            onChange={(val) =>
                                                setName(val.target.value)
                                            }
                                            placeholder="Họ và Tên"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i
                                                className="fa fa-phone fa"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <input
                                            type="text"
                                            value={phone}
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            onChange={(val) =>
                                                setPhone(val.target.value)
                                            }
                                            placeholder="Số điện Thoại"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i
                                                className="fa fa-envelope fa"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(val) =>
                                                setEmail(val.target.value)
                                            }
                                            placeholder="Nhập email của bạn"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-map"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            id="address"
                                            value={address}
                                            onChange={(val) =>
                                                setAddress(val.target.value)
                                            }
                                            placeholder="Nhập địa chỉ của bạn"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-lock fa-lg"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            value={password}
                                            onChange={(val) =>
                                                setPassword(val.target.value)
                                            }
                                            placeholder="Nhập mật khẩu của bạn"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-lock fa-lg"></i>
                                        </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirm"
                                            id="confirm"
                                            value={confirmPassword}
                                            onChange={(val) =>
                                                setConfirmPassword(
                                                    val.target.value
                                                )
                                            }
                                            placeholder="Xác nhận mật khẩu của bạn"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group register_container">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block login-button"
                                    onClick={handleSubmit}
                                >
                                    ĐĂNG KÝ
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block login-button"
                                >
                                    THOÁT
                                </button>
                            </div>
                            <div className="login-register">
                                <Link to="/login">Đăng nhập</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        register: (newUser) => dispatch(register(newUser, props)),
    };
};

export default compose(
    firebaseConnect(),
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(Register);
