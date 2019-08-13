import React, { useEffect } from 'react'
// import { login } from '../../api/index.js'
import Headers from '../../components/Headers'
import './index.scss'
// function c() {
//   return <div>
//     111
//   </div>
// }
function Login() {
    useEffect(() => {
        // let data = {
        //   phone: '17603446843',
        //   password: 'zhang1054914660'
        // }
        // login(data).then(res => {
        //   console.log(res)
        // })
    })
    return (
        <>
            <Headers />
            <div className="phone-wrap">
                <p className="phone-tips">
                    未注册的手机号登陆后自动创建账户
                </p>
                <div className="phone-input">
                    <div className="phone-border">
                        <div className="phone-prefix">
                            +86
                        </div>
                        <div className="phone-text-wrap">
                            <input type="text" className="phone-text" />
                        </div>
                        <div className="phone-close">
                            x
                        </div>
                    </div>
                </div>
                <div className="phone-buttom">
                    下一步
                </div>
            </div>
        </>
    )
}

export default Login