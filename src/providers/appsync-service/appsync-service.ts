import { Injectable } from '@angular/core';
import aws_exports from '../../../src/aws-exports.js';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { Auth } from 'aws-amplify';


@Injectable()
export class AppSyncProvider {

   // hc;
   _hc;
  //make try catch?
   constructor() {
     const client = new AWSAppSyncClient({
       url: aws_exports.aws_appsync_graphqlEndpoint,
       region: aws_exports.aws_project_region,
       auth: {
         type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
         jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
       }
     });
     // this.hc = client.hydrated;
     this._hc = client;
   }
   hc() {
     return this._hc.hydrated();
   }
}
