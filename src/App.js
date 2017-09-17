import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './css/App.css';
import LoginComponent from './login/LoginComponent'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPage: [],
            userHomePage: []
        }
    }

    componentWillMount() {
        var loginPage = [];

        loginPage.push(<LoginComponent parentContext={this}/>);
        this.setState({
            loginPage: loginPage

        })
    }

    render() {
        return (
            <div className="App">
                {this.state.loginPage}
                {this.state.userHomePage}
            </div>
        );
    }
}

const style = {
    margin: 15,
};
export default App;
