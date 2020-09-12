/* eslint-disable no-const-assign */
import React from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import ModalItem from "./modalItem";
const DonationItem = (props) => {
    const plight = props.plight;
    const [showModal, setShowModal] = React.useState(false);

    return (
        <tr>
            <td>{plight.need}</td>
            <td>{plight.address}</td>
            <td>{plight.contact}</td>
            <td>{plight.status}</td>
            <td>
                <button
                    className="btn btn-warning"
                    onClick={() => setShowModal(true)}
                >
                    Xem chi tết
                </button>
                <ModalItem
                    plight={plight}
                    show={showModal}
                    handleClose={setShowModal}
                />
            </td>
        </tr>
    );
};
export default compose(withFirestore)(DonationItem);
