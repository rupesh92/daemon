import React, { Component } from 'react';
import './css/App.css';
/*
Screen:LoginScreen
LoginComponent is the main screen which the user is shown on first visit to page and after
hitting logout
*/
import LoginScreen from './login/LoginComponent';
/*
Module:Material-UI
Material-UI is used for designing ui of the app
*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

var apiBaseUrl = "http://localhost:4000/api/";
/*
Module:Dropzone
Dropzone is used for local file selection
*/
import Dropzone from 'react-dropzone';
/*
Module:superagent
superagent is used to handle post/get requests to server
*/
//var request = require('superagent');

class UserHomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      custId: 1,
      name: '',
      companyName: '',
      draweropen:false,
      printcount:10,
      printingmessage:'',
      printButtonDisabled:false
    }
  }
  componentWillMount(){
    // console.log("prop values",this.props.role);
    var printcount;
    //set upload limit based on user role
    if(this.props.role){
      if(this.props.role == 'student'){
        printcount = 5;
      }
      else if(this.props.role == 'teacher'){
        printcount =10;
      }
    }
    this.setState({printcount,role:this.props.role});
  }



/*
  Function:handleLogout
  Parameters: event
  Usage:This fxn is used to end user session and redirect the user back to login page
  */
handleLogout(event){
  // console.log("logout event fired",this.props);
  var loginPage =[];
  loginPage.push(<LoginScreen appContext={this.props.appContext}/>);
  this.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
}
  render() {
    return (
      <div className="App">
          Welcome to your account in Ekarth !
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default UserHomePage;
