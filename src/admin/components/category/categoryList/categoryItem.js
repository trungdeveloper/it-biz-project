/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
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

    const delCategory = () => {
        props.deleteCategory(category.id);
    };
    const updateCategory = () => {
        setIsEdit(false);
        console.log(!isEditable);
        props.updateCategory({ name }, category.id);
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
                            <RiReplyAllLine />
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
