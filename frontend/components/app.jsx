import { AuthRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Route } from 'react-router-dom';


const App = () => (
    <div>
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;