import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import SignUp from './components/signup/signup.component';
// import Login from './components/login/login.component';
// import ConfirmationPopup from './components/confirmation-popup/confirmation-popup.component';
import Preloader from './components/preloader/preloader.component.jsx'
const Dashboard = lazy(() => import('./pages/dashboard/dashboard.component'));
const LandingPage = lazy(() => import('./pages/landing-page/landing-page.component'));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Suspense>
  );
}

export default App;

{/*<SignUp />
<Login />
<ConfirmationPopup />*/}