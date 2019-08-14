import React, { useEffect } from 'react'
// import { login } from '../../api/index.js'
import Headers from '../../../components/Headers'
import './index.scss'
function PgPasswordInput(props) {
    useEffect(() => {
        console.log(props.Hash)
    })
    return (
        <>
            <Headers props={props}/>
            <div className="password-wrap">
                <div className="password-input">
                    <div className="password-border">
                        <div className="password-prefix">
                            +86
                        </div>
                        <div className="password-text-wrap">
                            <input type="text" className="password-text" />
                        </div>
                        <div className="password-close">
                            x
                        </div>
                    </div>
                </div>
                <div className="password-buttom">
                    下一步
                </div>
            </div>
        </>
    )
}

export default PgPasswordInput