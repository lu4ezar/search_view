import React from 'react';
import './NavButton.scss';

const NavButton = ({
  onClick,
  collapsed
}: {
  onClick: () => void;
  collapsed: boolean;
}) => (
  <button className={!collapsed ? 'button opened' : 'button'} onClick={onClick}>
    <div className="nav-button"></div>
  </button>
);

export default NavButton;
