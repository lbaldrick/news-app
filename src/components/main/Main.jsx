import React from 'react';
import NewsContainer from '../news-container/NewsContainer';
import './Main.css';

const Main = ({ store }) => {

    return <div className="main">
            <NewsContainer store={store}/>
          </div>
};

export default Main;