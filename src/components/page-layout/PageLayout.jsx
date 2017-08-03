import React from 'react';
import Header from '../header/Header';
import NavBarMenu from '../nav-bar-menu/NavBarMenu';
import NewsLayout from './NewsLayout';
import WeatherContainer from '../weather-container/WeatherContainer';
import { selectPage, } from '../../redux/actions/PageUIActions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import './PageLayout.css';

const mapStateToProps = (state) => {
    return {
        selectedPage: state.page.selectedPage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectPage: (type) => {
            dispatch(selectPage(type));
        },
    }
};

class PageLayout extends React.Component {
    render() {
        return <div className="main">
            <Header/>
            <NavBarMenu clickHandler={ this.props.onSelectPage } selectedPage={ this.props.selectedPage }/>
            <Route path="/news" component={NewsLayout}/>
            <Route path="/weather" component={WeatherContainer}/>
        </div>
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageLayout));