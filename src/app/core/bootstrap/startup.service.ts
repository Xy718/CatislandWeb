import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CacheService } from '@delon/cache';
import { UserService } from 'src/app/shared/services/user.service';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { Observable, of } from 'rxjs';
import { ResultBeanModel } from '../model/result-bean-model';

@Injectable()
export class StartupService {
  constructor(
    private http: HttpClient
    ,public cacheSrv: CacheService
    ,private userSrv: UserService
    ,private authSrv: AuthService
    ,private msg: MessageService
    ,@Inject(DA_SERVICE_TOKEN)
    private tokenService: ITokenService
    ) {}

  load(): Promise<any> {
    //清空个人信息
    this.cacheSrv.remove("userinfo");
    //判断本地是否有Token
    let token=this.tokenService.get();
    console.log("token:",token);
    if(token.token){
      //token存在,判断是否过期,或无效
      this.authSrv.verifytoken({"jwt":token.token})
      .subscribe((result)=>{
        if(result.code=="0"){
          if(result.data.verified){
            //未过期,刷新UserInfo
            this.userSrv.getUserSelf()
            .subscribe(data=>{
              if(data.code=="0"){
                this.cacheSrv.set("userinfo",data.data);
              }else{
                //已过期
                this.clearTokenANDMsg();
              }
            });
          }else{
            //已过期
            this.clearTokenANDMsg();
          }
        }else{
          //已过期
          this.clearTokenANDMsg();
        }
      });
    }
    return null;
  //   return new Promise((resolve, reject) => {
  //     this.http
  //       .get('assets/data/menu.json?_t=' + Date.now())
  //       .pipe(
  //         catchError(res => {
  //           resolve();
  //           return res;
  //         })
  //       )
  //       .subscribe(
  //         (res: any) => {
  //           this.menuService.recursMenuForTranslation(res.menu, 'menu');
  //           this.menuService.set(res.menu);
  //         },
  //         () => {},
  //         () => {
  //           resolve();
  //         }
  //       );
  //   });
  // }
  }

  clearTokenANDMsg(){
    this.tokenService.clear();
    this.msg.warn("登录状态已过期~");
  }

  handleError(): (err: any, caught: import("rxjs").Observable<any>) => import("rxjs").ObservableInput<any> {
    return (error: any): Observable<any> => {
      console.info(error);
      return of(ResultBeanModel.error(error));
    };
  }
}
