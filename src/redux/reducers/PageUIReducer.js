import { PAGE_UI_ACTION_ENUM } from '../actions/PageUIActions';

const INITIAL_STATE = {
    selectedPage: '',

};

const pageUIReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAGE_UI_ACTION_ENUM.SELECT_PAGE:
            return selectPage(action, state);
        default:
            return state;
    }
};

const selectPage = (action, state) => {
    return Object.assign({}, state, { selectedPage: action.payload.selectedPage });
};


export default pageUIReducer;
