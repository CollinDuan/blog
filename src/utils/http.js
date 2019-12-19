import axios from 'axios'
import { Notification } from 'element-ui'
import {
  HTTP_STATUS_MSG_5XX,
  HTTP_STATUS_TITLE_ERROR,
  HTTP_STATUS_TITLE_5XX
} from './TEXT'

const showNotification = (type, message, title = HTTP_STATUS_TITLE_ERROR) => {
  Notification({
    type: type,
    title,
    message,
    duration: 3000
  })
}
const axiosCreat = {
  // 根据环境配置后端api的url
  baseURL: process.env.API_URL,
  // 请求超时时间
  timeout: 3000,
  // 是否允许后端设置cookie跨域，一般无需改动
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false,
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  // 如果 `validateStatus` 返回 `true`(或者设置为`null` 或`undefined`) ，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status < 500
  }
}

// 被挂起的请求数组
let refreshSubscribers = []

// push 所有请求到数组中
const subscribeTokenRefresh = cb => {
  refreshSubscribers.push(cb)
}

const http = axios.create(axiosCreat)

// request拦截器
// Authorization
http.interceptors.request.use(config => {

}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {

}, error => {
  // 基于axiosCreate中validateStatus配置的区间判断此时状态码>=500 或者 浏览器直接报错(比如跨域) 走此弹框。
  Notification({
    type: 'error',
    title: HTTP_STATUS_TITLE_5XX,
    message: HTTP_STATUS_MSG_5XX,
    duration: 3000
  })
  return Promise.reject(error)
})

export default http
