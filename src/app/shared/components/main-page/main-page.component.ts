import { TopicModel } from './../../../core/model/topic-model';
import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(
    private topicService:TopicService
  ) { }
  topics:Object;
  ngOnInit() {
    //TODO 增加一个topicService
    this.topicService.getAllTopic().subscribe(tpcs=>this.topics=tpcs.data);
  }

}