import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import './css/App.css';
import LoginComponent from './login/LoginComponent'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginComponent parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;
