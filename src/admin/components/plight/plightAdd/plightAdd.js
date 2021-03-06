import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { plightRequest } from "../../../../redux/admin/plight/actions";
import { withFirestore } from "react-redux-firebase";
import { RiFolderAddLine } from "react-icons/ri";
import { FcCancel } from "react-icons/fc";

const PlightAdd = ({ plight }) => {
    const [state, setState] = React.useState({
        need: "",
        description: "",
        address: "",
        status: "xác nhận",
        date: "",
        uid: "GxIEZwxv0ab7cNADjnojaIvrwKW2",
    });

    const inputRef = React.useRef();
    const [image, setImage] = React.useState(null);
    const [errorNeed, setErrorNeed] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorAddress, setErrorAddress] = useState("");
    const [errorImage, setErrorImage] = useState("");
    const [errorDate, setErrorDate] = useState("");
    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setErrorNeed("");
        setErrorDescription("");
        setErrorAddress("");
        setErrorImage("");
        setErrorDate("");
        const baseDatetime = new Date(state.date);
        const day = baseDatetime.getDate();
        const month = baseDatetime.getMonth() + 1;
        const year = baseDatetime.getFullYear();
        state.date = `${day}/${month}/${year}`;
        inputRef.current.value = "";
        if (
            state.need !== null &&
            state.description !== null &&
            state.address !== null &&
            image !== null
        ) {
            plight(state, image);
            setState({
                need: "",
                description: "",
                address: "",
                contact: "",
                status: "xác nhận",
                date: "",
                uid: "GxIEZwxv0ab7cNADjnojaIvrwKW2",
            });
            setImage(null);
            document.getElementById("form-plight").style.display = "none";
        }
        if (state.need === "") {
            setErrorNeed("Nhập Vật phẩm hoàn cảnh cần");
        }
        if (state.description === "") {
            setErrorDescription("Nhập chi tiết chi tiết hoàn cảnh");
        }
        if (state.address === "") {
            setErrorAddress("Nhập địa chỉ");
        }
        if (image === null) {
            setErrorImage("Nhập ảnh hoàn cảnh");
        }
        if (state.date === "") {
            setErrorDate("Nhập ảnh ngày xin tài trợ");
        }
    };
    return (
        <div className="donations-wrapperffg" style={{ borderStyle: "groove" }}>
            <div className="donations-containerggf">
                <form
                    className="donations-form"
                    id="form-plight"
                    style={{
                        display: "none",
                        marginBottom: "10PX",
                        marginTop: "0rem",
                    }}
                >
                    <h1>Hoàn cảnh khó khăn</h1>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Tiêu đề hoàn cảnh</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="text"
                                className="form-control"
                                id="need"
                                placeholder="Nhập tiêu đề hoàn cảnh"
                                value={state.need}
                                onChange={handleOnChange}
                            />
                            <p style={{ color: "red" }}>{errorNeed}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Chi tiết hoàn cảnh</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <textarea
                                type="text"
                                className="form-control"
                                id="description"
                                placeholder="Nhập Chi tiết hoàn cảnh"
                                value={state.description}
                                onChange={handleOnChange}
                            />
                            <p style={{ color: "red" }}>{errorDescription}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Ngày hoàn cảnh cần</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                }}
                                type="date"
                                className="form-control"
                                dateFormat="DD/MM/YYYY"
                                id="date"
                                value={state.date}
                                onChange={handleOnChange}
                                placeholder="Ngày Tài trợ vật phẩm"
                            />
                            <p style={{ color: "red" }}>{errorDate}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Địa chỉ Hoàn cảnh</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                style={{ marginTop: "10px" }}
                                type="text"
                                className="form-control"
                                id="address"
                                placeholder="Nhập Địa chỉ Hoàn cảnh"
                                value={state.address}
                                onChange={handleOnChange}
                            />
                            <p style={{ color: "red" }}>{errorAddress}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Ảnh Hoàn cảnh</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                ref={inputRef}
                                type="file"
                                className="form-control"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <p style={{ color: "red" }}>{errorImage}</p>
                        </div>
                    </div>
                    <div className="donations-button">
                        <div className="donations-btn-background1" />

                        <button
                            className="btn btn-success"
                            style={{ marginLeft: "40px", width: "50px" }}
                            onClick={handleSubmitForm}
                        >
                            <RiFolderAddLine />
                        </button>
                        <button
                            onClick={() =>
                                (document.getElementById(
                                    "form-plight"
                                ).style.display = "none")
                            }
                            className="btn btn-danger"
                            style={{
                                marginLeft: "10px",
                                width: "50px",
                                backgroundColor: "#dc3545",
                            }}
                        >
                            <FcCancel />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        progress: state.plight.progress,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        plight: (plight, image) =>
            dispatch(plightRequest(plight, image, props)),
    };
};

export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(PlightAdd);
