import React from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProgressModal = ({ show, handleClose, progress }) => {
    console.log(show);
    return (
        <Modal
            show={show}
            onHide={() => handleClose(false)}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Đăng bài</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ProgressBar
                    animated
                    now={progress}
                    label={`${Math.floor(progress)}%`}
                />
                {progress === 100 && (
                    <p>
                        Bài đăng đã được gởi đến quản trị viên. Chúng tôi sẽ
                        liên hệ với bạn sớm nhất qua email hoặc số điện thoại
                    </p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(false)}>
                    Đóng
                </Button>
                <Link to="/">
                    <Button variant="primary">Quay về trang chủ</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
};
