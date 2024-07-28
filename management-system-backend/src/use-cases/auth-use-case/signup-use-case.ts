import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const AwsConfig = require("../../utils/helpers/aws-config");

export const buildSignupUseCase = ({ userPool }) => {
  return async ({ email, password }: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      const pool = AwsConfig.getUserPool();

      var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "wisso",
        Value: "tarik.id.10@gmail.com",
      });

      userPool.signUp(
        "tarik.id.10@gmail.com",
        "Tarik212!@",
        [attributeEmail],
        null,
        function (err, result) {
          console.log(result);

          if (err) {
            reject(err);
            return;
          }
          var cognitoUser = result.user;
          console.log("user name is " + cognitoUser.getUsername());
          resolve(result);
        }
      );
    });
  };
};

// newPasswordRequired: function (userAttributes, requiredAttributes) {
//   // User was signed up by an admin and must provide new
//   // password and required attributes, if any, to complete
//   // authentication.
//   // the api doesn't accept this field back
//   console.log("fk1");

//   delete userAttributes.email_verified;
//   // store userAttributes on global variable
//   sessionUserAttributes = userAttributes;

//   console.log("fk 2");
// },
