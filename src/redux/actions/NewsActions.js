import { get } from '../../client/rest';

const NEWS_ACTION_ENUM = {
    SEARCH_NEWS_ARTICLES: 'SEARCH_NEWS_ARTICLES',
    LOAD_NEWS_SOURCES_SUCCESS: 'LOAD_NEWS_SOURCES_SUCCESS',
    LOAD_NEWS_SOURCES_FAILURE: 'LOAD_NEWS_SOURCES_FAILURE',
    LOAD_NEWS_ARTICLES_SUCCESS: 'LOAD_NEWS_ARTICLES_SUCCESS',
    LOAD_NEWS_ARTICLES_FAILURE: 'LOAD_NEWS_ARTICLES_FAILURE',
    CLEAR_NEWS_SEARCH: 'CLEAR_NEWS_SEARCH',
};

const searchNewsArticles = (searchTerm) => {
    return {
        type: NEWS_ACTION_ENUM.SEARCH_NEWS_ARTICLES,
        payload: { searchTerm, },
    };
};

const loadNewsArticles = () =>  {
    return (dispatch) => {
        get('http://localhost:3003/news/all')
            .then((response) => response.json())
            .then((jsonResponse) => dispatch(loadArticlesSuccess(jsonResponse.articles.articles)))
            .catch((error) => dispatch(loadArticlesFailure(error)));
    }
};

const loadNewsSources = () =>  {
    return (dispatch) => {
        get('http://localhost:3003/news/sources')
            .then((response) => response.json())
            .then((jsonResponse) => dispatch(loadSourcesSuccess(jsonResponse.sources)))
            .catch((error) => dispatch(loadSourcesFailure(error)));
    }
};

const loadArticlesSuccess = (articles) => {
    return {
        type: NEWS_ACTION_ENUM.LOAD_NEWS_ARTICLES_SUCCESS,
        payload: { articles, },
    };
};

const loadArticlesFailure = () => {
    return {
        type: NEWS_ACTION_ENUM.LOAD_NEWS_ARTICLES_FAILURE,
        payload: { },
    };
};

const loadSourcesSuccess = (sources) => {
    return {
        type: NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_SUCCESS,
        payload: { sources, },
    };
};

const loadSourcesFailure = () => {
    return {
        type: NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_FAILURE,
        payload: { },
    };
};

const clearNewsSearch = () => {
    return {
        type: NEWS_ACTION_ENUM.CLEAR_NEWS_SEARCH,
        payload: { },
    };
};

export { loadNewsSources,
         loadNewsArticles,
         clearNewsSearch,
         NEWS_ACTION_ENUM };