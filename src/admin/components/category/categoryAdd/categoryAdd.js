
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import "../../../../assets/css/cssAdmin/style.css";
import { createCategory } from "../../../../redux/category/actions";
class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.CreateCategory(this.state);
    }
    render() {
        return (
            <div
                className="card-body border-top"
                id="form-th"
                style={{ display: "none" }}
            >
                <h3>Thể Loại</h3>
                <form onSubmit={this.handleSubmit} id="form-th">
                    <div className="form-group">
                        <label htmlFor="name" className="col-form-label">
                            Tên thể loại
                            </label>
                        <input
                            id="name"
                            type="text"
                            className="form-control form-control-sm"
                            onChange={this.handleChange} required
                        />
                    </div>
                    <button className="btn btn-success"
                        onClick={() =>
                            (document.getElementById(
                                "form-th"
                            ).style.display = "none")
                        }>Cập nhật</button>
                    <button
                        onClick={() =>
                            (document.getElementById(
                                "form-th"
                            ).style.display = "none")
                        }
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        cancel
                        </button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        CreateCategory: category => dispatch(createCategory(category, ownProps))
    }
}

export default compose(withFirestore, connect(mapStateToProps, mapDispatchToProps))(CreateCategory)