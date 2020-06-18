import { TopicModel } from './../src/app/core/model/topic-model';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';

export const topics:TopicModel[]=[
    {
        avatarUrl:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
        userName:"Xy718",
        userIntro:"·心·技·体·",
        userID:"1",
        tpcCoverImgs:[
            "https://towerimg.ivory-tower.co/battle/b1.png",
            "https://towerimg.ivory-tower.co/battle/b2.png",
            "https://towerimg.ivory-tower.co/battle/b3.png",
            "https://towerimg.ivory-tower.co/battle/b4.png",
            "https://towerimg.ivory-tower.co/battle/b5.png",
            "https://towerimg.ivory-tower.co/battle/b6.png",
        ],
        tpcSummary:"哼  哼  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊，这是文案哦❥(^_-)",
        liked:"0",
        shared:"0",
    },
    {
        avatarUrl:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
        userName:"Shiba Inu1",
        userIntro:"Dog Breed",
        userID:"1",
        tpcCoverImgs:[
            "https://towerimg.ivory-tower.co/2020-02-29_19.39.07.png",
            "https://towerimg.ivory-tower.co/2020-02-29_19.39.07.png",
            "https://towerimg.ivory-tower.co/2020-02-29_19.39.07.png"
        ],
        tpcSummary:"啊啊啊啊啊kksk The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
    },
    {
        avatarUrl:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
        userName:"Shiba Inu2",
        userIntro:"Dog Breed",
        userID:"1",
        tpcCoverImgs:[
            "https://towerimg.ivory-tower.co/2020-02-29_19.40.29.png"
        ],
        tpcSummary:"这是一段文字：The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
    },
    {
        avatarUrl:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
        userName:"Shiba Inu3",
        userIntro:"Dog Breed",
        userID:"1",
        tpcCoverImgs:[
            "https://towerimg.ivory-tower.co/2020-02-29_19.46.56.png"
        ],
        tpcSummary:"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
    },
];

export const topic = {
    'GET /topic/all': getTopics(),
  };

function getTopics(){
    return new ResultBeanModel(
        "0",
        "",
        topics
    );
}
