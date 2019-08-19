/*
 * @Author: Mr.zheng
 * @Date: 2019-08-09 15:00:51
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-09 16:56:18
 * @Description: 
 */
import fetch from '../utils/fetch'
// import axios from 'axios'

function login(data: any) {
  return fetch.post('/login/cellphone', data)
}
function recommendSong() {
  return fetch.post('/personalized')
}

export {
  login,
  recommendSong
}