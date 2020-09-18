import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../cssAdmin/style.css";
import DonatedItem from "./donatedItem";
import { BsSearch } from "react-icons/bs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import IMG from "./../../../../assets/image/loading.gif";
const DonatedList = (props) => {
    const donateds = props.donated;
    const donatedItems =
        donateds && donateds.map((c) => <DonatedItem key={c.id} donated={c} />);

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
                                        // ref={keyword}
                                        type="search"
                                        className="form-control form-control-sm"
                                        placeholder=""
                                        aria-controls="DataTables_Table_0"
                                    />
                                </div>
                                <div className="col-3">
                                    <button
                                        // onClick={handleForSearch}
                                        className="btn btn-success"
                                    >
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
                                        <th>Tên tài trợ</th>
                                        <th>Hoàn cảnh</th>
                                        <th>Tình trạng</th>
                                        <th>Ngày trao tặng</th>
                                        <th>Hình ảnh</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {donatedItems ? (
                                        donatedItems
                                    ) : (
                                        <img
                                            src={IMG}
                                            style={{
                                                marginLeft: "70%",
                                                width: "60%",
                                            }}
                                        />
                                    )}
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        donated: state.firestore.ordered.donated,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["donated"])
)(DonatedList);
