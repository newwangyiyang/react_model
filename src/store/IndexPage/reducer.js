import * as IndexPage from './action-type';

const defaultState = {
    userInfo: {}
};

export const ajaxStore = (state=defaultState, action) => {
    switch (action.type) {
        case IndexPage.AJAX_STORE:
            state.userInfo = action.data;
            return {...state};
        default:
            return state;
    }
};