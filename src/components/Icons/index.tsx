import React from 'react'

function Icon(props:any) {
    return <i className={`iconfont ${props.className}`}>{props.un}</i>
}

export default Icon