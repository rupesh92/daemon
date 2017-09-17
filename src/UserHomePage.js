import React, {Component} from 'react';
import './css/App.css';
/*
Screen:LoginScreen
LoginComponent is the main screen which the user is shown on first visit to page and after
hitting logout
*/
import LoginScreen from './login/LoginComponent';
import axios from 'axios';


class UserHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custId: props.appContext.state.custId,
            name: props.appContext.state.name,
            companyName: props.appContext.state.companyName,
            categories: props.appContext.state.categories
        }

    }

    componentWillMount() {
        var self = this;


    }

    /*
      Function:handleLogout
      Parameters: event
      Usage:This fxn is used to end user session and redirect the user back to login page
      */
    handleLogout(event) {
        // console.log("logout event fired",this.props);
        var loginPage = [];
        loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
        this.props.appContext.setState({loginPage: loginPage, uploadScreen: []})
    }

    render() {
        const listItems = this.state.categories.map((category) => <li key={category}>{category}</li>);

        return (
            <div className="App">
                Hi {this.state.name}. We wish you all the best with {this.state.companyName}
                {listItems}

            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default UserHomePage;
