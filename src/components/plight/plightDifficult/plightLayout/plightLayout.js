import React from "react";

export const PlightLayout = ({ plight }) => {
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="disadvantaged-image">
                <img
                    alt="plight"
                    src={plight.img}
                    width="150px"
                    height="150px"
                />
            </div>
            <div className="disadvantaged-content">
                <p>
                    {plight.name}-{plight.summary}
                </p>
            </div>
        </div>
    );
};
