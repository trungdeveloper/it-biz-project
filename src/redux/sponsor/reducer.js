import * as types from "./types";
import IMG from "../../assets/image/Capture.PNG";

const initialState = {
    sponsors: [
        {
            id: 1,
            img: IMG,
            name:"Hoàng Thanh Vi"
        },
        {
            id: 2,
            img: IMG,
            name:"Hoàng Thanh Vi"
        },
        {
            id: 3,
            img: IMG,
            name:"Hoàng Thanh Vi"
        },
        {
            id: 4,
            img: IMG,
            name:"Hoàng Thanh Vi"
        },
        {
            id: 5,
            img: IMG,
            name:"Hoàng Thanh Vi"
        },
    ],
};

const sponsorReducer = (state = initialState, action) => {
    switch (action.types) {
        case types.GET_SPONSORS:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};
export default sponsorReducer;
