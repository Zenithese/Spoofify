import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
    }

    handleDemo(e) {
        e.preventDefault();
        const user = {
            username: 'OG',
            password: 'password'
        };
        this.props.action(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.errors.length) {
            
        }
        if (this.props.formType === 'login') {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h1>Welcome to Spoofify!</h1>
          <br />
                        <div className="demo">
                            <button onClick={this.handleDemo} className="demo-button">DEMO LOGIN</button>
                        </div>
                        <br/>
                        ---------or---------
                        <br/>
                        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;{this.props.formType}
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>Username/Email:
              <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Password:
              <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                        Not a member?
                        {this.props.navLink}
                    </form>
                </div>
            );
        } else {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h1>Welcome to Spoofify!</h1>
                    <br />
                        Please {this.props.formType}
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>Username:
              <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Email:
              <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Password:
              <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                        Already a member?
                        {this.props.navLink}
                    </form>
                </div>
            );
        }
    }
}

export default withRouter(SessionForm);