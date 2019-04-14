import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    onCheckoutCancelled = () => {
        this.props.history.goBack();
    };

    onCheckoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        console.log("HI: ", this.props.match.url);
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.onCheckoutCancelled}
                    onCheckoutContinued={this.onCheckoutContinued}
                />
                <Route path={this.props.match.url + "/contact-data"} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;
