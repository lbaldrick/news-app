import { NEWS_ACTION_ENUM } from '../actions/NewsActions';

const INITIAL_STATE = {
    articles: [],
    searchTerm: '',
    showLastWeek: false,
    allArticles: [],
    sources: [],
    selectedSources: [],
    openedSources: [],

};

const newsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_ACTION_ENUM.LOAD_NEWS_ARTICLES_SUCCESS:
            return loadNewsArticlesSuccess(action, state);
        case NEWS_ACTION_ENUM.LOAD_NEWS_ARTICLES_FAILURE:
            return loadNewsArticlesFailure(action, state);
        case NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_SUCCESS:
            return loadNewsSourcesSuccess(action, state);
        case NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_FAILURE:
            return loadNewsSourcesFailure(action, state);
        case NEWS_ACTION_ENUM.FILTER_NEWS_ARTICLES_SUCCESS:
            return filterNewsArticlesSuccess(action, state);
        case NEWS_ACTION_ENUM.FILTER_NEWS_ARTICLES_FAILURE:
            return filterNewsArticlesFailure(action, state);
        case NEWS_ACTION_ENUM.CLEAR_NEWS_SEARCH:
            return clearNewsSearch(state);
        default:
            return state;
    }
};

/**
 * When searching we only want to search for articles that are not older thanj one week ago as this is part of criteria
 */
const filterNewsArticlesSuccess = (action, state) => {
    const articles = action.payload.articles;
    return Object.assign({}, state, { articles, allArticles: articles, })
};

/**
 * When searching we only want to search for articles that are not older thanj one week ago as this is part of criteria
 */
const filterNewsArticlesFailure = (action, state) => {
    return Object.assign({}, state, { articles: [], allArticles: [], })
};

/**
 * When not searching then just return all the articles
 */
const clearNewsSearch = (state) => {
    return Object.assign({}, state, { articles: [] });
};

const loadNewsArticlesSuccess = (action, state) => {
    const articles = action.payload.articles;
    return Object.assign({}, state, { articles, allArticles: articles, });
};

const loadNewsArticlesFailure = (state) => {
    return Object.assign({}, state, { articles: [], allArticles: [], });
};

const loadNewsSourcesSuccess = (action, state) => {
    const sources = action.payload.sources;
    return Object.assign({}, state, { sources, });
};

const loadNewsSourcesFailure = (state) => {
    return Object.assign({}, state, { sources: [], });
};



export default newsReducer;
