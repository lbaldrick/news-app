
const PAGE_UI_ACTION_ENUM = {
    SELECT_PAGE: 'SELECT_PAGE',
};

const selectPage = (selectedPage) => {
    return {
        type: PAGE_UI_ACTION_ENUM.SELECT_PAGE,
        payload: { selectedPage, },
    };
};

export { selectPage, PAGE_UI_ACTION_ENUM };