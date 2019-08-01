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
        // this.oldState = this.state;
    }

    componentWillUnmount() {
        this.props.removeErrors();
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
                        <div class="line-width"> 
                            <div className="split">
                                <strong className="or">or</strong>
                            </div>
                        </div>
                        <br/>
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>
              <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    placeholder="Username/Email"
                                />
                            </label>
                            <br />
                            <label>
              <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"

                                />
                            </label>
                            <br />
                            <input onClick={this.props.handleErrors} className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                        <div className="line-width">
                            <div className="split" />
                        </div>
                        Not a member?
                        {this.props.navLink}
                        <div className="line-width">
                            <div className="split" />
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h1>Welcome to Spoofify!</h1>
                    <br />
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label>
              <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                    autoComplete="off" 
                                    autoCorrect="off" 
                                    autoCapitalize="off" 
                                    spellCheck="false"
                                    placeholder="Username"
                                />
                            </label>
                            <br />
                            <label>
              <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    placeholder="Email"
                                />
                            </label>
                            <br />
                            <label>
              <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"
                                />
                            </label>
                            <br />
                            <input onClick={this.props.handleErrors} className="session-submit" type="submit" value={this.props.formType} />
                        </div>
                        <div className="line-width">
                            <div className="split"/>
                        </div>
                        <br />
                        Already a member?
                        {this.props.navLink}
                        <div className="line-width">
                            <div className="split" />
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default withRouter(SessionForm);