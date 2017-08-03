import React from 'react';
import NewsArticleItemList from '../news-article-item-list/NewsArticleItemList';
import { loadNewsArticles, } from '../../redux/actions/NewsActions';
import './NewsContainer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        articles: state.news.articles,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadArticles: () => {
          dispatch(loadNewsArticles());
        },
    }
};

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.onLoadArticles();
    }

    render() {
        return <div className="news-container">
            <NewsArticleItemList articles={this.props.articles}/>
        </div>
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsContainer));