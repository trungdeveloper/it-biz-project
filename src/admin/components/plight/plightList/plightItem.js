/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import ModalItem from "./modalItem";
import { connect } from "react-redux";
import { getParameter } from "../../../../redux/util/helpers";
const DonationItem = (props) => {
    const plight = props.plight;
    const [showModal, setShowModal] = useState(false);
    const id = getParameter("id");

    return (
        <tr>
            <td>{plight.need}</td>
            <td>{plight.address}</td>
            <td>{plight.contact}</td>
            <td>{plight.status}</td>
            <td>
                <button
                    className="btn btn-warning"
                    onClick={() => {
                        console.log("show modal");
                        setShowModal(true);
                    }}
                >
                    Xem chi tết
                </button>
                {plight.status === "xác nhận" ? (
                    <button
                        onClick={() => {
                            props.handleSaveDonation(id, plight.id);
                        }}
                        className="button button--default"
                    >
                        Nhận trài trợ
                    </button>
                ) : null}
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

// export default compose(withFirestore)(DonationItem);

export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(DonationItem);
