/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
//import ModalItem from "./modalItem";
// import { Redirect } from "react-router-dom";

import { Input } from "reactstrap";
import { connect } from "react-redux";
const DonatedItem = (props) => {
    const donated = props.donated;
    const donations = props.donation;
    const plights = props.plight;
    const firestore = props.firestore;
    const [date, setDate] = useState("");
    const [image, setImage] = React.useState("");
    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
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
    const donatedUpdate = () => {
        const storageRef = props.firebase.storage().ref();
        const uploadTask = storageRef.child(`donated${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                uploadTask.snapshot.ref
                    .getDownloadURL()
                    .then(function (downloadURL) {
                        // callback(downloadURL);
                        firestore
                            .collection("donated")
                            .doc(donated.id)
                            .update({
                                imgUrl: downloadURL,
                                date: date,
                                status: "trao tặng",
                            })
                            .then(() => {
                                props.firestore
                                    .collection("donation")
                                    .doc(donated.donation_id)
                                    .update({
                                        status: "trao tặng",
                                    })
                                    .then(() => {})
                                    .catch((error) => {
                                        console.log(error);
                                    });
                                props.firestore
                                    .collection("plight")
                                    .doc(donated.plight_id)
                                    .update({
                                        status: "trao tặng",
                                    })
                                    .then(() => {})
                                    .catch((error) => {
                                        console.log(error);
                                    });
                                setIsEdit(false);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    });
            }
        );
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
                {isEditable ? (
                    <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        readOnly={!isEditable}
                        style={{ border: "none" }}
                        required="required"
                    />
                ) : (
                    donated.date
                )}
            </td>
            <td>
                {isEditable ? (
                    <input
                        ref={inputRef}
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}
                    />
                ) : (
                    <img
                        style={{
                            border: "none",
                            width: "100px",
                            height: "100px",
                        }}
                        src={donated.imgUrl}
                    ></img>
                )}
            </td>
            <td>
                {donated.status === "chờ trao tặng" ? (
                    <button
                        className="btn btn-danger"
                        style={{ marginRight: "5%" }}
                        onClick={() => deleteDonated()}
                    >
                        Xóa
                    </button>
                ) : null}
                {donated.status === "chờ trao tặng" && isEditable ? (
                    <button
                        className="btn btn-danger"
                        style={{ marginRight: "5%" }}
                        onClick={() => donatedUpdate()}
                    >
                        xong
                    </button>
                ) : null}
                {donated.status === "chờ trao tặng" && !isEditable ? (
                    <button
                        className="btn btn-danger"
                        style={{ marginRight: "5%" }}
                        onClick={() => setIsEdit(true)}
                    >
                        xong
                    </button>
                ) : null}
            </td>
        </tr>
    );
};
const mapStateToProps = (state) => {
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
