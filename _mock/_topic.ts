import { TopicModel } from './../src/app/core/model/topic-model';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';

export const topics:TopicModel[]=[
    {
      tid:0,
      title:"",
      create_time:"",
      update_time:"",
      imgs:[
          "https://towerimg.ivory-tower.co/battle/b1.png",
          "https://towerimg.ivory-tower.co/battle/b2.png",
          "https://towerimg.ivory-tower.co/battle/b3.png",
          "https://towerimg.ivory-tower.co/battle/b4.png",
          "https://towerimg.ivory-tower.co/battle/b5.png",
          "https://towerimg.ivory-tower.co/battle/b6.png",
      ],
      content:"哼  哼  啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊，这是文案哦❥(^_-)",
      liked:"0",
      shared:"0",
      pub_userinfo:{
        avatar:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
        uid: 0,
        userName: "Xy718",
        nickName: "Xy718",
        userGameID: "Xy718",
        userGameUUID: "Xy718",
        email: "123@qq.com",
        userintro:"心·技·体",
      }
        
    },
    {
      tid:0,
      title:"",
      create_time:"",
      update_time:"",
      imgs:[
            "https://towerimg.ivory-tower.co/2020-02-29_19.39.07.png",
            "https://towerimg.ivory-tower.co/2020-02-29_19.39.07.png",
            "https://towerimg.ivory-tower.co/2020-02-29_19.39.07.png"
        ],
        content:"啊啊啊啊啊kksk The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
        pub_userinfo:{
          avatar:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
          uid: 0,
          userName: "Xy718",
          nickName: "Xy718",
          userGameID: "Xy718",
          userGameUUID: "Xy718",
          email: "123@qq.com",
          userintro:"心·技·体",
        }
    },
    {
      tid:0,
      title:"",
      create_time:"",
      update_time:"",
      imgs:[
            "https://towerimg.ivory-tower.co/2020-02-29_19.40.29.png"
        ],
        content:"这是一段文字：The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
        pub_userinfo:{
          avatar:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
          uid: 0,
          userName: "Xy718",
          nickName: "Xy718",
          userGameID: "Xy718",
          userGameUUID: "Xy718",
          email: "123@qq.com",
          userintro:"心·技·体",
        }
    },
    {
      tid:0,
      title:"",
      create_time:"",
      update_time:"",
      imgs:[
            "https://towerimg.ivory-tower.co/2020-02-29_19.46.56.png"
        ],
        content:"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
        pub_userinfo:{
          avatar:"http://livedemo.xy718.xyz/assets/img/xy718_logo.jpg",
          uid: 0,
          userName: "Xy718",
          nickName: "Xy718",
          userGameID: "Xy718",
          userGameUUID: "Xy718",
          email: "123@qq.com",
          userintro:"心·技·体",
        }
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
