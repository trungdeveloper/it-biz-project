import React from "react";

export const EventSummary = ({ event }) => {
    return (
        <div>
            <div>
                <img
                    alt="event"
                    style={{ width: 100, height: 100 }}
                    src={event.img}
                />
            </div>
            <div>
                <div>{event.title}</div>
                <div>Vật phẩm trao tặng: {event.product}</div>
                <div>Nhà tài trợ: {event.sponsor}</div>
                <div>Ngày trao tặng: {event.date}</div>
                <div>Địa điểm trao tặng:{event.location}</div>
            </div>
        </div>
    );
};
