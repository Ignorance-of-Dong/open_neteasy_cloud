import { Drawer, NavBar, Icon } from 'antd-mobile';
import React, { useState, useEffect } from 'react'
// import {Icons} from '../../components'
import RouterView from '../../router/routerView'
import PgLeftSlider from '../PgLeftSlider'
import './index.scss'
function Index(props: any) {
    let [heightlight, setheightlight] = useState(1)
    let [open, setopen] = useState(false)
    
    function onOpenChange(...args) {
        setopen(!open)
    }
    let tabBars = [
        {
            title: '我的',
            paths: '/index/my'
        },
        {
            title: '发现',
            paths: '/index/fined'
        },
        {
            title: '朋友',
            paths: '/index/firends'
        },
        {
            title: '视频',
            paths: '/index/vidio'
        }
    ]
    // eslint 并不了解你的规则，应该在此处禁用eslint
    /* eslint-disable */
    useEffect(() => {
        props.history.push(tabBars[heightlight].paths)
    }, [heightlight])

    function toTabable(path, index) {
        setheightlight(index)
        props.history.push(path)
    }
    const sidebar = (<PgLeftSlider/>)
    return (
        <>
            <div className='index-wraps'>
                <NavBar
                    mode="light"
                    icon={<Icon type="ellipsis" />}
                    // onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '10' }} />,
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    onLeftClick={onOpenChange}
                >
                    {
                        tabBars.map((item, index) => {
                            return (
                                <div className={heightlight === index ? 'tab-index-bar-actived' : 'tab-index-bar'} onClick={() => {
                                    toTabable(item.paths, index)
                                }} key={index}>{item.title}</div>
                            )
                        })
                    }
                </NavBar>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight - 45}}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={open}
                    onOpenChange={onOpenChange}
                >
                    <RouterView routers={props.route}/>
                </Drawer>
            </div>
        </>
    );
}

export default Index