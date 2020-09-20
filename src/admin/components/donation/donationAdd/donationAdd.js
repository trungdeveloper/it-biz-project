import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { donateRequest } from "../../../../redux/admin/donation/actions";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
import { FcCancel } from "react-icons/fc";
import { RiFolderAddLine } from "react-icons/ri";
const DonationAdd = ({ donate, categories }) => {
    const [state, setState] = React.useState({
        name: "",
        description: "",
        condition: "",
        category_id: "",
        date: "",
        status: "xác nhận",
        uid: "6D4lyxHfAhQW2694sQXHgVy0rNP2",
    });
    const [errorName, setErrorName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorCondition, setErrorCondition] = useState("");
    const [errorCategory_id, setErrorCategory_id] = useState("");
    const [errorDate, setErrorDate] = useState("");
    const [errorImage, setErrorImage] = useState("");
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
        setErrorName("");
        setErrorDescription("");
        setErrorCondition("");
        setErrorCategory_id("");
        setErrorDate("");
        setErrorImage("");
        inputRef.current.value = "";
        if (
            state.name !== null &&
            state.condition !== null &&
            state.description !== null &&
            state.category_id !== null &&
            state.date !== null &&
            image !== null
        ) {
            donate(state, image);
            setState({
                name: "",
                condition: "",
                description: "",
                category_id: "",
                date: "",
                status: "xác nhận",
                uid: "6D4lyxHfAhQW2694sQXHgVy0rNP2",
            });
            setImage(null);
            document.getElementById("form-Dona").style.display = "none";
        }
        if (state.name === "") {
            setErrorName("Nhập tên vật phẩm");
        }
        if (state.description === "") {
            setErrorDescription("Nhập chi tiết vật phẩm");
        }
        if (state.condition === "") {
            setErrorCondition("Chọn trạng thái vật phẩm");
        }
        if (state.category_id === "") {
            setErrorCategory_id("Chọn thể loại vật phẩm");
        }
        if (state.date === "") {
            setErrorDate("Nhập ngày tặng vật phẩm");
        }
        if (image === null) {
            setErrorImage("chọn ảnh vật phẩm");
        }
    };
    return (
        <div className="donations-wrapperffg" style={{ borderStyle: "groove" }}>
            <div className="donations-containerggf">
                <form
                    className="donations-form"
                    id="form-Dona"
                    style={{
                        display: "none",
                        marginBottom: "10PX",
                        marginTop: "0rem",
                    }}
                >
                    <h1>Tài trợ</h1>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Tên vật phẩm</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Nhập tên vật phẩm"
                                value={state.name}
                                onChange={handleOnChange}
                            />
                            <p style={{ color: "red" }}>{errorName}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Chi tiết vật phẩm</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <textarea
                                type="text"
                                className="form-control"
                                id="description"
                                placeholder="Nhập chi tiết vật phẩm"
                                value={state.description}
                                onChange={handleOnChange}
                            />
                            <p style={{ color: "red" }}>{errorDescription}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Ngày Tài trợ vật phẩm</label>
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
                            <label htmlFor="">Trạng thái</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <select
                                value={state.condition}
                                id="condition"
                                onChange={handleOnChange}
                                style={{
                                    width: "640px",
                                    height: "36px",
                                    border: "1px solid #ced4da",
                                }}
                            >
                                {" "}
                                <option value="Còn mới">Trạng thái</option>
                                <option value="Còn mới">Còn mới</option>
                                <option value="Đã qua sử dụng">
                                    Đã qua sử dụng
                                </option>
                                <option value="Hư hỏng nhẹ">Hư hỏng nhẹ</option>
                            </select>
                            <p style={{ color: "red" }}>{errorCondition}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Thể Loại</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <select
                                value={state.category_id}
                                id="category_id"
                                onChange={handleOnChange}
                                style={{
                                    width: "640px",
                                    height: "36px",
                                    border: "1px solid #ced4da",
                                }}
                            >
                                <option>Thể Loại</option>
                                {categories &&
                                    categories.map((cate) => (
                                        <option key={cate.id} value={cate.id}>
                                            {cate.name}
                                        </option>
                                    ))}
                            </select>
                            <p style={{ color: "red" }}>{errorCategory_id}</p>
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
                                    "form-Dona"
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
        progress: state.donation.progress,
        categories: state.firestore.ordered.categories,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        donate: (donation, image) =>
            dispatch(donateRequest(donation, image, props)),
    };
};

export default compose(
    withFirestore,
    firestoreConnect([{ collection: "categories" }]),
    connect(mapStateToProps, mapDispatchToProps)
)(DonationAdd);
