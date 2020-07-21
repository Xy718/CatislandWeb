import { Component, OnInit, Injectable, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';
import { recharge_imgs } from 'src/app/global-config.module';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel/public-api';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(
    private msgSrv: MessageService
  ) { }

  @ViewChild('recharge') recharge: NzCarouselComponent;
  
  show_recharge=false;
  imgs_recharge=recharge_imgs
  recharge_msgs=['支付宝','微信'];
  ngOnInit() {
  }
  donate(): void {
    this.recharge.next();
    
    this.msgSrv.success(this.recharge_msgs[this.recharge.activeIndex]+'投食❥(^_-)!');
  }
}
