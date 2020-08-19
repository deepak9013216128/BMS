import React from 'react';
import './App.css';

import LandingPage from './pages/landing-page/landing-page.component';


import SignUp from './components/signup/signup.component';
import Login from './components/login/login.component';
import ConfirmationPopup from './components/confirmation-popup/confirmation-popup.component';

function App() {
  return (
    <div>
      <LandingPage />
      <SignUp />
      <Login />
      <ConfirmationPopup />
    </div>
  );
}

export default App;
