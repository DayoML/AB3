import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import Amplify, { API } from 'aws-amplify';

Amplify.configure({
  /*
   // OPTIONAL - if your API requires authentication
   Auth: {
       // REQUIRED - Amazon Cognito Identity Pool ID
       identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
       // REQUIRED - Amazon Cognito Region
       region: 'XX-XXXX-X',
       // OPTIONAL - Amazon Cognito User Pool ID
       userPoolId: 'XX-XXXX-X_abcd1234',
       // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
       userPoolWebClientId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3',
   },*/
  API: {
    endpoints: [
      {
        name: "concierge",
        endpoint: "https://m0feirc8e5.execute-api.us-east-1.amazonaws.com/Production"
      }
    ]
  }
});
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/