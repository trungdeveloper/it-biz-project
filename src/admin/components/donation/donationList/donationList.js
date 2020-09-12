import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../cssAdmin/style.css";
import DonationItem from "./donationItem";
import { BsSearch } from "react-icons/bs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
const DonationList = (props) => {
    const donations = props.donations;
    const donationItems =
        donations &&
        donations.map((c) => <DonationItem key={c.id} donation={c} />);
    return (
        <div className="row" style={{ marginTop: "0rem" }}>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Danh sách tài trợ</h5>
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
                                        <BsSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <MDBTable
                                striped
                                bordered
                                small
                                //  className="table table-striped table-bordered first"
                            >
                                <MDBTableHead>
                                    <tr>
                                        <th>Tên</th>
                                        <th>Ngày</th>
                                        <th>Tóm tắt</th>
                                        <th>Thể Loại</th>
                                        <th>Trạng Thái</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>{donationItems}</MDBTableBody>
                            </MDBTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    const donations = !props.request
        ? state.firestore.ordered.donation
        : state.firestore.ordered.donation?.filter(
              (e) => e.status === "Chờ xác nhận"
          );
    //console.log(donations);
    return {
        donations,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["donation"])
)(DonationList);
