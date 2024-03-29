import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-list/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';


Amplify.configure(awsconfig);
Amplify.configure({

 // OPTIONAL - if your API requires authentication
 Auth: {
     // REQUIRED - Amazon Cognito Identity Pool ID
     identityPoolId: 'us-east-1:657e28ca-b448-46e7-a38e-50912d7dff16',
     // REQUIRED - Amazon Cognito Region
     region: 'us-east-1',
     // OPTIONAL - Amazon Cognito User Pool ID
     userPoolId: 'us-east-1_oH9BmKgTU',
     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
     userPoolWebClientId: 'vbeth9n82h6id2kivjgavs788'
 },
  API: {
    endpoints: [
      {
        name: "AB3",
        endpoint: "https://xc2kel50bh.execute-api.us-east-2.amazonaws.com/personalization"
      },
      {
        name: "concierge",
        endpoint: "https://xu96dxae5j.execute-api.us-east-1.amazonaws.com/development"
      }
    ]
  }
});

@NgModule({
  imports: [
    BrowserModule,
    AmplifyUIAngularModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/