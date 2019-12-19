import http from './http'

/**
 * Get请求
 * @param { String } url
 * @param { Object } params
 */
export function sendGet (url, params = {}) {
  return http.get(url, { params }).then(response => {
    return response.data
  })
}

/**
 *  Post 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPost (url, data) {
  return http.post(url, data).then(response => {
    return response.data
  })
}

/**
 *  Put 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPut (url, data) {
  return http.put(url, data).then(response => {
    return response.data
  })
}

/**
 *  Delete 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendDelete (url, data) {
  return http.delete(url, data).then(response => {
    return response.data
  })
}

/**
 *  Patch 请求
 * @param { String } url
 * @param { Object } data
 */
export function sendPatch (url, data) {
  return http.patch(url, data).then(response => {
    return response.data
  })
}
