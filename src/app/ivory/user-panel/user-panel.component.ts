import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userinfo:any;
  AvatarChoseType:any=AvatarChoseType;
  constructor(
    public cacheSrv: CacheService
  ) {
    this.cacheSrv.notify("userinfo").subscribe((data)=>{
      this.userinfo=this.cacheSrv.getNone("userinfo");
    });
  }

  ngOnInit() {

  }

  choseAvatar(type:AvatarChoseType){
    console.log(type);
  }

}

enum AvatarChoseType{
  EDIT=0,
  REMOVE=1,
}
