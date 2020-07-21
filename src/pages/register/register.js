import React from "react";
import { register } from "../../redux/authentication/actions";
import { compose } from "redux";
import { firebaseConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router";
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
    // return
    // auth.uid ? (
    //     <Redirect to={"/"} />
    // ) :
    return (
        <div className="row">
            <div className="row">
                <h1>ĐĂNG KÝ</h1>
            </div>
            <div className="row">
                <div className="col-3">Họ và Tên</div>
                <div className="col-9">
                    <input
                        type="text"
                        value={name}
                        onChange={(val) => setName(val.target.value)}
                        placeholder="Họ và Tên"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">Số điện Thoại</div>
                <div className="col-9">
                    <input
                        type="text"
                        value={phone}
                        onChange={(val) => setPhone(val.target.value)}
                        placeholder="Số điện Thoại"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">Email</div>
                <div className="col-9">
                    <input
                        type="email"
                        value={email}
                        onChange={(val) => setEmail(val.target.value)}
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">Địa chỉ</div>
                <div className="col-9">
                    <input
                        type="text"
                        value={address}
                        onChange={(val) => setAddress(val.target.value)}
                        placeholder="Địa chỉ"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">Mật khẩu</div>
                <div className="col-9">
                    <input
                        type="password"
                        value={password}
                        onChange={(val) => setPassword(val.target.value)}
                        placeholder="Mật khẩu"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-3">Xác Nhận Mật khẩu</div>
                <div className="col-9">
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(val) => setConfirmPassword(val.target.value)}
                        placeholder="Mật khẩu"
                    />
                </div>
            </div>
            <div className="row">
                <button onClick={handleSubmit}>ĐĂNG KÍ</button>
                <button>THOÁT</button>
            </div>
            {error && <p>{error}</p>}
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
