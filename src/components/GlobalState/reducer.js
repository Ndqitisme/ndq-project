import { CHANGE_ID_PAGE } from './constants';

const initState = {
    idPage: 1,
    contentMain: 'NDQ Project Web',

    userActive: false,
    userData: {},
};

function reducer(state, action) {
    switch (action.type) {
        case CHANGE_ID_PAGE:
            return {
                ...state,
                idPage: action.payload,
            };
        default:
            throw new Error('Không tồn tại hành động này');
    }
}

export default reducer;
export { initState };
