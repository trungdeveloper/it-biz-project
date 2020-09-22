import React, { useState, useRef } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../cssAdmin/style.css";
import DonatedItem from "./donatedItem";
import { BsSearch } from "react-icons/bs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import Pagination from "react-js-pagination";
import IMG from "./../../../../assets/image/loading.gif";
const DonatedList = (props) => {
    const [pageChange, handlePageChange] = useState({
        activePage: 1,
    });
    const maxRecords = 5;
    const maxDisplay = 5;

    const donateds = props.donated;
    const donatedItems =
        donateds &&
        donateds.map((c, index) => {
            const start = maxRecords * pageChange.activePage - maxRecords;
            const end = start + maxRecords;

            /**
             * DEV NOTES
             * Render more than start point and less than end point
             * In this case it will be return maxRecords + 1 items
             * We can disable equal in the condition below - recommend disable for end point
             */

            if (index >= start && index < end) {
                return <DonatedItem key={c.id} donated={c} />;
            }
        });
    const keyword = useRef("");
    const [keySearch, setSearchKey] = useState("");
    const [searchData, updateSearchData] = useState([]);
    const handleForSearch = () => {
        // let key = keyword.current.value;
        // key = key.toLowerCase();
        //  console.log(keySearch);
        const result = donateds.filter(
            (item) => item.status.toLowerCase().indexOf(keySearch) !== -1
        );
        if (result) {
            updateSearchData(result);
        } else {
            updateSearchData([]);
        }
    };
    const searchItem = searchData.map((c) => (
        <DonatedItem key={c.id} donated={c} />
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
                                    <select
                                        ref={keyword}
                                        //value={category_id}
                                        id="search"
                                        onChange={(e) =>
                                            setSearchKey(e.target.value)
                                        }
                                        style={{
                                            height: "36px",
                                            width: "100%",
                                            border: "block",
                                        }}
                                    >
                                        <option>Tìm kiếm</option>
                                        <option value="chờ trao tặng">
                                            Chờ trao tặng
                                        </option>
                                        <option value="đã trao tặng">
                                            Đã trao tặng
                                        </option>
                                    </select>
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
                                        <th>Tên tài trợ</th>
                                        <th>Hoàn cảnh</th>
                                        <th>Tình trạng</th>
                                        <th>Ngày trao tặng</th>
                                        <th>Hình ảnh</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {searchData && donatedItems ? (
                                        searchData.length ? (
                                            searchItem
                                        ) : (
                                            donatedItems
                                        )
                                    ) : (
                                        <img
                                            src={IMG}
                                            style={{
                                                marginLeft: "60%",
                                                width: "50%",
                                            }}
                                            alt="notfound"
                                        />
                                    )}
                                </MDBTableBody>
                            </MDBTable>
                            <Pagination
                                className="pagination"
                                activePage={pageChange.activePage}
                                itemsCountPerPage={maxRecords}
                                totalItemsCount={donateds ? donateds.length : 0}
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

const mapStateToProps = (state) => {
    return {
        donated: state.firestore.ordered.donated,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["donated"])
)(DonatedList);
