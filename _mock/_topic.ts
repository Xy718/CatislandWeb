import { TopicModel } from './../src/app/core/model/topic-model';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { LoginContentModel } from 'src/app/core/model/login-content-model';
import { MockRequest, MockStatusError } from '@delon/mock';
import { HttpResponse } from '@angular/common/http';

export const topics:TopicModel[]=[
    {
        avatarUrl:"https://material.angular.io/assets/img/examples/shiba1.jpg",
        userName:"Shiba Inu1",
        userIntro:"Dog Breed",
        userID:"1",
        tpcCoverImgs:[
            "https://material.angular.io/assets/img/examples/shiba2.jpg",
            "/assets/img/xy718_logo.jpg",
        ],
        tpcSummary:"啊啊啊啊啊kksk The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
    },
    {
        avatarUrl:"https://material.angular.io/assets/img/examples/shiba1.jpg",
        userName:"Shiba Inu2",
        userIntro:"Dog Breed",
        userID:"1",
        tpcCoverImgs:[
            "https://material.angular.io/assets/img/examples/shiba2.jpg",
            "/assets/img/xy718_logo.jpg",
        ],
        tpcSummary:"这是一段文字：The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        liked:"0",
        shared:"0",
    },
    {
        avatarUrl:"https://material.angular.io/assets/img/examples/shiba1.jpg",
        userName:"Shiba Inu3",
        userIntro:"Dog Breed",
        userID:"1",
        tpcCoverImgs:[
            "https://material.angular.io/assets/img/examples/shiba2.jpg",
            "/assets/img/xy718_logo.jpg",
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
