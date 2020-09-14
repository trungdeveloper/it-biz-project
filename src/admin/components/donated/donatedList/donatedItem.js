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
    const deleteDonated = () => {
        props.firestore
            .collection("donated")
            .doc(donated.id)
            .delete()
            .then(() => {
                props.firestore
                    .collection("donation")
                    .doc(donated.donation_id)
                    .update({
                        status: "xác nhận",
                    })
                    .then(() => {})
                    .catch((error) => {
                        console.log(error);
                    });
                props.firestore
                    .collection("plight")
                    .doc(donated.plight_id)
                    .update({
                        status: "xác nhận",
                    })
                    .then(() => {})
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <tr>
            <td>
                {plights &&
                    plights.map((plight) =>
                        donated.plight_id === plight.id ? plight.need : null
                    )}
            </td>
            <td>
                {donations &&
                    donations.map((donation) =>
                        donated.donation_id === donation.id
                            ? donation.name
                            : null
                    )}
            </td>
            <td>{donated.status}</td>
            <td>
                <button
                    className="btn btn-warning"
                    onClick={() => deleteDonated()}
                >
                    Xóa
                </button>
            </td>
            {/* {goNow && <Redirect to={`/plightAdmin?id=${donation.id}`} />}
                <ModalItem
                    donation={donation}
                    show={showModal}
                    handleClose={setShowModal}
                /> */}
        </tr>
    );
};
const mapStateToProps = (state, props) => {
    const id = props.donated.id;
    const donateds = state.firestore.data.donated;
    const donated = donateds ? { ...donateds[id], id } : null;
    return {
        donation: state.firestore.ordered.donation,
        plight: state.firestore.ordered.plight,
        firestore: state.firestore,
        // donated,
    };
};
export default compose(
    connect(mapStateToProps),
    withFirestore,
    firestoreConnect(["donation"]),
    firestoreConnect(["plight"])
)(DonatedItem);
