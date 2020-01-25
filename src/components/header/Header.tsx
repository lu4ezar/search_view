import React, { useState } from 'react';
import { Link } from '@reach/router';
import { ReactComponent as Menu } from '../../icons/menuIcon.svg';
import { ReactComponent as Close } from '../../icons/closeIcon.svg';
import './header.scss';

const Header = () => {
  const [active, setActive] = useState('/');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const chooseActiveTab = (tab: string) => {
    setActive(tab);
    setIsCollapsed(true);
  };
  return (
    <header>
      <nav>
        <ul className={isCollapsed ? 'collapsed' : ''}>
          <li
            className={active === '/' ? 'active' : ''}
            onClick={() => chooseActiveTab('/')}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={active === 'search' ? 'active' : ''}
            onClick={() => chooseActiveTab('search')}
          >
            <Link to="search">Search</Link>
          </li>
          <li
            className={active === 'gallery' ? 'active' : ''}
            onClick={() => chooseActiveTab('gallery')}
          >
            <Link to="gallery">Gallery</Link>
          </li>
        </ul>
        <button
          className="icon-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <Menu /> : <Close />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
