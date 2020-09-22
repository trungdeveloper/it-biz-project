import React from "react";
import "../../cssAdmin/style.css";
import { Donation } from "../../components/donation/donation";
export const DonationRequestPage = () => {
    return (
        <div className="dashboard-main-wrapper">
            <Donation request />
        </div>
    );
};
