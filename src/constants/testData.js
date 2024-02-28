const moodQnAArray = [
  { mood: 'EMOTION1',moodTxt: 'HAPPY', text: '두근두근 기분이 좋고,웃을 일이 많아요' },
  { mood: 'EMOTION2',moodTxt: 'ANGER', text: '왠지 모르게 작은 일에도 쉽게 화가 나요' },
  { mood: 'EMOTION3',moodTxt: 'SAD', text: '뭔가 입맛이 없고, 자꾸 슬퍼져요' },
  {mood: 'EMOTION4', moodTxt: 'BUSY', text: '할 일이 너무 많고, 하루가 길게 느껴져요' },
  {mood: 'EMOTION5', moodTxt: 'NORMAL', text: '내 마음은 조용하고 단순한 분위기예요' },
  { mood: 'EMOTION6',moodTxt: 'STRESS', text: '답답하고, 스트레스를 많이 받았어요' },
];

const moodDataArray =[
  {
    "id":"EMOTION1",
    "titleEmotion": "기쁨",
    "combinedName": "쨍쨍한 햇빛",
    "description": "날씨 좋은 날,  푸른 하늘에 보이는 쨍쨍한 햇빛 같아요",
    "emoji":"/images/sunny-mood.png",
    "tags": [
        "기쁨",
        "설렘",
        "행복"
    ]
},
{
  "id":"EMOTION2",
    "titleEmotion": "우울",
    "combinedName": "우르르 쾅쾅",
    "description": "마음을 쾅쾅 두드리는 화가 가득해요",
    "emoji":"/images/thunder-mood.png",
    "tags": [
        "분노",
        "짜증",
        "극대노"
    ]
},
{
  "id":"EMOTION3",
    "titleEmotion": "슬픔",
    "combinedName": "호우주의보",
    "description": "거센 비가 마음을 적시고 있어요",
    "emoji":"/images/rainy-mood.png",
    "tags": [
      "눈물나는", "후회", "슬픔"
    ]
},
{
  "id":"EMOTION4",
    "titleEmotion": "피곤",
    "combinedName": "안개주의보",
    "description": "온통 회색빛인 마음에 안개가 뒤덮였어요",
    "emoji":"/images/foggy-mood.png",
    "tags": [
      "피곤한", "지침", "기운없음"
    ]
},
{
  "id":"EMOTION5",
    "titleEmotion": "덤덤",
    "combinedName": "잔잔한 구름",
    "description": "바람 따라 흘러가는 구름처럼 조용해요",
    "emoji":"/images/cloudy-mood.png",
    "tags": [
      "그저 그럼", "SOSO", "덤덤"
    ]
},
{
  "id":"EMOTION6",
    "titleEmotion": "분노",
    "combinedName": "태풍의 눈",
    "description": "스트레스로 어질어질 빙글빙글 돌아요",
    "emoji":"/images/typhoon-mood.png",
    "tags": [
      "스트레스", "우울", "숨막혀요"
    ]
},
]

const timeData = [
  {
    value: 199,
    day: '2018-06-30',
  },
  {
    value: 207,
    day: '2018-07-31',
  },
  {
    value: 252,
    day: '2018-04-01',
  },
  {
    value: 154,
    day: '2018-06-08',
  },
  {
    value: 34,
    day: '2018-06-23',
  },
  {
    value: 236,
    day: '2018-06-01',
  },
  {
    value: 346,
    day: '2018-05-13',
  },
  {
    value: 326,
    day: '2018-06-16',
  },
  {
    value: 123,
    day: '2018-04-06',
  },
  {
    value: 70,
    day: '2018-08-05',
  },
  {
    value: 83,
    day: '2018-08-04',
  },
  {
    value: 349,
    day: '2018-07-17',
  },
  {
    value: 390,
    day: '2018-06-05',
  },
  {
    value: 91,
    day: '2018-04-09',
  },
  {
    value: 373,
    day: '2018-04-07',
  },
  {
    value: 259,
    day: '2018-05-19',
  },
  {
    value: 388,
    day: '2018-04-17',
  },
  {
    value: 63,
    day: '2018-05-29',
  },
  {
    value: 395,
    day: '2018-04-21',
  },
  {
    value: 12,
    day: '2018-06-14',
  },
  {
    value: 143,
    day: '2018-06-25',
  },
  {
    value: 246,
    day: '2018-05-04',
  },
  {
    value: 3,
    day: '2018-04-11',
  },
  {
    value: 371,
    day: '2018-06-20',
  },
  {
    value: 327,
    day: '2018-07-01',
  },
  {
    value: 224,
    day: '2018-07-02',
  },
  {
    value: 297,
    day: '2018-05-26',
  },
  {
    value: 35,
    day: '2018-05-06',
  },
  {
    value: 337,
    day: '2018-06-19',
  },
  {
    value: 96,
    day: '2018-04-15',
  },
  {
    value: 157,
    day: '2018-07-15',
  },
  {
    value: 195,
    day: '2018-06-18',
  },
  {
    value: 264,
    day: '2018-05-16',
  },
  {
    value: 200,
    day: '2018-05-27',
  },
  {
    value: 166,
    day: '2018-05-31',
  },
  {
    value: 389,
    day: '2018-04-23',
  },
  {
    value: 103,
    day: '2018-07-12',
  },
  {
    value: 100,
    day: '2018-05-07',
  },
  {
    value: 26,
    day: '2018-04-19',
  },
  {
    value: 235,
    day: '2018-07-14',
  },
  {
    value: 391,
    day: '2018-04-16',
  },
  {
    value: 159,
    day: '2018-05-20',
  },
  {
    value: 303,
    day: '2018-07-24',
  },
  {
    value: 112,
    day: '2018-08-11',
  },
  {
    value: 259,
    day: '2018-04-25',
  },
  {
    value: 249,
    day: '2018-06-02',
  },
  {
    value: 312,
    day: '2018-06-12',
  },
  {
    value: 298,
    day: '2018-06-04',
  },
  {
    value: 42,
    day: '2018-05-09',
  },
  {
    value: 297,
    day: '2018-05-28',
  },
  {
    value: 39,
    day: '2018-05-30',
  },
  {
    value: 199,
    day: '2018-07-25',
  },
  {
    value: 301,
    day: '2018-08-10',
  },
  {
    value: 304,
    day: '2018-07-10',
  },
  {
    value: 207,
    day: '2018-06-28',
  },
  {
    value: 242,
    day: '2018-06-29',
  },
]

const data = [
  {
    color: 'hsl(294, 70%, 50%)',
    id: 'go',
    value: 261,
  },
  {
    color: 'hsl(130, 70%, 50%)',
    id: 'scala',
    value: 462,
  },
  {
    color: 'hsl(300, 70%, 50%)',
    id: 'erlang',
    value: 167,
  },
  {
    color: 'hsl(215, 70%, 50%)',
    id: 'java',
    value: 140,
  },
  {
    color: 'hsl(120, 70%, 50%)',
    id: 'stylus',
    value: 193,
  },
  {
    color: 'hsl(295, 70%, 50%)',
    id: 'c',
    value: 255,
  },
  {
    color: 'hsl(167, 70%, 50%)',
    id: 'lisp',
    value: 141,
  },
  {
    color: 'hsl(217, 70%, 50%)',
    id: 'make',
    value: 469,
  },
  {
    color: 'hsl(73, 70%, 50%)',
    id: 'javascript',
    value: 73,
  },
]
export { timeData, data ,moodQnAArray, moodDataArray}
