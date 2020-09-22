import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { FcCancel, FcApproval } from "react-icons/fc";
import { AiFillEdit, AiFillBackward } from "react-icons/ai";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import {
    deleteDonation,
    updateDonation,
    acceptDonation,
} from "../../../../redux/admin/donation/actions";
import { Input } from "reactstrap";
const ModalItem = ({
    show,
    handleClose,
    donation,
    categories,
    users,
    deleteDonation,
    acceptDonation,
    updateDonation,
    firebase,
    firestore,
}) => {
    let categoryIdClone = "";
    const category =
        categories &&
        categories.map((cate) => {
            // console.log(cate);
            return cate.id === donation.category_id
                ? (categoryIdClone = cate.name)
                : null;
        });

    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
    const [name, setName] = useState(donation.name);
    const [description, setDescription] = useState(donation.description);
    const [category_id, setCate] = useState(categoryIdClone);
    const [condition, setCondition] = useState(donation.condition);
    const [date, setDate] = useState(donation.date);
    const [status, setStatus] = useState(donation.status);
    const [image, setImage] = React.useState(donation.imgUrl);
    const [newImage, updateNewImage] = useState(null);
    const [errorName, setErrorName] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorCondition, setErrorCondition] = useState("");
    const [errorCategory_id, setErrorCategory_id] = useState("");
    const [errorDate, setErrorDate] = useState("");
    const [errorImage, setErrorImage] = useState("");

    const acceptDonations = () => {
        const dataAccept = {
            status: "xác nhận",
        };
        acceptDonation(dataAccept, donation.id);
    };
    const cancelDonations = () => {
        const dataAccept = {
            status: "từ chối",
        };
        acceptDonation(dataAccept, donation.id);
    };
    const updateDonations = () => {
        setErrorName("");
        setErrorDescription("");
        setErrorCondition("");
        setErrorCategory_id("");
        setErrorDate("");
        setErrorImage("");
        const id = donation.id;
        const dataUpdate = {
            name,
            description,
            category_id,
            condition,
            date,
            uid: donation.uid,
            status,
            id,
        };
        const firebaseActions = {
            firebase,
            firestore,
        };

        if (
            newImage != null &&
            name != null &&
            description != null &&
            category_id != null &&
            condition != null &&
            date != null
        ) {
            const baseDatetime = new Date(date);
            const day = baseDatetime.getDate();
            const month = baseDatetime.getMonth() + 1;
            const year = baseDatetime.getFullYear();
            setDate(`${day}/${month}/${year}`);
            /**
             * Precessing for saving the data from user
             */
            updateDonation(
                dataUpdate,
                newImage,
                firebaseActions,
                (imageUrl) => {
                    setImage(imageUrl);
                }
            );
            const categories =
                categories &&
                categories.map((cate) => {
                    // console.log(cate);
                    return cate.id === donation.category_id
                        ? (categoryIdClone = cate.name)
                        : null;
                });
            setCate(categoryIdClone);
            /**
             * Update the status of the modal
             */
            setIsEdit(false);
        }
        if (name === "") {
            setErrorName("Nhập tên vật phẩm");
        }
        if (description === "") {
            setErrorDescription("Nhập chi tiết vật phẩm");
        }
        if (condition === "") {
            setErrorCondition("Chọn trạng thái vật phẩm");
        }
        if (category_id === "") {
            setErrorCategory_id("Chọn thể loại vật phẩm");
        }
        if (date === "") {
            setErrorDate("Nhập ngày tặng vật phẩm");
        }
        if (newImage === null) {
            setErrorImage("chọn ảnh vật phẩm");
        }
    };
    const delDonation = () => {
        deleteDonation(donation.id);
    };
    const renderContent = (donation) => {
        return (
            <Form>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Tên vật phẩm</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <Input
                            type="text"
                            style={{ border: "none" }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            readOnly={!isEditable}
                            required="required"
                        />
                        <p style={{ color: "red" }}>{errorName}</p>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Ngày Tài trợ vật phẩm</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <Input
                            type={isEditable ? "date" : "text"}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            readOnly={!isEditable}
                            style={{ border: "none" }}
                            required="required"
                        />
                        <p style={{ color: "red" }}>{errorDate}</p>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Tài khoản đăng bài</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {users &&
                            users.map((user) => (
                                <Input
                                    type="text"
                                    value={
                                        user.id === donation.uid
                                            ? user.username
                                            : null
                                    }
                                    style={{
                                        display:
                                            user.id === donation.uid
                                                ? "block"
                                                : "none",
                                        border: "none",
                                    }}
                                    readOnly
                                    key={user.id}
                                />
                            ))}
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Chi tiết vật phẩm</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <textarea
                            type="text"
                            style={{ border: "none", width: "100%" }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            disabled={!isEditable}
                            required="required"
                        />
                        <p style={{ color: "red" }}>{errorDescription}</p>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Trạng thái Sản phẩm</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {!isEditable ? (
                            <Input
                                type="text"
                                style={{ border: "none" }}
                                value={condition}
                                onChange={(e) => setCondition(e.target.value)}
                                readOnly={!isEditable}
                                required="required"
                            />
                        ) : (
                            <select
                                value={condition}
                                id="condition"
                                onChange={(e) => setCondition(e.target.value)}
                                style={{
                                    height: "36px",
                                    border: "none",
                                    width: "450px",
                                }}
                            >
                                <option value="Còn mới">Còn mới</option>
                                <option value="Đã qua sử dụng">
                                    Đã qua sử dụng
                                </option>
                                <option value="Hư hỏng nhẹ">Hư hỏng nhẹ</option>
                            </select>
                        )}
                        <p style={{ color: "red" }}>{errorCondition}</p>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Trạng thái bài đăng</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <Input
                            type="text"
                            style={{ border: "none" }}
                            value={status}
                            //  onChange={(e) => setStatus(e.target.value)}
                            readOnly
                            required="required"
                        />
                        <p style={{ color: "red" }}>{}</p>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Thể Loại</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {!isEditable ? (
                            <Input
                                type="text"
                                style={{ border: "none" }}
                                value={category_id}
                                onChange={(e) => setCate(e.target.value)}
                                readOnly={!isEditable}
                                required="required"
                            />
                        ) : (
                            <select
                                value={category_id}
                                id="category_id"
                                onChange={(e) => setCate(e.target.value)}
                                style={{
                                    height: "36px",
                                    border: "none",
                                    width: "450px",
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
                        )}
                        <p style={{ color: "red" }}>{errorCategory_id}</p>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Ảnh vật phẩm</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <img
                            src={image}
                            data-image={image}
                            data-tracking="codehub"
                            style={{
                                border: "none",
                                width: "100px",
                                height: "100px",
                            }}
                        />
                        {!isEditable ? (
                            <></>
                        ) : (
                            <input
                                ref={inputRef}
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={(e) => {
                                    updateNewImage(e.target.files[0]);
                                }}
                            />
                        )}
                        <p style={{ color: "red" }}>{errorImage}</p>
                    </div>
                </div>
                <div className="donations-button">
                    {!isEditable ? (
                        <span>
                            {donation.status !== "đã trao tặng" &&
                            donation.status !== "chờ trao tặng" ? (
                                <button
                                    className="mr-10 btn btn-success"
                                    onClick={(e) => {
                                        setIsEdit(!isEditable);
                                        setErrorName("");
                                        setErrorDescription("");
                                        setErrorCondition("");
                                        setErrorCategory_id("");
                                        setErrorDate("");
                                        setErrorImage("");
                                        e.preventDefault();
                                    }}
                                    style={{
                                        width: "50px",
                                        marginRight: "10px",
                                    }}
                                >
                                    <AiFillEdit />
                                </button>
                            ) : null}
                        </span>
                    ) : (
                        <span>
                            <button
                                className=" btn btn-success"
                                onClick={(e) => {
                                    e.preventDefault();
                                    updateDonations();
                                    e.preventDefault();
                                }}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginRight: "10px",
                                }}
                            >
                                <AiFillEdit />
                            </button>
                            <button
                                onClick={() => {
                                    setIsEdit(!isEditable);
                                    setErrorName("");
                                    setErrorDescription("");
                                    setErrorCondition("");
                                    setErrorCategory_id("");
                                    setErrorDate("");
                                    setErrorImage("");
                                }}
                                className="mr-10 btn btn-warning"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginRight: "10px",
                                }}
                            >
                                <AiFillBackward />
                            </button>
                        </span>
                    )}
                    {donation.status !== "đã trao tặng" &&
                    donation.status !== "chờ trao tặng" ? (
                        <button
                            className="btn btn-danger"
                            style={{
                                width: "50px",
                                backgroundColor: "#dc3545",
                                marginRight: "10px",
                            }}
                            onClick={(e) => {
                                delDonation();
                                e.preventDefault();
                            }}
                        >
                            <BsFillTrashFill />
                        </button>
                    ) : null}

                    {donation.status === "chờ xác nhận" ? (
                        <button
                            className="btn btn-warning"
                            style={{
                                width: "50px",
                                backgroundColor: "#ffc107",
                                marginRight: "10px",
                            }}
                            onClick={(e) => {
                                acceptDonations();
                                e.preventDefault();
                            }}
                        >
                            <FcApproval />
                        </button>
                    ) : null}
                    {donation.status === "chờ xác nhận" ? (
                        <button
                            className="btn btn-danger"
                            style={{
                                width: "50px",
                                backgroundColor: "#dc3545",
                            }}
                            onClick={(e) => {
                                cancelDonations();
                                e.preventDefault();
                            }}
                        >
                            <FcCancel />
                        </button>
                    ) : null}
                </div>
            </Form>
        );
    };
    return (
        <Modal
            show={show}
            onHide={() => handleClose(false)}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Tài trợ</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderContent(donation)}</Modal.Body>
            <Modal.Footer style={{ marginTop: "50px" }}>
                <Button variant="danger" onClick={() => handleClose(false)}>
                    Đóng
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteDonation: (id) => dispatch(deleteDonation(id, props)),
        updateDonation: (data, image, firebaseActions, callback) =>
            dispatch(updateDonation(data, image, firebaseActions, callback)),
        acceptDonation: (donation, id) =>
            dispatch(acceptDonation(donation, id, props)),
    };
};
const mapStateToProps = (state, props) => {
    const id = props.donation.id;
    const donations = state.firestore.data.donation;
    const donation = donations ? { ...donations[id], id } : null;
    return {
        categories: state.firestore.ordered.categories,
        users: state.firestore.ordered.users,
        donation,
    };
};
export default compose(
    withFirestore,
    firestoreConnect([{ collection: "categories" }]),
    firestoreConnect([{ collection: "users" }]),
    connect(mapStateToProps, mapDispatchToProps)
)(ModalItem);
