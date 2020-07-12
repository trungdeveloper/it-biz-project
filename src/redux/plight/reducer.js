import * as types from "./types";
import IMG from "../../assets/image/Capture.PNG";

const initialState = {
    plights: [
        {
            id: "1",
            img: IMG,
            name: "Nguyen Tan Trung",
            summary: "Huy cần tiền mua điện thoại mới mong mọi người giúp đỡ",
            description:
                "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
        },
        {
            id: "2",
            img: IMG,
            name: "Nguyen Tan Trung",
            summary: "Huy cần tiền mua điện thoại mới mong mọi người giúp đỡ",
            description:
                "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
        },
        {
            id: "29",
            img: IMG,
            name: "Nguyen Tan Trung",
            summary: "Huy cần tiền mua điện thoại mới mong mọi người giúp đỡ",
            description:
                "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
        },
        {
            id: "3",
            img: IMG,
            name: "Nguyen Tan Trung",
            summary: "Huy cần tiền mua điện thoại mới mong mọi người giúp đỡ",
            description:
                "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
        },
        {
            id: "4",
            img: IMG,
            name: "Nguyen Tan Trung",
            summary: "Huy cần tiền mua điện thoại mới mong mọi người giúp đỡ",
            description:
                "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
        },
        {
            id: "5",
            img: IMG,
            name: "Nguyen Tan Trung",
            summary: "Huy cần tiền mua điện thoại mới mong mọi người giúp đỡ",
            description:
                "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
        },
        {
            id: "6",
            img: IMG,
            name: "Nguyen Tan Trung",
            summary: "Huy cần tiền mua điện thoại mới mong mọi người giúp đỡ",
            description:
                "Vi khong co laptop de choi game nen tuan nao Trung cung mat tu 100k tro len de choi game",
        },
    ],
};

const plightReducer = (state = initialState, action) => {
    switch (action.types) {
        case types.GET_PLIHGTS:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};
export default plightReducer;
