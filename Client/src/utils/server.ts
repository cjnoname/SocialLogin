import { IException, isNoContent } from '../utils/error';
// import { getUser } from "./security";

const sharedHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
}

enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

//   const user = getUser();
//   if (user.accessToken) {
//     headers.Authorization = `Bearer ${user.accessToken}`;
//   }
//   return headers;
// }

function buildURL(path: string) {
  if (path.indexOf("?") > 0) {
    return `api/${path}&nocache=${Math.random()}`;
  }
  return `/api/${path}?nocache=${Math.random()}`;
}

function get(path: string, data?: any, options = {}) {
  path = data ? `${path}?${getQueryString(data)}` : path;
  return doFetch(path, null, HttpMethods.GET, options);
}

function getQueryString(params: any) {
  return Object
    .keys(params)
    .map(k => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map((val: any) => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&')
      }

      return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
    })
    .join('&')
}

function post(path: string, data: any, options = {}) {
  return doFetch(path, data, HttpMethods.POST, options);
}

function put(path: string, data: any, options = {}) {
  return doFetch(path, data, HttpMethods.PUT, options);
}

function del(path: string, data: any, options = {}) {
  return doFetch(path, data, HttpMethods.DELETE, options);
}

async function doFetch(path: string, data: any, method: HttpMethods, options = {}) {
  let request = {
    method: method,
    headers: {
      ...options,
      ...sharedHeaders
    }
  } as any;
  if (method != HttpMethods.GET) {
    request.body = data ? JSON.stringify(data) : null;
  }
  try {
    const response = await fetch(buildURL(path), request);
    if (!response.ok) {
      throw { httpCode: response.status, message: await response.json() } as IException;
    }
    return isNoContent(response) ? undefined : await response.json();
  } catch (e) {
    if (e.httpCode) {
      console.log(e.message);
    }
    console.log(e);
  }
}

export default {
  buildURL,
  get,
  post,
  put,
  delete: del
};
