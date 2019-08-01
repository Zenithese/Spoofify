import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    
    const sessionLinks = () => (
        <div className="totality">
           <div className="navbar">
                <h1 className='title'>Spoofify</h1>
                    <nav className="login-signup">
                    <Link className="links" to="/login">Login</Link>
                        &nbsp; &nbsp;
                    <Link className="links" to="/signup">Join</Link>
                    </nav>
            </div>
                <div className='greeting'>
                    <h2>Music for everyone.</h2>
                    <h3>A number of songs. It's free!</h3>
                    <Link to="/signup" className="listen-button">Join</Link>
                </div>
        </div>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
       
            <h2 className="header-name">{currentUser.username}</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;