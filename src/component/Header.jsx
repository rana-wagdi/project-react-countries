import React from 'react';
import {Link} from "react-router-dom";
const Header = (props) => {
  const refreshPage= () => {
    window.location.reload(false)
  }
    return (
      <header className="header">
        <div>
         
          <h2 onClick={refreshPage}>Where in the world?</h2>
          
        </div>
        <div className="theme-mode" onClick={props.click}>
          <i className="fas fa-moon"></i> Dark Mode
        </div>
      </header>
    );
}

export default Header;