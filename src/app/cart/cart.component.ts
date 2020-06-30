import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import Amplify, { API } from 'aws-amplify';

const apiName = 'concierge'; // replace this with your api name.
const path = '/trip'; //replace this with the path you have configured on your API
const myInit = {
    body: {}, // replace this with attributes you need
    headers: {}, // OPTIONAL
};

API
    .post(apiName, path, myInit)
    .then(response => {
        // Add your code here
    })
    .catch(error => {
        console.log(error.response);
    });

async function postData() {
    const apiName = 'concierge';
    const path = '/trip';
    const myInit = { // OPTIONAL
        body: {}, // replace this with attributes you need
        headers: {}, // OPTIONAL
    };

    return await API.post(apiName, path, myInit);
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder,) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

 onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    postData();
    window.alert('Your order has been submitted'); 
    console.warn('Your order has been submitted', customerData);
  }

}