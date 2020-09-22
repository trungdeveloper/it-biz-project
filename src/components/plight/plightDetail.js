import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const PlightDetail = ({ plight, id }) => {
    const user = useSelector(
        (state) => state.firestore.data.users[plight?.uid]
    );
    // const user = users?.find((user) => user.id === plight?.uid);

    return (
        <div className="cause-wrap d-flex flex-wrap justify-content-between">
            <figure className="m-0">
                <img
                    src={plight && plight.imgUrl}
                    alt="Logo"
                    style={{ height: "300px", width: "250px" }}
                />
            </figure>
            <div className="cause-content-wrap">
                <div className="row">
                    <div className="upcoming-events">
                        <div className="section-heading">
                            <h2 className="entry-title">
                                {plight && plight.need}
                            </h2>
                        </div>
                    </div>
                </div>
                <header className="entry-header d-flex flex-wrap align-items-center">
                    <div className="posted-date">
                        <Link to="#">{plight && plight.date}</Link>
                    </div>

                    <div className="posted-date">
                        <Link to="#">{plight && plight.address}</Link>
                    </div>
                    <div className="cats-links ">
                        <Link to="#">{plight && plight.name}</Link>
                    </div>
                </header>

                <div className="entry-content">
                    <p>Họ và tên: {plight && plight.name}</p>
                    <p>Số điện thoại liên hệ: {user && user.phone}</p>
                    <p>Địa chỉ: {plight && plight.address}</p>
                    <p>Hoàn cảnh: {plight && plight.description}</p>
                </div>

                <div className="entry-footer mt-5">
                    <Link to={"/donate/" + id} className="btn gradient-bg mr-2">
                        Tài trợ ngay
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default compose(firestoreConnect(["users"]))(PlightDetail);
