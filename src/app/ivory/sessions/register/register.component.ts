import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegistContentModel } from 'src/app/core/model/regist-content-model';
import { Router, NavigationExtras } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { MessageService } from 'src/app/shared/services/message.service';

/**
 *
 * @export
 * @class RegisterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:["../login/login.component.css"],
  encapsulation: ViewEncapsulation.None//去掉对应Component打包出来的css作用域，引入自定义组件才能有样式效果
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;
  confirmPassword:string;
  constructor(
    private fb: FormBuilder
    ,private auth:AuthService
    ,private router: Router
    ,public snackBar: MatSnackBar
    ,public msg:MessageService
    ) {
    this.reactiveForm = this.fb.group({
      username: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9\\s\\S]{5,24}$")]],
      password: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9\\s\\S]{6,32}$")]],
      confirmPassword: ['', [this.confirmValidator]],
    });
  }

  ngOnInit() {}

  registForm=new RegistContentModel();
	//注册状态，用来控制注册按钮
  inReg=false;

  regiter(){
    //切换当前的注册状态用于控制表单样式
    this.regStatus(true);
    //注册
    this.auth.register(this.registForm).pipe(
      catchError(this.msg.handleError("注册"))
    )
    .subscribe((result)=>{
      if(result.code=="0"){//成功
        this.msg.success("注册成功！");
        //跳转到登录页面
        this.router.navigate(['/auth/login'],{queryParams:{username:this.registForm.username}});
      }else{
        //清空密码及重新请求验证码
        this.registForm.password="";
        this.confirmPassword="";
        this.regStatus(false);
      }
    });
  }

	regStatus(status:boolean){
		this.inReg=status;
		status?this.reactiveForm.disable():this.reactiveForm.enable();
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.reactiveForm.controls.password.value) {
      return { error: true, confirm: true };
    }
    return {};
  };
}
