import React from "react";
import "../../cssAdmin/style.css";
import { Plight } from "../../components/plight/plight";
export const PlightRequestPage = () => {
    return (
        <div className="dashboard-main-wrapper">
            <Plight request />
        </div>
    );
};
