import React from "react";

import { PlightLayout } from "./plightLayout/plightLayout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const PlightDifficult = ({ plights }) => {
    return (
        <div>
            <h1>Hoàn cảnh khó khăn</h1>
            <div className="row">
                {plights.map((e, i) => (
                    <Link to={"/plight/" + e.id} key={e.id}>
                        <PlightLayout plight={e} key={i} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        plights: state.plight.plights,
    };
};

export default connect(mapStateToProps)(PlightDifficult);
