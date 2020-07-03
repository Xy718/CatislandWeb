import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
constructor(
  public snackBar: MatSnackBar
  ) { }

  success(msg:string,action?:string){
    this.openSnackBar(ResultBeanModel.success(msg,null),action,"",4000);
  }
  warn(msg:string,action?:string){
    this.openSnackBar(ResultBeanModel.success(msg,null),action,"msg-danger",4000);
  }
  error(msg:string,action?:string,duration=4000){
    this.openSnackBar(ResultBeanModel.error(msg,null),action,"msg-danger",duration);
  }

  /**
   * 打开快餐提示栏，根据result自动样式
   * @param {ResultBeanModel} result
   */
	openSnackBar(result:ResultBeanModel<any>,action:string,style:string,duration:number) {
		this.snackBar.open(result.msg,action,{
			duration:duration,
			verticalPosition:result.code=="-1"?"bottom":"top",
			panelClass:style
		});
  }

  handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<any> => {
      console.error(error);
      this.error(operation+" 出错啦："+error.error.msg);
      // Let the app keep running by returning an empty result.
      return of(ResultBeanModel.error(error.error.msg));
    };
  }
}
