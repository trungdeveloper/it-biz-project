import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FcAcceptDatabase } from "react-icons/fc";
import { RiReplyAllLine } from "react-icons/ri";
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
    props,
    show,
    handleClose,
    donation,
    categories,
    users,
    deleteDonation,
    acceptDonation,
    updateDonation,
}) => {
    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
    const [name, setName] = useState(donation.name);
    const [description, setDescription] = useState(donation.description);
    const [category, setCate] = useState(donation.category);
    const [condition, setCondition] = useState(donation.condition);
    const [date, setDate] = useState(donation.date);
    const [status, setStatus] = useState(donation.status);
    const [image, setImage] = React.useState(donation.imgUrl);
    const [newImage, updateNewImage] = useState(null);
    const acceptDonations = () => {
        const dataAccept = {
            name: donation.name,
            description: donation.description,
            category: donation.category,
            status: "Xác nhận",
            date: donation.date,
            uid: donation.uid,
            condition: donation.condition,
        };
        acceptDonation(dataAccept, donation.id);
    };
    const cancelDonations = () => {
        const dataAccept = {
            name: donation.name,
            description: donation.description,
            category: donation.category,
            status: "Từ chối",
            date: donation.date,
            uid: donation.uid,
            condition: donation.condition,
        };
        acceptDonation(dataAccept, donation.id);
    };
    const donationProduct = () => {
        const dataAccept = {
            name: donation.name,
            description: donation.description,
            category: donation.category,
            status: "Đã Trao Tặng",
            date: donation.date,
            uid: donation.uid,
            condition: donation.condition,
        };
        acceptDonation(dataAccept, donation.id);
    };
    const updateDonations = () => {
        const id = donation.id;
        const dataUpdate = {
            id,
            name,
            description,
            category,
            condition,
            date,
            uid: donation.uid,
            status: status,
        };
        const firebaseActions = {
            firebase: props.firebase,
        };
        updateDonation(dataUpdate, newImage, firebaseActions, (imageUrl) => {
            setImage(imageUrl);
        });
        setIsEdit(false);
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
                                style={{ height: "36px", border: "none" }}
                            >
                                <option value="Còn mới">Còn mới</option>
                                <option value="Đã qua sử dụng">
                                    Đã qua sử dụng
                                </option>
                                <option value="Hư hỏng nhẹ">Hư hỏng nhẹ</option>
                            </select>
                        )}
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Trạng thái bài đăng</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {!isEditable ? (
                            <Input
                                type="text"
                                style={{ border: "none" }}
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                readOnly={!isEditable}
                                required="required"
                            />
                        ) : (
                            <select
                                value={status}
                                id="status"
                                onChange={(e) => setStatus(e.target.value)}
                                style={{ height: "36px", border: "none" }}
                            >
                                <option value="Chờ xác nhận">
                                    Chờ xác nhận
                                </option>
                                <option value="Xác nhận">Xác nhận</option>
                                <option value="Từ chối">Từ chối</option>
                                <option value="Đã trao tăng">
                                    Đã trao tăng
                                </option>
                            </select>
                        )}
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
                                value={category}
                                onChange={(e) => setCate(e.target.value)}
                                readOnly={!isEditable}
                                required="required"
                            />
                        ) : (
                            <select
                                value={category}
                                id="cate"
                                onChange={(e) => setCate(e.target.value)}
                                style={{ height: "36px", border: "none" }}
                            >
                                {categories &&
                                    categories.map((cate) => (
                                        <option key={cate.id} value={cate.name}>
                                            {cate.name}
                                        </option>
                                    ))}
                            </select>
                        )}{" "}
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Ảnh vật phẩm</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <img
                            src={image && image}
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
                    </div>
                </div>
                <div className="donations-button">
                    {!isEditable ? (
                        <button
                            className="mr-10 btn btn-success"
                            onClick={() => setIsEdit(!isEditable)}
                            style={{ width: "50px", marginRight: "10px" }}
                        >
                            <AiFillEdit />
                        </button>
                    ) : (
                        <span>
                            <button
                                className=" btn btn-success"
                                onClick={updateDonations}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginRight: "10px",
                                }}
                            >
                                <AiFillEdit />
                            </button>
                            <button
                                onClick={() => setIsEdit(!isEditable)}
                                className="mr-10 btn btn-warning"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginRight: "10px",
                                }}
                            >
                                <RiReplyAllLine />
                            </button>
                        </span>
                    )}
                    <button
                        className="btn btn-danger"
                        style={{
                            width: "50px",
                            backgroundColor: "#dc3545",
                            marginRight: "10px",
                        }}
                        onClick={delDonation}
                    >
                        <BsFillTrashFill />
                    </button>
                    {donation.status === "Đang Đợi" ? (
                        <button
                            className="btn btn-warning"
                            style={{
                                width: "50px",
                                backgroundColor: "#ffc107",
                                marginRight: "10px",
                            }}
                            onClick={acceptDonations}
                        >
                            <FcAcceptDatabase />
                        </button>
                    ) : null}
                    {donation.status === "Đang Đợi" ? (
                        <button
                            className="btn btn-danger"
                            style={{
                                width: "100px",
                                backgroundColor: "#dc3545",
                            }}
                            onClick={cancelDonations}
                        >
                            Hủy
                        </button>
                    ) : null}
                    {donation.status === "Đang Đăng" ? (
                        <button
                            className="btn btn-warning"
                            style={{
                                width: "70px",
                                backgroundColor: "#ffc107",
                            }}
                            onClick={donationProduct}
                        >
                            Tài trợ
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
            onApprove={delDonation}
        >
            <Modal.Header closeButton>
                <Modal.Title>Tài trợ</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderContent(donation)}</Modal.Body>
            <Modal.Footer style={{ marginTop: "50px" }}>
                <Button variant="secondary" onClick={() => handleClose(false)}>
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
    console.log(donation);
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
