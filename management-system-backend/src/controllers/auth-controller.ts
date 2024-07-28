import { Request, Response, NextFunction } from "express";
const { authService } = require("../use-cases");

interface SigninDto {
  email: string;
  password: string;
}
const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password }: SigninDto = req.body;
    const response = await authService.signin({
      email,
      password,
    });
    res.status(201).json({
      message: "sign successfull",
      response,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password }: SigninDto = req.body;
    console.log(email, password);
    const response = await authService.signup({
      email,
      password,
    });
    res.status(201).json({
      message: "sign successfull",
      response,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  signin,
  signup,
};
