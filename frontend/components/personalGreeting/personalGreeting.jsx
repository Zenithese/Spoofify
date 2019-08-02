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
        this.toggleVisible = this.toggleVisible.bind(this);
    }

    toggleVisible() {
        this.setState({
            visible: !this.state.visible,
        })
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick(e) {
        if (this.click && this.click.contains(e.target) || (this.iconClick.contains(e.target))) {
            return;
        }

        this.setState({ visible: false })
    }

    render() {

        const dropDown = this.state.visible ? (
            <ul className="dropdown" ref={click => this.click = click} >
                <a className="dropdown-title">Account</a>
                <li className="dropdown-content">
                    <a className="dropdown-logout" onClick={this.props.logout}>Log Out</a>
                </li>
            </ul>
        ) : null;

        return (
            <hgroup className="header-group">

                <h2 className="header-name">{this.props.currentUser.username}</h2>
                {dropDown}
                <button className="header-dropdown" onClick={this.toggleVisible} ref={iconClick => this.iconClick = iconClick} >Profile &nbsp;<FontAwesomeIcon className={this.state.visible ? "caret" : ""} icon={faAngleUp} /></button>
            </hgroup>
        )
    }
}

export default PersonalGreeting;