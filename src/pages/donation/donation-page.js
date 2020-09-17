import React from "react";
import DonationSummary from "../../components/donation/donation-summary";
import CategoryBar from "../../components/category/category-bar";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DonationPage = (props) => {
    const id = props.match.params.id_category;
    const donations = useSelector((state) => state.firestore.ordered.donation);
    const donationOutput = id
        ? donations?.filter((donation) => donation.category_id === id)
        : donations;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div
                        className="col-xs-3 col-sm-3 col-md-4 col-lg-3"
                        style={{ marginTop: "20px" }}
                    >
                        <CategoryBar />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-8 col-lg-9">
                        <div className="row">
                            {donationOutput && !donationOutput[0] && (
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <p>
                                        Hiện danh mục này chưa có vật phẩm nào
                                    </p>
                                </div>
                            )}
                            {donationOutput &&
                                donationOutput.map((donation) => (
                                    <div
                                        key={donation.id}
                                        className="col-xs-12 col-sm-12 col-md-6 col-lg-4 donation"
                                    >
                                        <Link
                                            to={`/donationDetail/${donation.id}`}
                                        >
                                            <DonationSummary
                                                donation={donation}
                                            />
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default compose(firestoreConnect(["donation"]))(DonationPage);
