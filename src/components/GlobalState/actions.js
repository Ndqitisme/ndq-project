import { CHANGE_ID_PAGE } from './constants';

export const changeIdPage = (payload) => {
    return {
        type: CHANGE_ID_PAGE,
        payload,
    };
};
