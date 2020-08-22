import React from "react";
import { compose } from "redux";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../../assets/css/cssAdmin/style.css";
import CategoryItem from "./categoryItem";
const CategoryList = (props) => {
    const categories = props.categories;
    const categoryItems =
        categories &&
        categories.map((c) => <CategoryItem key={c.name} category={c} />);
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Basic Table</h5>
                    <div className="row" style={{ marginTop: "15px" }}>
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-6">
                            <div className="row">
                                <div
                                    id="DataTables_Table_0_filter"
                                    className="dataTables_filter col-9"
                                >
                                    <input
                                        type="search"
                                        className="form-control form-control-sm"
                                        placeholder=""
                                        aria-controls="DataTables_Table_0"
                                    />
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-success">
                                        search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered first">
                                <thead>
                                    <tr>
                                        <th>Tên</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>{categoryItems}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.firestore.ordered.categories,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "categories" }])
)(CategoryList);
