import * as APIUtils from  '../utils/APIUtils';
export const NETWORK_OFFLINE = 'NETWORK_OFFLINE';

function createError(response, json) {
  return {
    status: response.status,
    statusText: response.statusText,
    ...json,
  }
}

export function networkOffline() {
  return { type: NETWORK_OFFLINE }
}

function createHeader(headers) {
  const nextHeaders = headers || {}

  nextHeaders["Content-Type"] = "application/json"

  // const  accessToken = APIUtils.GetTokenFromCookie();
  // if (accessToken) nextHeaders.Authorization = `Bearer ${accessToken}`

  return nextHeaders
}

export function successHandler(response) {
  if (response.status !== 204) {
    const {status, statusText} = response
    return response.json()
      .then((json) => {
        return Promise.resolve({data: json, status, statusText})
      })
      .catch((e) => {
        return Promise.resolve({
          status: status,
          data: null,
        })
      })
  }
  return Promise.resolve({ status: 204 })
}

export function errorHandler(response) {
    return response
      .json()
      .then(json => {
        return Promise.reject(createError(response, json))
    });
}

export function fetchWrapper(url, options = {}) {
  try {
    const { headers, body } = options
    const updatedOptions = {
      ...options,
      headers: createHeader(headers),
    }
    if (body) {
      updatedOptions.body = JSON.stringify(body)
    }
    return fetch(url, updatedOptions)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
          return successHandler(response)
      }
      return errorHandler(response)
    })
  } catch (e) {
    return {}
  }
}

export default function (url, options) {
  if (navigator && !navigator.onLine) {
    return Promise.reject(createError({
      statusText: NETWORK_OFFLINE,
      status: "error",
    }))
  }

  return fetchWrapper(url, options)
}
