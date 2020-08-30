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
const EventItem = (props) => {
    const [isEditable, setIsEdit] = useState(false);
    const inputRef = React.useRef();
    const event = props.event;
    const [title, setTitle] = useState(event.title);
    const [content, setContent] = useState(event.content);
    const [date, setDate] = useState(event.date);
    const [image, setImage] = React.useState(event.imgUrl);
    const [newImage, updateNewImage] = useState(null);

    const delEvent = () => {
        props.deleteEvent(event.id);
    };
    const updateEvent = () => {
        const id = event.id;
        const dataUpdate = {
            id,
            title,
            content,
            date,
        };
        const firebaseActions = {
            firebase: props.firebase,
            firestore: props.firestore,
        };
        props.updateEvent(dataUpdate, newImage, firebaseActions, (imageUrl) => {
            setImage(imageUrl);
        });
        setIsEdit(false);
    };

    return (
        <tr>
            <td>
                <Input
                    type="text"
                    style={{ border: "none" }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={!isEditable}
                    required="required"
                />
            </td>
            <td>
                <textarea
                    type="text"
                    style={{ border: "none" }}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    readOnly={!isEditable}
                    required="required"
                />
            </td>
            <td>
                <Input
                    type="date"
                    style={{ border: "none" }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    readOnly={!isEditable}
                    required="required"
                />
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
                        Sửa
                    </button>
                ) : (
                    <span>
                        <button
                            className="mr-10 btn btn-success"
                            onClick={updateEvent}
                        >
                            Sửa
                        </button>
                        <button
                            onClick={() => setIsEdit(!isEditable)}
                            className="mr-10 btn btn-warning"
                        >
                            Hủy
                        </button>
                    </span>
                )}
                <button className="btn btn-danger" onClick={delEvent}>
                    Xóa
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
