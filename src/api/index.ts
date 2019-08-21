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
  return fetch.post('/personalized/mv')
}
/**
 * 查询mv的地址
 */
function mvsetusl() {
  return fetch.post('/mv/url?id=5436712')
}
/**
 * 查询mv的详情
 */
function mvdetails() {
  return fetch.post('/mv/detail?mvid=5436712')
}
/**
 * 查询视频标签列表
 */
function videoGroup() {
  return fetch.post('/video/group?id=9104')
}

/**
 * 查询相关视频
 */
function relatedAllvideo() {
  return fetch.post('/related/allvideo?id=89ADDE33C0AAE8EC14B99F6750DB954D')
}

/**
 * mv评论
 */

function commentMv() {
  return fetch.post('/comment/mv?id=5436712')
}

/**
 * 查询歌单列表
 */

function playlistDetail() {
  return fetch.post('/playlist/detail?id=2796823560')
}
export {
  login,
  recommendSong,
  mvsetusl,
  mvdetails,
  videoGroup,
  relatedAllvideo,
  commentMv,
  playlistDetail
}