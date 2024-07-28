const { getUserPool } = require("../../utils/helpers/aws-config");
import { buildSiginUseCase } from "./sigin-use-case";
import { buildSignupUseCase } from "./signup-use-case";

const userPool = getUserPool();
const signin = buildSiginUseCase({ userPool });
const signup = buildSignupUseCase({ userPool });

module.exports = Object.freeze({
  signin,
  signup,
});
