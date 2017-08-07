import React from 'react';
import { loadNewsSources, filterNewsArticles,} from '../../redux/actions/NewsActions';
import { openNewsSource, selectNewsSource } from '../../redux/actions/PageUIActions';
import NewsSourceItemList from '../news-source-item-list/NewsSourceItemList';
import './NewsSearchContainer.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        sources: state.news.sources,
        selectedNewsSources: state.page.selectedNewsSources,
        openedNewsSources: state.page.openedNewsSources,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadSources: () => {
            dispatch(loadNewsSources());
        },
        onSourceSelected: (source) => {
            dispatch(selectNewsSource(source));
            dispatch(filterNewsArticles(source));
        },
        onSourceOpened: (source) => {
            dispatch(openNewsSource(source));
        }
    }
};

class NewsSearchContainer extends React.Component {

    componentDidMount() {
       this.props.onLoadSources();
    }

    render() {
        return <div className="news-search-container">
            <NewsSourceItemList sources={this.props.sources}
                                onSourceSelected={this.props.onSourceSelected}
                                onSourceExpanded={this.props.onSourceOpened}
                                selectedSources={this.props.selectedNewsSources}
                                expandedSources={this.props.openedNewsSources}/>
        </div>
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsSearchContainer));