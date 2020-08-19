import React from 'react';
import './App.css';

import LandingPage from './pages/landing-page/landing-page.component';


import SignUp from './components/signup/signup.component';
import Login from './components/login/login.component';

function App() {
  return (
    <div>
      <LandingPage />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
