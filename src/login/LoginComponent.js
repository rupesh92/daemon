import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import LoginForm from './LoginForm';
import Register from './Register';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginForm: [],
            registerMessage: '',
            buttonLabel: 'Register',
            isLogin: false
        }
    }

    componentWillMount() {
        var loginForm = [];
        loginForm.push(<LoginForm parentContext={this} appContext={this.props.parentContext}/>);
        var registerMessage = "Not registered yet, Register Now";
        this.setState({
            loginForm: loginForm,
            registerMessage: registerMessage
        })
    }

    render() {
        return (
            <div className="loginScreen">
                {this.state.loginForm}
                <div>
                    {this.state.registerMessage}
                    <MuiThemeProvider>
                    <div>
                        <RaisedButton label={this.state.buttonLabel} primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
                </div>
            </div>
        );
    }

    handleClick() {
        var registerMessage;
        if (!this.state.isLogin) {
            var loginForm = [];
            loginForm.push(<Register parentContext={this}/>);
            registerMessage = "Already registered? Go to Login";
            this.setState({
                loginForm: loginForm,
                registerMessage: registerMessage,
                buttonLabel: "Login",
                isLogin: true
            })
        }
        else {
            var loginForm = [];
            loginForm.push(<LoginForm parentContext={this}/>);
            registerMessage = "Not Registered yet? Go to registration";
            this.setState({
                loginForm: loginForm,
                registerMessage: registerMessage,
                buttonLabel: "Register",
                isLogin: false
            })
        }
    }
}

const style = {
    margin: 15,
};
export default LoginComponent;
