import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { plightRequest } from "../../../../redux/admin/plight/actions";
import { withFirestore } from "react-redux-firebase";
import { RiReplyAllLine, RiFolderAddLine } from "react-icons/ri";
const PlightAdd = ({ plight }) => {
    const [state, setState] = React.useState({
        title: "",
        description: "",
        address: "",
        contact: "",
        status: "Đang Đăng",
        uid: "RN4MOySY3ZNhbkoM8BBH9pHU3Dj1",
    });

    const inputRef = React.useRef();
    const [image, setImage] = React.useState(null);

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
        inputRef.current.value = "";
        plight(state, image);
        setState({
            title: "",
            description: "",
            address: "",
            contact: "",
            status: "Đang Đăng",
            uid: "RN4MOySY3ZNhbkoM8BBH9pHU3Dj1",
        });
        setImage(null);
        document.getElementById("form-plight").style.display = "none";
    };
    return (
        <div className="donations-wrapperffg">
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
                                id="title"
                                placeholder="Nhập tiêu đề hoàn cảnh"
                                value={state.title}
                                onChange={handleOnChange}
                            />
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
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Liên hệ số điện thoại</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                style={{ marginTop: "10px" }}
                                type="text"
                                className="form-control"
                                id="contact"
                                value={state.contact}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Ảnh vật phẩm</label>
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
                            <RiReplyAllLine />
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
