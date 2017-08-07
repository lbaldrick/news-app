import { get } from '../../client/rest';

const NEWS_ACTION_ENUM = {
    LOAD_NEWS_SOURCES_SUCCESS: 'LOAD_NEWS_SOURCES_SUCCESS',
    LOAD_NEWS_SOURCES_FAILURE: 'LOAD_NEWS_SOURCES_FAILURE',
    LOAD_NEWS_ARTICLES_SUCCESS: 'LOAD_NEWS_ARTICLES_SUCCESS',
    LOAD_NEWS_ARTICLES_FAILURE: 'LOAD_NEWS_ARTICLES_FAILURE',
    FILTER_NEWS_ARTICLES: 'FILTER_NEWS_ARTICLES',
    FILTER_NEWS_ARTICLES_SUCCESS: 'FILTER_NEWS_ARTICLES_SUCCESS',
    FILTER_NEWS_ARTICLES_FAILURE: 'FILTER_NEWS_ARTICLES_FAILURE',
    CLEAR_NEWS_SEARCH: 'CLEAR_NEWS_SEARCH',
};

const loadNewsArticles = () =>  {
    return (dispatch) => {
        get('http://localhost:3003/news/all')
            .then((response) => response.json())
            .then((jsonResponse) => dispatch(loadArticlesSuccess(jsonResponse.articles)))
            .catch((error) => dispatch(loadArticlesFailure(error)));
    }
};

const loadNewsSources = () =>  {
    return (dispatch) => {
        get('http://localhost:3003/news/sources')
            .then((response) => response.json())
            .then((jsonResponse) => dispatch(loadSourcesSuccess(jsonResponse.sources, jsonResponse.selectedSources)))
            .catch((error) => dispatch(loadSourcesFailure(error)));
    }
};


const filterNewsArticles = (source) =>  {
    return (dispatch) => {
        get(`http://localhost:3003/news/filter/${source}`)
            .then((response) => response.json())
            .then((jsonResponse) => dispatch(filterArticlesSuccess(jsonResponse.articles)))
            .catch((error) => dispatch(filterArticlesFailure(error)));
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

const loadSourcesSuccess = (sources, selectedSources) => {
    return {
        type: NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_SUCCESS,
        payload: { sources, selectedSources, },
    };
};

const loadSourcesFailure = () => {
    return {
        type: NEWS_ACTION_ENUM.LOAD_NEWS_SOURCES_FAILURE,
        payload: { },
    };
};

const filterArticlesSuccess = (articles) => {
    return {
        type: NEWS_ACTION_ENUM.FILTER_NEWS_ARTICLES_SUCCESS,
        payload: { articles, },
    };
};

const filterArticlesFailure = () => {
    return {
        type: NEWS_ACTION_ENUM.FILTER_NEWS_ARTICLES_FAILURE,
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
         filterNewsArticles,
         clearNewsSearch,
         NEWS_ACTION_ENUM };