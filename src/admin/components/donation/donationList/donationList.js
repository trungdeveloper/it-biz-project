import React, { useState, useRef } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../cssAdmin/style.css";
import DonationItem from "./donationItem";
import { BsSearch } from "react-icons/bs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import "./donation.style.scss";
import IMG from "./../../../../assets/image/loading.gif";
import Pagination from "react-js-pagination";
const DonationList = (props) => {
    const [pageChange, handlePageChange] = useState({
        activePage: 1,
    });
    const maxRecords = 10;
    const maxDisplay = 5;

    const donations = props.donations;
    const donationItems =
        donations &&
        donations.map((c, index) => {
            const start = maxRecords * pageChange.activePage - maxRecords;
            const end = start + maxRecords;

            /**
             * DEV NOTES
             * Render more than start point and less than end point
             * In this case it will be return maxRecords + 1 items
             * We can disable equal in the condition below - recommend disable for end point
             */

            if (index >= start && index < end) {
                return <DonationItem key={c.id} donation={c} />;
            }
        });
    const keyword = useRef("");
    const [searchData, updateSearchData] = useState([]);

    const handleForSearch = () => {
        let key = keyword.current.value;
        key = key.toLowerCase();

        const result = donations.filter(
            (item) => item.name.toLowerCase().indexOf(key) !== -1
        );

        if (result) {
            updateSearchData(result);
        } else {
            updateSearchData([]);
        }
    };

    const searchItem = searchData.map((c) => (
        <DonationItem key={c.id} donation={c} />
    ));

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
                                        ref={keyword}
                                        type="search"
                                        className="form-control form-control-sm"
                                        placeholder=""
                                        aria-controls="DataTables_Table_0"
                                    />
                                </div>
                                <div className="col-3">
                                    <button
                                        onClick={handleForSearch}
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
                                <MDBTableBody data="data-check">
                                    {searchData && donationItems ? (
                                        searchData.length ? (
                                            searchItem
                                        ) : (
                                            donationItems
                                        )
                                    ) : (
                                        <img
                                            src={IMG}
                                            style={{
                                                marginLeft: "50%",
                                                width: "50%",
                                            }}
                                        />
                                    )}
                                </MDBTableBody>
                            </MDBTable>
                            <Pagination
                                className="pagination"
                                activePage={pageChange.activePage}
                                itemsCountPerPage={maxRecords}
                                totalItemsCount={
                                    donations ? donations.length : 0
                                }
                                pageRangeDisplayed={maxDisplay}
                                onChange={(index) => {
                                    handlePageChange({ activePage: index });
                                }}
                            />
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
              (e) => e.status === "chờ xác nhận"
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
