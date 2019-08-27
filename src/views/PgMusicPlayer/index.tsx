import React, { useState, useRef ,useEffect} from 'react'
import './index.scss'
import { Headers, Icons } from '../../components'
import { Slider } from 'antd-mobile';
import formatSeconds from '../../utils/formatSeconds'
function CurrentTime(props: any) {
    return(
        <>
            {formatSeconds(props.currenttime) ? formatSeconds(props.currenttime) : '00:00'}
        </>
    )
}

function Speed(props: any) {
    console.log(props)
    function logs() {
        return (value) => {
            console.log(value)
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
                // onAfterChange={logs()}
            />
        </>
    )
}
function PgMusicPlayer(props: any) {
    let [statePlay, setstatePlay] = useState(false)
    let [musicTime, setmusicTime] = useState('00:00')
    let [currenttime, setcurrenttime] = useState('00:00')
    let audiosRef = useRef(null)
    useEffect(() => {
        if (statePlay) {
            setmusicTime(audiosRef.current.duration)
            audiosRef.current.play()
            audiosRef.current.addEventListener("timeupdate", function () {
                setcurrenttime(audiosRef.current.currentTime)
            }, false)
            audiosRef.current.addEventListener("ended", function () {
                setstatePlay(false)
                // setcurrenttime(audiosRef.current.currentTime)
            }, false)
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
                    src="http://m10.music.126.net/20190827160923/0ea29ad605c0da827dd6864d1720a6a1/ymusic/952e/173c/9fb3/bb066f0666dd4f4691ee2e90c1e6702c.mp3"
                    controls
                    ref={audiosRef}
                ></audio>
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
                    <div className="rotate-music-logo-wraps" style={{ animation: statePlay ? 'rotates 3s linear infinite' : '' }}>
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
                        <span onClick={() => {
                            setstatePlay(!statePlay)
                        }}>

                            {statePlay ? <Icons className='player-icon' un='&#xe60f;' /> : <Icons className='player-icon' un='&#xe628;' />}
                        </span>
                        <span>
                            <Icons className='lower-icon' un='&#xe7a9;' />
                        </span>
                        <span>
                            <Icons className='list-icon' un='&#xe61a;' />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PgMusicPlayer