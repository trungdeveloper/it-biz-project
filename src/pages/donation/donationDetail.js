import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import RandomDonation from "../../components/donation/ramdomDonation";

const DonationDetail = (props) => {
    const users = useSelector((state) => state.firestore.ordered.users);
    const donationId = props.match.params.donation_id;
    const donation = useSelector(
        (state) => state.firestore.data.donation?.[donationId]
    );
    const user = users?.find((user) => user.id === donation.uid);

    const renderDonationDetail = () => {
        return (
            <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-12 col-lg-5 order-1 order-lg-1">
                    <img src={donation.imgUrl} alt="" />
                </div>
                <div className="col-12 col-lg-7 order-2 order-lg-2">
                    <div className="section-heading">
                        <h2 className="entry-title"> {donation.name}</h2>
                    </div>
                    <div className="entry-content">
                        <p className="description">
                            Mô tả: {donation.description}
                        </p>
                        <p>Nhà tài trợ: {user?.username}</p>
                        <p>Số điện thoại: {user?.phone}</p>
                        <p>Địa chỉ: {user?.address}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    {donation && renderDonationDetail(donation)}
                </div>
                <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-12 col-lg-12">
                        <div className="upcoming-events">
                            <div className="section-heading">
                                <h2 className="entry-title">
                                    Vật phẩm trao tặng khác
                                </h2>
                            </div>
                        </div>
                    </div>
                    <RandomDonation />
                </div>
            </div>
        </div>
    );
};

export default compose(
    firestoreConnect((props) => [
        { collection: "donation", doc: props.match.params.donation_id },
    ])
)(DonationDetail);
