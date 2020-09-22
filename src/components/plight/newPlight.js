import React from "react";
import { Link } from "react-router-dom";
import "./plight-style.css";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const NewPlight = ({ index }) => {
    const plights = useSelector((state) => state.firestore.ordered.plight);
    const plight = plights?.filter((plight) => plight.status === "xác nhận")[
        index
    ];

    return plight ? (
        <div className="cause-wrap d-flex flex-wrap justify-content-between">
            <figure className="m-0">
                <Link to="/PlightDetailPage">
                    <img
                        src={plight.imgUrl}
                        alt="Logo"
                        style={{ height: "300px", width: "250px" }}
                    />
                </Link>
            </figure>
            <div className="cause-content-wrap">
                <header className="entry-header d-flex flex-wrap align-items-center">
                    <h3 className="entry-title w-100 m-0">
                        <Link to="#">{plight.name}</Link>
                    </h3>
                    <div className="posted-date">
                        <Link to="#">{plight.date}</Link>
                    </div>
                    <div className="posted-date">
                        <Link to="#">{plight.address}</Link>
                    </div>
                    <div className="cats-links ">
                        <Link to="#">{plight.name}</Link>
                    </div>
                </header>
                <div className="entry-content">
                    <p className="m-0">{plight.description}</p>
                </div>
                <div className="entry-footer mt-5">
                    <Link
                        to={`/donate/${plight.id}`}
                        className="btn gradient-bg mr-2"
                    >
                        Tài trợ
                    </Link>
                </div>
            </div>
        </div>
    ) : null;
};

export default compose(
    firestoreConnect([{ collection: "plight", orderBy: ["date", "desc"] }])
)(NewPlight);
