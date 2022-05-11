import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LandingPage from './components/LandingPage/LandingPage';
import WebApp from './components/WebApp/WebApp';
import { signInAction } from './actions';

const App = () => {

  const dispatch = useDispatch(); 
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if(user) {
      dispatch(signInAction(user.userPhoto, user.userId));
    }
  });

  const isSignedIn = useSelector((state) => 
    state.auth.isSignedIn
  );
  
  return (
    <React.Fragment>
      {
        isSignedIn ? <WebApp /> : <LandingPage />
      }
    </React.Fragment>
  );
}

export default App;
 