import React from "react";

export const RepSponsor = ({ sponsor }) => {
    return (
        <div className="month-donator">
            <div className="month-donator-image">
                <img src={sponsor.img} alt="sponsor" />
            </div>
            <div className="month-donator-content">{sponsor.name}</div>
        </div>
    );
};
