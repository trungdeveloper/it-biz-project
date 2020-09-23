import React, { useState } from "react";
import "./profileDetail.css";
import { Button, Form, Modal } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import {
    deleteDonation,
    updateDonation,
} from "../../redux/admin/donation/actions";

const DonateHistory = ({
    deleteDonation,
    updateDonation,
    firebase,
    firestore,
}) => {
    const donations = useSelector((state) => state.firestore.ordered.donation);
    const categories = useSelector(
        (state) => state.firestore.ordered.categories
    );
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [donationDetail, setDonationDetail] = useState(undefined);
    const [newImage, updateNewImage] = useState(null);
    const [imgUrl, setImgUrl] = useState(undefined);

    const handleShow = (imgUrl) => {
        setImgUrl(imgUrl);
        setShow(true);
    };
    const handleClose = () => setShow(false);

    const handleShowModal = (donation) => {
        setDonationDetail(donation);
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
            updateDonation(donationDetail, newImage, firebaseActions, () => {});
            handleCloseModal();
        };
        const handleChange = (e) => {
            const { id, value } = e.target;
            setDonationDetail((prevState) => ({
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
                        <Form.Label>Vật phẩm</Form.Label>
                        <Form.Control
                            id="name"
                            value={donationDetail && donationDetail.name}
                            onChange={handleChange}
                        />
                        <Form.Label>Trạng thái</Form.Label>
                        <Form.Control
                            id="condition"
                            as="select"
                            value={donationDetail && donationDetail.condition}
                            onChange={handleChange}
                        >
                            <option value="new">còn mới</option>
                            <option value="old">đã qua sữ dụng</option>
                            <option value="mini-broken">hư hỏng nhẹ</option>
                        </Form.Control>
                        <Form.Label>Danh mục</Form.Label>
                        <Form.Control
                            as="select"
                            id="category_id"
                            value={donationDetail && donationDetail.category_id}
                            onChange={handleChange}
                        >
                            {categories &&
                                categories.map((cate) => (
                                    <option key={cate.id} value={cate.id}>
                                        {cate.name}
                                    </option>
                                ))}
                        </Form.Control>
                        <Form.Label>Thông tin thêm</Form.Label>
                        <Form.Control
                            id="description"
                            as="textarea"
                            value={donationDetail && donationDetail.description}
                            onChange={handleChange}
                        />
                        <Form.Label>Hình ảnh</Form.Label>
                        <img
                            id="image"
                            alt=""
                            src={donationDetail && donationDetail.imgUrl}
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
                        <th>Tên vật phẩm</th>
                        <th>Mô tả</th>
                        <th>Hình ảnh</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody className="user-table">
                    {donations &&
                        donations.map((donation) => (
                            <tr key={donation.id}>
                                <td>{donation.name}</td>
                                <td>{donation.description}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleShow(donation.imgUrl)
                                        }
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                                <td>{donation.status}</td>
                                <td className="action">
                                    {donation.status === "chờ xác nhận" && (
                                        <>
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={() =>
                                                    handleShowModal(donation)
                                                }
                                            >
                                                Sửa
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    deleteDonation(donation.id)
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
        deleteDonation: (id) => dispatch(deleteDonation(id, props)),
        updateDonation: (data, image, firebaseActions, callback) =>
            dispatch(updateDonation(data, image, firebaseActions, callback)),
    };
};

export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => {
        return props.userId
            ? [
                  {
                      collection: "donation",
                      where: ["uid", "==", props.userId],
                  },
                  "categories",
              ]
            : [];
    })
)(DonateHistory);
