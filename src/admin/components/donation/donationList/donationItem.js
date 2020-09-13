/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import ModalItem from "./modalItem";
import { Redirect } from "react-router-dom";

const DonationItem = (props) => {
    const donation = props.donation;
    const [showModal, setShowModal] = React.useState(false);
    const [goNow, updateGoNow] = useState(false);

    return (
        <tr>
            <td>{donation.name}</td>
            <td>{donation.date}</td>
            <td>{donation.description}</td>
            <td>{donation.status}</td>
            <td>
                <button
                    className="btn btn-warning"
                    onClick={() => setShowModal(true)}
                >
                    Xem chi tết
                </button>
                <button
                    onClick={() => {
                        updateGoNow(true);
                    }}
                    className="button button--default"
                >
                    Tài trợ
                </button>
                {goNow && <Redirect to={`/plightAdmin?id=${donation.id}`} />}
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
