import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import Amplify, { API } from 'aws-amplify';
import Amplify2, { Auth } from 'aws-amplify';

async function postData() {
    const apiName = 'concierge';
    const path = '/trip';
    const myInit = { // OPTIONAL
        body: {
            "ProductID" : "cd8976f0-1b6b-43a5-bc98-000f78a6dee7",
            "orderamount" : "2500",
            "orderitemcount" : "25"
        }, // replace this with attributes you need
        headers: {
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
            }, // OPTIONAL*/
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
      ItemCount: ''
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