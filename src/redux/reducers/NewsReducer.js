import { NEWS_ACTION_ENUM } from '../actions/NewsActions';

const INITIAL_STATE = {
    articles: [],
    searchTerm: '',
    showLastWeek: false,
    allArticles: [],
    sources: [],

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
        case NEWS_ACTION_ENUM.SEARCH_NEWS_ARTICLES:
            return searchNewsArticles(action, state);
        case NEWS_ACTION_ENUM.CLEAR_NEWS_SEARCH:
            return clearNewsSearch(state);
        default:
            return state;
    }
};

/**
 * When searching we only want to search for articles that are not older thanj one week ago as this is part of criteria
 */
const searchNewsArticles = (action, state) => {
    const searchTerm = action.payload.searchTerm;
    const articles = state.allArticles.filter(article => {
        return (article.title.includes(searchTerm));
    });
    return Object.assign({}, state, { articles, searchTerm, });
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
