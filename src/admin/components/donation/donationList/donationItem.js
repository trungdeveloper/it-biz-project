/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore, firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FcAcceptDatabase } from "react-icons/fc";
import { RiReplyAllLine } from "react-icons/ri";
import {
    deleteDonation,
    updateDonation,
    acceptDonation,
} from "../../../../redux/admin/donation/actions";
import { Input } from "reactstrap";
const DonationItem = (props) => {
    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
    const donation = props.donation;
    const [name, setName] = useState(donation.name);
    const [description, setDescription] = useState(donation.description);
    const [category, setCate] = useState(donation.category);
    const [status, setStatus] = useState(donation.status);
    const [date, setDate] = useState(donation.date);
    const [image, setImage] = React.useState(donation.imgUrl);
    const [newImage, updateNewImage] = useState(null);
    const delDonation = () => {
        props.deleteDonation(donation.id);
    };

    const acceptDonation = () => {
        const dataAccept = {
            name: donation.name,
            description: donation.description,
            category: donation.category,
            status: donation.status,
            date: donation.date,
            accept: true,
        };
        props.acceptDonation(dataAccept, donation.id);
    };
    //console.log(donation.date.toLocaleDateString.toString());
    const updateDonation = () => {
        const id = donation.id;
        const dataUpdate = {
            id,
            name,
            description,
            category,
            status,
            date,
            accept: donation.accept,
        };
        const firebaseActions = {
            firebase: props.firebase,
            firestore: props.firestore,
        };
        props.updateDonation(
            dataUpdate,
            newImage,
            firebaseActions,
            (imageUrl) => {
                setImage(imageUrl);
            }
        );
        setIsEdit(false);
    };

    return (
        <tr>
            <td>
                <Input
                    type="text"
                    style={{ border: "none" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    readOnly={!isEditable}
                    required="required"
                />
            </td>
            <td>
                <td>
                    <Input
                        type={isEditable ? "date" : "text"}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        readOnly={!isEditable}
                        required="required"
                    />
                </td>
            </td>
            <td>
                <textarea
                    type="text"
                    style={{ border: "none" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={!isEditable}
                    required="required"
                />
            </td>
            <td>
                {!isEditable ? (
                    <Input
                        type="text"
                        style={{ border: "none" }}
                        value={category}
                        onChange={(e) => setCate(e.target.value)}
                        readOnly={!isEditable}
                        required="required"
                    />
                ) : (
                    <select
                        value={category}
                        id="cate"
                        onChange={(e) => setCate(e.target.value)}
                        style={{ height: "36px", border: "none" }}
                    >
                        {props.categories &&
                            props.categories.map((cate) => (
                                <option key={cate.id} value={cate.name}>
                                    {cate.name}
                                </option>
                            ))}
                    </select>
                )}
            </td>
            <td>
                {" "}
                {!isEditable ? (
                    <Input
                        type="text"
                        style={{ border: "none" }}
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        readOnly={!isEditable}
                        required="required"
                    />
                ) : (
                    <select
                        value={status}
                        id="status"
                        onChange={(e) => setStatus(e.target.value)}
                        style={{ height: "36px", border: "none" }}
                    >
                        <option value="Còn mới">Còn mới</option>
                        <option value="Đã qua sử dụng">Đã qua sử dụng</option>
                        <option value="Hư hỏng nhẹ">Hư hỏng nhẹ</option>
                    </select>
                )}
            </td>
            <td>
                {/* HOTFIX: Should be handle display the image after post to the firebase */}
                <img
                    src={image && image}
                    data-image={image}
                    data-tracking="codehub"
                    style={{
                        border: "none",
                        width: "100px",
                        height: "100px",
                    }}
                />
                {!isEditable ? (
                    <></>
                ) : (
                    <input
                        ref={inputRef}
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => {
                            updateNewImage(e.target.files[0]);
                        }}
                    />
                )}
            </td>
            <td>
                {!isEditable ? (
                    <button
                        className="mr-10 btn btn-success"
                        onClick={() => setIsEdit(!isEditable)}
                    >
                        <AiFillEdit />
                    </button>
                ) : (
                    <span>
                        <button
                            className="mr-10 btn btn-success"
                            onClick={updateDonation}
                        >
                            <AiFillEdit />
                        </button>
                        <button
                            onClick={() => setIsEdit(!isEditable)}
                            className="mr-10 btn btn-warning"
                        >
                            <RiReplyAllLine />
                        </button>
                    </span>
                )}
                <button className="btn btn-danger" onClick={delDonation}>
                    <BsFillTrashFill />
                </button>
            </td>
            <td>
                {/* {!donation.accept ? (accept = "disabled") : (accept = "enable")} */}
                <button
                    className="btn btn-warning"
                    disabled={donation.accept}
                    onClick={acceptDonation}
                >
                    <FcAcceptDatabase />
                </button>
            </td>
        </tr>
    );
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteDonation: (id) => dispatch(deleteDonation(id, props)),
        updateDonation: (data, image, firebaseActions, callback) =>
            dispatch(updateDonation(data, image, firebaseActions, callback)),
        acceptDonation: (donation, id) =>
            dispatch(acceptDonation(donation, id, props)),
    };
};
const mapStateToProps = (state, props) => {
    const id = props.donation.id;
    const donations = state.firestore.data.donation;
    const donation = donations ? { ...donations[id], id } : null;
    //console.log(donations);
    return {
        categories: state.firestore.ordered.categories,
        donation,
    };
};
export default compose(
    withFirestore,
    firestoreConnect([{ collection: "categories" }]),
    connect(mapStateToProps, mapDispatchToProps)
)(DonationItem);
