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
                            <tr>
                                <td>10/09/2020</td>
                                <td>Nguyễn Văn Hải</td>
                                <td>Xe đạp</td>
                                <td>Lê Thành Tâm</td>
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
                                <td>27/08/2020</td>
                                <td>Huỳnh Xuân Toàn</td>
                                <td>Xe 3 bánh cho người khuyết tật</td>
                                <td>Lê Thị Hoa</td>
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
                                <td>05/08/2020</td>
                                <td>Nguyễn Xuân Cường</td>
                                <td>Sách giáo khoa</td>
                                <td>Nguyễn Thị Hoa</td>
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
                                <td>05/08/2020</td>
                                <td>Phan Văn Nam</td>
                                <td>Xe đạp điện</td>
                                <td>Nguyễn Thị Hồng</td>
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
                                <td>05/08/2020</td>
                                <td>Trần Văn Sơn</td>
                                <td>Mấy sới cỏ</td>
                                <td>Đỗ Hoàng</td>
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
                                <td>12/07/2020</td>
                                <td>Nguyễn Văn Nam</td>
                                <td>Tivi</td>
                                <td>Huỳnh Trung</td>
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
