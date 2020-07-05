import React from "react";

export const EventSummary = ({event}) => {
    return (
        <div className="event-item">
            <div className="event-image"> 
                <img alt="event" src={event.img}/>
            </div>
            <div className="event-content">
                <div>{event.title}</div>
                <div>Vật phẩm trao tặng: {event.product}</div>
                <div>Nhà tài trợ: {event.sponsor}</div>
                <div>Ngày trao tặng: {event.date}</div>
                <div>Địa điểm trao tặng:{event.location}</div>
                <button className="event-btn-view-more">Xem thêm thông tin</button>
            </div>
        </div>
    );
}
