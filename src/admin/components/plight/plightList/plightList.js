import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import "../../../cssAdmin/style.css";
import PlightItem from "./plightItem";
import { BsSearch } from "react-icons/bs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const PlightList = (props) => {
    const plights = props.plights;

    const handleSaveDonation = (donorId, plightId) => {
        console.log([donorId, plightId]);
        console.log(props.firestore);

        /**
         * Hanlde for saving donations
         */
        props.firestore
            .collection("donated")
            .add({
                donorId,
                plightId,
            })
            .then(() => {
                /**
                 * Start to handle update the status
                 */
                props.firestore
                    .collection("donation")
                    .doc(donorId)
                    .update({
                        status: "trao tanged",
                    })
                    .then(() => {})
                    .catch((error) => {
                        console.log(error);
                    });

                props.firestore
                    .collection("plight")
                    .doc(plightId)
                    .update({
                        status: "trao tanged",
                    })
                    .then(() => {})
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const plihtItems =
        plights &&
        plights.map((c) => (
            <PlightItem
                handleSaveDonation={handleSaveDonation}
                key={c.id}
                plight={c}
            />
        ));

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
                            <MDBTable striped bordered small>
                                <MDBTableHead>
                                    <tr>
                                        <th>Tiêu đề</th>
                                        <th>Chi Tiết</th>
                                        <th>Tình trang</th>
                                        <th>Liên hệ</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>{plihtItems}</MDBTableBody>
                            </MDBTable>
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
