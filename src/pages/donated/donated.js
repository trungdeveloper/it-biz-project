import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./donated.css";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Donated = () => {
    const users = useSelector((state) => state.firestore.data.users);
    const donations = useSelector((state) => state.firestore.data.donation);
    const plights = useSelector((state) => state.firestore.data.plight);
    const donatedArr = useSelector((state) => state.firestore.ordered.donated);

    const [show, setShow] = useState(false);
    const [imgUrl, setImgUrl] = useState(undefined);

    const handleClose = () => setShow(false);
    const handleShow = (imgUrl) => {
        setShow(true);
        setImgUrl(imgUrl);
    };

    const renderModal = () => {
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
                    <img alt="" src={imgUrl && imgUrl} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };
    const renderDonated = (donated) => {
        const donation = donations?.[donated.donation_id];
        const grantor = users?.[donation?.uid];
        const plight = plights?.[donated.plight_id];
        const grantee = users?.[plight?.uid];

        return (
            <tr>
                <td>{donated.date}</td>
                <td>{grantor && grantor.username}</td>
                <td>{donation.name}</td>
                <td>{grantee && grantee.username}</td>
                <td>
                    <button
                        type="button"
                        onClick={() => handleShow(donated.image)}
                        className="btn btn-info"
                    >
                        Hình ảnh
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="donated-page">
                    <div className="section-heading">
                        <h2 className="entry-title">Hoạt động trao tặng</h2>
                    </div>
                    <table className="table table-bordered table-hover">
                        <thead className="donated-table">
                            <tr>
                                <th>Ngày</th>
                                <th>Người trao tặng</th>
                                <th>Vật phẩm trao tặng</th>
                                <th>Người nhận</th>
                                <th>Hình ảnh</th>
                            </tr>
                        </thead>
                        <tbody className="donated-table">
                            {donatedArr &&
                                donatedArr.map((donated) =>
                                    renderDonated(donated)
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            {renderModal()}
        </div>
    );
};

export default compose(
    firestoreConnect([
        { collection: "donated", where: ["status", "==", "đã trao tặng"] },
        "users",
        "donation",
        "plight",
    ])
)(Donated);
