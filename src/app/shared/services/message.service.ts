import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

constructor(
  public snackBar: MatSnackBar
  ) { }

  success(msg:string){
    this.openSnackBar(ResultBeanModel.success(msg,null),"");
  }
  warn(msg:string){
    this.openSnackBar(ResultBeanModel.success(msg,null),".login-fail-color");
  }

  /**
   * 打开快餐提示栏，根据result自动样式
   * @param {ResultBeanModel} result
   */
	openSnackBar(result:ResultBeanModel<any>,style:string) {
		this.snackBar.open(result.msg,"",{
			duration:2000,
			verticalPosition:result.code=="-1"?"bottom":"top",
			panelClass:style
		});
	}
}
