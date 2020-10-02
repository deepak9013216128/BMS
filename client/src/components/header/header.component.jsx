import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

import Logo from '../assets/logo/logo_transparent.png';

const Header = (props) => {

  return (
    <header className="header-area header-sticky background-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src={Logo} className="logo-img" alt='logo' />
              </Link>
              <ul className="nav">
                <li className="scroll-to-section"><Link to="/dashboard" className="active">Dashboard</Link></li>
                <li className="scroll-to-section"><Link to="/mybookmarks">My Bookmarks</Link></li>
                <li className="scroll-to-section"><Link to="/setting">Setting</Link></li>
                <li className="submenu">
                  <Link to='#'>Tools</Link>
                  <ul>
                    <li><Link to="/">Install Browser Buttons</Link></li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to='#'>User</Link>
                  <ul>
                    <li><Link to="/profile">Account</Link></li>
                    <li><Link to="/">Logout</Link></li>
                  </ul>
                </li>
              </ul>
              <span className='menu-trigger'>
                <span>Menu</span>
              </span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
