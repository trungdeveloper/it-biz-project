import React from "react";
import { Link } from "react-router-dom";
import "./plight-style.css";

export const PlightSummary = ({ plight }) => {
    return (
        <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
            <div className="cause-wrap">
                <figure className="m-0">
                    <img src={plight.imgUrl} alt="Logo" />
                    <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                        <Link
                            to={`/donate/${plight.id}`}
                            className="btn gradient-bg mr-2"
                        >
                            Tài trợ
                        </Link>
                    </div>
                </figure>

                <div
                    className="cause-content-wrap"
                    style={{ border: "1px solid #e0e0e0" }}
                >
                    <header className="entry-header d-flex flex-wrap align-items-center">
                        <h3 className="entry-title w-100 m-0">
                            <Link to={`/plightDetail/` + plight.id}>
                                {plight.need}
                            </Link>
                        </h3>
                        <div className="posted-date">
                            <Link to={`/plightDetail/` + plight.id}>
                                {plight.date}
                            </Link>
                        </div>
                        <div className="posted-date">
                            <Link to={`/plightDetail/` + plight.id}>
                                {plight.address}
                            </Link>
                        </div>
                        <div className="cats-links ">
                            <Link to={`/plightDetail/` + plight.id}>
                                {plight.name}
                            </Link>
                        </div>
                    </header>

                    <div className="entry-content">
                        <p className="m-0">{plight.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
