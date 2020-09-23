import React from "react";
import NewPlightItem from "../../components/plight/newPlight";
import { PlightSummary } from "../../components/plight/plightSummary";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { useSelector } from "react-redux";

const Plight = () => {
    const plights = useSelector((state) => state.firestore.ordered.plight);
    const filterPlight = plights?.filter(
        (plight) => plight.status === "xác nhận"
    );

    return (
        <div className="single-page causes-page">
            <div className="featured-cause">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <NewPlightItem index={0} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <NewPlightItem index={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row">
                        {filterPlight &&
                            filterPlight.map(
                                (plight, index) =>
                                    index > 1 && (
                                        <PlightSummary plight={plight} />
                                    )
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default compose(
    firestoreConnect([{ collection: "plight", orderBy: ["date", "desc"] }])
)(Plight);
