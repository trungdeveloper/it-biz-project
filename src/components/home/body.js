import React from "react";
import "./body.css";
import IMG from "../../assets/image/Capture.PNG";

import { EventSummary } from "../event/eventSumary";
import { NewPlight } from "../plight/newPlight";
import { RepSponsor } from "../sponsor/repSponsor";
import { connect } from "react-redux";

const Body = ({ events }) => {
    const plight = {
        img: IMG,
        name: "Nguyen Tan Trung",
        need: "Can LapTop de choi game",
        description:
            "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
    };
    const repSponsers = [
        {
            img: IMG,
            name: "Trung Nguyen",
        },
        {
            img: IMG,
            name: "Trung Nguyen",
        },
        {
            img: IMG,
            name: "Trung Nguyen",
        },
    ];
    return (
        <div className="container">
            <div className="row">
                <div>
                    <h4>SỰ KIỆN SẮP TỚI</h4>
                    {events.map((e, i) => (
                        <EventSummary key={i} event={e} />
                    ))}
                </div>
                <div>
                    <h4>HOÀN CẢNH MỚI CẦN ĐƯỢC HỔ TRỢ</h4>
                    <NewPlight plight={plight} />
                </div>
            </div>
            <div>
                <div>CÁC NHÀ TÀI TRỢ TIÊU BIỂU TRONG THÁNG</div>
                <div className="slide">
                    {repSponsers.map((e, i) => (
                        <RepSponsor sponsor={e} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        events: state.event.events,
    };
};

export default connect(mapStateToProps)(Body);
