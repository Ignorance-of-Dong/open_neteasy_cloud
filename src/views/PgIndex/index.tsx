import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import React, { useState } from 'react'
import {Icons} from '../../components'
import './index.scss'
function Index() {
    let [open, setopen] = useState(true)
    function onOpenChange(...args) {
        setopen(!open)
    }
    const sidebar = (
        <List className='left-slider-wraps'>
            <div className="left-slider-topwrap">
                <div className="left-slider-anuter">
                    <img src="http://p1.music.126.net/0jS11D3OFnYBUpako_cLWA==/18547661650919676.jpg?param=140y140" alt=""/>
                </div>
                <p className='left-silder-name'>
                    <span className='l-s-n-name'> 想上树的跳蚤 </span>
                    <span className='l-s-n-sign'>签到</span>
                </p>
                <div className="left-slider-vip-wrap">
                    <div className="l-v-left">
                        <p className='v-i-p small'>开通黑胶VIP</p>
                        <p className='small' style={{color:'#ccc'}}> 已过期</p>
                        <i></i>
                    </div>
                    <div className="l-v-Advertisement small">
                        披萨免费吃一年
                    </div>
                </div>
                <div className="left-slider-tab-bar">
                    <div className="l-s-t-b-coule">
                        <Icons className='c-icon' un='&#xe60a;' />
                        <p className='l-s-t-b-name small'>我的消息</p>
                    </div>
                    <div className="l-s-t-b-coule">
                        <Icons className='c-icon' un='&#xe604;' />
                        <p className='l-s-t-b-name small'>我的好友</p>
                    </div>

                    <div className="l-s-t-b-coule">
                        <Icons className='c-icon' un='&#xe686;' />
                        <p className='l-s-t-b-name small'>个性换肤</p>
                    </div>
                    <div className="l-s-t-b-coule">
                        <Icons className='c-icon' un='&#xe600;' />
                        <p className='l-s-t-b-name small'>听歌识曲</p>
                    </div>
                </div>
                <div className="left-slider-demand-like">
                    <div className="l-s-d-list  mT">
                        <div className="l-s-d-l-left">
                            <Icons className='l-icon' un='&#xe75e;' /> 
                            <p className='small'>演出</p>
                        </div>
                        <div className="l-s-d-l-right bigsmall">
                            萧金腾
                        </div>
                    </div>
                    <div className="l-s-d-list">
                        <div className="l-s-d-l-left">
                            <Icons className='l-icon' un='&#xe619;' />
                            <p className='small'>商城</p>
                        </div>
                        <div className="l-s-d-l-right bigsmall">
                            皮卡丘伞39元
                        </div>
                    </div>
                    <div className="l-s-d-list">
                        <div className="l-s-d-l-left">
                            <Icons className='l-icon' un='&#xe61d;' />
                            <p className='small'>附近的人</p>
                        </div>
                        <div className="l-s-d-l-right bigsmall">
                            听说你也在想我
                        </div>
                    </div>
                    <div className="l-s-d-list">
                        <div className="l-s-d-l-left">
                            <Icons className='l-icon' un='&#xe717;' />
                            <p className='small'>口袋铃声</p>
                        </div>
                        <div className="l-s-d-l-right bigsmall">

                        </div>
                    </div>
                    <div className="l-s-d-list">
                        <div className="l-s-d-l-left">
                            <Icons className='l-icon' un='&#xe60b;' />
                            <p className='small'>我的订单</p>
                        </div>
                        <div className="l-s-d-l-right bigsmall">

                        </div>
                    </div>
                </div>
            </div>

        </List>
    );

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

                    <div className='tab-index-bar'>我的</div>
                    <div className='tab-index-bar'>发现</div>
                    <div className='tab-index-bar'>朋友</div>
                    <div className='tab-index-bar'>视频</div>
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
                    Click upper-left corner
                </Drawer>
            </div>
        </>
    );
}

export default Index