import React from 'react';
import { Link } from 'react-router-dom';
import PersonalGreeting2 from '../components/personalGreeting/personalGreeting2'

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="totality">
           <div className="navbar">
                <h1 className='title'>Spoofify</h1>
                    <nav className="login-signup">
                    <Link className="links" to="/signup">Join</Link>
                        &nbsp; &nbsp;
                    <Link className="links" to="/login">Login</Link>
                    </nav>
            </div>
                <div className='greeting'>
                    <h2>Music for everyone.</h2>
                    <h3>A number of songs. No credit card needed.</h3>
                    <Link to="/signup" className="listen-button">Get Spoofify Free</Link>
                </div>
        </div>
    );

    return currentUser ? <PersonalGreeting2 currentUser={currentUser} logout={logout} /> : sessionLinks();
};

export default Greeting;