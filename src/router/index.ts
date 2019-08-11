/*
 * @Author: Mr.zheng
 * @Date: 2019-08-09 14:32:22
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-09 14:45:33
 * @Description: 
 */
import React from 'react'

export default {
    config: [
        {
            path: "/home",
            component: React.lazy(() => import('../views/Home')),
            exact: true
        },
        {
            path: "/login",
            component: React.lazy(() => import('../views/Login')),
            exact: true
        },
        {
            path: "/wrong",
            component: React.lazy(() => import('../views/Wrong')),
            exact: true
        },
    ]
}