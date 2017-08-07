import { PAGE_UI_ACTION_ENUM } from '../actions/PageUIActions';

const INITIAL_STATE = {
    selectedPage: '',
    openedNewsSources: [],
    selectedNewsSources: [],
};

const pageUIReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAGE_UI_ACTION_ENUM.SELECT_PAGE:
            return selectPage(action, state);
        case PAGE_UI_ACTION_ENUM.OPEN_NEWS_SOURCE:
            return openNewsSource(action, state);
        case PAGE_UI_ACTION_ENUM.SELECT_NEWS_SOURCE:
            return selectNewsSources(action, state);
        default:
            return state;
    }
};

const selectPage = (action, state) => {
    return Object.assign({}, state, { selectedPage: action.payload.selectedPage });
};

const openNewsSource = (action, state) => {
    const newsSource = action.payload.newsSource;
    const selectedSources = state.openedNewsSources;
    const index = selectedSources.indexOf(newsSource);
    let newSelectedSources;

    if (index > -1) {
        selectedSources.splice(index, 1);
        newSelectedSources = [].concat(selectedSources);
    } else{
        newSelectedSources = [newsSource].concat(selectedSources);
    }

    return Object.assign({}, state, { openedNewsSources: newSelectedSources });
};


/**
 * When searching we only want to search for articles that are not older thanj one week ago as this is part of criteria
 */
const selectNewsSources = (action, state) => {
     const source = action.payload.source;
    // const selectedSources = state.selectedNewsSources;
    // const index = selectedSources.indexOf(source);
    // let newSelectedSources;
    //
    // if (index > -1) {
    //     selectedSources.splice(index, 1);
    //     newSelectedSources = [].concat(selectedSources);
    // } else{
    //     newSelectedSources = [source].concat(selectedSources);
    // }

    return Object.assign({}, state, { selectedNewsSources: [ source ]  });
};


export default pageUIReducer;
