import Cookies from "js-cookie";
export const getLanguage = () => {
  // if (typeof window === undefined) {
  //   return null;
  // }
  const lang = Cookies.get("i18next");
  return lang;

  // return sessionCookie ? JSON.parse(sessionCookie) : null;
};
