var users=[
        {"id":"1","name":"紫雪凝梦","pwd":"123456","pic":"http://p1.music.126.net/2diP5uOrailFol-qgmprUQ==/109951163243492839.jpg"},
        {"id":"2","name":"小柠檬","pwd":"123456","pic":"http://p1.music.126.net/mW53BkMgGy37I7yVrUg-aQ==/109951163117902077.jpg"},
        {"id":"3","name":"果果","pwd":"123456","pic":"http://p1.music.126.net/k5IeL8ko8cx0QsumpecTrA==/109951163076339407.jpg"},
        {"id":"4","name":"一笑奈何","pwd":"123456","pic":"http://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg"}
    ];
var musicData = [{
		"id": "1",
		"song": "江南",
		"album": "第二天堂",
		"singer": "林俊杰",
		"source": "搜索页",
		"url": "music/jn.mp3",
		"cover": "http://p1.music.126.net/2diP5uOrailFol-qgmprUQ==/109951163243492839.jpg",
		"lyric": "jn",
		"love": "0",
		"msg": [{
				"megId": 1,
				"megCon": "还依稀记得，04年。大学毕业后的第一份实习工作。手机还不支持MP3 播放，一个同事小姑娘说想听《江南》，当时这首歌超火。于是哥们我就拿单位座机打我自己手机，不接，因为我当时的手机彩铃就是《江南》，就这样一遍遍打，一遍遍听…",
				"date": "2018-08-01 14:36:02",
				"userId": "1"
			},
			{
				"megId": 2,
				"megCon": "怀念那个年代，江南，童话，波斯猫…",
				"date": "2018-08-11 08:10:05",
				"userId": "2"
			}
		]
	},
	{
		"id": "2",
		"song": "他不懂",
		"album": "爱，不解释",
		"singer": "张杰",
		"source": "搜索页",
		"url": "music/tbd.mp3",
		"cover": "http://p1.music.126.net/mW53BkMgGy37I7yVrUg-aQ==/109951163117902077.jpg",
		"lyric": "tbd",
		"love": "0",
		"msg": [{
				"megId": 1,
				"megCon": "听的也想哭，老了，你们还好吗？",
				"date": "2018-08-01 14:36:02",
				"userId": "2"
			},
			{
				"megId": 2,
				"megCon": "在微博看过一个视频，张杰正好在逛街，遇到一个街边唱歌的人，唱的就是江南，林俊杰走上前与他合唱了。暖心",
				"date": "2018-08-11 08:10:05",
				"userId": "3"
			}
		]
	},
	{
		"id": "3",
		"song": "我们都一样",
		"album": "Chance",
		"singer": "张杰",
		"source": "搜索页",
		"url": "music/wmdyy.mp3",
		"cover": "http://p1.music.126.net/k5IeL8ko8cx0QsumpecTrA==/109951163076339407.jpg",
		"lyric": "wmdyy",
		"love": "0",
		"msg": [{
				"megId": 1,
				"megCon": "想起了抄歌词的那个年代",
				"date": "2018-08-01 14:36:02",
				"userId": "3"
			},
			{
				"megId": 2,
				"megCon": "那时候很多人用复读机，好怀念。",
				"date": "2018-08-11 08:10:05",
				"userId": "4"
			}
		]
	},
	{
		"id": "4",
		"song": "有何不可",
		"album": "自定义",
		"singer": "许嵩",
		"source": "搜索页",
		"url": "music/yhbk.mp3",
		"cover": "http://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
		"lyric": "yhbk",
		"love": "0",
		"msg": [{
				"megId": 1,
				"megCon": "那时候还是借同学MP3听的。。。",
				"date": "2018-08-01 14:36:02",
				"userId": "4"
			},
			{
				"megId": 2,
				"megCon": "有人在2016听吗？举个爪（我是来回忆的）",
				"date": "2018-08-11 08:10:05",
				"userId": "1"
			}
		]
	}
];
var lrcs = [{
		"song": "jn",
		"lyric": [{
			"time": 36,
			"lineLyric": "风到这里就是粘"
		}, {
			"time": 40,
			"lineLyric": "粘住过客的思念"
		}, {
			"time": 44,
			"lineLyric": "雨到了这里缠成线"
		}, {
			"time": 48,
			"lineLyric": "缠着我们流连人世间"
		}, {
			"time": 53,
			"lineLyric": "你在身边就是缘"
		}, {
			"time": 56,
			"lineLyric": "缘分写在三生石上面"
		}, {
			"time": 60,
			"lineLyric": "爱有万分之一甜"
		}, {
			"time": 64,
			"lineLyric": "宁愿我就葬在这一天"
		}, {
			"time": 69,
			"lineLyric": "圈圈圆圆圈圈"
		}, {
			"time": 70,
			"lineLyric": "天天年年天天 的我"
		}, {
			"time": 73,
			"lineLyric": "深深看你的脸"
		}, {
			"time": 76,
			"lineLyric": "生气的温柔 埋怨的温柔 的脸"
		}, {
			"time": 84,
			"lineLyric": "不懂爱恨情愁煎熬的我们"
		}, {
			"time": 87,
			"lineLyric": "都以为相爱就像风云的善变"
		}, {
			"time": 92,
			"lineLyric": "相信爱一天 抵过永远"
		}, {
			"time": 96,
			"lineLyric": "在这一刹那冻结了时间"
		}, {
			"time": 100,
			"lineLyric": "不懂怎么表现温柔的我们"
		}, {
			"time": 103,
			"lineLyric": "还以为殉情只是古老的传言"
		}, {
			"time": 107,
			"lineLyric": "离愁能有多痛 痛有多浓"
		}, {
			"time": 112,
			"lineLyric": "当梦被埋在江南烟雨中"
		}, {
			"time": 116,
			"lineLyric": "心碎了才懂"
		}, {
			"time": 140,
			"lineLyric": "圈圈圆圆圈圈"
		}, {
			"time": 142,
			"lineLyric": "天天年年天天 的我"
		}, {
			"time": 145,
			"lineLyric": "深深看你的脸"
		}, {
			"time": 147,
			"lineLyric": "生气的温柔 埋怨的温柔 的脸"
		}, {
			"time": 155,
			"lineLyric": "不懂爱恨情愁煎熬的我们"
		}, {
			"time": 159,
			"lineLyric": "都以为相爱就像风云的善变"
		}, {
			"time": 163,
			"lineLyric": "相信爱一天 抵过永远"
		}, {
			"time": 168,
			"lineLyric": "在这一刹那冻结了时间"
		}, {
			"time": 172,
			"lineLyric": "不懂怎么表现温柔的我们"
		}, {
			"time": 175,
			"lineLyric": "还以为殉情只是古老的传言"
		}, {
			"time": 179,
			"lineLyric": "离愁能有多痛 痛有多浓"
		}, {
			"time": 184,
			"lineLyric": "当梦被埋在江南烟雨中"
		}, {
			"time": 187,
			"lineLyric": "心碎了才懂"
		}, {
			"time": 199,
			"lineLyric": "相信爱一天 抵过永远"
		}, {
			"time": 204,
			"lineLyric": "在这一刹那冻结了时间"
		}, {
			"time": 207,
			"lineLyric": "不懂怎么表现温柔的我们"
		}, {
			"time": 212,
			"lineLyric": "还以为殉情只是古老的传言"
		}, {
			"time": 215,
			"lineLyric": "离愁能有多痛 痛有多浓"
		}, {
			"time": 220,
			"lineLyric": "当梦被埋在江南烟雨中"
		}, {
			"time": 225,
			"lineLyric": "心碎了才懂"
		}]
	},
	{
		"song": "tbd",
		"lyric": [{
			"time": 19,
			"lineLyric": "他留给你是背影"
		}, {
			"time": 25,
			"lineLyric": "关于爱情只字不提"
		}, {
			"time": 29,
			"lineLyric": "害你哭红了眼睛"
		}, {
			"time": 34,
			"lineLyric": "他把谎言说的竟然那么动听"
		}, {
			"time": 40,
			"lineLyric": "他不止一次骗了你"
		}, {
			"time": 44,
			"lineLyric": "不值得你再为他伤心"
		}, {
			"time": 48,
			"lineLyric": "他不懂你的心假装冷静"
		}, {
			"time": 53,
			"lineLyric": "他不懂爱情把它当游戏"
		}, {
			"time": 56,
			"lineLyric": "他不懂表明相爱这件事"
		}, {
			"time": 60,
			"lineLyric": "除了对不起就只剩叹息"
		}, {
			"time": 64,
			"lineLyric": "他不懂你的心为何哭泣"
		}, {
			"time": 68,
			"lineLyric": "窒息到快要不能呼吸"
		}, {
			"time": 76,
			"lineLyric": "喔喔"
		}, {
			"time": 78,
			"lineLyric": "他不懂你的心"
		}, {
			"time": 83,
			"lineLyric": ""
		}, {
			"time": 96,
			"lineLyric": "他把回忆留给你"
		}, {
			"time": 103,
			"lineLyric": "连同忧伤强加给你"
		}, {
			"time": 108,
			"lineLyric": "对你说来不公平"
		}, {
			"time": 114,
			"lineLyric": "他的谎言句句说的那么动听"
		}, {
			"time": 118,
			"lineLyric": "他不止一次骗了你"
		}, {
			"time": 123,
			"lineLyric": "不值得你再为他伤心"
		}, {
			"time": 127,
			"lineLyric": "他不懂你的心假装冷静"
		}, {
			"time": 131,
			"lineLyric": "他不懂爱情把它当游戏"
		}, {
			"time": 135,
			"lineLyric": "他不懂表明相爱这件事"
		}, {
			"time": 139,
			"lineLyric": "除了对不起就只剩叹息"
		}, {
			"time": 143,
			"lineLyric": "他不懂你的心为何哭泣"
		}, {
			"time": 147,
			"lineLyric": "窒息到快要不能呼吸"
		}, {
			"time": 156,
			"lineLyric": "喔喔"
		}, {
			"time": 158,
			"lineLyric": "他不懂你的心"
		}, {
			"time": 162,
			"lineLyric": ""
		}, {
			"time": 176,
			"lineLyric": "他不懂你的心假装冷静"
		}, {
			"time": 179,
			"lineLyric": "他不懂爱情把它当游戏"
		}, {
			"time": 183,
			"lineLyric": "他不懂表明相爱这件事"
		}, {
			"time": 187,
			"lineLyric": "除了对不起就只剩叹息"
		}, {
			"time": 191,
			"lineLyric": "他不懂你的心为何哭泣"
		}, {
			"time": 195,
			"lineLyric": "窒息到快要不能呼吸"
		}, {
			"time": 203,
			"lineLyric": "喔喔"
		}, {
			"time": 206,
			"lineLyric": "他不懂你的心"
		}]
	},
	{
		"song": "wmdyy",
		"lyric": [{
			"time": 17,
			"lineLyric": "推开窗看见星星 依然守在夜空中"
		}, {
			"time": 24,
			"lineLyric": "心中不免多了些暖暖的感动"
		}, {
			"time": 32,
			"lineLyric": "一闪一闪的光 努力把黑夜变亮"
		}, {
			"time": 41,
			"lineLyric": "气氛如此安详"
		}, {
			"time": 48,
			"lineLyric": "你在我的生命中 是那最闪亮的星"
		}, {
			"time": 56,
			"lineLyric": "一直在无声夜空 守护着我们的梦"
		}, {
			"time": 64,
			"lineLyric": "这世界那么大"
		}, {
			"time": 69,
			"lineLyric": "我的爱只想要你懂 陪伴我孤寂旅程"
		}, {
			"time": 80,
			"lineLyric": "你知道我的梦 你知道我的痛"
		}, {
			"time": 84,
			"lineLyric": "你知道我们感受都相同"
		}, {
			"time": 88,
			"lineLyric": "就算有再大的风也挡不住勇敢的冲动"
		}, {
			"time": 96,
			"lineLyric": "努力的往前飞 再累也无所谓"
		}, {
			"time": 100,
			"lineLyric": "黑夜过后的光芒有多美"
		}, {
			"time": 104,
			"lineLyric": "分享你我的力量就能把对方的路照亮"
		}, {
			"time": 115,
			"lineLyric": ""
		}, {
			"time": 129,
			"lineLyric": "我想我们都一样"
		}, {
			"time": 131,
			"lineLyric": "渴望梦想的光芒"
		}, {
			"time": 136,
			"lineLyric": "这一路喜悦彷徨"
		}, {
			"time": 139,
			"lineLyric": "不要轻易说失望"
		}, {
			"time": 144,
			"lineLyric": "回到最初时光"
		}, {
			"time": 149,
			"lineLyric": "当时的你多么坚强"
		}, {
			"time": 153,
			"lineLyric": "那鼓励让我难忘"
		}, {
			"time": 160,
			"lineLyric": "你知道我的梦 你知道我的痛"
		}, {
			"time": 164,
			"lineLyric": "你知道我们感受都相同"
		}, {
			"time": 168,
			"lineLyric": "就算有再大的风也挡不住勇敢的冲动"
		}, {
			"time": 176,
			"lineLyric": "努力的往前飞 再累也无所谓"
		}, {
			"time": 179,
			"lineLyric": "黑夜过后的光芒有多美"
		}, {
			"time": 184,
			"lineLyric": "分享你我的力量就能把对方的路照亮"
		}, {
			"time": 192,
			"lineLyric": "努力的往前飞 再累也无所谓"
		}, {
			"time": 196,
			"lineLyric": "黑夜过后的光芒有多美"
		}, {
			"time": 200,
			"lineLyric": "分享你我的力量就能把对方的路"
		}, {
			"time": 206,
			"lineLyric": ""
		}, {
			"time": 208,
			"lineLyric": "你知道我的梦 你知道我的痛"
		}, {
			"time": 212,
			"lineLyric": "你知道我们感受都相同"
		}, {
			"time": 216,
			"lineLyric": "就算有再大的风也挡不住勇敢的冲动"
		}, {
			"time": 224,
			"lineLyric": "努力的往前飞 再累也无所谓"
		}, {
			"time": 228,
			"lineLyric": "黑夜过后的光芒有多美"
		}, {
			"time": 231,
			"lineLyric": "分享你我的力量就能把对方的路照亮"
		}, {
			"time": 240,
			"lineLyric": "你知道我的梦 你知道我的痛"
		}, {
			"time": 244,
			"lineLyric": "你知道我们感受都相同"
		}, {
			"time": 248,
			"lineLyric": "就算有再大的风也挡不住勇敢的冲动"
		}, {
			"time": 255,
			"lineLyric": "努力的往前飞 再累也无所谓"
		}, {
			"time": 260,
			"lineLyric": "黑夜过后的光芒有多美"
		}, {
			"time": 264,
			"lineLyric": "分享你我的力量就能把对方的路照亮"
		}, {
			"time": 276,
			"lineLyric": ""
		}]
	},
	{
		"song": "yhbk",
		"lyric": [{
			"time": 21,
			"lineLyric": "天空好想下雨"
		}, {
			"time": 24,
			"lineLyric": "我好想住你隔壁"
		}, {
			"time": 26,
			"lineLyric": "傻站在你家楼下"
		}, {
			"time": 29,
			"lineLyric": "抬起头数乌云"
		}, {
			"time": 30,
			"lineLyric": "如果场景里出现一架钢琴"
		}, {
			"time": 33,
			"lineLyric": "我会唱歌给你听"
		}, {
			"time": 35,
			"lineLyric": "哪怕好多盆水往下淋"
		}, {
			"time": 40,
			"lineLyric": "夏天快要过去"
		}, {
			"time": 43,
			"lineLyric": "请你少买冰淇淋"
		}, {
			"time": 45,
			"lineLyric": "天凉就别穿短裙"
		}, {
			"time": 47,
			"lineLyric": "别再那么淘气"
		}, {
			"time": 49,
			"lineLyric": "如果有时不那么开心"
		}, {
			"time": 52,
			"lineLyric": "我愿意将格洛米借给你"
		}, {
			"time": 54,
			"lineLyric": "你其实明白我心意"
		}, {
			"time": 57,
			"lineLyric": "为你唱这首歌没有什么风格"
		}, {
			"time": 62,
			"lineLyric": "它仅仅代表着我想给你快乐"
		}, {
			"time": 67,
			"lineLyric": "为你解冻冰河为你做一只扑火的飞蛾"
		}, {
			"time": 72,
			"lineLyric": "没有什么事情是不值得"
		}, {
			"time": 77,
			"lineLyric": "为你唱这首歌没有什么风格"
		}, {
			"time": 81,
			"lineLyric": "它仅仅代表着我希望你快乐"
		}, {
			"time": 86,
			"lineLyric": "为你辗转反侧为你放弃世界有何不可"
		}, {
			"time": 92,
			"lineLyric": "夏末秋凉里带一点温热有换季的颜色"
		}, {
			"time": 100,
			"lineLyric": ""
		}, {
			"time": 117,
			"lineLyric": "天空好想下雨"
		}, {
			"time": 119,
			"lineLyric": "我好想住你隔壁"
		}, {
			"time": 122,
			"lineLyric": "傻站在你家楼下"
		}, {
			"time": 124,
			"lineLyric": "抬起头数乌云"
		}, {
			"time": 127,
			"lineLyric": "如果场景里出现一架钢琴"
		}, {
			"time": 129,
			"lineLyric": "我会唱歌给你听"
		}, {
			"time": 131,
			"lineLyric": "哪怕好多盆水往下淋"
		}, {
			"time": 136,
			"lineLyric": "夏天快要过去"
		}, {
			"time": 139,
			"lineLyric": "请你少买冰淇淋"
		}, {
			"time": 142,
			"lineLyric": "天凉就别穿短裙"
		}, {
			"time": 143,
			"lineLyric": "别再那么淘气"
		}, {
			"time": 146,
			"lineLyric": "如果有时不那么开心"
		}, {
			"time": 148,
			"lineLyric": "我愿意将格洛米借给你"
		}, {
			"time": 150,
			"lineLyric": "你其实明白我心意"
		}, {
			"time": 154,
			"lineLyric": "为你唱这首歌没有什么风格"
		}, {
			"time": 158,
			"lineLyric": "它仅仅代表着我想给你快乐"
		}, {
			"time": 163,
			"lineLyric": "为你解冻冰河为你做一只扑火的飞蛾"
		}, {
			"time": 169,
			"lineLyric": "没有什么事情是不值得"
		}, {
			"time": 173,
			"lineLyric": "为你唱这首歌没有什么风格"
		}, {
			"time": 177,
			"lineLyric": "它仅仅代表着我希望你快乐"
		}, {
			"time": 182,
			"lineLyric": "为你辗转反侧为你放弃世界有何不可"
		}, {
			"time": 188,
			"lineLyric": "夏末秋凉里带一点温热"
		}, {
			"time": 192,
			"lineLyric": ""
		}, {
			"time": 201,
			"lineLyric": "为你解冻冰河为你做一只扑火的飞蛾"
		}, {
			"time": 207,
			"lineLyric": "没有什么事情是不值得"
		}, {
			"time": 211,
			"lineLyric": "为你唱这首歌没有什么风格"
		}, {
			"time": 216,
			"lineLyric": "它仅仅代表着我希望你快乐"
		}, {
			"time": 220,
			"lineLyric": "为你辗转反侧为你放弃世界有何不可"
		}, {
			"time": 226,
			"lineLyric": "夏末秋凉里带一点温热有换季的颜色"
		}]
	}
]
