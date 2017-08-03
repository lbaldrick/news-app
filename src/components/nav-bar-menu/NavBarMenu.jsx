import React from 'react';
import Menu from '../menu/Menu';
import './NavBarMenu.css';

const menuItems = [
    {
        displayName: 'News',
        value: 'NEWS',
    },
    {
        displayName: 'Weather',
        value: 'WEATHER',
    }
];

const NavBarMenu = ({ clickHandler, selectedPage }) => {
    return <div className="nav-bar-menu">
           <Menu items={ menuItems.map((item) => {
                item.clickHandler = clickHandler;
                item.selected = selectedPage === item.value;
                return item;
            }) }/>
    </div>
};

export default NavBarMenu;