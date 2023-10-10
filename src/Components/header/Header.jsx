import React from 'react';
import './Header.scss';

const Header = () => {
  const headerElements = [
    { label: 'TESLA', route: '/' },
    { label: 'Model S', route: 'model_s ' },
    { label: 'Model X', route: 'model_x ' },
    { label: 'Cybertruck', route: 'cybertruck' },
    { label: 'Menu', route: null },
  ];
    return <nav>
        <ul>
            {headerElements.map({ label, route } =>(
            <li>{label}</li>
            ))}
      </ul>
  </nav>;
};

export default Header;
