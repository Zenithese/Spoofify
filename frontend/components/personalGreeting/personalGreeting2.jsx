import React from 'react';

class PersonalGreeting2 extends React.Component {

    render() {
        return (
            <hgroup className="header-group-2">
                <h2 className="header-name">{this.props.currentUser.username}</h2>
            </hgroup>
        )
    }
}

export default PersonalGreeting2;