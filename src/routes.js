import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './pages/signup';

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
        <Route exact path='/ui001' component={Signup}/>
    </BrowserRouter>
  );
}
