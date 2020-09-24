import React, { useState } from "react";
import "./profileDetail.css";
import { Button, Form, Modal } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { deletePlight, updatePlight } from "../../redux/admin/plight/actions";

const PlightHistory = ({
    deletePlight,
    updatePlight,
    firebase,
    firestore,
    userId,
}) => {
    const allPlights = useSelector((state) => state.firestore.ordered.plight);
    const plights = allPlights?.filter((plight) => plight.uid === userId);
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [plightDetail, setPlightDetail] = useState(undefined);
    const [newImage, updateNewImage] = useState(null);
    const [imgUrl, setImgUrl] = useState(undefined);

    const handleShow = (imgUrl) => {
        setImgUrl(imgUrl);
        setShow(true);
    };
    const handleClose = () => setShow(false);

    const handleShowModal = (plight) => {
        setPlightDetail(plight);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const renderModalImage = () => {
        return (
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Hình ảnh
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-image">
                    <img src={imgUrl && imgUrl} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    const renderModalEdit = () => {
        const firebaseActions = {
            firebase,
            firestore,
        };
        const handleUpdate = () => {
            updatePlight(plightDetail, newImage, firebaseActions, () => {});
            handleCloseModal();
        };
        const handleChange = (e) => {
            const { id, value } = e.target;
            setPlightDetail((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        };
        const handleImageChange = (e) => {
            const imageInput = document.getElementById("image");
            imageInput.src = URL.createObjectURL(e.target.files[0]);
            imageInput.onload = () => {
                URL.revokeObjectURL(imageInput.src);
            };
            updateNewImage(e.target.files[0]);
        };

        return (
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                backdrop="static"
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Chỉnh sửa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-image">
                    <Form>
                        <Form.Label>Người nhận</Form.Label>
                        <Form.Control
                            id="name"
                            value={plightDetail && plightDetail.name}
                            onChange={handleChange}
                        />
                        <Form.Label>Cần tài trợ</Form.Label>
                        <Form.Control
                            id="need"
                            value={plightDetail && plightDetail.need}
                            onChange={handleChange}
                        />
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            id="need"
                            value={plightDetail && plightDetail.address}
                            onChange={handleChange}
                        />
                        <Form.Label>Thông tin thêm</Form.Label>
                        <Form.Control
                            id="description"
                            as="textarea"
                            value={plightDetail && plightDetail.description}
                            onChange={handleChange}
                        />
                        <Form.Label>Hình ảnh</Form.Label>
                        <img
                            id="image"
                            alt=""
                            src={plightDetail && plightDetail.imgUrl}
                        />
                        <Form.File
                            label="Hình ảnh"
                            custom
                            onChange={handleImageChange}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleUpdate}>
                        Cập nhật
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Thoát
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    return (
        <div className="user_profile">
            <div className="entry-title">
                <h5>Thông tin tài trợ</h5>
            </div>
            <table className="table table-bordered table-hover">
                <thead className="user-table">
                    <tr>
                        <th>Cần tài trợ</th>
                        <th>Người nhận</th>
                        <th>Địa chỉ</th>
                        <th>Hình ảnh</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody className="user-table">
                    {plights &&
                        plights.map((plight) => (
                            <tr key={plight.id}>
                                <td>{plight.need}</td>
                                <td>{plight.name}</td>
                                <td>{plight.address}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleShow(plight.imgUrl)
                                        }
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                                <td>{plight.status}</td>
                                <td className="action">
                                    {plight.status === "chờ xác nhận" && (
                                        <>
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={() =>
                                                    handleShowModal(plight)
                                                }
                                            >
                                                Sửa
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    deletePlight(plight.id)
                                                }
                                            >
                                                Xóa
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {renderModalImage()}
            {renderModalEdit()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        deletePlight: (id) => dispatch(deletePlight(id, props)),
        updatePlight: (data, image, firebaseActions, callback) =>
            dispatch(updatePlight(data, image, firebaseActions, callback)),
    };
};

export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(["plight"])
)(PlightHistory);
