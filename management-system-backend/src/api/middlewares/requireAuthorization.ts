// const m = async () => {
//   return (req, res, next) => {};
// };

export const makeRoleAuthorization = ({ role }) => {
  return (req, res, next) => {
    const roles = req.user["cognito:groups"];

    if (!roles.includes(role)) {
      return res
        .status(403)
        .json({ messsage: "You're not authorized to access this route" });
    }

    next();
  };
};
