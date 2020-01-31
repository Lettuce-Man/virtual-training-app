import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the S3ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class S3ServiceProvider {

  COGNITO_IDENTITY: {
    IDENTITY_POOL_ID: ""
  }

  constructor(public http: HttpClient) {
    console.log('Hello S3ServiceProvider Provider');
  }

}
