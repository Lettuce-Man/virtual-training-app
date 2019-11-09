import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as aws from "aws-sdk";

/*
  Generated class for the S3ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class S3ServiceProvider {

  COGNITO_IDENTITY_TRAINEES: {
    IDENTITY_POOL_ID: "FitnessLive Trainees"
  }
  COGNITO_IDENTITY_TRAINERS: {
    IDENTITY_POOL_ID: "FitnessLive Trainers"
  }
  S3: {
    BUCKET_NAME: "fitnessliveclasses"
  }

  constructor(public http: HttpClient) {
    console.log('Hello S3ServiceProvider Provider');
  }

  upload(stringName, accessToken) {
    return new Promise((resolve, reject) => {
      aws.config.region = 'us-east-2';
      aws.config.credentials = new aws.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-2:54583b5e-ce7a-4ed5-b3ba-4261bb314b11',
        Logins: {
          "cognito-idp.us-east-2.amazonaws.com/us-east-2_pf74Ars9q": accessToken
        }
      });
  
      var s3 = new aws.S3({
        apiVersion: "2006-03-01",
        params: { Bucket: this.S3.BUCKET_NAME }
      });
  
      let buf = 'Hello World'
  
      var data = {
        Bucket: this.S3.BUCKET_NAME,
        Key: stringName,
        Body: buf,
        ContentEncoding: "base64",
        ContentType: "text"
      };
  
      s3.putObject(data, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

}
