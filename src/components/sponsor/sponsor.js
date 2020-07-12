import React from "react";

import { SponsorLayout } from "./sponsorLayout/sponsorLayout";
import { connect } from "react-redux";
const Sponsor = ({ sponsors }) => {
    return (
        <div>
            <h1>Danh Sách nhà tài trợ</h1>
            <div className="row">
                {sponsors.map((e, i) => (
                    <SponsorLayout sponsor={e} key={i} />  
                ))}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        sponsors: state.sponsor.sponsors,
    };
};

export default connect(mapStateToProps)(Sponsor);
