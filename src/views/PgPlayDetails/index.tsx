import React from 'react'
import './index.scss'
import { Icons } from '../../components'
import data from './bigdata'
let datas = data.playlist.tracks
function PgPlayDetails(props: any) {
    return (
        <>
            <div className="play-details-wrap">
                <div className="play-details-title">
                    <div className="play-details-title-mask"></div>
                    <div className="play-details-title-mask-content">
                        <div className="play-details-left-pic">
                            <img src="https://p1.music.126.net/1ps8p2zDZ-eBWZoJOYe86Q==/109951164305864441.jpg" alt="" />
                        </div>
                        <div className="play-details-right-detail">
                            <div className='play-details-right-detail-title'>声控狙击手|温柔声线带你重拾恋爱甜蜜</div>
                            <div className="play-details-right-detail-author">
                                <div className="play-details-right-detail-author-header">
                                    <img src="http://p1.music.126.net/fM0Mitw2-W86DHRSkUCZpw==/109951164240030282.jpg" alt="" />
                                </div>
                                <div className="play-details-right-detail-author-name">
                                    热评酱Coco
                            </div>
                            </div>
                            <div className="play-details-right-detail-introduce">
                                总有一次相遇，让心与心靠近 总有一次心动，让魂与魂相依 谈不了恋爱别担心！温柔系男友等你来签收！ 点开歌单，聆听属于你的甜甜小情歌，多款男友音，总有一款能俘获你的双耳，带你重拾恋爱甜蜜！ 快来解锁属于自己的宝藏男孩吧！ 封面：肖战
                        </div>
                        </div>
                    </div>
                </div>
                <div className="play-details-content">
                    <div className="play-details-content-title">
                        <div className="play-details-content-title-playok">
                            <Icons className='playok-icon' un='&#xe615;' />
                            <p className='start-play-all'>播放全部<span className='song-number'>(共56首)</span></p>
                        </div>
                    </div>
                    <div className="play-details-content-song-listview">
                        {
                            datas.map((res, index) => {
                                return (
                                    <div className="play-details-content-song-tip" key={index} onClick={() => {
                                        props.history.push('/musicplayer')
                                    }}>
                                        <div className="serial-number">
                                            {(index + 1)}.
                                        </div>
                                        <div className="serial-content-wrap">
                                            <div className='serial-content-song-name'><span className='name'>{res.name}</span> <span className='alias'>{JSON.stringify(res.alia) === '{}' ? '' : `(${res.alia[0]})`}</span> </div>
                                            <div className='serial-content-song-author'>{res.ar[0].name}</div>
                                        </div>
                                        <div className="serial-all">
                                            <Icons className='playok-icon' un='&#xe615;' />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PgPlayDetails