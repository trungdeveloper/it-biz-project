import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FcAcceptDatabase } from "react-icons/fc";
import { RiReplyAllLine } from "react-icons/ri";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "./modal.style.scss";

import {
    deletePlight,
    updatePlight,
    acceptPlight,
} from "../../../../redux/admin/plight/actions";
import { Input } from "reactstrap";
const ModalItem = ({
    show,
    handleClose,
    plight,
    users,
    deletePlight,
    acceptPlight,
    updatePlight,
    firebase,
    firestore,
}) => {
    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
    const [need, setNeed] = useState(plight.need);
    const [description, setDescription] = useState(plight.description);
    const [address, setAddress] = useState(plight.address);
    const [status, setStatus] = useState(plight.status);
    const [date, setDate] = useState(plight.date);
    const [image, setImage] = React.useState(plight.imgUrl);
    const [newImage, updateNewImage] = useState(null);
    const [errorNeed, setErrorNeed] = useState("");
    const [errorDescription, setErrorDescription] = useState("");
    const [errorAddress, setErrorAddress] = useState("");
    const [errorImage, setErrorImage] = useState(""); 
    const [errorDate, setErrorDate] = useState("");
    const acceptPlights = () => {
        const dataAccept = {
            status: "xác nhận",
        };
        acceptPlight(dataAccept, plight.id);
    };
    const cancelPlights = () => {
        const dataAccept = {
            status: "từ chối",
        };
        acceptPlight(dataAccept, plight.id);
    };
    const updatePlights = () => {
        setErrorNeed("");
        setErrorDescription("");
        setErrorAddress("");
        setErrorImage("");
        setErrorDate("");
        const id = plight.id;
        const dataUpdate = {
            need,
            description,
            address,
            status,
            date,
            uid: plight.uid,
            id,
        };

        /**
         * Destructure firebase
         */
        const firebaseActions = {
            firebase,
            firestore,
        };

        if (
            newImage &&
            need != null &&
            description != null &&
            address != null &&
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
            updatePlight(dataUpdate, newImage, firebaseActions, (imageUrl) => {
                setImage(imageUrl);
            });

            /**
             * Update the status of the modal
             */
            setIsEdit(false);
        }
        if (need === "") {
            setErrorNeed("Nhập Vật phẩm hoàn cảnh cần");
        }
        if (description === "") {
            setErrorDescription("Nhập chi tiết chi tiết hoàn cảnh");
        }
        if (address === "") {
            setErrorAddress("Nhập địa chỉ");
        }
        if (newImage === null) {
            setErrorImage("Nhập ảnh hoàn cảnh");
        }
        if (date === "") {
            setErrorDate("Nhập ngày tặng vật phẩm");
        }
    };
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
                            value={need}
                            onChange={(e) => setNeed(e.target.value)}
                            readOnly={!isEditable}
                            required="required"
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
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            readOnly={!isEditable}
                            style={{ border: "none" }}
                            required="required"
                        />
                        <p style={{ color: "red" }}>{errorDescription}</p>
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
                        <Input
                            type="text"
                            style={{ border: "none", width: "100%" }}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={!isEditable}
                            required="required"
                        />
                        <p style={{ color: "red" }}>{errorAddress}</p>
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
                            readOnly
                            required="required"
                        />
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
                        <p style={{ color: "red" }}>{errorImage}</p>
                    </div>
                </div>
                <div className="donations-button">
                    {!isEditable ? (
                        <span>
                            {plight.status !== "chờ trao tặng" &&
                            plight.status !== "trao tặng" ? (
                                <button
                                    className="mr-10 btn btn-success"
                                    onClick={() => {
                                        setIsEdit(!isEditable);
                                        setErrorNeed("");
                                        setErrorDescription("");
                                        setErrorAddress("");
                                        setErrorImage("");
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
                                type="button"
                                onClick={(e) => {
                                    updatePlights();
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
                                    setErrorNeed("");
                                    setErrorDescription("");
                                    setErrorAddress("");
                                    setErrorImage("");
                                }}
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
                    {plight.status != "chờ trao tặng" &&
                    plight.status != "trao tặng" ? (
                        <button
                            className="btn btn-danger"
                            style={{
                                width: "50px",
                                backgroundColor: "#dc3545",
                                marginRight: "10px",
                            }}
                            onClick={(e) => {
                                delPlight();
                                e.preventDefault();
                            }}
                        >
                            <BsFillTrashFill />
                        </button>
                    ) : null}

                    {plight.status === "chờ xác nhận" ? (
                        <button
                            className="btn btn-warning"
                            style={{
                                width: "50px",
                                backgroundColor: "#ffc107",
                                marginRight: "10px",
                            }}
                            onClick={(e) => {
                                acceptPlights();
                                e.preventDefault();
                            }}
                        >
                            <FcAcceptDatabase />
                        </button>
                    ) : null}
                    {plight.status === "chờ xác nhận" ? (
                        <button
                            className="btn btn-danger"
                            style={{
                                width: "100px",
                                backgroundColor: "#dc3545",
                            }}
                            onClick={(e) => {
                                cancelPlights();
                                e.preventDefault();
                            }}
                        >
                            Hủy
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
                <Modal.Title>Hoàn cảnh</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderContent(plight)}</Modal.Body>
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
        deletePlight: (id) => dispatch(deletePlight(id, props)),
        updatePlight: (data, image, firebaseActions, callback) =>
            dispatch(updatePlight(data, image, firebaseActions, callback)),
        acceptPlight: (plight, id) => dispatch(acceptPlight(plight, id, props)),
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
