/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiFillBackward } from "react-icons/ai";
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
    const [errorDate, setErrorDate] = useState("");
    const [errorImage, setErrorImage] = useState("");
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
        setErrorDate("");
        setErrorImage("");
        const baseDatetime = new Date(date);
        const day = baseDatetime.getDate();
        const month = baseDatetime.getMonth() + 1;
        const year = baseDatetime.getFullYear();
        const dates = `${day}/${month}/${year}`;
        if (date !== "" && image !== "") {
            const storageRef = props.firebase.storage().ref();
            const uploadTask = storageRef
                .child(`donated${image.name}`)
                .put(image);
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
                                    image: downloadURL,
                                    date: dates,
                                    status: "đã trao tặng",
                                })
                                .then(() => {
                                    props.firestore
                                        .collection("donation")
                                        .doc(donated.donation_id)
                                        .update({
                                            status: "đã trao tặng",
                                        })
                                        .then(() => {})
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                    props.firestore
                                        .collection("plight")
                                        .doc(donated.plight_id)
                                        .update({
                                            status: "đã trao tặng",
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
        }
        if (date === "") {
            setErrorDate("Nhập địa chỉ");
        }
        if (image === "") {
            setErrorImage("Nhập ảnh ");
        }
    };
    return (
        <tr>
            <td style={{ width: "20%" }}>
                {plights &&
                    plights.map((plight) =>
                        donated.plight_id === plight.id ? plight.need : null
                    )}
            </td>
            <td style={{ width: "20%" }}>
                {donations &&
                    donations.map((donation) =>
                        donated.donation_id === donation.id
                            ? donation.name
                            : null
                    )}
            </td>
            <td style={{ width: "15%" }}>{donated.status}</td>
            <td style={{ width: "15%" }}>
                {isEditable ? (
                    <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        readOnly={!isEditable}
                        style={{ border: "none" }}
                    />
                ) : (
                    donated.date
                )}
                <p style={{ color: "red" }}>{errorDate}</p>
            </td>
            <td style={{ width: "15%" }}>
                {isEditable ? (
                    <input
                        ref={inputRef}
                        type="file"
                        style={{ width: "100%" }}
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
                        src={donated.image}
                    ></img>
                )}
                <p style={{ color: "red" }}>{errorImage}</p>
            </td>
            <td>
                {donated.status === "chờ trao tặng" ? (
                    <button
                        className="btn btn-danger"
                        style={{ marginRight: "5%" }}
                        onClick={() => deleteDonated()}
                    >
                        <BsFillTrashFill />
                    </button>
                ) : null}
                {donated.status === "chờ trao tặng" && isEditable ? (
                    <span>
                        <button
                            className="btn btn-success"
                            style={{ marginRight: "5%" }}
                            onClick={() => donatedUpdate()}
                        >
                            <AiFillEdit />
                        </button>{" "}
                        <button
                            onClick={() => setIsEdit(!isEditable)}
                            className="mr-10 btn btn-warning"
                            style={{ marginRight: "8%" }}
                        >
                            <AiFillBackward />
                        </button>
                    </span>
                ) : null}
                {donated.status === "chờ trao tặng" && !isEditable ? (
                    <button
                        className="btn btn-success"
                        onClick={() => setIsEdit(true)}
                    >
                        <AiFillEdit />
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
    };
};
export default compose(
    connect(mapStateToProps),
    withFirestore,
    firestoreConnect(["donation"]),
    firestoreConnect(["plight"])
)(DonatedItem);
