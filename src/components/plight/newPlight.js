import React from "react";

export const NewPlight = ({ plight }) => {
    return (
        <div className="disadvantaged-item">
            <div className="disadvantaged-image">
                <img alt="plight" src={plight.img} />
            </div>
            <div className="disadvantaged-content">
                <div>
                    `${plight.name} - ${plight.need}`
                </div>
                <div>{plight.description}</div>
                <button className="disadvantaged-btn-donate">
                    Tài Trợ Ngay
                </button>
            </div>
        </div>
    );
};
