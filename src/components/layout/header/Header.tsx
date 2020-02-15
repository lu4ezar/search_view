import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Menu } from '../../../img/menuIcon.svg';
import { ReactComponent as Close } from '../../../img/closeIcon.svg';
import './Header.scss';

const Header = () => {
  const location = useLocation()['pathname'];
  const [activeTab, setActiveTab] = useState(location);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const updateTab = (tab: string) => {
    setActiveTab(tab);
    setIsCollapsed(true);
  };

  // update Active Tab after redirect from 404
  useEffect(() => {
    location !== activeTab && updateTab(location);
  }, [activeTab, location]);

  return (
    <header>
      <nav>
        <ul className={isCollapsed ? 'collapsed' : ''}>
          <li
            className={activeTab === '/' ? 'active' : ''}
            onClick={() => updateTab('/')}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={activeTab === '/search' ? 'active' : ''}
            onClick={() => updateTab('/search')}
          >
            <Link to="search">Search</Link>
          </li>
          <li
            className={activeTab === '/gallery' ? 'active' : ''}
            onClick={() => updateTab('/gallery')}
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
