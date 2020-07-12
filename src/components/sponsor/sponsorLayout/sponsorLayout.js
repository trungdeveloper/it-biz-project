import React from "react";

export const SponsorLayout = ({ sponsor }) => {
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            
            <div class="row">
            <div className="disadvantaged-image">
                <img
                    alt="plight"
                    src={sponsor.img}
                    width="150px"
                    height="150px"
                />
            </div>
            <div className="disadvantaged-content">
                <p>
                    {sponsor.name}
                </p>
            </div>
            </div>
            
            
        </div>
    );
};
