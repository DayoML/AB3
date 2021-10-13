import { Component } from '@angular/core';
import { recommendations } from './recommendations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
public recommendationList: any= recommendations;
  public products = [
    {
      name: 'Maui Getaway',
      price: '$799',
      itemcount : 7,
      description: 'Explore Maui Hilton',
      image: 'https://d2g1d98hwd30nd.cloudfront.net/AB3_images/6.jpg'
    },
    {
      name: 'Maui Escape',
      price: '$699',
      itemcount : 5,
      description: 'Explore Maui Hilton',
      image: 'https://d2g1d98hwd30nd.cloudfront.net/AB3_images/9.jpg'
    },
    {
      name: 'Hilton Maui',
      price: '$299',
      itemcount : 3,
      description: 'Explore Maui Hilton.',
      image: 'https://d2g1d98hwd30nd.cloudfront.net/AB3_images/5.jpg'
    }
  ];

  constructor(){}

  ngOnInit(){
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/