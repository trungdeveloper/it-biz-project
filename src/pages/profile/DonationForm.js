import React from "react";
import "./DonationForm.css";
import "../../assets/style.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { donateRequest } from "../../redux/donation/actions";
import { withFirestore } from "react-redux-firebase";

const DonationForm = ({ donate, progress }) => {
    const [state, setState] = React.useState({
        name: "",
        description: "",
        status: "new",
    });
    console.log("Upload is " + progress + "% done");
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
            status: "new",
            description: "",
        });
        setImage(null);
    };
    return (
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
                            <label htmlFor="">Trạng thái</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <select
                                value={state.status}
                                id="status"
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
                        <button onClick={handleSubmitForm}>Gửi</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        progress: state.donation.progress,
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
    connect(mapStateToProps, mapDispatchToProps)
)(DonationForm);
