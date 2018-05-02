import axios from 'axios'
// MessageBox
import { Message } from 'element-ui'
import store from '../store'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://park-cn.17disney.com/api/v3', // process.env.BASE_API, // api的base_url
  baseURL: '/',
  timeout: 15000 // 请求超时时间
})



// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response
    // console.log(res)
    const { status } = res

    if (status === 200) {
      const { message } = response.data

      if (message) {
        Message({
          message,
          type: 'warning',
          duration: 5 * 1000
        })
      }
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   MessageBox.confirm(
      //     '你已被登出，可以取消继续留在该页面，或者重新登录',
      //     '确定登出',
      //     {
      //       confirmButtonText: '重新登录',
      //       cancelButtonText: '取消',
      //       type: 'warning'
      //     }
      //   ).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return response.data
    } else if (status === 204) {
      Message({
        message: '无内容',
        type: 'warning',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: res.data,
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject('error')
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
