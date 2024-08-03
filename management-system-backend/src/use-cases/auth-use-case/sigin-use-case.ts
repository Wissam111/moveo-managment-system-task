const AwsConfig = require("../../utils/helpers/aws-config");
export const buildSiginUseCase = ({ userPool }) => {
  return async ({ email, password }: { email: string; password: string }) => {
    return new Promise((resolve, reject) => {
      const cognitoUser = AwsConfig.getCognitoUser(email);

      cognitoUser.authenticateUser(AwsConfig.getAuthDetails(email, password), {
        onSuccess: (result) => {
          // console.log(result);
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
        // newPasswordRequired: function (userAttributes, requiredAttributes) {
        //   delete userAttributes.email_verified;
        //   delete userAttributes.email; // <--- add this line

        //   cognitoUser.completeNewPasswordChallenge(
        //     "We$am1234",
        //     userAttributes,
        //     this
        //   );
        // },
      });
    });
  };
};
