import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CacheService } from '@delon/cache';
import { UserService, UserAvatarService } from 'src/app/shared/services/user.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
import { MessageService } from 'src/app/shared/services/message.service';

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
    public userAvatarSrv:UserAvatarService,
    private modalSrv: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private userSrv:UserService,
    private msgSrv:MessageService,
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
      this.createComponentModal();
    }else{
      this.userAvatarSrv.changeAvatar(type,null)
      .pipe()
      .subscribe((result)=>{
        console.log(result);
        //设置用户缓存
        this.userSrv.getUserSelf().subscribe(data=>{
          this.cacheSrv.set("userinfo",data.data);
        });
        this.msgSrv.success('头像删除成功');
      });
    }
  }

  createComponentModal(): void {
    const modal = this.modalSrv.create({
      nzTitle: '修改头像',
      nzContent: ChangeAvatarComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzGetContainer: () => document.body,
      nzComponentParams: {
      },
      nzWidth:800,
      nzOnOk: (component) => component.uploadAvatar(),
    });
    modal.updateConfig({
      nzOkLoading: modal.componentInstance.uploading
    });
    // modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    // modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
  }
}

export enum AvatarChoseType{
  EDIT=0,
  REMOVE=1,
}
