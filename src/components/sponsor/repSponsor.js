import React from "react";

export const RepSponsor = ({ sponsor }) => {
    return (
        <div>
            <div>
                <img style={{ width: 100, height: 100 }} src={sponsor.img} />
            </div>
            <div>{sponsor.name}</div>
        </div>
    );
};
