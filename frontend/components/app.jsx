import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavColContainer from './mainPage/navCol/navCol_container';
import FooterContainer from './mainPage/footer/footer_container';
import MainContainer from './mainPage/main/main_container';
import SearchContainer from './mainPage/search/search_container';
import Modal from './mainPage/modal/modal';
import CreatePlaylist from './mainPage/playlist/create_playlist'
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import PersonalGreeting from './personalGreeting/personalGreeting';
import PlaylistShowContainer from './mainPage/playlist/playlist_show_container';
import LibraryContainer from './mainPage/library/library_container';
import ContextRoot from './mainPage/context_menu/context_root';
import {useState, useEffect} from 'react'


const App = () => {

    const [top, setTop] = useState("0px");
    const [left, setLeft] = useState("0px");
    const [directionReveal, setDirectionReveal] = useState("right-reveal");
    const [parentClassName, setParentClassName] = useState("new-location");
    const [display, setDisplay] = useState("none");

    useEffect(() => {
        setParentClassName("new-location")
    }, [parentClassName])

    const handleClick = () => {
        setDisplay("none")
    }    

    const rightClick = (e) => {
        e.preventDefault()
        console.log(e.clientX, e.clientY)
        if (e.clientX < 260 || e.clientY < 147) return
        setDisplay("block")
        setParentClassName("contextmenu")
        if (e.clientX > window.innerWidth / 2) {
            setDirectionReveal("left-reveal")
            setTop(e.pageY + "px")
            setLeft(e.clientX + 163 + "px")
        } else {
            setDirectionReveal("right-reveal")
            setTop(e.pageY + "px")
            setLeft(e.clientX + 5 + "px")
        }
    }

    return (
        <div id="app" onClick={() => handleClick()} onContextMenu={(e) => rightClick(e)}>
            <Modal />
            
            <Switch>
                <ProtectedRoute exact path="/search" component={SearchContainer} />
                <ProtectedRoute exact path="/:playlistId" component={PlaylistShowContainer} />
                {/* <ProtectedRoute exact path="/library" component={LibraryContainer} /> */}
                <ProtectedRoute exact path="/" component={MainContainer} />
            </Switch> 
            
            <ProtectedRoute path="/" component={PersonalGreeting} />
            <ProtectedRoute path="/" component={NavColContainer}/>
            <ProtectedRoute path="/" component={FooterContainer}/>
            {/* <ProtectedRoute path="/browse" component={PersonalGreeting}/> */}
            <Route exact path="/" component={GreetingContainer} />
            <Route path="/home" component={MainContainer} />
            <Route path="/library" component={LibraryContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />

            <ContextRoot top={top} left={left} directionReveal={directionReveal} parentClassName={parentClassName} display={display} />
            
        </div>
    )
};

export default App;