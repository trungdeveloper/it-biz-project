import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { RiFolderAddLine } from "react-icons/ri";
import { eventRequest } from "../../../../redux/admin/event/actions";
import { withFirestore } from "react-redux-firebase";
import { FcCancel } from "react-icons/fc";
const EventAdd = ({ event }) => {
    const [state, setState] = React.useState({
        title: "",
        content: "",
        date: "",
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
        event(state, image);
        setState({
            title: "",
            content: "",
            date: "",
        });
        setImage(null);
        document.getElementById("form-event").style.display = "none";
    };
    return (
        <div className="donations-wrapperjhj" style={{ borderStyle: "groove" }}>
            <div className="donations-containerjjh">
                <form
                    className="donations-form"
                    id="form-event"
                    style={{ display: "none", marginBottom: "10PX" }}
                >
                    <h1>Sự kiện</h1>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Tiêu đề sự kiện</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Tiêu đề sự kiện"
                                value={state.title}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div
                        className="form-group"
                        style={{ marginBottom: "10px" }}
                    >
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Nôi Dung sự kiện</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <textarea
                                style={{ marginBottom: "20px" }}
                                rows="10"
                                type="text"
                                className="form-control"
                                id="content"
                                placeholder="Nôi Dung sự kiện"
                                value={state.content}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div
                        className="form-group"
                        style={{ marginBottom: "10px" }}
                    >
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Ngày Sự kiện diễn ra:</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                style={{ marginBottom: "20px" }}
                                type="date"
                                className="form-control"
                                id="date"
                                // placeholder="Nhập chi tiết vật phẩm"
                                value={state.date}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <label htmlFor="">Ảnh sự kiện</label>
                        </div>
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <input
                                style={{ marginBottom: "20px" }}
                                ref={inputRef}
                                type="file"
                                className="form-control"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                    </div>

                    <div className="donations-buttonrre">
                        <div className="donations-btn-background" />

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
                                    "form-event"
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
const mapDispatchToProps = (dispatch, props) => {
    return {
        event: (event, image) => dispatch(eventRequest(event, image, props)),
    };
};

export default compose(
    withFirestore,
    //firestoreConnect([{ collection: "categories" }]),
    connect(null, mapDispatchToProps)
)(EventAdd);
