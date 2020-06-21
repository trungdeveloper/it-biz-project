import * as types from './types';
import IMG from "../../assets/image/Capture.PNG";

const initialState = {
    events: [
        {
            title: 'TRAO TANG QUA',
            img: IMG,
            product: 'Am sieu toc',
            sponsor: 'Trung',
            date: '12/01/1999',
            location: '101B Le Huu Trac',
        },
        {
            title: 'TRAO TANG QUA',
            img: IMG,
            product: 'Am sieu toc',
            sponsor: 'Trung',
            date: '12/01/1999',
            location: '101B Le Huu Trac',
        },
        {
            title: 'TRAO TANG QUA',
            img: IMG,
            product: 'Am sieu toc',
            sponsor: 'Trung',
            date: '12/01/1999',
            location: '101B Le Huu Trac',
        },
    ],
};

const eventReducer = (state = initialState, action) => {
    switch (action.types) {
        case types.GET_EVENTS:
            return {
                ...state,
            }
            break;
        default:
            return {
                ...state
            }
    }
}
export default eventReducer;