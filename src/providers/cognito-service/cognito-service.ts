import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer'
import * as AWSCognito from "amazon-cognito-identity-js";

/*
  Generated class for the CognitoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CognitoServiceProvider {

  _TRAINEE_POOL_DATA = {
    UserPoolId: "us-east-2_pf74Ars9q",
    ClientId: "5u7217rrt2ggn3p9chfh7m5h34"
  };

  _TRAINER_POOL_DATA = {
    UserPoolId: "us-east-2_DnyDl1zZl",
    ClientId: "2etd6kd0a03642m5leko9kke62"
  };



  constructor(public http: HttpClientModule, private emailComposer: EmailComposer) {
    console.log('Hello CognitoServiceProvider Provider');
  }

  //replace the value with actual value 


  
signUp(email, password) {
  return new Promise((resolved, reject) => {
    const userPool = new AWSCognito.CognitoUserPool(this._TRAINEE_POOL_DATA);

    let userAttribute = [];
    userAttribute.push(
      new AWSCognito.CognitoUserAttribute({ Name: "email", Value: email })
    );

    userPool.signUp(email, password, userAttribute, null, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolved(result);
      }
    });
  });
}

TrainerSignUp(email, password) {
 /* this.emailComposer.isAvailable().then((available: boolean) =>{
    if(available) {

    }
  });
  

  let signupEmail = {
    to: 'gmarkowitz2014@gmail.com',
    subject: 'New FitnessLive Trainer Application',
    body: 'Hello, this is a test.',
    isHtml: true
  }

  this.emailComposer.open(signupEmail);
  */

  return new Promise((resolved, reject) => {
    const userPool = new AWSCognito.CognitoUserPool(this._TRAINER_POOL_DATA);

    let userAttribute = [];
    userAttribute.push(
      new AWSCognito.CognitoUserAttribute({ Name: "email", Value: email })
    );

    userPool.signUp(email, password, userAttribute, null, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolved(result);
      }
    });
  });
}

confirmUser(verificationCode, userName) {
  return new Promise((resolved, reject) => {
    const userPool = new AWSCognito.CognitoUserPool(this._TRAINEE_POOL_DATA);

    const cognitoUser = new AWSCognito.CognitoUser({
      Username: userName,
      Pool: userPool
    });

    cognitoUser.confirmRegistration(verificationCode, true, function(err, result) {
      if (err) {
        reject(err);
      } else {
        resolved(result);
      }
    });
  });
}

authenticate(email, password) {
  return new Promise((resolved, reject) => {
    const userPool = new AWSCognito.CognitoUserPool(this._TRAINEE_POOL_DATA);

    const authDetails = new AWSCognito.AuthenticationDetails({
      Username: email,
      Password: password
    });

    const cognitoUser = new AWSCognito.CognitoUser({
      Username: email,
      Pool: userPool
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: result => {
        resolved(result);
      },
      onFailure: err => {
        reject(err);
      },
      newPasswordRequired: userAttributes => {
        // User was signed up by an admin and must provide new
        // password and required attributes, if any, to complete
        // authentication.

        // the api doesn't accept this field back
        userAttributes.email = email;
        delete userAttributes.email_verified;

        cognitoUser.completeNewPasswordChallenge(password, userAttributes, {
          onSuccess: function(result) {},
          onFailure: function(error) {
            reject(error);
          }
        });
      }
    });
  });
}

authenticateTrainer(email, password) {
  return new Promise((resolved, reject) => {
    const userPool = new AWSCognito.CognitoUserPool(this._TRAINER_POOL_DATA);

    const authDetails = new AWSCognito.AuthenticationDetails({
      Username: email,
      Password: password
    });

    const cognitoUser = new AWSCognito.CognitoUser({
      Username: email,
      Pool: userPool
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: result => {
        resolved(result);
      },
      onFailure: err => {
        reject(err);
      },
      newPasswordRequired: userAttributes => {
        // User was signed up by an admin and must provide new
        // password and required attributes, if any, to complete
        // authentication.

        // the api doesn't accept this field back
        userAttributes.email = email;
        delete userAttributes.email_verified;

        cognitoUser.completeNewPasswordChallenge(password, userAttributes, {
          onSuccess: function(result) {},
          onFailure: function(error) {
            reject(error);
          }
        });
      }
    });
  });
}


}


