import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import awsconfig from '../../aws-exports';
import Amplify, { API } from 'aws-amplify';
Amplify.configure(awsconfig);
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';


/*
  Generated class for the S3ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppSyncProvider {

  constructor(public http: HttpClient) {
    
  }

}
