import React, {useEffect} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss'
import { Icons } from '../../components'
// import { recommendSong } from '../../api/index'
function PgFind() {
    // let [imgHeight, setimgHeight] = useState('100')
    let data = [
        'http://p1.music.126.net/XFGTolOA4knoDuTjctkSHg==/109951164305143125.jpg', 
        'http://p1.music.126.net/cfHZQ40S6_ark3NLO2gQjw==/109951164304381122.jpg', 
        'http://p1.music.126.net/4jZ1L1qECEOsikW2JKsyHQ==/109951164304393164.jpg'
    ]
    useEffect(() => {
        // recommendSong().then(res => {
        //     console.log(res)
        // })
    })
    let c = [
        {
            "id": 2829883282,
            "type": 0,
            "name": "[华语私人订制] 你爱的华语好歌都在这儿",
            "copywriter": "编辑推荐：无论新歌老歌，都是耐听的华语好歌",
            "picUrl": "https://p2.music.126.net/wTcIyvb9xPsNzZTJ7ettow==/109951164273697592.jpg",
            "canDislike": false,
            "playCount": 17688152,
            "trackCount": 35,
            "highQuality": false,
            "alg": "featured"
        },
        {
            "id": 2821115454,
            "type": 0,
            "name": "[一周原创发现] 上周原创君发现的好歌",
            "copywriter": "编辑推荐： 遇见全新面孔，邂逅熟悉声线",
            "picUrl": "https://p2.music.126.net/Q552hyLSYRVKgtHT5NItrQ==/109951164302455370.jpg",
            "canDislike": false,
            "playCount": 10026185,
            "trackCount": 30,
            "highQuality": false,
            "alg": "featured"
        },
        {
            "id": 945991990,
            "type": 0,
            "name": "美好暗恋 | Progressive House 妖娆极致",
            "copywriter": "根据你可能喜欢的歌单《【Electro House】舒适入耳，妖娆极致女声》推荐",
            "picUrl": "https://p2.music.126.net/9IhkVbYeLa95oxOkU7SbWw==/109951163037789037.jpg",
            "canDislike": true,
            "playCount": 1931853,
            "trackCount": 40,
            "highQuality": false,
            "alg": "itembased2_withPlay"
        },
        {
            "id": 2545711935,
            "type": 0,
            "name": "2019最新车载中文DJ",
            "copywriter": "根据你喜欢的单曲《孙方-爱情有时很残忍 (DJ版)（沐泽 remix）》推荐",
            "picUrl": "https://p2.music.126.net/0dKCYnXPPv-HDxOqa0jsDQ==/109951163744419473.jpg",
            "canDislike": true,
            "playCount": 329068,
            "trackCount": 36,
            "highQuality": false,
            "alg": "itembased"
        },
        {
            "id": 924880007,
            "type": 0,
            "name": "欧美风节奏控+车载必备Dj ―土嗨",
            "copywriter": "根据你喜欢的单曲《群星-洪荒之力+黎明前的黑暗（DJ阿超）（DJ阿超 Remix）》推荐",
            "picUrl": "https://p2.music.126.net/gsgXg_Tf_4RxInSl5DzYEg==/109951163609083624.jpg",
            "canDislike": true,
            "playCount": 1482159,
            "trackCount": 431,
            "highQuality": false,
            "alg": "itembased"
        },
        {
            "id": 2131706601,
            "type": 0,
            "name": "搜集了四年的健身歌单",
            "copywriter": "根据你喜欢的单曲《Way Back Home》推荐",
            "picUrl": "https://p2.music.126.net/x0RPFESC-fsyz4w3mz1aVA==/18950082905252686.jpg",
            "canDislike": true,
            "playCount": 705783,
            "trackCount": 125,
            "highQuality": false,
            "alg": "itembased"
        },
    ]
    return (
        <>
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={() => {}}
                    afterChange={() => {}}
                >
                    {data.map(val => (
                        <span
                            key={val}
                            // href="javascript:;"
                            style={{ display: 'inline-block', width: '100%', height: '100%' }}
                        >
                            <img
                                src={`${val}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    // setimgHeight('auto')
                                }}
                            />
                        </span>
                    ))}
                </Carousel>
            </WingBlank>
            <div className="fined-tab-bars">
                <div className="fined-tab-list">
                    <div className="fined-icon-run">
                        <Icons className='fined-icon' un='&#xe677;' />
                    </div>
                    <p className='fined-icon-text small'>每日推荐</p>
                </div>
                <div className="fined-tab-list">
                    <div className="fined-icon-run">
                        <Icons className='font-sizes' un='&#xe60d;' />
                    </div>
                    <p className='fined-icon-text small'>歌单</p>
                </div>
                <div className="fined-tab-list">
                    <div className="fined-icon-run">
                        <Icons className='fined-icon' un='&#xe6ad;' />
                    </div>
                    <p className='fined-icon-text small'>排行榜</p>
                </div>
                <div className="fined-tab-list">
                    <div className="fined-icon-run">
                        <Icons className='fined-icon' un='&#xe65e;' />
                    </div>
                    <p className='fined-icon-text small'>电台</p>
                </div>
                <div className="fined-tab-list">
                    <div className="fined-icon-run">
                        <Icons className='fined-icon' un='&#xe60c;' />
                    </div>
                    <p className='fined-icon-text small'>直播</p>
                </div>
            </div>
            <div className="common-song-wrap">
                <div className="common-song-title">
                    <div className="common-song-left">
                        推荐歌单
                    </div>
                    <div className="common-song-right">
                        歌单广场
                    </div>
                </div>
                <div className="common-song-content">
                    <div className="recommended-song-list">
                        {
                            c.map(item => {
                                return (
                                    <div className="recommended-song-tip" key={item.id}>
                                        <div className="recommended-song-price">
                                            <img src={item.picUrl} alt=""/>
                                        </div>
                                        <div className='recommended-song-text'>
                                            {item.name}
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
export default PgFind