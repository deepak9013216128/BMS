import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsAuth, selectCheckLogin } from './redux/user/user.selector';
import { history, checkAuthenticationStatus } from './redux/user/user.action';

import './App.css';

import Preloader from './components/preloader/preloader.component';
import ErrorPop from './components/error-popup/error-popup.component';
import ConfirmationPopup from './components/confirmation-popup/confirmation-popup.component';
// import ErrorBoundary from './components/error-boundary/error-boundary.component';

const Dashboard = lazy(() => import('./pages/dashboard/dashboard.component'));
const LandingPage = lazy(() => import('./pages/landing-page/landing-page.component'));

const addScripts = () => {
  const scripts = [
    'assets/js/owl-carousel.js',
    'assets/js/scrollreveal.min.js',
    'assets/js/waypoints.min.js',
    'assets/js/jquery.counterup.min.js',
    'assets/js/imgfix.min.js',
    'assets/js/custom.js'
  ]
  scripts.forEach(file => {
    const script = document.createElement("script");
    script.src = file;
    document.body.appendChild(script);
  })
}

function App({ isAuth, checkLogin, checkAuthenticationStatus }) {

  useEffect(() => {
    checkAuthenticationStatus()
    addScripts();
  }, [checkAuthenticationStatus])


  let routes = <Preloader />

  if (!checkLogin) {
    if (isAuth) {
      routes = (
        <Suspense fallback={<Preloader />}>
          <Route exact path='/' component={LandingPage} />
          <Route path='/dashboard' component={Dashboard} />
        </Suspense>
      )
    } else {
      routes = (
        <Suspense fallback={<Preloader />}>
          <Route exact path='/' component={LandingPage} />
          <Redirect path="*" to='/' />
        </Suspense>

      )
    }
  }


  return (
    <Router history={history}>
      <Switch>
        {routes}
      </Switch>
      <ErrorPop />
      <ConfirmationPopup />
    </Router >
  );
}
const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  checkLogin: selectCheckLogin
})

const mapDispatchToProps = dispatch => ({
  checkAuthenticationStatus: () => dispatch(checkAuthenticationStatus())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);