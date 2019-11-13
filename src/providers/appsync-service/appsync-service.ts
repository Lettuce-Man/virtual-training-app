import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import awsconfig from '../../aws-exports';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import gql from 'graphql-tag';
import { getFitnessLiveClasses, listFitnessLiveClasses } from '../../graphql/queries'
import { Session } from '../../models/session';


const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY, // or type: awsconfig.aws_appsync_authenticationType,
    apiKey: awsconfig.aws_appsync_apiKey,
  }
});


@Injectable()
export class AppSyncProvider {

  private classes: Session[];

  constructor(public http: HttpClient) {
    
  }

  /*getAllClasses() {
    client.query<{ rawData: [] }>({
      query: gql(getFitnessLiveClasses)
    }).then(({ data: { rawData } }) => {
      this.classes = rawData;
      //let newSession = new Session(rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0], rawData[0]);
    });
   
  }
  */

  syncClasses() {
    return this.classes;
  }

}
