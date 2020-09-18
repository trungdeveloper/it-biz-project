
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import "../../../cssAdmin/style.css";
import { RiReplyAllLine ,RiFolderAddLine} from "react-icons/ri";
import { createCategory } from "../../../../redux/admin/category/actions";
import { FcCancel } from "react-icons/fc";
class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
             name: "",
            message: '',
        button: 0 };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            message:''
        })
    }
    handleCancelne = () =>{
        this.setState({
            message: ''
        })
        document.getElementById("form-th").style.display = "none"
    }
    
    handleSubmit = (e) => {
        var {name}=this.state;
        e.preventDefault();
        if(name!==''){
            this.props.CreateCategory(this.state);
            document.getElementById("form-th").style.display = "none"
        }
        if(name===''){
            this.setState({
                message: 'Nhập thể loại'
            })
        }
    }
    render() {
        return (
            <div
                className="card-body border-top"
                id="form-th"
                style={{ display: "none" ,borderStyle:"groove"}}
            >
                <h3>ThêmThể Loại</h3>
                <form onSubmit={this.handleSubmit} id="form-th" >
                    <div className="form-group">
                        <label htmlFor="name" className="col-form-label">
                            Tên thể loại
                            </label>
                        <input
                            id="name"
                            type="text"
                            className="form-control form-control-sm"
                            onChange={this.handleChange}
                        />
                        <p id='message' style={{color:"red"}}>{this.state.message}</p>
                    </div>
                    <button 
                    onclick={()=>{this.setState({button: 1})}}
                    className="btn btn-success"
                    style={{ marginLeft: "30px" }} ><RiFolderAddLine/></button>
                    <button
                        onclick={()=>(document.getElementById(
                            "form-th"
                        ).style.display = "none")}
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                    >
                        <FcCancel />
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