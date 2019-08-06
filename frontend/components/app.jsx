import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavColContainer from './mainPage/navCol_container'
import FooterContainer from './mainPage/footer_container'
import MainContainer from './mainPage/main_container'
import Modal from './mainPage/modal'
import CreatePlaylist from './mainPage/create_playlist'
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'


const App = () => (
    <div>
        <Modal />
        
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        
        <ProtectedRoute path="/" component={NavColContainer}/>
        <ProtectedRoute path="/" component={MainContainer} />
        <ProtectedRoute path="/" component={FooterContainer}/>
        
    </div>
);

export default App;