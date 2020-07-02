import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CacheService } from '@delon/cache';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable()
export class StartupService {
  constructor(
    private http: HttpClient
    ,public cacheSrv: CacheService
    ,private userSrv: UserService
    ) {}

  load(): Promise<any> {
    if(this.cacheSrv.getNone("userinfo")){
      this.userSrv.getUserSelf().subscribe(data=>{
        console.log(data.data);
        this.cacheSrv.set("userinfo",data.data);
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
}
