import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class StartupService {
  constructor( private http: HttpClient) {}

  load(): Promise<any> {
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