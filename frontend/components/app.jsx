import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavColContainer from './mainPage/navCol/navCol_container'
import FooterContainer from './mainPage/footer/footer_container'
import MainContainer from './mainPage/main/main_container'
import Modal from './mainPage/modal/modal'
import CreatePlaylist from './mainPage/playlist/create_playlist'
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Route, Link, Switch } from 'react-router-dom'
import PersonalGreeting from './personalGreeting/personalGreeting';
import PlaylistShowContainer from './mainPage/playlist/playlist_show_container'


const App = () => (
    <div>
        <Modal />

        <Switch>
            <ProtectedRoute path="/:playlistId" component={PlaylistShowContainer} />
            <ProtectedRoute path="/" component={MainContainer} />
        </Switch>  
        
        <ProtectedRoute path="/" component={NavColContainer}/>
        <ProtectedRoute path="/" component={FooterContainer}/>
        {/* <ProtectedRoute path="/browse" component={PersonalGreeting}/> */}
        <Route exact path="/" component={GreetingContainer} />   
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        
    </div>
);

export default App;