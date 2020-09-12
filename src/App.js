import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import SignUp from './components/signup/signup.component';
// import Login from './components/login/login.component';
// import ConfirmationPopup from './components/confirmation-popup/confirmation-popup.component';
import Preloader from './components/preloader/preloader.component.jsx'
const Dashboard = lazy(() => import('./pages/dashboard/dashboard.component'));
const LandingPage = lazy(() => import('./pages/landing-page/landing-page.component'));

const addScripts = () => {
  const scripts = [
    '/assets/js/owl-carousel.js',
    '/assets/js/scrollreveal.min.js',
    '/assets/js/waypoints.min.js',
    '/assets/js/jquery.counterup.min.js',
    '/assets/js/imgfix.min.js',
    '/assets/js/custom.js'
  ]
  scripts.forEach(file => {
    const script = document.createElement("script");
    script.src = file;
    document.body.appendChild(script);
  })
}

function App() {

  useEffect(() => {
    addScripts();
  }, [])

  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Suspense>
  );
}

export default App;