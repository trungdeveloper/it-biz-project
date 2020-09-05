import React from "react";
import { useState } from "react";
import "./share-plight.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { ProgressModal } from "../../util/ProgressModal";
import { addPlight } from "../../redux/plight/actions";

const SharePlight = ({ uid, addPlight }) => {
    const [state, setState] = useState({
        name: "",
        address: "",
        need: "",
        message: "",
    });
    const [showModal, setShowModal] = React.useState(false);

    const onHandleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let date = new Date();
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = date.getFullYear();
        date = dd + "/" + mm + "/" + yyyy;
        addPlight({ ...state, date, uid, accept: false });
        setShowModal(true);
        setState({
            name: "",
            address: "",
            need: "",
            message: "",
        });
    };

    return !uid ? (
        <Redirect to="login" />
    ) : (
        <div className="donateneed-wrapper">
            <div className="donateneed-container">
                <header className="donateneed-title">Chia sẽ hoàn cảnh</header>
                <form className="donateneed-form" onSubmit={handleSubmitForm}>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Tên người nhận</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={state.name}
                                onChange={onHandleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Địa chỉ</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={state.address}
                                onChange={onHandleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Vật phẩm cần</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="text"
                                className="form-control"
                                id="product"
                                value={state.need}
                                onChange={onHandleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Mô tả hoàn cảnh</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <textarea
                                rows="3"
                                cols="30"
                                className="form-control"
                                type="text"
                                id="message"
                                value={state.message}
                                onChange={onHandleChange}
                            />
                        </div>
                    </div>

                    <div className="donateneed-button">
                        <div className="donateneed-btn-background"></div>
                        <button type="submit">Gửi</button>
                    </div>
                    <ProgressModal
                        show={showModal}
                        handleClose={setShowModal}
                    />
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addPlight: (plight) => dispatch(addPlight(plight, props)),
    };
};

export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(SharePlight);
