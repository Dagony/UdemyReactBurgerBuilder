import React, {Component} from 'react';
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import classes from './ContactData.css';
import axios from '../../../axios-order';

class ContactData extends Component {
    state = {
        loading: false,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        // alert('You continue!');
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mark de Wit',
                address: {
                    street: 'sesame street',
                    zipCode: '1234',
                    country: 'The Netherlands'
                },
                email: 'test@test.test',
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');

            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    render() {

        let form = ( <form>
            <input className={classes.Input} type={"text"} name={"name"} placeholder={"Your name"} />
            <input className={classes.Input} type={"text"} name={"email"} placeholder={"Your Email"} />
            <input className={classes.Input} type={"text"} name={"street"} placeholder={"Your Street"} />
            <input className={classes.Input} type={"text"} name={"postal"} placeholder={"Your Postal Code"} />
            <Button btnType={"Success"} clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
