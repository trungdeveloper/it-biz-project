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
        // <div className="row">
        //     <div className="row">
        //         <h1>ĐĂNG KÝ</h1>
        //     </div>
        //     <div className="row">
        //         <div className="col-3">Họ và Tên</div>
        //         <div className="col-9">
        //             <input
        //                 type="text"
        //                 value={name}
        //                 onChange={(val) => setName(val.target.value)}
        //                 placeholder="Họ và Tên"
        //             />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-3">Số điện Thoại</div>
        //         <div className="col-9">
        //             <input
        //                 type="text"
        //                 value={phone}
        //                 onChange={(val) => setPhone(val.target.value)}
        //                 placeholder="Số điện Thoại"
        //             />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-3">Email</div>
        //         <div className="col-9">
        //             <input
        //                 type="email"
        //                 value={email}
        //                 onChange={(val) => setEmail(val.target.value)}
        //                 placeholder="Email"
        //             />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-3">Địa chỉ</div>
        //         <div className="col-9">
        //             <input
        //                 type="text"
        //                 value={address}
        //                 onChange={(val) => setAddress(val.target.value)}
        //                 placeholder="Địa chỉ"
        //             />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-3">Mật khẩu</div>
        //         <div className="col-9">
        //             <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(val) => setPassword(val.target.value)}
        //                 placeholder="Mật khẩu"
        //             />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-3">Xác Nhận Mật khẩu</div>
        //         <div className="col-9">
        //             <input
        //                 type="password"
        //                 value={confirmPassword}
        //                 onChange={(val) => setConfirmPassword(val.target.value)}
        //                 placeholder="Mật khẩu"
        //             />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <button onClick={handleSubmit}>ĐĂNG KÍ</button>
        //         <button>THOÁT</button>
        //     </div>
        //     {error && <p>{error}</p>}
        // </div>

        <div className="container">
            <div className="row main">
                <div className="panel-heading">
                    <div className="panel-title text-center">
                        <h1 className="title"></h1>
                        <hr />
                    </div>
                </div>
                <div className="main-login main-center">
                    <form className="form-horizontal" method="post" action="#">
                        <div className="d-flex justify-content-center">
                            <div className="brand_icon_container">
                                <img
                                    src={IMG}
                                    className="brand_logo"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="name"
                                className="cols-sm-2 control-label"
                            >
                                Họ và Tên
                            </label>
                            <div className="cols-sm-10">
                                <div className="input-group">
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
                            <label
                                htmlFor="email"
                                className="cols-sm-2 control-label"
                            >
                                Số điện Thoại
                            </label>
                            <div className="cols-sm-10">
                                <div className="input-group">
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
                            <label
                                htmlFor="username"
                                className="cols-sm-2 control-label"
                            >
                                Email
                            </label>
                            <div className="cols-sm-10">
                                <div className="input-group">
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
                            <label
                                htmlFor="username"
                                className="cols-sm-2 control-label"
                            >
                                Địa chỉ
                            </label>
                            <div className="cols-sm-10">
                                <div className="input-group">
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
                            <label
                                htmlFor="password"
                                className="cols-sm-2 control-label"
                            >
                                Mật khẩu
                            </label>
                            <div className="cols-sm-10">
                                <div className="input-group">
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
                            <label
                                htmlFor="confirm"
                                className="cols-sm-2 control-label"
                            >
                                Xác nhận mật khẩu
                            </label>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirm"
                                        id="confirm"
                                        value={confirmPassword}
                                        onChange={(val) =>
                                            setConfirmPassword(val.target.value)
                                        }
                                        placeholder="Xác nhận mật khẩu của bạn"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group ">
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
