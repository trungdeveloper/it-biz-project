import React, { useEffect } from "react";
import "./donate.css";
import "../../assets/style.css";
import { CustomModal } from "../../util/CustomModal";
import { connect } from "react-redux";
import { compose } from "redux";
import { donateRequest } from "../../redux/donation/actions";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { Redirect } from "react-router";

const Donate = ({ donate, progress, categories, uid }) => {
    const [state, setState] = React.useState({
        name: "",
        category_id: "",
        description: "",
        condition: "new",
    });
    const [showModal, setShowModal] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const inputRef = React.useRef();

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    useEffect(() => {
        categories &&
            setState((prevState) => ({
                ...prevState,
                category_id: categories?.[0].id,
            }));
    }, [categories]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        let date = new Date();
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = date.getFullYear();
        date = dd + "/" + mm + "/" + yyyy;
        setShowModal(true);
        inputRef.current.value = "";
        donate({ ...state, uid, status: "chờ xác nhận", date }, image);
        setState({
            name: "",
            status: "new",
            description: "",
            category: categories?.[0].id,
        });
        setImage(null);
    };
    return !uid ? (
        <Redirect to="/login" />
    ) : (
        <div className="donations-wrapper">
            <div className="donations-container">
                <header className="donations-title">Tài trợ</header>
                <form className="donations-form">
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
                            <label htmlFor="">Tình trạng sữ dụng</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <select
                                className="form-control"
                                value={state.condition}
                                id="condition"
                                onChange={handleOnChange}
                            >
                                <option value="new">Còn mới</option>
                                <option value="old">Đã qua sử dụng</option>
                                <option value="mini-broken">Hư hỏng nhẹ</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Danh mục</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <select
                                className="form-control"
                                value={state.category_id}
                                id="category_id"
                                onChange={handleOnChange}
                            >
                                {categories &&
                                    categories.map((cate) => (
                                        <option key={cate.id} value={cate.id}>
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
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Thông tin thêm</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <textarea
                                type="text"
                                className="form-control"
                                id="description"
                                placeholder="Thông tin thêm"
                                rows={6}
                                value={state.description}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="donations-button">
                        <div className="donations-btn-background" />
                        <button onClick={handleSubmitForm}>Gửi</button>
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
        progress: state.donation.progress,
        categories: state.firestore.ordered.categories,
        uid: state.firebase.auth.uid,
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
    firestoreConnect(["categories"]),
    connect(mapStateToProps, mapDispatchToProps)
)(Donate);
