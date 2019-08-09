import React, {useEffect} from 'react'
import {login} from '../../api/index.js'

function Login() {
  useEffect(() => {
    let data = {
      phone: '17603446843',
      password: 'zhang1054914660'
    }
    login(data).then(res => {
      console.log(res)
    })
  })
  return <>
    <div>登录页</div>
    <input type="text" placeholder='输入手机号'/>
    <input type="text" placeholder='输入密码' />
  </>
}
export default Login