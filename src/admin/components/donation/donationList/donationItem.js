/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import ModalItem from "./modalItem";
import { Redirect } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import { FcDonate } from "react-icons/fc";
const DonationItem = (props) => {
    const donation = props.donation;
    const [showModal, setShowModal] = React.useState(false);
    const [goNow, updateGoNow] = useState(false);

    return (
        <tr>
            <td style={{ width: "20%" }}>{donation.name}</td>
            <td>{donation.date}</td>
            <td style={{ width: "40%" }}>{donation.description}</td>
            <td>{donation.status}</td>
            <td>
                <button
                    className="btn btn-warning"
                    onClick={() => setShowModal(true)}
                >
                    <BsFillEyeFill />
                </button>
                {donation.status === "xác nhận" ? (
                    <button
                        onClick={() => {
                            updateGoNow(true);
                        }}
                        className="button button--default"
                    >
                        <FcDonate />
                    </button>
                ) : null}

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
