import { Component } from '@angular/core';
import { products } from '../products';
import { recommendations } from '../recommendations';
import Amplify, { API } from 'aws-amplify';
import Amplify2, { Auth } from 'aws-amplify';

async function getData() {
  const apiName = 'concierge';
  const path = '/products';
  const myInit = { // OPTIONAL
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
    }, // OPTIONAL
  };
  return await  API.get(apiName, path, myInit);
}
// async function getRecommendationData() {
//   const apiName = 'AB3';
//   const path = '/personalization';
//   const myInit = { // OPTIONAL
//     headers: {
//       Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
//     }, // OPTIONAL
//   };
//   return await  API.get(apiName, path, myInit);
// }


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  //personalizeResponse = getRecommendationData();
  recommendations = recommendations;
      /*(async function () {
    const response = await getData();
  })();*/

  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
