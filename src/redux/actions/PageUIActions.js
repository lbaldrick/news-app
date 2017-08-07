
const PAGE_UI_ACTION_ENUM = {
    SELECT_PAGE: 'SELECT_PAGE',
    OPEN_NEWS_SOURCE: 'OPEN_NEWS_SOURCE',
    SELECT_NEWS_SOURCE: 'SELECT_NEWS_SOURCE',
};

const selectPage = (selectedPage) => {
    return {
        type: PAGE_UI_ACTION_ENUM.SELECT_PAGE,
        payload: { selectedPage, },
    };
};

const openNewsSource = (newsSource) => {
    return {
        type: PAGE_UI_ACTION_ENUM.OPEN_NEWS_SOURCE,
        payload: { newsSource, },
    };
};

const selectNewsSource = (source) => {
    return {
        type: PAGE_UI_ACTION_ENUM.SELECT_NEWS_SOURCE,
        payload: { source, },
    };
};
export { selectPage, openNewsSource, selectNewsSource, PAGE_UI_ACTION_ENUM };