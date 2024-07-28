import eventEmitter from "@/events/eventEmitter";
import { NetWorkProps } from "@/types";
import { API_SETTINGS } from "@/utils/app-settings";
import { getSession } from "@/utils/session";

import axios from "axios";
const defaultLang = "en";
const HttpRequest = async ({
  url,
  method,
  body,
  contentType = "application/json",
}: NetWorkProps): Promise<any> => {
  const token = getSession();
  // console.log(token);
  return axios
    .request({
      url: url,
      baseURL: API_SETTINGS.BASE_URL,
      method: method,
      data: body,
      headers: {
        "Content-Type": contentType,
        Authorization: "Bearer " + token,
      },
    })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((err) => {
      if (err?.response && err?.response?.status === 401) {
        eventEmitter.emit("unauthorizedError");
      }

      console.log(err);
      return Promise.reject(err.response);
    });
};
export default HttpRequest;
