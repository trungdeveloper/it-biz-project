import React from "react";
import { Link } from "react-router-dom";
import DonationSummary from "./donation-summary";
import { useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const RandomDonation = () => {
    const donations = useSelector((state) => state.firestore.ordered.donation);

    return (
        <>
            {donations?.map((donation) => (
                <div
                    key={donation.id}
                    className="col-xs-3 col-sm-6 col-md-6 col-lg-3"
                >
                    <Link to={`/donationDetail/${donation.id}`}>
                        <DonationSummary donation={donation} />
                    </Link>
                </div>
            ))}
        </>
    );
};

export default compose(
    firestoreConnect([{ collection: "donation", limit: 4 }])
)(RandomDonation);
