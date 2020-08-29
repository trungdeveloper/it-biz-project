/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "../../../cssAdmin/style.css";
import { compose } from "redux";
import { withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
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
                        onClick={() => setIsEdit(!isEditable)}
                    >
                        Sửa
                    </button>
                ) : (
                    <span>
                        <button
                            className="mr-10 btn btn-success"
                            onClick={updateCategory}
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
                <button className="btn btn-danger" onClick={delCategory}>
                    Xóa
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
