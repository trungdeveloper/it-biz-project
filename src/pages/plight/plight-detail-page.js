import React from "react";
import PlightDetail from "../../components/plight/plightDetail";
import RandomPlight from "../../components/plight/randomPlights";
import { useSelector } from "react-redux";

export const PlightDetailPage = (props) => {
    const plightId = props.match.params.plight_id;
    const plight = useSelector(
        (state) => state.firestore.data.plight?.[plightId]
    );

    return (
        <div className="single-page causes-page">
            <div className="featured-cause">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <PlightDetail plight={plight} id={plightId} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-12 col-lg-12">
                            <div className="upcoming-events">
                                <div className="section-heading">
                                    <h2 className="entry-title">
                                        Hoàn cảnh khác
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <RandomPlight />
                    </div>
                </div>
            </div>
        </div>
    );
};
