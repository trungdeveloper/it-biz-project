import React, { useState } from "react";
import "./profileDetail.css";
import { Button, Modal } from "react-bootstrap";
import IMG from "../../assets/images/amsieutoc.jpg";
export const UserDonate = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                            <th>Hoàn cảnh được cho</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="user-table">
                        <tr>
                            <td>Ấm siêu tốc</td>
                            <td>
                                Đang dư mấy cái ấm siêu tốc,
                                <br /> sử dụng được nhưng không có nhu
                                cầu, muốn tặng lại cho ai cần
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={handleShow}
                                    className="btn btn-info"
                                >
                                    Hình ảnh
                                </button>
                            </td>
                            <td>Đang chờ xét duyệt</td>
                            <td></td>
                            <td className="action">
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                >
                                    Sửa
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Ấm siêu tốc</td>
                            <td>
                                Đang dư mấy cái ấm siêu tốc,
                                <br /> sử dụng được nhưng không có nhu
                                cầu, muốn tặng lại cho ai cần
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={handleShow}
                                    className="btn btn-info"
                                >
                                    Hình ảnh
                                </button>
                            </td>
                            <td>Đã trào tặng</td>
                            <td>Nguyễn Thị B</td>
                            <td className="action"></td>
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
                            <Button
                                variant="secondary"
                                onClick={handleClose}
                            >
                                Thoát
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </div>
    );
};
