import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userinfo:any;
  tabs = [
    {
      active: true,
      name: '帖子',
      icon: 'instagram'
    },
    {
      active: false,
      name: '近期消息',
      icon: 'message'
    },
    {
      active: false,
      name: '云储存详情',
      icon: 'cloud-server'
    },
    {
      active: false,
      name: '游戏数据',
      icon: 'user-switch'
    },
  ];
  constructor(
    public cacheSrv: CacheService
  ) {
    this.cacheSrv.notify("userinfo").subscribe((data)=>{
      this.userinfo=this.cacheSrv.getNone("userinfo");
    });
  }
  ngOnInit() {

  }

}
