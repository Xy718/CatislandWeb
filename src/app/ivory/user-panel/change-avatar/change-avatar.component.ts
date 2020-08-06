import { Component, ViewEncapsulation } from '@angular/core';
import { UserService, UserAvatarService } from 'src/app/shared/services/user.service';
import { AvatarChoseType } from '../user-panel.component';
import { ImageTransform, ImageCroppedEvent, base64ToFile, Dimensions } from 'ngx-image-cropper';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { CacheService } from '@delon/cache';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class ChangeAvatarComponent {
  constructor(
    private userAvatarSrv:UserAvatarService,
    private cacheSrv:CacheService,
    private msgSrv:MessageService,
    private userSrv:UserService,
  ){

  }
  uploading = false;
  fileList: NzUploadFile[] = [];
  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = [file];
    return false;
  };
  upLoading:false;
  // imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};
  formData = new FormData();
  uploadAvatar(){
    this.userAvatarSrv.changeAvatar(AvatarChoseType.EDIT,base64ToFile(this.croppedImage))
    .pipe()
    .subscribe((result)=>{
      console.log(result);
      //设置用户缓存
      this.userSrv.getUserSelf().subscribe(data=>{
        this.cacheSrv.set("userinfo",data.data);
      });
      this.msgSrv.success('头像修改成功');
    });
  }

  // fileChangeEvent(event: any): void {
  //     this.imageChangedEvent = event;
  // }

  //crop之后的事件
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      console.log(event, base64ToFile(event.base64));
  }
  //选择了文件之后的事件
  imageLoaded() {
      this.showCropper = true;
      console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
      console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
      console.log('Load failed');
  }

  rotateLeft() {
      this.canvasRotation--;
      this.flipAfterRotate();
  }

  rotateRight() {
      this.canvasRotation++;
      this.flipAfterRotate();
  }

  private flipAfterRotate() {
      const flippedH = this.transform.flipH;
      const flippedV = this.transform.flipV;
      this.transform = {
          ...this.transform,
          flipH: flippedV,
          flipV: flippedH
      };
  }


  flipHorizontal() {
      this.transform = {
          ...this.transform,
          flipH: !this.transform.flipH
      };
  }

  flipVertical() {
      this.transform = {
          ...this.transform,
          flipV: !this.transform.flipV
      };
  }

  resetImage() {
      this.scale = 1;
      this.rotation = 0;
      this.canvasRotation = 0;
      this.transform = {};
  }

  zoomOut() {
      this.scale -= .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
  }

  zoomIn() {
      this.scale += .1;
      this.transform = {
          ...this.transform,
          scale: this.scale
      };
  }

  toggleContainWithinAspectRatio() {
      this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
      this.transform = {
          ...this.transform,
          rotate: this.rotation
      };
  }
}
