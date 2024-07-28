import HttpRequest from "./HttpRequest";
import { NetWorkProps } from "@/types";
export default function apiCall({
  url,
  method,
  body,
  contentType,
}: NetWorkProps) {
  const promise = new Promise((resolve, reject) => {
    HttpRequest({ url, method, body, contentType })
      .then((result) => {
        resolve(result?.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
  return promise;
}
