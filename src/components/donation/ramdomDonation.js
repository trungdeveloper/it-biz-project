import React from "react";
import { Link } from "react-router-dom";
import DonationSummary from "./donation-summary";
import { useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const RandomDonation = ({ except }) => {
    const donations = useSelector((state) => state.firestore.ordered.donation);
    const filterDonations = donations?.filter(
        (donation) => donation.id !== except
    );
    const randomDonation = [];

    if (filterDonations) {
        for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(
                Math.random() * Math.floor(filterDonations.length - 1)
            );
            randomDonation.push(filterDonations?.[randomNumber]);
            filterDonations.splice(randomNumber, 1);
            console.log(filterDonations);
        }
    }

    return (
        <>
            {randomDonation.map((donation) => (
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

export default compose(firestoreConnect(["donation"]))(RandomDonation);
