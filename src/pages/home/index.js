import React from "react";
import { Carousel } from "../../components/home/carousel";
import { Event } from "../../components/event/event";
import NewPlightItem from "../../components/plight/newPlight";
import RandomDonation from "../../components/donation/ramdomDonation";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import RandomPlight from "../../components/plight/randomPlights";

export const Home = () => {
    const uid = useSelector((state) => state.firebase.auth.uid);
    return uid === "GxIEZwxv0ab7cNADjnojaIvrwKW2" ? (
        <Redirect to="/category" />
    ) : (
        <div>
            <Carousel />
            <div className="featured-cause">
                <div className="container">
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-12 col-lg-6">
                            <div className="upcoming-events">
                                <div className="section-heading">
                                    <h2
                                        className="entry-title"
                                        style={{ marginBottom: "20px" }}
                                    >
                                        Sự Kiện Sắp Tới
                                    </h2>
                                </div>
                            </div>
                            <Event />
                            <div style={{ marginBottom: "50px" }} />
                            <Event />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="featured-cause">
                                <div className="section-heading">
                                    <h2
                                        className="entry-title"
                                        style={{ marginBottom: "20px" }}
                                    >
                                        Hoàn Cảnh Mới Cần Hỗ Trợ
                                    </h2>
                                </div>
                            </div>
                            <NewPlightItem index={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="upcoming-events">
                                <div className="section-heading">
                                    <h2 className="entry-title">
                                        Hoàn Cảnh Khó Khăn
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <RandomPlight />
                    </div>
                </div>
            </div>
            <div className="our-causes">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div
                                className="upcoming-events"
                                style={{ marginTop: "20px" }}
                            >
                                <div className="section-heading">
                                    <h2 className="entry-title">
                                        Vật phẩm được tặng
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <RandomDonation />
                    </div>
                </div>
            </div>
        </div>
    );
};
