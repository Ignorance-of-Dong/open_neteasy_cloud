/*
 * @Author: Mr.zheng
 * @Date: 2019-08-09 15:00:13
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-09 16:05:27
 * @Description: 
 */
let fetchs = {
  /**
    * 基于 fetch 封装的 GET请求
    * @param url
    * @param params {}
    * @param headers
    * @returns {Promise}
    */
   get: (url, params?) => {
     if (params) {
         var paramsArray = [];
         Object.keys(params).forEach(function (key) {
             paramsArray.push(key + '=' + params[key])
         });
         if (url.search(/\?/) === -1) {
             url += '?' + paramsArray.join('&')
         } else {
             url += '&' + paramsArray.join('&')
         }
     }
     let fetchConfig: any = {
         method: 'get',
         headers: {
           authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
           'Content-Type': 'application/json; charset=utf-8'
         },
         credentials: "include",
         mode: 'cors',
     }
     return fetch(url, fetchConfig).then(response => {
       return response.json().then((res) => {
         if (response.ok && res.code === 200) {
           return Promise.resolve(res)
         } else {
           return Promise.reject(res)
         }
       })
     })
 },
 post: (url, options?) => {
   return fetch(url, {
     method: 'post',
     headers: {
      //  authorization: window.sessionStorage.getItem('token') ? window.sessionStorage.getItem('token') : null,
       'Content-Type': 'application/json; charset=utf-8'
     },
     credentials: "include",
     mode: 'cors',
     body: JSON.stringify(options)
   }).then(response => {
     return response.json().then((res) => {
       if (response.ok && res.code === 200) {
         return Promise.resolve(res)
       } else {
         return Promise.reject(res)
       }
     })
   })
 }
}

export default fetchs