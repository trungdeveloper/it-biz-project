import React from "react";
import "../../../../assets/css/cssAdmin/style.css";
import { compose } from "redux";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import { deleteCategory } from "../../../../redux/category/actions";

const CategoryItem = (props) => {
    const category = props.category;
    const delCategory = (id) => {
        props.deleteCategory(id);
    };
    return (
        <tr>
            <td>
                <input value={category.name} />
            </td>
            <td>
                <button
                    to={"/category/" + category.id}
                    className="btn btn-danger"
                    onClick={() => delCategory(category.id)}
                >
                    Xóa
                </button>
            </td>
        </tr>
    );
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCategory: (id) => dispatch(deleteCategory(id, props)),
    };
};
export default compose(
    withFirestore,
    connect(null, mapDispatchToProps)
)(CategoryItem);
