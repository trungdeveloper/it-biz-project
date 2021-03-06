import React, { useState, useRef } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../cssAdmin/style.css";
import PlightItem from "./plightItem";
import { BsSearch } from "react-icons/bs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import Pagination from "react-js-pagination";

import IMG from "./../../../../assets/image/loading.gif";
const PlightList = (props) => {
    const [pageChange, handlePageChange] = useState({
        activePage: 1,
    });
    const handleSaveDonation = (donorId, plightId) => {
        /**
         * Hanlde for saving donations
         */
        if (donorId != null) {
            props.firestore
                .collection("donated")
                .add({
                    donation_id: donorId,
                    plight_id: plightId,
                    status: "chờ trao tặng",
                })
                .then(() => {
                    /**
                     * Start to handle update the status
                     */
                    props.firestore
                        .collection("donation")
                        .doc(donorId)
                        .update({
                            status: "chờ trao tăng",
                        })
                        .then(() => {})
                        .catch((error) => {
                            console.log(error);
                        });
                    props.firestore
                        .collection("plight")
                        .doc(plightId)
                        .update({
                            status: "chờ trao tăng",
                        })
                        .then(() => {})
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert("Chọn vật phẩm tài trợ");
        }
    };
    const maxRecords = 10;
    const maxDisplay = 5;

    const plights = props.plights;
    const plihtItems =
        plights &&
        plights.map((c, index) => {
            const start = maxRecords * pageChange.activePage - maxRecords;
            const end = start + maxRecords;

            /**
             * DEV NOTES
             * Render more than start point and less than end point
             * In this case it will be return maxRecords + 1 items
             * We can disable equal in the condition below - recommend disable for end point
             */

            if (index >= start && index < end) {
                return (
                    <PlightItem
                        handleSaveDonation={handleSaveDonation}
                        key={c.id}
                        plight={c}
                    />
                );
            }
        });

    const keyword = useRef("");
    const [searchData, updateSearchData] = useState([]);

    const handleForSearch = () => {
        let key = keyword.current.value;
        key = key.toLowerCase();

        const result = plights.filter(
            (item) => item.need.toLowerCase().indexOf(key) !== -1
        );

        if (result) {
            updateSearchData(result);
        } else {
            updateSearchData([]);
        }
    };
    const searchItem = searchData.map((c) => (
        <PlightItem key={c.id} plight={c} />
    ));
    // console.log("vi111", plihtItems.keys(props.plight).length);

    return (
        <div className="row" style={{ marginTop: "0rem" }}>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card">
                    <h5 className="card-header">Danh sách Hoàn Cảnh</h5>
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
                            <MDBTable striped bordered small>
                                <MDBTableHead>
                                    <tr>
                                        <th>Tiêu đề</th>
                                        <th>Chi Tiết</th>
                                        <th>Tình trang</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {searchData && plihtItems ? (
                                        searchData.length ? (
                                            searchItem
                                        ) : (
                                            plihtItems
                                        )
                                    ) : (
                                        <img
                                            src={IMG}
                                            style={{
                                                marginLeft: "40%",
                                                width: "50%",
                                            }}
                                        />
                                    )}{" "}
                                    {/* {console.log("hoa", searchData.length)}
                                    {searchData.length === 0 ? (
                                        <h1>Không có hoàn cảnh nào</h1>
                                    ) : null} */}
                                </MDBTableBody>
                            </MDBTable>
                            <Pagination
                                className="pagination"
                                activePage={pageChange.activePage}
                                itemsCountPerPage={maxRecords}
                                totalItemsCount={plights ? plights.length : 0}
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
    const plights = !props.request
        ? state.firestore.ordered.plight
        : state.firestore.ordered.plight?.filter(
              (e) => e.status === "chờ xác nhận"
          );
    //console.log(donations);
    return {
        plights,
        firebase: state.firebase,
        firestore: state.firestore,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["plight"])
)(PlightList);
