import { NEWS_ACTION_ENUM } from '../actions/NewsActions';

const INITIAL_STATE = {
    articles: [],
    searchTerm: '',
    showLastWeek: false,
    allArticles: [],

};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEWS_ACTION_ENUM.LOAD_NEWS_ARTICLES_SUCCESS:
            return loadNewsArticlesSuccess(action, state);
            break;
        case NEWS_ACTION_ENUM.LOAD_NEWS_ARTICLES_FAILURE:
            return loadNewsArticlesFailure(action, state);
            break;
        case NEWS_ACTION_ENUM.SEARCH_NEWS_ARTICLES:
            return searchNewsArticles(action, state);
            break;
        case NEWS_ACTION_ENUM.CLEAR_NEWS_SEARCH:
            return clearNewsSearch(state);
            break;
    }

    return state;
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
    const articles = localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [];
    return Object.assign({}, state, { articles, });
};

const loadNewsArticlesSuccess = (action, state) => {
    const articles = action.payload.articles;
    localStorage.setItem('articles', JSON.stringify(articles));
    return Object.assign({}, state, { articles, allArticles: articles, });
};

const loadNewsArticlesFailure = (state) => {
    const articles = localStorage.getItem('articles') ? JSON.parse(localStorage.getItem('articles')) : [];
    return Object.assign({}, state, { articles, allArticles: articles, });
};


export default reducer;
