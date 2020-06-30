import { Component } from '@angular/core';
import { products } from '../products';
/*
import Amplify, { API } from 'aws-amplify';

const apiName = 'concierge';
const path = '/trip';
const myInit = { // OPTIONAL
  headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  queryStringParameters: {  // OPTIONAL
    name: 'param',
  },
};

API
    .get(apiName, path, myInit)
    .then(response => {
      // Add your code here
    })
    .catch(error => {
      console.log(error.response);
    });

function getData() {
  const apiName = 'concierge';
  const path = '/trip';
  const myInit = { // OPTIONAL
    headers: {}, // OPTIONAL
  };

  return API.get(apiName, path, myInit);
}

(async function () {
  const response = await getData();
})();

 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/