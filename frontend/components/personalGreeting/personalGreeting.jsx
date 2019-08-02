import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class PersonalGreeting extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
        }

       

        this.handleClick = this.handleClick.bind(this);
        this.falsifyVisible = this.falsifyVisible.bind(this);
    }

    falsifyVisible() {
        this.setState({
            visible: false,
        })
    }

    handleClick(e) {
        e.stopPropagation();
        if  (this.state.visible && (["header-dropdown", "icon"].includes(e.target.className) || e.target.id === "id" || e.target.tagName === "path")) {   
            this.setState({ visible: false })
        } else {
            this.setState({ visible: true })
        }
    }

    render() {

        const dropDown = this.state.visible ? (
            <ul  className="dropdown"  >
                <a className="dropdown-title">Account</a>
                <li className="dropdown-content">
                    <a className="dropdown-logout" onClick={this.props.logout}>Log Out</a>
                </li>
            </ul>
        ) : null;

        return (
            <hgroup className="header-group">

                <h2 className="header-name">{this.props.currentUser.username}</h2>
                <button onClick={this.handleClick} tabIndex="0" onBlur={this.falsifyVisible} className="header-dropdown" >
                    <a className="icon" >Profile &nbsp;<FontAwesomeIcon id="id" className={this.state.visible ? "caret" : ""} icon={faAngleUp} /></a>
                    {dropDown}
                </button>
            </hgroup>
        )
    }
}

export default PersonalGreeting;