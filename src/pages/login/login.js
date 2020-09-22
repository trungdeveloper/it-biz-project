import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { connect } from "react-redux";
import { loginRequest } from "../../redux/authentication/actions";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { Redirect } from "react-router";
import IMG from "../../assets/image/user.svg";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";


const Login = ({ auth, login, authError }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [validationMsg, setValidationMsg] = React.useState("");

    const validateAll = () =>{
        const msg = {}
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(isEmpty(email)){
            msg.email = "Vui lòng nhập email của bạn"
        }else if(!isEmail(email)){
            msg.email = "Email không hợp lệ"
        }else if(reg.test(email) === false){
            msg.email = "Email không hợp lệ"
        }
        if(isEmpty(password)){
            msg.password = "Vui lòng nhập mật khẩu của bạn"
        }
        setValidationMsg(msg)
        if(Object.keys(msg).length > 0) return false
        return true
    }

    const handleSubmit = () =>{
        const isValid = validateAll()
        if(!isValid) return
        login({email, password});
    }
    return auth.emailVerified ? (
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
                        <form>
                            <div className="alert">
                                {authError ? <p>{authError}</p> : null}
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
                                            className="form-control"
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(val) =>
                                                setEmail(val.target.value)
                                            }
                                            placeholder="Email"
                                        />
                                    </div>
                                    <p className="text-red-400 text-xs italic">{validationMsg.email}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="cols-sm-10">
                                    <div className="input-group">
                                        <span
                                            className="input-group-addon"
                                            id="input-group-addon"
                                        >
                                            <i className="fa fa-lock fa-lg"></i>
                                        </span>
                                        <input
                                            className="form-control"
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(val) =>
                                                setPassword(val.target.value)
                                            }
                                            placeholder="Mật KhẩU"
                                        />
                                    </div>
                                    <p className="text-red-400 text-xs italic">{validationMsg.password}</p> 
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button
                                    type="button"
                                    name="button"
                                    className="btn login_btn"
                                    onClick={handleSubmit}
                                >
                                    Đăng Nhập
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Chưa có tài khoản?{" "}
                            <Link to="/register" className="ml-2">
                                Đăng ký
                            </Link>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <Link to="#">Quên mật khẩu?</Link>
                        </div>
                    </div>
                </div>
            </div>
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
