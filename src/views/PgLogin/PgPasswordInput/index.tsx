import React, { useEffect, useState} from 'react'
// import { login } from '../../api/index.js'
import useQuery from '../../../utils/useQuery'
import Headers from '../../../components/Headers'
import { login } from '../../../api'
import './index.scss'
function PgPasswordInput(props: any) {
    let [password, setpassword] = useState('')
    useEffect(() => {
        // console.log(useQuery())
    })
    let { phone } = useQuery()
    function toLogin(password) {
        
        // console.log(password, '去登陆')
        let params = {
            phone: phone,
            password: password
        }
        login(params).then(res => {
            console.log(res)
        })
    }
    return (
        <>
            <Headers props={props}/>
            <div className="password-wrap">
                <div className="password-input">
                    <div className="password-border">
                        <div className="password-prefix">
                            密码
                        </div>
                        <div className="password-text-wrap">
                            <input type="password" className="password-text" value={password} onChange={(e) => {
                                setpassword(e.target.value)
                            }}/>
                        </div>
                        <div className="password-close">
                            x
                        </div>
                    </div>
                </div>
                <div className="password-buttom" onClick={() => {
                    toLogin(password)
                }}>
                    登陆
                </div>
            </div>
        </>
    )
}

export default PgPasswordInput