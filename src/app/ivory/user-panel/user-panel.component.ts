import { Component, OnInit } from '@angular/core';
import { CacheService } from '@delon/cache';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userinfo:any;
  AvatarChoseType:any=AvatarChoseType;
  constructor(
    public cacheSrv: CacheService,
    public userSrv:UserService,
  ) {
    this.cacheSrv.notify("userinfo").subscribe((data)=>{
      this.userinfo=this.cacheSrv.getNone("userinfo");
    });
  }

  ngOnInit() {

  }

  choseAvatar(type:AvatarChoseType){
    if(type==AvatarChoseType.EDIT){
      //修改的话要上传头像
      let formData = new FormData();
      formData.append("file",null,"filename"); 
      this.userSrv.changeAvatar(type,formData);
    }else{
      this.userSrv.changeAvatar(type);
    }
  }

}

enum AvatarChoseType{
  EDIT=0,
  REMOVE=1,
}
