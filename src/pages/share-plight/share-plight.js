import React from "react";
import { useState } from "react";
import "./share-plight.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { CustomModal } from "../../util/CustomModal";
import { addPlight } from "../../redux/plight/actions";
import { isEmpty } from "validator";

const SharePlight = ({ uid, addPlight, progress }) => {
    const [state, setState] = useState({
        name: "",
        address: "",
        need: "",
        description: "",
    });
    const [showModal, setShowModal] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const inputRef = React.useRef();
    const [validationMsg, setValidationMsg] = React.useState("");

    const validateAll = () => {
        const msg = {};

        if (isEmpty(state.name)) {
            msg.name = "Vui lòng nhập tên người nhận";
        }
        if (isEmpty(state.address)) {
            msg.address = "Vui lòng nhập địa chỉ";
        }
        if (isEmpty(state.need)) {
            msg.need = "Vui lòng nhập vật phẩm";
        }
        if (isEmpty(state.description)) {
            msg.description = "Vui lòng nhập vật phẩm";
        }
        setValidationMsg(msg);
        return Object.keys(msg).length <= 0;
    };
    const onHandleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const isValid = validateAll();
        if (!isValid) return;
        let date = new Date();
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = date.getFullYear();
        date = dd + "/" + mm + "/" + yyyy;
        addPlight({ ...state, date, uid, status: "chờ xác nhận" }, image);
        setShowModal(true);
        setState({
            name: "",
            address: "",
            need: "",
            description: "",
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
                            <p className="text-red-400 text-xs italic">
                                {validationMsg.name}
                            </p>
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
                            <p className="text-red-400 text-xs italic">
                                {validationMsg.address}
                            </p>
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
                                id="need"
                                value={state.need}
                                onChange={onHandleChange}
                            />
                            <p className="text-red-400 text-xs italic">
                                {validationMsg.need}
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Hình ảnh</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                ref={inputRef}
                                type="file"
                                className="form-control"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Mô tả hoàn cảnh</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <textarea
                                rows="6"
                                cols="30"
                                className="form-control"
                                type="text"
                                id="description"
                                value={state.description}
                                onChange={onHandleChange}
                            />
                            <p className="text-red-400 text-xs italic">
                                {validationMsg.description}
                            </p>
                        </div>
                    </div>

                    <div className="donateneed-button">
                        <div className="donateneed-btn-background" />
                        <button type="submit">Gửi</button>
                    </div>
                    <CustomModal
                        show={showModal}
                        progress={progress}
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
        progress: state.plight.progress,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addPlight: (plight, image) => dispatch(addPlight(plight, image, props)),
    };
};

export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(SharePlight);
