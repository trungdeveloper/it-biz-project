/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
//import ModalItem from "./modalItem";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
const DonatedItem = (props) => {
    const donated = props.donated;
    const donations = props.donation;
    const plights = props.plight;
    // const [showModal, setShowModal] = React.useState(false);
    // const [goNow, updateGoNow] = useState(false);

    return (
        <tr>
            {plights &&
                plights.map((plight) => (
                    <td key={plight.id}>
                        {donated.plight_id === plight.id ? plight.need : null}
                    </td>
                ))}
            {donations &&
                donations.map((donation) => (
                    <td key={donation.id}>
                        {donated.donation_id === donation.id
                            ? donation.name
                            : null}
                    </td>
                ))}

            <td>
                <button
                    className="btn btn-warning"
                    //  onClick={() => setShowModal(true)}
                >
                    Xem chi tết
                </button>

                {/* {goNow && <Redirect to={`/plightAdmin?id=${donation.id}`} />}
                <ModalItem
                    donation={donation}
                    show={showModal}
                    handleClose={setShowModal}
                /> */}
            </td>
        </tr>
    );
};
const mapStateToProps = (state) => {
    return {
        donation: state.firestore.ordered.donation,
        plight: state.firestore.ordered.plight,
    };
};
export default compose(
    connect(mapStateToProps),
    withFirestore,
    firestoreConnect(["donation"]),
    firestoreConnect(["plight"])
)(DonatedItem);
