import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { donateRequest } from "../../../../redux/admin/donation/actions";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
import { RiReplyAllLine, RiFolderAddLine } from "react-icons/ri";
const DonationAdd = ({ donate, categories }) => {
    const [state, setState] = React.useState({
        name: "",
        description: "",
        status: "Còn mới",
        category: "Thời Trang",
        date: "",
        accept: true,
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
        donate(state, image);
        setState({
            name: "",
            status: "Còn mới",
            description: "",
            category: "Thời Trang",
            date: "",
        });
        setImage(null);
        document.getElementById("form-Dona").style.display = "none";
    };
    return (
        <div className="donations-wrapper">
            <div className="donations-container">
                <form
                    className="donations-form"
                    id="form-Dona"
                    style={{ display: "none", marginBottom: "10PX" }}
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
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Chi tiết vật phẩm</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                placeholder="Nhập chi tiết vật phẩm"
                                value={state.description}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Ngày Tài trợ vật phẩm</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                value={state.date}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Trạng thái</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <select
                                value={state.status}
                                id="status"
                                onChange={handleOnChange}
                                style={{
                                    width: "615px",
                                    height: "36px",
                                    border: "1px solid #ced4da",
                                }}
                            >
                                <option value="Còn mới">Còn mới</option>
                                <option value="Đã qua sử dụng">
                                    Đã qua sử dụng
                                </option>
                                <option value="Hư hỏng nhẹ">Hư hỏng nhẹ</option>
                            </select>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Thể Loại</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <select
                                value={state.category}
                                id="category"
                                onChange={handleOnChange}
                                style={{
                                    width: "615px",
                                    height: "36px",
                                    border: "1px solid #ced4da",
                                }}
                            >
                                {categories &&
                                    categories.map((cate) => (
                                        <option key={cate.id} value={cate.name}>
                                            {cate.name}
                                        </option>
                                    ))}
                            </select>
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
                        <div className="donations-btn-background" />

                        <button
                            className="btn btn-success"
                            style={{ marginLeft: "40px" }}
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
                            style={{ marginLeft: "10px" }}
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
