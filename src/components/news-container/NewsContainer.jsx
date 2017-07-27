import React from 'react';
import NewsArticleItemList from '../news-article-item-list/NewsArticleItemList';
import { loadNewsArticles, } from '../../redux/actions/NewsActions';
import './NewsContainer.css';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadArticles: () => {
          dispatch(loadNewsArticles());
        },
    }
};

class NewsContainer extends React.PureComponent {

    componentDidMount() {
        this.props.onLoadArticles();
    }

    render() {
        return <div className="news-container">
            <NewsArticleItemList articles={this.props.articles}/>
        </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);