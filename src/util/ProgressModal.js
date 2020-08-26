import { Button, Modal } from "react-bootstrap";
import React from "react";

export const ProgressModal = ({ show, handleClose }) => {
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
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                I will not close if you click outside me. Don't even try to
                press escape key.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(false)}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
};
