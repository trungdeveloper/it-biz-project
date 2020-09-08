import React from "react";
import { Product } from "../../components/sponsor/product";
import CategoryBar from "../../components/category/category-bar";

export const Donation = (props) => {
    // const id = props.match.params.id_category;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div
                        className="col-xs-3 col-sm-3 col-md-4 col-lg-3"
                        style={{ marginTop: "20px" }}
                    >
                        <CategoryBar />
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-8 col-lg-9">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <Product />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <Product />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <Product />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <Product />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export default compose;
