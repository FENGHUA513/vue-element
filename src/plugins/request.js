import axios from 'axios'
import qs from 'qs'

const config = {
  timeout: 6000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

function fixURL (url) {
  if (process.env.NODE_ENV === 'production') {
    return `${window.location.origin}${url}`
  } else {
    return url
  }
}


function checkResponse (response, notice) {
  console.log('response', response)
  return new Promise((resolve, reject) => {
    let code = Number(response.code)
    let status = response.status
    if (code === 0) {
      resolve(response)
    } else {
      reject(response)
    }
  })
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {object} [options]         The options we want to pass to axios
 * @param  {string} [options.url]     请求的url地址（必须）
 * @param  {string} [options.method]  请求方式， get or post，默认post
 * @param  {object} [options.data]    请求参数
 * @param  {number} [options.timeout] 请求超时时间
 * @return {object}                   promise对象
 */
function request (options = {}) {
  let {
    url,
    method,
    data,
    timeout,
    headers
  } = options

  method = method || 'post'
  data = data || {}
  timeout = timeout || config.timeout
  headers = Object.assign({}, headers, config.headers)

  var time = +new Date() + ''
  headers.time = time

  let result = {}
  // 请求类型判断
  if (method === 'get') {
    result = new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: fixURL(url),
        params: data,
        timeout,
        headers
      })
      .then((res) => {
        checkResponse(res.data, notice).then((data) => {
          resolve(data)
        })
        .catch((data) => {
          reject(data)
        })
      })
      .catch((data) => {
        reject(data)
      })
    })
  } else if (method === 'post') {
    result = new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: fixURL(url),
        data: qs.stringify(data),
        timeout,
        headers
      })
      .then((res) => {
        checkResponse(res.data, notice).then((data) => {
          resolve(data)
        })
        .catch((data) => {
          reject(data)
        })
      })
      .catch((data) => {
        reject(data)
      })
    })
  }

  return result
}

export default {
  install: function (Vue, options) {
    Vue.prototype.$request = request
  }
}
