import React from 'react';
import { loadNewsSources, } from '../../redux/actions/NewsActions';
import NewsSourceItemList from '../news-source-item-list/NewsSourceItemList';
import './NewsSearchContainer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        sources: state.news.sources,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadSources: () => {
            dispatch(loadNewsSources());
        },
    }
};

class NewsSearchContainer extends React.Component {

    componentDidMount() {
        this.props.onLoadSources();
    }

    render() {
        return <div className="news-search-container">
            <NewsSourceItemList sources={this.props.sources}/>
        </div>
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsSearchContainer));