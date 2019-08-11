import React, { useEffect } from 'react'
import { login } from '../../api/index.js'
import Headers from '../../components/Headers'
function c() {
  return <div>
    111
  </div>
}
// function Login() {
//   // useEffect(() => {
//   //   let data = {
//   //     phone: '17603446843',
//   //     password: 'zhang1054914660'
//   //   }
//   //   login(data).then(res => {
//   //     console.log(res)
//   //   })
//   // })
//   return (
//     <>
      
//       {/* <div>登录页</div>
      
//       <input type="text" placeholder='输入手机号' />
//       <input type="text" placeholder='输入密码' /> */}
      
//       {/* {Headers} */}
//     </>
//   )
// }

class Login extends React.Component{
  render() {
    return <Headers/>
  }
}
export default Login