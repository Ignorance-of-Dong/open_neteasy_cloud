import React, { useState, useRef ,useEffect} from 'react'
import './index.scss'
import { Headers, Icons, Toast } from '../../components'
import { Slider, Modal } from 'antd-mobile';
import formatSeconds from '../../utils/formatSeconds'
import data from '../PgPlayDetails/bigdata'
let datas = data.playlist.tracks
console.log(datas)
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
    setshowModule: Function
}
function EjectModule(props: ejectModuleProps) {
    let [_state, _setstate] = useState(0)
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
                    <div className="eject-module-wrap-content-list">
                        {
                            datas.map((res, index) => {
                                return(
                                    <div className="eject-module-wrap-content-tip" key={index}>
                                        <div className="eject-module-wrap-content-name" style={{ color: _state === index ? 'red' : ''}} onClick={() => {
                                            _setstate(index)
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
    let audiosRef = useRef(null)
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
                }, false)
            }).catch(err => {
                audiosRef.current.pause()
                setstatePlay(false)
                Toast('加载歌曲失败', 2000)
            })
            
            // console.log(audiosRef.current.canPlayType())
           
        } else {
            audiosRef.current.pause()
        }
    }, [statePlay])
    function dropSpeed(currenttime) {
        audiosRef.current.pause()
        setcurrenttime(currenttime ? currenttime : 0)
        // audiosRef.current.play()
    }
    return (
        <>
            <div className="audios">
                <audio 
                //http://m10.music.126.net/20190827160923/0ea29ad605c0da827dd6864d1720a6a1/ymusic/952e/173c/9fb3/bb066f0666dd4f4691ee2e90c1e6702c.mp3
                    // src={require('./1.mp3')}
                    controls
                    preload="auto"
                    ref={audiosRef}
                >
                    <source src={require('./1.mp3')} />
                </audio>
            </div>
            
            <div className="music-player-wraps-mask" style={{
                background: 'url(http://p2.music.126.net/SHElx36maw8L6CIXfiNbFw==/109951164144982394.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '10%'
            }}>
            </div>
            <div className="music-player-wraps">
                <Headers props={props}>羊角花又开</Headers>
                <div className="music-player-content-logo">
                    <div className="rotate-music-logo-wraps" style={{ animationPlayState: statePlay ? 'running' : 'paused'}}>
                        <div className="rotate-music-logo">
                            <img src="http://p2.music.126.net/i2YxMEF-Z7NzFloLQIVz4g==/109951164077348187.jpg?param=140y140" alt="" />
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
                            <Icons className='upper-icon' un='&#xe61e;' />
                        </span>
                        <span onClick={() => {setstatePlay(!statePlay)}}>
                            {statePlay ? <Icons className='player-icon' un='&#xe60f;' /> : <Icons className='player-icon' un='&#xe628;' />}
                        </span>
                        <span>
                            <Icons className='lower-icon' un='&#xe7a9;' />
                        </span>
                        <span>
                            <Icons className='list-icon' un='&#xe61a;' onClick={() => {
                                setshowModule(true)
                            }}/>
                            <EjectModule showModule={showModule} setshowModule={setshowModule}/>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PgMusicPlayer