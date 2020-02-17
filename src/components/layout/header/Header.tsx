import React, { useState } from 'react';
import './Header.scss';
import NavButton from './navButton';
import Links from './links';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const onClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <header>
      <div className="container">
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
      </div>
    </header>
  );
};

export default Header;
