import React, {Component} from 'react';
import './css/App.css';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.appContext.state.products
        }

    }

    componentWillMount() {
    }


    render() {
        const listItems = this.state.products.map((product) =>
            <div id="products" class="row list-group">
                <div class="item  col-xs-4 col-lg-4">
                    <div class="thumbnail">
                        <img class="group list-group-image" src="http://placehold.it/400x250/000/fff" alt=""/>
                        <div class="caption">
                            <h4 class="group inner list-group-item-heading">
                                {product.name}</h4>
                            <p class="group inner list-group-item-text">
                                {product.name} </p>
                            <div class="row">
                                <div class="col-xs-12 col-md-6">
                                    <p class="lead">
                                        {product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="container">

                <div class="container">
                    {listItems}
                </div>


            </div>
        );
    }
}


export default ProductPage;
