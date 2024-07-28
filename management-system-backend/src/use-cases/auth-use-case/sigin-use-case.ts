const AwsConfig = require("../../utils/helpers/aws-config");
export const buildSiginUseCase = ({ userPool }) => {
  return async ({ email, password }: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      const cognitoUser = AwsConfig.getCognitoUser(email);
      cognitoUser.authenticateUser(AwsConfig.getAuthDetails(email, password), {
        onSuccess: (result) => {
          const token = {
            accessToken: result.getAccessToken().getJwtToken(),
            idToken: result.getIdToken().getJwtToken(),
            refreshToken: result.getRefreshToken().getToken(),
          };
          return resolve(token);
        },

        onFailure: (err) => {
          reject({
            statusCode: 400,
            message: err.message || "Authentication failed",
          });
        },
        newPasswordRequired: (userAttributes) => {
          delete userAttributes.email_verified;
          console.log("------------", userAttributes);

          // sessionUserAttributes = userAttributes;
          // cognitoUser.completeNewPasswordChallenge(
          //   "We$am1234",
          //   sessionUserAttributes
          // );
        },
      });
    });
  };
};
