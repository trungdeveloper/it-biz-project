import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import IMG from "../../assets/images/amsieutoc.jpg";
import "./donated.css";

export const Donated = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container">
            <div className="row">
                <div className="donated-page">
                    <div className="section-heading">
                        <h2
                            className="entry-title"
                            style={{ marginBottom: "20px" }}
                        >
                            Hoạt động trao tặng
                        </h2>
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
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn A</td>
                                <td>Ấm siêu tốc</td>
                                <td>Nguyễn Thị B</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={handleShow}
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn A</td>
                                <td>Ấm siêu tốc</td>
                                <td>Nguyễn Thị B</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={handleShow}
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn A</td>
                                <td>Ấm siêu tốc</td>
                                <td>Nguyễn Thị B</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={handleShow}
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn A</td>
                                <td>Ấm siêu tốc</td>
                                <td>Nguyễn Thị B</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={handleShow}
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn A</td>
                                <td>Ấm siêu tốc</td>
                                <td>Nguyễn Thị B</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={handleShow}
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn A</td>
                                <td>Ấm siêu tốc</td>
                                <td>Nguyễn Thị B</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={handleShow}
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn A</td>
                                <td>Ấm siêu tốc</td>
                                <td>Nguyễn Thị B</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={handleShow}
                                        className="btn btn-info"
                                    >
                                        Hình ảnh
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                            <img src={IMG} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Thoát
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};
