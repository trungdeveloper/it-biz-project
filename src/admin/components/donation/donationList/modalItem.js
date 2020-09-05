import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ModalItem = ({ show, handleClose, item }) => {
    const renderContent = (item) => {
        return (
            <Form>
                <label>Ten San Pham</label>
                <input value={item.name} />
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
        >
            <Modal.Header closeButton>
                <Modal.Title>Đăng bài</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderContent(item)}</Modal.Body>
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
