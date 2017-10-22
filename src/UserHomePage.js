import React, {Component} from 'react';
import './css/App.css';

import LoginScreen from './login/LoginComponent';
import {MuiThemeProvider, RaisedButton} from "material-ui";


import axios from 'axios';
import ProductPage from "./ProductPage";
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
        const listItems = this.state.categories.map((category) =>
            <div id="products" class="row list-group">
                <div class="item  col-xs-4 col-lg-4">
                    <div class="thumbnail">
                        <img class="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                        <div class="caption">
                            <h4 class="group inner list-group-item-heading">
                                {category.name}</h4>
                            <p class="group inner list-group-item-text">
                                {category.name} </p>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <p class="lead">
                                        $21.000</p>
                                </div>
                                <MuiThemeProvider>
                                <div class="col-xs-12 col-md-6">
                                    <RaisedButton label="CheckProducts" primary={true} style={style}
                                                  onClick={(event) => this.handleClick(category)}/>
                                </div>
                                </MuiThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="container">

                <div className="jumbotron">
                    <h1>{this.state.companyName}</h1>
                    Hi {this.state.name}
                    <h2> Categories </h2>
                </div>

                <div class="container">
                    {listItems}
                </div>


            </div>
        );
    }

    handleClick(category) {
        var self = this;
        var apiBaseUrl = "http://localhost:8080/api/v1";
        var params = new URLSearchParams();
        var productPage = [];
        params.append('categoryId', category.categoryId);
        axios.post(apiBaseUrl + '/getProducts', params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert("Product fetch successful");
                    self.props.appContext.setState({
                        products: response.data.products

                    });

                    productPage.push(<ProductPage appContext={self.props.appContext}/>)
                    self.props.appContext.setState({loginPage: [], userHomePage: [], productPage: productPage});


                }
                else if (response.status == 204) {
                    console.log("Product fetch not successful");
                    alert("Product fetch not successful");
                }
                else {
                    console.log("Product fetch not successful");
                    alert("Product fetch not successful");
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

export default UserHomePage;
