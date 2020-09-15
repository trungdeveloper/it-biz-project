import React from "react";
import { firestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { compose } from "redux";
import "./donation.css";

const DonationSummary = ({ donation }) => {
    const users = useSelector((state) => state.firestore.ordered.users);
    const user = users?.find((user) => user.id === donation.uid);

    return (
        <div>
            <div className="swiper-container causes-slider ">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="cause-wrap">
                            <figure>
                                <img src={donation.imgUrl} alt="Logo" />
                            </figure>
                            <div className="cause-content-wrap">
                                <header className="entry-header d-flex flex-wrap align-items-center">
                                    <h3 className="entry-title w-100 m-0">
                                        {donation.name}
                                    </h3>

                                    <div className="posted-date">
                                        {donation.date}
                                    </div>

                                    <div className="posted-date">
                                        {donation.address}
                                    </div>
                                    <div className="cats-links ">
                                        {user && user.username}
                                    </div>
                                </header>
                                <div
                                    className="description entry-content"
                                    style={{ marginTop: "5px" }}
                                >
                                    <p>{donation.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default compose(firestoreConnect(["users"]))(DonationSummary);
