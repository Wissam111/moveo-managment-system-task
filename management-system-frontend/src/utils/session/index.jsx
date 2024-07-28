import { setCookie, getCookie, deleteCookie } from "cookies-next";

export const SESSION_NAME = "moveo-session";

export function saveSession({ accessToken }) {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);

  setCookie(SESSION_NAME, accessToken, {
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
    sameSite: "lax",
  });
}

export function clearSession() {
  deleteCookie(SESSION_NAME, {});
}

export function getSession() {
  const accessToken = getCookie(SESSION_NAME);

  return accessToken;
}
