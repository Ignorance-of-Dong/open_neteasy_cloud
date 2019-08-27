import React from 'react'
import "../../../node_modules/video-react/dist/video-react.css";
import './index.scss'
import { Icons } from '../../components'
// import { mvsetusl, mvdetails, relatedAllvideo, commentMv, playlistDetail } from '../../api'
import { Player, BigPlayButton, ControlBar, ReplayControl} from 'video-react';
function PgMvDeatils() {
    // useEffect(() => {
    //     playlistDetail().then(res => {
    //         console.log(res)
    //     })
    // })
    let mvd = [
        {
            "type": 1,
            "title": "许嵩惊艳词选系列TOP10",
            "durationms": 264490,
            "creator": [
                {
                    "userId": 1385643937,
                    "userName": "国宝级许嵩迷弟"
                }
            ],
            "playTime": 558222,
            "coverUrl": "http://p1.music.126.net/8Cdwd7cpYdHFjo7EIlkMlw==/109951163668210465.jpg",
            "vid": "649473DFF9B9F024A9811264CDBC3D46",
            "aliaName": null,
            "transName": null,
            "alg": "icf3",
            "markTypes": [
            ]
        },
        {
            "type": 1,
            "title": "《绝代风华》花絮最终大档 蓝光(1080P)",
            "durationms": 471338,
            "creator": [
                {
                    "userId": 124483968,
                    "userName": "Dawn_夜明"
                }
            ],
            "playTime": 119981,
            "coverUrl": "http://p1.music.126.net/wSkVAyWCE0W7S4pqF7_Dfw==/109951163923382631.jpg",
            "vid": "12233E14E890186E45D03D11BA2EE920",
            "aliaName": null,
            "transName": null,
            "alg": "icf3",
            "markTypes": [
            ]
        },
        {
            "type": 1,
            "title": "寻人启事人声乐团 -（雪落下的声音、涼涼、知否知否、起风了）",
            "durationms": 336109,
            "creator": [
                {
                    "userId": 397162138,
                    "userName": "fengxujun"
                }
            ],
            "playTime": 357,
            "coverUrl": "http://p1.music.126.net/C1cJQ1332TLKEjh5OrFA3Q==/109951164306086533.jpg",
            "vid": "0EDCB0F7A188500A3D5AA1E95455B00F",
            "aliaName": null,
            "transName": null,
            "alg": "titleVec",
            "markTypes": [
            ]
        },
        {
            "type": 1,
            "title": "《我乐意》-许嵩 女生吉他弹唱版",
            "durationms": 51000,
            "creator": [
                {
                    "userId": 541634762,
                    "userName": "李金艳1998"
                }
            ],
            "playTime": 2431,
            "coverUrl": "http://p1.music.126.net/X0zLfO40AgSvqa-Nx7EnMQ==/109951164307767652.jpg",
            "vid": "14F87E8BACE2337991CC6E88F087B8F8",
            "aliaName": null,
            "transName": null,
            "alg": "prom3_promByTitle-2335163-video",
            "markTypes": [
            ]
        },
        {
            "type": 1,
            "title": "许嵩 戚薇《燕归巢》",
            "durationms": 155000,
            "creator": [
                {
                    "userId": 1536100125,
                    "userName": "境由心转1999"
                }
            ],
            "playTime": 89010,
            "coverUrl": "http://p1.music.126.net/htmcqzZ1_GydsSBGNe3cxQ==/109951164177347944.jpg",
            "vid": "A461E0124D1028E0852C5ECDC81AF3C9",
            "aliaName": null,
            "transName": null,
            "alg": "icf3",
            "markTypes": [
            ]
        }
    ]
    let com = [
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "安康是我",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1917000388
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1603614342,
            "content": "和朋友、朋友的朋友在KTV唱歌，遇见一个唱得很好的男孩，他点几首我们一起合唱，也许这就是遇见了知音。",
            "time": 1566357654395,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "啊哈哈哈旺仔",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p4.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1925208391
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1587149472,
            "content": "test",
            "time": 1565245648914,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "大黄蜂小蜜蜂啊",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/8nCKqeKuxSChkjquEUa-jQ==/109951163539713585.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 488062659
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1570773547,
            "content": "她好漂亮",
            "time": 1564136267238,
            "likedCount": 1,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": {
                    "associator": {
                        "vipCode": 100,
                        "rights": true
                    },
                    "musicPackage": null,
                    "redVipAnnualCount": -1
                },
                "expertTags": null,
                "nickname": "HiranoAya9",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p4.music.126.net/wYEptBnYfrE__Jxyw9iZ_Q==/109951164248816594.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 11,
                "userId": 569944735
            },
            "beReplied": [
            ],
            "pendantData": {
                "id": 7002,
                "imageUrl": "http://p1.music.126.net/3XKhbLt0MeaMdb4vAx-OIg==/109951163313135431.jpg"
            },
            "showFloorComment": null,
            "status": 0,
            "commentId": 1567398540,
            "content": "好听啊！！！！",
            "time": 1563938529333,
            "likedCount": 1,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "庄俊霖不解释",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/2ExBOJe14yu2JYBejZVS7A==/109951163902286218.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1673041121
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1563555522,
            "content": "test",
            "time": 1563681796904,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": {
                    "associator": {
                        "vipCode": 100,
                        "rights": true
                    },
                    "musicPackage": null,
                    "redVipAnnualCount": -1
                },
                "expertTags": null,
                "nickname": "孤zhu一掷",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/sOEW_uSPYTOsxXwOd3wB9A==/109951164201337511.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 11,
                "userId": 286556491
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1557875651,
            "content": "愿被你抛弃，就算了解而分离，不愿爱得没有答案结局......",
            "time": 1563273797427,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "伙食帮",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p4.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1889850202
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1551277572,
            "content": "你好",
            "time": 1562740418318,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "伙食帮",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1889850202
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1551149023,
            "content": "你好",
            "time": 1562732810944,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": {
                    "associator": {
                        "vipCode": 100,
                        "rights": true
                    },
                    "musicPackage": null,
                    "redVipAnnualCount": -1
                },
                "expertTags": null,
                "nickname": "羊不乐乐",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p4.music.126.net/mrPowcFLmE1Eji_bSeTuUQ==/109951163568051356.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 11,
                "userId": 1375679670
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1551063611,
            "content": "，，1儿一一心一一一一一一一一一一一一一一一一心一一一一一一厂.、一一v一、一一一一、一一′广一？‘一一一二一一一一小-一，一一一一卡一一个一一、十一一一′′l`一次、一戈`一一、、、、一一一，一一r一一一一一一＇一一一一一小、、一一心一",
            "time": 1562724226884,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "小破葵丶",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/09tmJweo4Cd0XlWjLBHEvA==/18879714160851942.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 470651281
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1546014314,
            "content": "test",
            "time": 1562305518560,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "CalvinHall",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/yq8iBlI65kfTDFNFutQ4wA==/19113910137302113.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 436007457
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1541918500,
            "content": "及时行乐",
            "time": 1561956129419,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "洲散散",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p4.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1302555885
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1536105290,
            "content": "截至目前认识的270天中，快乐过两天",
            "time": 1561480974238,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "小冒儿啊",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/In8JXIABS28dosJXPj-rmw==/109951164137209475.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 50841659
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1517940573,
            "content": "test",
            "time": 1560137462677,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": {
                    "associator": {
                        "vipCode": 100,
                        "rights": true
                    },
                    "musicPackage": null,
                    "redVipAnnualCount": 1
                },
                "expertTags": null,
                "nickname": "你呀个疯子",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/VlBV3AHytci-iGPhXZQXKA==/109951164191375611.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 11,
                "userId": 301536853
            },
            "beReplied": [
                {
                    "user": {
                        "locationInfo": null,
                        "liveInfo": null,
                        "vipRights": null,
                        "expertTags": null,
                        "nickname": "炸毛a",
                        "userType": 0,
                        "authStatus": 0,
                        "avatarUrl": "https://p3.music.126.net/Nj8ro1LVrw0qdU3L73ZuaA==/7938473953029095.jpg",
                        "experts": null,
                        "remarkName": null,
                        "vipType": 0,
                        "userId": 75292932
                    },
                    "beRepliedCommentId": 1455130453,
                    "content": "楼上test的是项目组测试？",
                    "status": 0,
                    "expressionUrl": null
                }
            ],
            "pendantData": {
                "id": 4005,
                "imageUrl": "http://p1.music.126.net/qjvvGNTlcSloz4hnTQwCuw==/109951163313130373.jpg"
            },
            "showFloorComment": null,
            "status": 0,
            "commentId": 1517274783,
            "content": "我才是俩人为了关注对方在这里评论对暗号",
            "time": 1560081363356,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 1455130453,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "椰菜叔",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 513624260
            },
            "beReplied": [
                {
                    "user": {
                        "locationInfo": null,
                        "liveInfo": null,
                        "vipRights": null,
                        "expertTags": null,
                        "nickname": "zg_zs",
                        "userType": 0,
                        "authStatus": 0,
                        "avatarUrl": "https://p4.music.126.net/Ic1ChdTTB9-Ogu64HJ7FpA==/18502581673938111.jpg",
                        "experts": null,
                        "remarkName": null,
                        "vipType": 0,
                        "userId": 289208018
                    },
                    "beRepliedCommentId": 357710565,
                    "content": "一夜情可以唱得如此深情。我也是服了。",
                    "status": 0,
                    "expressionUrl": null
                }
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1498879804,
            "content": "你以为一夜情的概念就是两人在床上嘿咻一番吗？那你一定没有看过 Before sunrise 三部曲",
            "time": 1558662767898,
            "likedCount": 2,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 357710565,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "玉林宝哥",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/Y8Mm_KvirPkB2IdLslHWbw==/109951164110937422.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1313272826
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1498757981,
            "content": "是不是得不到的才是最好的，就像天上的星星",
            "time": 1558638371641,
            "likedCount": 2,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "WithSunSet",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/TWhtR7QMyePlGdbwCwE2ig==/109951163784060703.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 9552033
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1483730678,
            "content": "test",
            "time": 1557385014810,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "我有很多故事但是没有结尾",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/-0KJpD1ve5DbVObniNcEqA==/109951163728019727.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 122894911
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1477773335,
            "content": "同时被俩个人喜欢，最受伤的是我。",
            "time": 1556981760330,
            "likedCount": 1,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "我在乐色桶前闻到了花香",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/hfPUNQpFCLIfJq9NtxYi8g==/109951163224138883.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 38794007
            },
            "beReplied": [
                {
                    "user": {
                        "locationInfo": null,
                        "liveInfo": null,
                        "vipRights": null,
                        "expertTags": null,
                        "nickname": "我在乐色桶前闻到了花香",
                        "userType": 0,
                        "authStatus": 0,
                        "avatarUrl": "https://p4.music.126.net/hfPUNQpFCLIfJq9NtxYi8g==/109951163224138883.jpg",
                        "experts": null,
                        "remarkName": null,
                        "vipType": 0,
                        "userId": 38794007
                    },
                    "beRepliedCommentId": 1192222175,
                    "content": "我在陕西 我们该讨论一下合唱的事情",
                    "status": 0,
                    "expressionUrl": null
                }
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1474589052,
            "content": "宝鸡 你呢",
            "time": 1556769995565,
            "likedCount": 0,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 1192222175,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        },
        {
            "user": {
                "locationInfo": null,
                "liveInfo": null,
                "vipRights": null,
                "expertTags": null,
                "nickname": "赵不知道2",
                "userType": 0,
                "authStatus": 0,
                "avatarUrl": "https://p3.music.126.net/rCcJb-CFik--z31UsSnpzA==/109951163303485287.jpg",
                "experts": null,
                "remarkName": null,
                "vipType": 0,
                "userId": 1437970911
            },
            "beReplied": [
            ],
            "pendantData": null,
            "showFloorComment": null,
            "status": 0,
            "commentId": 1474051902,
            "content": "这个城市适合恋爱，你天生就适合我的灵魂",
            "time": 1556720414315,
            "likedCount": 1,
            "expressionUrl": null,
            "commentLocationType": 0,
            "parentCommentId": 0,
            "decoration": {
            },
            "repliedMark": null,
            "liked": false
        }
    ]
    return(
        <>
            <div className="mv-details-wraps">
                <div className="mv-vidio-wrap">
                    <Player
                        controls={false}
                        // className='mv-vidio-wrap-constur'
                        playsInline
                        poster="http://p1.music.126.net/ijUg7s_2S8GMbTNsYiepJA==/18676304511774727.jpg"
                        src="http://vodkgeyttp8.vod.126.net/cloudmusic/MjQ3NDQ3MjUw/89a6a279dc2acfcd068b45ce72b1f560/533e4183a709699d566180ed0cd9abe9.mp4?wsSecret=f6754dfcbf49e5f9b77140f89a8d89d5&wsTime=1566367187"
                    >
                        <BigPlayButton position="center" />
                        <ControlBar autoHide={false}>
                            <ReplayControl seconds={5} order={2.1} />
                            <ReplayControl seconds={10} order={2.2} />
                            <ReplayControl seconds={30} order={2.3} />
                        </ControlBar>
                    </Player>
                </div>
                <div className="mv-vidio-title">
                    广岛之恋
                </div>
                <div className="mv-vidio-contains">
                    <div className="mv-vidio-label">
                        <span className='playback-volume'>12万次观看</span>
                        <span className='labels-playback'>莫文蔚</span>
                        <span className='labels-playback'>张洪量</span>
                    </div>
                    <div className="user-follow">
                        <div className="vidio-name">
                            <div className="header-portrail">
                                <img src="http://p2.music.126.net/1ps8p2zDZ-eBWZoJOYe86Q==/109951164305864441.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="" />
                            </div>
                            <div className="header-name">
                                JSADJS
                        </div>
                        </div>
                        <div className="please-follow">
                            +&nbsp;关&nbsp;注
                    </div>
                    </div>
                    <div className="lines"></div>
                    <div className="relevant-video-wrap">
                        <div className="relevant-video-title">
                            相关视频
                        </div>
                        {
                            mvd.map((res: any) => {
                                return(
                                    <div className="relevant-video-list" key={res.vid}>
                                        <div className="relevant-video-list-left">
                                            <img src={res.coverUrl} alt="" />
                                        </div>
                                        <div className="relevant-video-list-right">
                                            <div>
                                                <p className='relevant-video-list-title'>{res.title}</p>
                                                <p className='relevant-video-list-name'>{res.creator[0].userName}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mv-comment">
                        <div className="mv-comment-title">
                            精彩评论
                        </div>
                        {
                            com.map(res => {
                                return(
                                    <div className="mv-comment-list" key={res.commentId}>
                                        <div className="mv-comment-list-title">
                                            <div className="mv-comment-list-title-left">
                                                <div className="m-c-l-t-l-header-pic">
                                                    <img src={res.user.avatarUrl} alt="" />
                                                </div>
                                                <div className="m-c-l-t-l-header-name">
                                                    <p className='m-c-l-t-l-name'>{res.user.nickname}</p>
                                                    <p className='m-c-l-t-l-time'>1月13日</p>
                                                </div>
                                            </div>
                                            <div className="mv-comment-list-title-right">
                                                <span className='mv-comment-likedCount'>{res.likedCount}</span>
                                                <Icons className='thumbs-icon' un='&#xe60e;' />
                                            </div>
                                        </div>
                                        <div className="mv-comment-list-content">
                                            {res.content}
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

export default PgMvDeatils