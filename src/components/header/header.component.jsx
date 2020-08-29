import React from 'react';
import './header.styles.css';

const Header = (props) => {

  return (
    <header className="header-area header-sticky background-header background-header-position">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* {<!-- ***** Logo Start ***** -->} */}
              <a href="/" className="logo">Bookmark Easy</a>
              {/* {<!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->} */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="/dashboard" className="active">Dashboard</a></li>
                <li className="scroll-to-section"><a href="/mybookmarks">My Bookmarks</a></li>
                <li className="scroll-to-section"><a href="/setting">Setting</a></li>
                <li className="submenu">
                  <a href="/">Tools</a>
                  <ul>
                    <li><a href="/">Install Browser Buttons</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="/profile">User</a>
                  <ul>
                    <li><a href="/profile">Account</a></li>
                    <li><a href="/">Logout</a></li>
                  </ul>
                </li>
              </ul>
              <a className='menu-trigger' href='/'>
                <span>Menu</span>
              </a>
              {/* { <!-- ***** Menu End ***** -->} */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
