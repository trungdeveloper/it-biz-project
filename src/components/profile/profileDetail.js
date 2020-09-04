import React from "react";
import "./profileDetail.css";
import IMG from "../../assets/image/user.png";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { ProgressModal } from "../../util/ProgressModal";
const ProfileDetail = ({ profile, user, firestore }) => {
    const [state, setState] = React.useState({
        username: "",
        address: "",
        phone: "",
    });

    const [email, setEmail] = React.useState("");
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        profile &&
            setState({
                username: profile.username,
                address: profile.address,
                phone: profile.phone,
            });
        user && setEmail(user.email);
    }, [profile, user]);

    const handlerOnChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        firestore
            .collection("users")
            .doc(user.uid)
            .set(state)
            .then(() => setShowModal(true));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="user_profile">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="title">
                            <h5>Thông tin của tôi</h5>
                        </div>
                        <form>
                            <div className="image-profile">
                                <div className="image-radius">
                                    <img src={IMG} alt="" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label>Họ và tên</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        id="username"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập họ tên"
                                        value={state.username}
                                        onChange={handlerOnChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label>Địa chỉ</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        id="address"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập địa chỉ"
                                        value={state.address}
                                        onChange={handlerOnChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label>Số điện thoại</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        id="phone"
                                        type="text"
                                        className="form-control"
                                        placeholder="Nhập số điện thoại"
                                        value={state.phone}
                                        onChange={handlerOnChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <label>Email</label>
                                </div>
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
                                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <button
                                        type="submit"
                                        className="profile-btn-update"
                                        onClick={handleSubmit}
                                    >
                                        Cập nhật
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ProgressModal
                show={showModal}
                handleClose={setShowModal}
                text="Cập nhật thông tin thành công."
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    const user = state.firebase.auth;
    return {
        profile: state.firestore.data.users?.[user.uid],
        user,
    };
};

export default compose(
    firestoreConnect(["users"]),
    connect(mapStateToProps)
)(ProfileDetail);
