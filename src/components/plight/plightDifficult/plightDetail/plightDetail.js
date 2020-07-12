import React from "react";
import { connect } from "react-redux";

const PlightDetail = ({ plight }) => {
    return (
        <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="disadvantaged-image">
                    <img alt="plight" src={plight.img} />
                </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="disadvantaged-content">
                    <p>Họ Tên: {plight.name}</p>
                    <p>{plight.summary}</p>
                    <p>Nội Dung:{plight.description}</p>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const plights = state.plight.plights;
    const plight = plights.filter((e) => e.id === id)[0];
    return {
        plight,
    };
};

export default connect(mapStateToProps)(PlightDetail);
