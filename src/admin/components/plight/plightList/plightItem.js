/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import ModalItem from "./modalItem";
import { connect } from "react-redux";
import { getParameter } from "../../../../redux/util/helpers";
import { BsFillEyeFill } from "react-icons/bs";
import { BiDonateBlood } from "react-icons/bi";
const DonationItem = (props) => {
    const plight = props.plight;
    const [showModal, setShowModal] = useState(false);
    const id = getParameter("id");
    return (
        <tr>
            <td style={{ width: "20%" }}>{plight.need}</td>
            <td style={{ width: "40%" }}>{plight.address}</td>
            <td style={{ width: "20%" }}>{plight.status}</td>
            <td>
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        console.log("show modal");
                        setShowModal(true);
                    }}
                >
                    <BsFillEyeFill />
                </button>
                {plight.status === "xác nhận" ? (
                    <button
                        onClick={() => {
                            props.handleSaveDonation(id, plight.id);
                        }}
                        className="button button--default"
                    >
                        <BiDonateBlood />
                    </button>
                ) : null}
                <p>{props.errorDonated}</p>

                <ModalItem
                    plight={plight}
                    show={showModal}
                    handleClose={setShowModal}
                    firebase={props.firebase}
                    firestore={props.firestore}
                />
            </td>
        </tr>
    );
};

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase,
        firestore: state.firestore,
    };
};

export default compose(
    withFirestore,
    connect(mapStateToProps, null)
)(DonationItem);
