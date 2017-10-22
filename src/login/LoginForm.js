import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UserHomePage from "../UserHomePage";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


    handleClick() {
        var self = this;
        var apiBaseUrl = "http://localhost:8080/api/v1";
        var params = new URLSearchParams();
        var userHomePage = [];
        params.append('companyName', this.state.username);
        params.append('password', this.state.password);
        axios.post(apiBaseUrl + '/login', params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(function (response) {
                console.log(response);
                debugger;
                if (response.status == 200) {
                    console.log("Login successful " + response.data);
                    console.log("Login successful " + response.data.name);
                    alert("Login successful");
debugger;
                    self.props.appContext.setState({
                        name: response.data.customer.name,
                        companyName: response.data.customer.companyName,
                        custId: response.data.customer.custId,
                        categories: response.data.categories

                    });
                    userHomePage.push(<UserHomePage appContext={self.props.appContext}/>)
                    self.props.appContext.setState({loginPage: [], userHomePage: userHomePage});


                }
                else if (response.status == 204) {
                    console.log("Username password do not match");
                    alert("Username password do not match or, Username does not exist");
                }
                else {
                    console.log("Username does not exist");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}

const style = {
    margin: 15,
};

export default LoginForm;
