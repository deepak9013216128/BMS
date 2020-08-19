import React from 'react';

const LandingPage  = (props) => {

  return (
    <div>
      {/* {<!-- ***** Preloader Start ***** -->} */}
      <div id="preloader">
          <div className="jumper">
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>  
      {/* {<!-- ***** Preloader End ***** -->} */}
    
    
      {/* {<!-- ***** Header Area Start ***** -->} */}
      <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/* {<!-- ***** Logo Start ***** -->} */}
                        <a href="" className="logo">Bookmark Easy</a>
                        {/* {<!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->} */}
                        <ul className="nav">
                            <li className="scroll-to-section"><a href="#welcome" className="active">Home</a></li>
                            <li className="scroll-to-section"><a href="#about">About</a></li>
                            <li className="scroll-to-section"><a href="#services">Services</a></li>
                            <li className="submenu">
                                <a href="">Drop Down</a>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Features</a></li>
                                    <li><a href="">FAQ's</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </li>
                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                       {/* { <!-- ***** Menu End ***** -->} */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
      {/* <!-- ***** Header Area End ***** --> */}


      {/* <!-- ***** Welcome Area Start ***** --> */}
      <div className="welcome-area" id="welcome">

        {/* <!-- ***** Header Text Start ***** --> */}
          <div className="header-text">
              <div className="container">
                  <div className="row">
                      <div className="left-text col-lg-7 col-md-7 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                          <h1>All-in-one<br /> <strong>Bookmark Manager</strong></h1>
                          <p>Intuitive. Powerful. Runs everywhere</p>
                          <a href="" class="trigger-btn" data-toggle="modal" data-target="#signup" className="main-button-slider">Sign Up</a>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                          <img src="assets/images/slider-icon.png" className="rounded img-fluid d-block mx-auto" alt="First Vector Graphic" />
                      </div>
                  </div>
              </div>
          </div>
        {/* {<!-- ***** Header Text End ***** -->} */}
      </div>
      {/* {<!-- ***** Welcome Area End ***** -->} */}


      {/* {<!-- ***** Features Big Item Start ***** -->} */}
      <section className="section" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                      <img src="assets/images/left-image.png" className="rounded img-fluid d-block mx-auto" alt="App" />
                  </div>
                  <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                      <div className="left-heading">
                          <h5>Designed to be personal. Great for teamwork</h5>
                      </div>
                      <div className="left-text">
                          <p>Bookmark Easy is the best place to keep all your favorite books, songs, articles or whatever else you come across while browsing.<br /><br />
                          We're not trying to reinvent the wheel; we're working on a tool that does everything you expect from a modern bookmark manager.</p>
                          <a href="#about2" className="main-button">Discover More</a>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-12">
                      <div className="hr"></div>
                  </div>
              </div>
          </div>
      </section>
      {/* {<!-- ***** Features Big Item End ***** -->} */}


      {/* {<!-- ***** Features Big Item Start ***** -->} */}
      <section className="section" id="about2">
          <div className="container">
              <div className="row">
                  <div className="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                      <div className="left-heading">
                          <h5>Organize with ease</h5>
                      </div>
                      <p>Bookmark Easy is not just a pretty interface, it can help you untangle your bookmarks mess.</p>
                      <ul>
                          <li>
                              <img src="assets/images/about-icon-01.png" alt="" />
                              <div className="text">
                                  <h6>Collections</h6>
                                  <p>Group related bookmarks within the same context. Thousands of predefined icons.</p>
                              </div>
                          </li>
                          <li>
                              <img src="assets/images/about-icon-02.png" alt="" />
                              <div className="text">
                                  <h6>Tags & filters</h6>
                                  <p>Add tags to classNameify items. Search efficiently by type, tags, or domain.</p>
                              </div>
                          </li>
                          <li>
                              <img src="assets/images/about-icon-03.png" alt="" />
                              <div className="text">
                                  <h6>Duplicates and broken links </h6>
                                  <p>Keep it clean. We help you find duplicates and pages that are no longer accessible.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                      <img src="assets/images/right-image.png" className="rounded img-fluid d-block mx-auto" alt="App" />
                  </div>
              </div>
          </div>
      </section>
      {/* {<!-- ***** Features Big Item End ***** -->} */}

      {/* {<!-- ***** Footer Start ***** -->} */}
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <p className="copyright">Copyright &copy; 2020 Bookmark Easy 
                
                . Design: <a rel="nofollow" href="https://templatemo.com">Deepak Kumar</a></p>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    	</footer>
  	</div>
  )
};

export default LandingPage;