import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { TopicService } from 'src/app/shared/services/topic.service';

@Component({
  selector: 'app-user-topic',
  templateUrl: './user-topic.component.html',
  styleUrls: ['./user-topic.component.scss']
})
export class UserTopicComponent implements OnInit {
  topics;

  constructor(
    private topicSrv:TopicService
  ) {
    //加载帖子数据
    this.topicSrv.getMineTopicForPage()
    .pipe()
    .subscribe((result:any)=>{
      if(result.code=='0'){
        this.topics=result.data.content;
        console.log(this.topics)
      }
    });
  }

  ngOnInit() {
  }

}
