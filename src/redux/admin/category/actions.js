import * as types from "./type";
export const createCategory = (caterory, ownProps) => {
    return (dispatch) => {
        ownProps.firestore
            .collection("categories")
            .add({
                name: caterory.name,
            })
            .then(() =>
                dispatch({ type: types.ADD_CATEGORY_SUCCESS, caterory })
            )
            .catch((err) => {
                dispatch({ type: types.ADD_CATEGORY_FAILURE, err });
            });
    };
};
export const deleteCategory = (id, ownProps) => {
    return (dispatch) => {
        ownProps.firestore
            .collection("categories")
            .doc(id)
            .delete()
            .then(() => dispatch({ type: types.DELETE_CATEGORY_SUCCESS }))
            .catch((err) => {
                dispatch({ type: types.DELETE_CATEGORY_FAILURE, err });
            });
    };
};
export const updateCategory = (category, id, props) => {
    return (dispatch) => {
        props.firestore
            .collection("categories")
            .doc(id)
            .update(category)
            .then(() => {
                dispatch({ type: types.UPDATE_CATEGORY_SUCCESS });
            })
            .catch((err) => {
                dispatch({ type: types.UPDATE_CATEGORY_FAILURE, err });
            });
    };
};
