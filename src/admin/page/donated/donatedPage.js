import React from "react";
import "../../cssAdmin/style.css";
import { Donated } from "../../components/donated/donated";
export const DonatedPage = () => {
    return (
        <div className="dashboard-main-wrapper">
            <Donated />
        </div>
    );
};
