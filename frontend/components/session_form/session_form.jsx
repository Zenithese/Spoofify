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
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let errors;
        if (this.props.errors.length) {
            errors = this.renderErrors()
        } else {
            errors = <div></div>
        }
        if (this.props.formType === 'login') {
            return (
                <div className="login-form-container">
                    <h1>Welcome to Spoofify!</h1>
                    <div className="line-width-1">
                        <div className="split-1" />
                    </div>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <br />
                        <div className="demo-direction">To continue, log in to Spoofify.</div>
                        <div className="demo">
                            <button onClick={this.handleDemo} className="demo-button">DEMO LOGIN</button>
                        </div>
                        <br/>
                        <div className="line-width"> 
                            <div className="split">
                                <strong className="or">or</strong>
                            </div>
                        </div>
                        <br/>
                        {errors}
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
                        <div className="switch-question">Don't have an account?</div>
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
                    <h1>Welcome to Spoofify!</h1>
                    <div className="line-width-1">
                        <div className="split-1" />
                    </div>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                    <br />
                        {errors}
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
                        <div className="switch-question">Already have an account?</div>
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