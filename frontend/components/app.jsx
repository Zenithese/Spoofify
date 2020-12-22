import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavColContainer from './mainPage/navCol/navCol_container';
import FooterContainer from './mainPage/footer/footer_container';
import MainContainer from './mainPage/main/main_container';
import SearchContainer from './mainPage/search/search_container';
import Modal from './mainPage/modal/modal';
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import PersonalGreeting from './personalGreeting/personalGreeting';
import PlaylistShowContainer from './mainPage/playlist/playlist_show_container';
import LibraryContainer from './mainPage/library/library_container';
import ContextRoot from './mainPage/context_menu/context_root';
import {useState, useEffect, useRef} from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        spotifySongId: state.ui.spotifySong.id,
    };
};

const App = ({ spotifySongId }) => {

    const [top, setTop] = useState("0px");
    const [left, setLeft] = useState("0px");
    const [directionReveal, setDirectionReveal] = useState("right-reveal");
    const [parentClassName, setParentClassName] = useState("new-location");
    const [display, setDisplay] = useState("none");
    const [songId, setSongId] = useState(undefined);

    useEffect(() => {
        setParentClassName("new-location")
    }, [parentClassName])

    useEffect(() => {
        setSongId(spotifySongId)
    }, [spotifySongId])

    const handleClick = () => {
        setDisplay("none")
    }    

    const rightClick = (e) => {
        e.preventDefault()
        if (!e.target.dataset.contextable) return
        setSongId(e.target.dataset.songid)
        setDisplay("block")
        setParentClassName("contextmenu")
        const scrollPx = document.getElementById("scroll-container").getBoundingClientRect().top
        if (e.clientX > (window.innerWidth / 4) * 3) {
            e.clientY > (window.innerHeight / 4) * 3 ? setDirectionReveal("left-reveal bottom") : setDirectionReveal("left-reveal")
            setTop(e.clientY - scrollPx + "px")
            setLeft(e.clientX + 160 + "px")
        } else {
            e.clientY > (window.innerHeight / 4) * 3 ? setDirectionReveal("right-reveal bottom") : setDirectionReveal("right-reveal")
            setTop(e.clientY - scrollPx + "px")
            setLeft(e.clientX + 5 + "px")
        }
    }

    return (
        <div id="app" onClick={() => handleClick()} onContextMenu={(e) => rightClick(e)}>
            <Modal />
            
            <Switch>
                <ProtectedRoute exact path="/search" component={SearchContainer} />
                <ProtectedRoute exact path="/:playlistId" component={PlaylistShowContainer} />
                <ProtectedRoute exact path="/" component={MainContainer} />
            </Switch> 
            
            <ProtectedRoute path="/" component={PersonalGreeting} />
            <ProtectedRoute path="/" component={NavColContainer}/>
            <ProtectedRoute path="/" component={FooterContainer}/>
            <Route exact path="/" component={GreetingContainer} />
            <Route path="/home" component={MainContainer} />
            <Route path="/library" component={LibraryContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignUpFormContainer} />

            <ContextRoot top={top} left={left} directionReveal={directionReveal} parentClassName={parentClassName} display={display} songId={songId} />
            
        </div>
    )
};

export default connect(mapStateToProps, null)(App);