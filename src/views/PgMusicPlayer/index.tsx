import React, { useState, useRef ,useEffect} from 'react'
import './index.scss'
import { Headers, Icons, Toast } from '../../components'
import { Slider, Modal } from 'antd-mobile';
import formatSeconds from '../../utils/formatSeconds'
import query from '../../utils/useQuery'
import { apisongurl } from '../../api'
interface currentProps{
    currenttime: number | string
}

function CurrentTime(props: currentProps) {
    return(
        <>
            {formatSeconds(props.currenttime) ? formatSeconds(props.currenttime) : '00:00'}
        </>
    )
}
interface speedProps{
    dropSpeed: Function,
    currenttime: any,
    musicTime: any
}
function Speed(props: speedProps) {
    function logs() {
        return (value) => {
            props.dropSpeed(value)
        }
    }
    return (
        <>
            <Slider
                handleStyle={{
                    width: 6,
                    height: 6,
                    marginLeft: -3,
                    marginTop: -2,
                    border: 0
                }}
                // dots={true}
                defaultValue={0}
                value={props.currenttime !== '00:00' ? props.currenttime : 0}
                min={0}
                max={props.musicTime !== '00:00' ? props.musicTime : 0}
                onChange={logs()}
            />
        </>
    )
}

interface ejectModuleProps{
    showModule: boolean,
    setshowModule: Function,
    getsongurl: Function,
    setChildModuleScroll: Function,
    lastSong?:Function,
    id: any,
    props: any
}
function EjectModule(props: ejectModuleProps) {
    let [_state, _setstate] = useState(0)
    let [songListDetail, setsongListDetail] = useState([])
    let [id, setid] = useState(0)
    let listRef = useRef(null)
    // let { id } = query()

    useEffect(() => {
        let { id } = query()
        let list = JSON.parse(sessionStorage.getItem('songListDetails'))
        setsongListDetail(list)
        console.log('zhixian')
        list.forEach((item, index) => {
            if (item.id * 1 === id * 1) {
                _setstate(index)
                listRef.current.scrollTop = 50 * (index - 1)
            }
        })
    }, [id])


    function setScroll(scrollCurrent) {
        if (listRef.current) {
            setTimeout(() => {
                listRef.current.scrollTop = scrollCurrent
                setid(id++)
            }, 50)
        }
    }


    function setScrollTop() {
        let list = JSON.parse(sessionStorage.getItem('songListDetails'))
        let { id } = query()
        list.forEach((item, index) => {
            if (item.id * 1 === id * 1) {
                sessionStorage.setItem('currScrollTop', (50 * (index - 1)).toString())
                listRef.current.scrollTop = 50 * (index - 1)
            }
        })
    }


    // function setLastSong() {
    //     if (props.type === 'add') {
    //         _setstate(_state + 1)
    //     } else if (props.type === 'last'){
    //         _setstate(_state - 1)
    //     }
    //     let list = JSON.parse(sessionStorage.getItem('songListDetails'))
    //     list.forEach((item, index) => {
    //         if (_state === index) {
    //             sessionStorage.setItem('currScrollTop', (50 * (index - 1)).toString())
    //             // setTimeout(() => {
    //             //     listRef.current.scrollTop = 50 * (index - 1)
    //             // }, 0)
    //             props.getsongurl(item.id)
    //         }
    //     })
    // }

    props.setChildModuleScroll(setScroll)

    // props.lastSong(setLastSong)

    useEffect(() => {
        setScrollTop()
    }, [])

    function selectMusic(index, id) {
        sessionStorage.setItem('currScrollTop', (50 * (index - 1)).toString())
        _setstate(index)
        props.props.history.replace(`/musicplayer?id=${id}`)
        props.getsongurl(id)
        listRef.current.scrollTop = 50 * (index - 1)
    }
    return(
        <>
            <Modal
                popup
                visible={props.showModule}
                onClose={() => { props.setshowModule(false) }}
                animationType="slide-up"
            >
                <div className='eject-module-wrap'>
                    <div className="eject-module-wrap-title">
                        <div className="eject-module-wrap-title-left">
                            <Icons className='player-list-icon' un='&#xe7fe;' />
                            <span className='list-t'>播放列表</span>
                            <span className='list-len'>(523)</span>
                        </div>
                    </div>
                    <div className="eject-module-wrap-content-list" ref={listRef}>
                        {
                            songListDetail.map((res, index) => {
                                return(
                                    <div className="eject-module-wrap-content-tip" key={index}>
                                        <div className="eject-module-wrap-content-name" style={{ color: _state === index ? 'red' : ''}} onClick={() => {
                                            selectMusic(index, res.id)
                                        }}>
                                            {_state === index ? <Icons className='eject-module-icon' un='&#xe659;' /> : null}
                                            <div className="eject-module-wrap-music-name">
                                                {res.name}
                                            </div>
                                            <span style={{ color: _state === index ? 'red' : '' }}>&nbsp;-&nbsp;</span>
                                            <div className="eject-module-wrap-music-author" style={{ color: _state === index ? 'red' : '' }}>
                                                {res.ar[0].name}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Modal>
        </>
    )
}

function PgMusicPlayer(props: any) {
    let [statePlay, setstatePlay] = useState(false)
    let [musicTime, setmusicTime] = useState('00:00')
    let [currenttime, setcurrenttime] = useState('00:00')
    let [showModule, setshowModule] = useState(true)
    let [songUrl, setsongUrl] = useState('')
    let [songDetails, setsongDetails] = useState(null)
    let audiosRef = useRef(null)
    // let [type, settype] = useState('')
    useEffect(() => {
        if (statePlay) {
            audiosRef.current.play().then((res) => {
                setmusicTime(audiosRef.current.duration)

                audiosRef.current.play()

                audiosRef.current.addEventListener("timeupdate", function () {
                    setcurrenttime(audiosRef.current.currentTime)
                }, false)
                audiosRef.current.addEventListener("ended", function () {
                    setstatePlay(false)
                    setcurrenttime('00:00')
                }, false)
            }).catch(err => {
                console.log(err, 'err')
                audiosRef.current.pause()
                setstatePlay(false)
                Toast('加载歌曲失败', 2000)
            })
        } else {
            audiosRef.current.pause()
        }
    }, [statePlay])
    function getsongurl(id) {
        let params = {
            id: id
        }
        let list = JSON.parse(sessionStorage.getItem('songListDetails'))
        list.forEach((item) => {
            if (item.id * 1 === id * 1) {
                console.log(item)
                setsongDetails(item)
            }
        })
        apisongurl(params).then(res => {
            // console.log(res, 'res')
            setsongUrl(res.data[0].url)  
        }).catch(err => {
            console.log(err, 'res')
            Toast('网络请求异常，请两分钟后再试', 2000)
        })
    }
    useEffect(() => {
        let { id } = query()
        getsongurl(id)
    }, [])
    
    function dropSpeed(currenttime) {
        audiosRef.current.pause()
        setcurrenttime(currenttime ? currenttime : 0)
    }

    function openModule() {
        setshowModule(true)
    }

    function setChildModuleScroll(callback) {
        let currScrollTop = sessionStorage.getItem('currScrollTop')
        callback(currScrollTop)
    }

    function lastSong(callback) {
        callback()
    }

    // function goUpSong(type) {
    //     let state_type = type
    // }

    function goLastSong(type) {
        let { id } = query()
        let list = JSON.parse(sessionStorage.getItem('songListDetails'))
        let _index = 0
        for(let i = 0; i < list.length - 1; i++) {
            if (list[i].id * 1 === id * 1) {
                if (type === 'last') {
                    _index = i - 1
                } else {
                    _index = i + 1
                }
                if(i < 0 || i >= list.length - 1) return
                type === 'last' ? getsongurl(list[_index].id) : getsongurl(list[_index].id)
                type === 'last' ? props.history.replace(`/musicplayer?id=${list[_index].id}`) : props.history.replace(`/musicplayer?id=${list[_index].id}`)
            }
        }
    }
    return (
        <>
            <div className="audios">
                <audio src={songUrl} controls preload="auto" ref={audiosRef} />
            </div>
            
            <div className="music-player-wraps-mask" style={{
                background: `url(${songDetails ? songDetails.al.picUrl : 'http://p2.music.126.net/SHElx36maw8L6CIXfiNbFw==/109951164144982394.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '10%'
            }}>
            </div>
            <div className="music-player-wraps">
                <Headers props={props}>{songDetails ? songDetails.name : '加载中。。。'}</Headers>
                <div className="music-player-content-logo">
                    <div className="rotate-music-logo-wraps" style={{ animationPlayState: statePlay ? 'running' : 'paused'}}>
                        <div className="rotate-music-logo">
                            <img src={songDetails ? songDetails.al.picUrl : 'http://p2.music.126.net/SHElx36maw8L6CIXfiNbFw==/109951164144982394.jpg'} alt="" />
                        </div>
                    </div>
                </div>
                <div className="music-player-conster-ok">
                    <div className="music-player-conster-top">
                        <span>
                            <Icons className='like-icon' un='&#xe610;' />
                        </span>
                        <span>
                            <Icons className='download-icon' un='&#xe667;' />
                        </span>
                        <span>
                            <Icons className='sound-icon' un='&#xe639;' />
                        </span>
                        <span>
                            <Icons className='comm-icon' un='&#xe79a;' />
                        </span>
                        <span>
                            <Icons className='more-icon' un='&#xe612;' />
                        </span>
                    </div>
                    <div className="music-player-conster-center">
                        <div className="m-p-c-c-l">
                            <CurrentTime currenttime={currenttime}/>
                        </div>
                        <div className="m-p-c-c-c">
                            <Speed currenttime={currenttime} musicTime={musicTime} dropSpeed={dropSpeed}/>
                        </div>
                        <div className="m-p-c-c-r">
                            {musicTime ? formatSeconds(musicTime) : "00:00"}
                        </div>

                    </div>
                    <div className="music-player-conster-bottom">
                        <span>
                            <Icons className='loop-icon' un='&#xe620;' />
                        </span>
                        <span>
                            <Icons className='upper-icon' un='&#xe61e;' onClick={() => {
                                goLastSong('last')
                            }}/>
                        </span>
                        <span onClick={() => {setstatePlay(!statePlay)}}>
                            {statePlay ? <Icons className='player-icon' un='&#xe60f;' /> : <Icons className='player-icon' un='&#xe628;' />}
                        </span>
                        <span>
                            <Icons className='lower-icon' un='&#xe7a9;' onClick={() => {
                                goLastSong('add')
                            }}/>
                        </span>
                        <span>
                            <Icons className='list-icon' un='&#xe61a;' onClick={() => {
                                openModule()
                            }}/>
                            <EjectModule 
                                showModule={showModule} 
                                setshowModule={setshowModule} 
                                getsongurl={getsongurl} 
                                setChildModuleScroll={setChildModuleScroll}
                                lastSong={lastSong}
                                id={query().id}
                                props={props}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PgMusicPlayer