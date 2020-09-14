import React, { useState, useRef } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../cssAdmin/style.css";
import DonatedItem from "./donatedItem";
import { BsSearch } from "react-icons/bs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
const DonatedList = (props) => {
    const donateds = props.donated;
    console.log("aliiii", donateds);
    const donatedItems =
        donateds && donateds.map((c) => <DonatedItem key={c.id} donated={c} />);
    // const keyword = useRef("");
    // const [searchData, updateSearchData] = useState([]);

    // const handleForSearch = () => {
    //     let key = keyword.current.value;
    //     key = key.toLowerCase();

    //     const result = donations.filter(
    //         (item) => item.name.toLowerCase().indexOf(key) !== -1
    //     );

    //     if (result) {
    //         updateSearchData(result);
    //     } else {
    //         updateSearchData([]);
    //     }
    // };

    // const searchItem = searchData.map((c) => (
    //     <DonationItem key={c.id} donation={c} />
    // ));

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
                                        <th>Tên</th>
                                        <th>Ngày</th>
                                        <th>Tóm tắt</th>
                                        <th>Trạng Thái</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>{donatedItems}</MDBTableBody>
                            </MDBTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    console.log("vi", state.firestore.ordered.donated);
    return {
        donated: state.firestore.ordered.donated,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["donated"])
)(DonatedList);
