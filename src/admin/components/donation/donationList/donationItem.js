/* eslint-disable no-const-assign */
import React from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import ModalItem from "./modalItem";
const DonationItem = (props) => {
    const donation = props.donation;
    const [showModal, setShowModal] = React.useState(false);

    return (
        <tr>
            <td>{donation.name}</td>
            <td>{donation.date}</td>
            <td>{donation.description}</td>
            <td>{donation.category}</td>
            <td>{donation.status}</td>
            <td>
                <button
                    className="btn btn-warning"
                    onClick={() => setShowModal(true)}
                >
                    Xem chi tết
                </button>
                <ModalItem
                    donation={donation}
                    show={showModal}
                    handleClose={setShowModal}
                />
            </td>
        </tr>
    );
};
export default compose(withFirestore)(DonationItem);
