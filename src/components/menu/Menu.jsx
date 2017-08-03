import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ items }) => {
    return <div className="menu">
       <ul className="menu-list">
           {
               items.map((item) => {
                   return <li className={ item.selected ? "menu-list-item --selected" : "menu-list-item" } onClick={ () => item.clickHandler(item.value) }>
                            <Link to= { `/${item.value.toLowerCase()}` }> { item.displayName } </Link>
                       </li>
               })
           }
       </ul>
    </div>
};

export default Menu;