import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import jwkToPem from "jwk-to-pem";
import { CognitoJwtVerifier } from "aws-jwt-verify";

const verifier = CognitoJwtVerifier.create({
  userPoolId: "eu-central-1_6JZumGLUE",
  tokenUse: "access",
  clientId: "6vdtusecjckctsu8vvfqu530a2",
});

export const requireAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers?.["authorization"] as string;

  if (!authorization) {
    return res.status(401).json({ messsage: "No token found" });
  }
  const token = authorization.split(" ")[1];

  try {
    const payload = await verifier.verify(token);
    req["user"] = payload;
    next();
  } catch (err) {
    return res.status(401).json({ messsage: "Not authenticated" });
  }
};
