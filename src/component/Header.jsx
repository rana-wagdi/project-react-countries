import React from 'react';

const Header = (props) => {
    return (
      <header className="header">
        <div>
          <h2>Where in the world?</h2>
        </div>
        <div className="theme-mode" onClick={props.click}>
          <i className="fas fa-moon"></i> Dark Mode
        </div>
      </header>
    );
}

export default Header;