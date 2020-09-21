/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import {
    deleteEvent,
    updateEvent,
} from "../../../../redux/admin/event/actions";
import { Input } from "reactstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { RiReplyAllLine } from "react-icons/ri";
const EventItem = (props) => {
    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
    const event = props.event;
    const [title, setTitle] = useState(event.title);
    const [content, setContent] = useState(event.content);
    const [date, setDate] = useState(event.date);
    const [image, setImage] = React.useState(event.imgUrl);
    const [newImage, updateNewImage] = useState(null);
    const [erroTitle, setErrorTitle] = useState("");
    const [errorContent, setErrorContent] = useState("");
    const [errorDate, setErrorDate] = useState("");
    const [errorImage, setErrorImage] = useState("");
    const delEvent = () => {
        props.deleteEvent(event.id);
    };
    const updateEvent = () => {
        const baseDatetime = new Date(date);
        const day = baseDatetime.getDate();
        const month = baseDatetime.getMonth() + 1;
        const year = baseDatetime.getFullYear();
        const dates = `${day}/${month}/${year}`;
        setErrorTitle("");
        setErrorContent("");
        setErrorDate("");
        setErrorImage("");
        if (
            title != null &&
            content != null &&
            date != null &&
            newImage != null
        ) {
            const id = event.id;
            const dataUpdate = {
                id,
                title,
                content,
                date: dates,
            };
            const firebaseActions = {
                firebase: props.firebase,
                firestore: props.firestore,
            };
            props.updateEvent(
                dataUpdate,
                newImage,
                firebaseActions,
                (imageUrl) => {
                    setImage(imageUrl);
                }
            );
            setIsEdit(false);
        }
        if (title === "") {
            setErrorTitle("Nhập tiêu đề sự kiện");
        }
        if (content === "") {
            setErrorContent("Nhập nội dung sự kiện");
        }
        if (date === "") {
            setErrorDate("Nhập ngày diễn ra sự kiện");
        }
        if (newImage === null) {
            setErrorImage("Nhập ảnh sự kiện");
        }
    };
    const CancelUpdateEvent = () => {
        setErrorTitle("");
        setErrorContent("");
        setErrorDate("");
        setErrorImage("");
        setIsEdit(false);
    };
    return (
        <tr>
            <td style={{ width: "20%" }}>
                <Input
                    type="text"
                    style={{ border: "none" }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={!isEditable}
                    required="required"
                />
                <p style={{ color: "red" }}>{erroTitle}</p>
            </td>
            <td style={{ width: "20%" }}>
                <textarea
                    type="text"
                    style={{
                        border: "none",
                        backgroundColor: "#e9ecef",
                        width: "100%",
                    }}
                    value={content}
                    rows="3"
                    onChange={(e) => setContent(e.target.value)}
                    readOnly={!isEditable}
                    required="required"
                />
                <p style={{ color: "red" }}>{errorContent}</p>
            </td>
            <td style={{ width: "20%" }}>
                <Input
                    type="date"
                    style={{ border: "none" }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    readOnly={!isEditable}
                    required="required"
                />
                <p style={{ color: "red" }}>{errorDate}</p>
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
                <p style={{ color: "red" }}>{errorImage}</p>
            </td>
            <td>
                {!isEditable ? (
                    <button
                        className="mr-10 btn btn-success"
                        onClick={() => setIsEdit(!isEditable)}
                        style={{ marginRight: "8%" }}
                    >
                        <AiFillEdit />
                    </button>
                ) : (
                    <span>
                        <button
                            className="mr-10 btn btn-success"
                            onClick={updateEvent}
                            style={{ marginRight: "8%" }}
                        >
                            <AiFillEdit />
                        </button>
                        <button
                            onClick={CancelUpdateEvent}
                            className="mr-10 btn btn-warning"
                        >
                            <RiReplyAllLine />
                        </button>
                    </span>
                )}
                <button className="btn btn-danger" onClick={delEvent}>
                    <BsFillTrashFill />
                </button>
            </td>
        </tr>
    );
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteEvent: (id) => dispatch(deleteEvent(id, props)),
        updateEvent: (data, image, firebaseActions, callback) =>
            dispatch(updateEvent(data, image, firebaseActions, callback)),
    };
};
const mapStateToProps = (state, props) => {
    const id = props.event.id;
    const events = state.firestore.data.event;
    const event = events ? { ...events[id], id } : null;
    //console.log(donations);
    return {
        event,
    };
};
export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(EventItem);
