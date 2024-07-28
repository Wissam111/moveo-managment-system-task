import dotenv from "dotenv";

const AWS = require("aws-sdk");
const jwt_decode = require("jwt-decode");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
let cognitoAttributeList = [];

//should be in env file
const poolData = {
  UserPoolId: "eu-central-1_6JZumGLUE",
  ClientId: "6vdtusecjckctsu8vvfqu530a2",
};

const attributes = (key, value) => {
  return {
    Name: key,
    Value: value,
  };
};

function setCognitoAttributeList(email, agent) {
  let attributeList = [];
  attributeList.push(attributes("email", email));
  attributeList.forEach((element) => {
    cognitoAttributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute(element)
    );
  });
}

function getCognitoAttributeList() {
  return cognitoAttributeList;
}

function getCognitoUser(email) {
  const userData = {
    Username: email,
    Pool: getUserPool(),
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  return cognitoUser;
}

function getUserPool() {
  return new AmazonCognitoIdentity.CognitoUserPool(poolData);
}

function getAuthDetails(email, password) {
  var authenticationData = {
    Username: email,
    Password: password,
  };
  return new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
}

function initAWS(
  region = process.env.AWS_COGNITO_REGION,
  identityPoolId = process.env.AWS_COGNITO_IDENTITY_POOL_ID
) {
  AWS.config.region = region;
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: identityPoolId,
  });
}

function decodeJWTToken(token) {
  const { email, exp, auth_time, token_use, sub } = jwt_decode(token.idToken);
  return { token, email, exp, uid: sub, auth_time, token_use };
}

module.exports = {
  initAWS,
  getCognitoAttributeList,
  getUserPool,
  getCognitoUser,
  setCognitoAttributeList,
  getAuthDetails,
  decodeJWTToken,
};