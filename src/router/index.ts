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
            component: React.lazy(() => import('../views/PgHome')),
            exact: true
        },
        {
            path: "/loginphone",
            component: React.lazy(() => import('../views/PgLogin/PgPhoneInput')),
            exact: true
        },
        {
            path: "/loginpassword",
            component: React.lazy(() => import('../views/PgLogin/PgPasswordInput')),
            exact: true
        },
        {
            path: "/wrong",
            component: React.lazy(() => import('../views/PgWrong')),
            exact: true
        },
        {
            path: "/index",
            component: React.lazy(() => import('../views/PgIndex')),
            exact: true
        },
    ]
}