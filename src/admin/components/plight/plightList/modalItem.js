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
    deletePlight,
    updatePlight,
    // acceptPlight,
} from "../../../../redux/admin/plight/actions";
import { Input } from "reactstrap";
const ModalItem = ({
    props,
    show,
    handleClose,
    plight,
    users,
    deletePlight,
    // acceptPlight,
    updatePlight,
}) => {
    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
    const [title, setTitle] = useState(plight.name);
    const [description, setDescription] = useState(plight.description);
    const [address, setAddress] = useState(plight.address);
    const [contact, setContact] = useState(plight.contact);
    const [status, setStatus] = useState(plight.status);
    const [image, setImage] = React.useState(plight.imgUrl);
    const [newImage, updateNewImage] = useState(null);
    // const acceptDonations = () => {
    //     const dataAccept = {
    //         name: donation.name,
    //         description: donation.description,
    //         category: donation.category,
    //         status: "Đang Đăng",
    //         date: donation.date,
    //         uid: donation.uid,
    //         isused: donation.isused,
    //     };
    //     acceptDonation(dataAccept, donation.id);
    // };
    // const cancelDonations = () => {
    //     const dataAccept = {
    //         name: donation.name,
    //         description: donation.description,
    //         category: donation.category,
    //         status: "Hủy bài đăng",
    //         date: donation.date,
    //         uid: donation.uid,
    //         isused: donation.isused,
    //     };
    //     acceptDonation(dataAccept, donation.id);
    // };
    // const donationProduct = () => {
    //     const dataAccept = {
    //         name: donation.name,
    //         description: donation.description,
    //         category: donation.category,
    //         status: "Đã Trao Tặng",
    //         date: donation.date,
    //         uid: donation.uid,
    //         isused: donation.isused,
    //     };
    //     acceptDonation(dataAccept, donation.id);
    // };
    // const updatePlight = () => {
    //     const id = plight.id;
    //     const dataUpdate = {
    //         title,
    //         description,
    //         address,
    //         contact,
    //         status,
    //         uid: plight.uid,
    //     };
    //     const firebaseActions = {
    //         firebase: props.firebase,
    //     };
    //     updatePlight(dataUpdate, newImage, firebaseActions, (imageUrl) => {
    //         setImage(imageUrl);
    //     });
    //     setIsEdit(false);
    // };
    const delPlight = () => {
        deletePlight(plight.id);
    };
    const renderContent = (plight) => {
        return (
            <Form>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Tiêu đề hoàn cảnh</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <Input
                            type="text"
                            style={{ border: "none" }}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            readOnly={!isEditable}
                            required="required"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <label htmlFor="">Chi tiết hoàn cảnh</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <Input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                                        user.id === plight.uid
                                            ? user.username
                                            : null
                                    }
                                    style={{
                                        display:
                                            user.id === plight.uid
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
                        <label htmlFor="">Địa chỉ hoàn cảnh</label>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <textarea
                            type="text"
                            style={{ border: "none", width: "100%" }}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={!isEditable}
                            required="required"
                        />
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
                                id="isused"
                                onChange={(e) => setStatus(e.target.value)}
                                style={{ height: "36px", border: "none" }}
                            >
                                <option value="Đang Đợi">Đang Đợi</option>
                                <option value="Đang đăng">Đang đăng</option>
                                <option value="Hủy bài đăng">
                                    Hủy bài đăng
                                </option>
                                <option value="Đã Trao Tặng">
                                    Đã Trao Tặng
                                </option>
                            </select>
                        )}
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
                                //onClick={ updatePlight}
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
                        onClick={delPlight}
                    >
                        <BsFillTrashFill />
                    </button>
                    {plight.status === "Đang Đợi" ? (
                        <button
                            className="btn btn-warning"
                            style={{
                                width: "50px",
                                backgroundColor: "#ffc107",
                                marginRight: "10px",
                            }}
                            /// onClick={acceptPlight}
                        >
                            <FcAcceptDatabase />
                        </button>
                    ) : null}
                    {plight.status === "Đang Đợi" ? (
                        <button
                            className="btn btn-danger"
                            style={{
                                width: "100px",
                                backgroundColor: "#dc3545",
                            }}
                            //onClick={cancelDonations}
                        >
                            Hủy
                        </button>
                    ) : null}
                    {plight.status === "Đang Đăng" ? (
                        <button
                            className="btn btn-warning"
                            style={{
                                width: "70px",
                                backgroundColor: "#ffc107",
                            }}
                            // onClick={donationProduct}
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
        >
            <Modal.Header closeButton>
                <Modal.Title>Tài trợ</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderContent(plight)}</Modal.Body>
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
        deletePlight: (id) => dispatch(deletePlight(id, props)),
        updatePlight: (data, image, firebaseActions, callback) =>
            dispatch(updatePlight(data, image, firebaseActions, callback)),
        // acceptPlight: (plight, id) => dispatch(acceptPlight(plight, id, props)),
    };
};
const mapStateToProps = (state, props) => {
    const id = props.plight.id;
    const plights = state.firestore.data.plight;
    const plight = plights ? { ...plights[id], id } : null;
    return {
        categories: state.firestore.ordered.categories,
        users: state.firestore.ordered.users,
        plight,
    };
};
export default compose(
    withFirestore,
    firestoreConnect([{ collection: "categories" }]),
    firestoreConnect([{ collection: "users" }]),
    connect(mapStateToProps, mapDispatchToProps)
)(ModalItem);
