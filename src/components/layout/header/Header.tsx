import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Menu } from '../../../img/menuIcon.svg';
import { ReactComponent as Close } from '../../../img/closeIcon.svg';
import './Header.scss';
import Links from './links';

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
          <Links />
          <div className="nav-mobile">
            <NavButton onClick={onClick} collapsed={isCollapsed} />
            {!isCollapsed && (
              <div className="mobile-menu" onClick={onClick}>
                <Links />
              </div>
            )}
          </div>
        </nav>
    </header>
  );
};

export default Header;
