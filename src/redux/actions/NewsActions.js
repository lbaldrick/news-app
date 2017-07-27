import { get } from '../../client/rest';

const NEWS_ACTION_ENUM = {
    SEARCH_NEWS_ARTICLES: 'SEARCH_NEWS_ARTICLES',
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
            .then((response) => dispatch(loadArticlesSuccess(response.result)))
            .catch((error) => dispatch(loadArticlesFailure(error)));
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

const clearNewsSearch = () => {
    return {
        type: NEWS_ACTION_ENUM.CLEAR_NEWS_SEARCH,
        payload: { },
    };
};

export { searchNewsArticles, loadNewsArticles, loadArticlesSuccess, loadArticlesFailure, clearNewsSearch, NEWS_ACTION_ENUM };