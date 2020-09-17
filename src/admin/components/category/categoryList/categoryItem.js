/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiFillBackward } from "react-icons/ai";
import { RiReplyAllLine } from "react-icons/ri";
import {
    deleteCategory,
    updateCategory,
} from "../../../../redux/admin/category/actions";
import { Input } from "reactstrap";
const CategoryItem = (props) => {
    const [isEditable, setIsEdit] = useState(false);
    const category = props.category;
    const [name, setName] = useState(category.name);
    const [message, setMessage] = useState("");
    const delCategory = () => {
        props.deleteCategory(category.id);
    };
    const updateCategory = () => {
        if (name !== "") {
            props.updateCategory({ name }, category.id);
            setMessage("");
            setIsEdit(false);
        } else {
            setMessage("Nhập tên thể loại");
        }
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
                <p style={{ color: "red" }}>{message}</p>
            </td>
            <td>
                {!isEditable ? (
                    <button
                        className="mr-10 btn btn-success"
                        style={{ marginRight: "8%" }}
                        onClick={() => setIsEdit(!isEditable)}
                    >
                        <AiFillEdit />
                    </button>
                ) : (
                    <span>
                        <button
                            style={{ marginRight: "8%" }}
                            className="mr-10 btn btn-success"
                            onClick={updateCategory}
                        >
                            <AiFillEdit />
                        </button>
                        <button
                            onClick={() => setIsEdit(!isEditable)}
                            className="mr-10 btn btn-warning"
                            style={{ marginRight: "8%" }}
                        >
                            <AiFillBackward />
                        </button>
                    </span>
                )}
                <button
                    className="btn btn-danger"
                    style={{ marginRight: "8%" }}
                    onClick={delCategory}
                >
                    <BsFillTrashFill />
                </button>
            </td>
        </tr>
    );
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCategory: (id) => dispatch(deleteCategory(id, props)),
        updateCategory: (category, id) =>
            dispatch(updateCategory(category, id, props)),
    };
};
const mapStateToProps = (state, props) => {
    const id = props.category.id;
    const categories = state.firestore.data.categories;
    const category = categories ? { ...categories[id], id } : null; //kiểm tra books có tồn tại không, nếu tồn tại trả về {...books[id],id}, nếu không trả về null
    return {
        category,
    };
};
export default compose(
    withFirestore,
    connect(mapStateToProps, mapDispatchToProps)
)(CategoryItem);
