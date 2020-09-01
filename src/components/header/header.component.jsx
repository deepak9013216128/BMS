import React from 'react';
import './header.styles.css';

import Logo from '../assets/logo/logo_transparent.png';

const Header = (props) => {

  return (
    <header className="header-area header-sticky background-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* {<!-- ***** Logo Start ***** -->} */}
              <a href="/" className="logo">
                <img src={Logo} className="logo-img" alt='logo' />
              </a>
              {/* {<!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->} */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="/dashboard" className="active">Dashboard</a></li>
                <li className="scroll-to-section"><a href="/mybookmarks">My Bookmarks</a></li>
                <li className="scroll-to-section"><a href="/setting">Setting</a></li>
                <li className="submenu">
                  <a href="#">Tools</a>
                  <ul>
                    <li><a href="/">Install Browser Buttons</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">User</a>
                  <ul>
                    <li><a href="/profile">Account</a></li>
                    <li><a href="/">Logout</a></li>
                  </ul>
                </li>
              </ul>
              <span className='menu-trigger'>
                <span>Menu</span>
              </span>
              {/* { <!-- ***** Menu End ***** -->} */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
