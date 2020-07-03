import { TopicModel } from './../../../core/model/topic-model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import Swiper from 'swiper';

/**
 *
 * @Author: Xy718
 * @Date: 2020-06-06 01:58:33
 * @LastEditors: Xy718
 * @LastEditTime: 2020-06-06 22:17:23
 * @export
 * @class MainPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private topicService:TopicService
  ) { }
  topics:TopicModel[];
  testSwiper: Swiper;
  ngOnInit() {
    this.topicService.getAllTopic().subscribe(tpcs=>{
      this.topics=tpcs.data.content;
    });

  }
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',//水平
    slidesPerView: 1,
    slideToClickedSlide: true,
    mousewheel: false,  //监听鼠标滑轮
    scrollbar: true,    //底部滚动条
    watchSlidesProgress: true,
    navigation: false,  //翻页按钮
    keyboard: false,    //按键控制
    pagination: false,  //底部翻页按钮
    centeredSlides: true,
    roundLengths: true,
    slidesOffsetBefore:0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //         slidesPerView: 1
    //     }
    // }
  };

}
