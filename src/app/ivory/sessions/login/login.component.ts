import { Location } from '@angular/common';
import { ResultBeanModel } from 'src/app/core/model/result-bean-model';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginContentModel } from 'src/app/core/model/login-content-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';

/**
 * @Author: Xy718
 * @Date: 2020-06-04 10:37:45
 * @LastEditors: Xy718
 * @LastEditTime: 2020-06-06 23:56:53
 */
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	encapsulation: ViewEncapsulation.None//去掉对应Component打包出来的css作用域，引入自定义组件才能有样式效果
})
export class LoginComponent implements OnInit {
	reactiveForm: FormGroup;

	loginForm=new LoginContentModel();
	//login状态，用来控制Login按钮
	inLogin=false;

	constructor(
		private fb: FormBuilder
		,private router: Router
		,private auth:AuthService
		,public snackBar: MatSnackBar
		,private location:Location,
		 @Inject(DA_SERVICE_TOKEN)
		 private tokenService: ITokenService
	) {
		this.reactiveForm = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required],
		rememberMe: [false], 
		});
	}
	ngOnInit() {}

	login() {
		//切换当前的登录状态用于控制表单样式
		this.loginStatus(true);
		//登录
		this.auth.login(this.loginForm)
		.subscribe(result=>{
			console.log(result);
			this.openSnackBar(result);
			if(result.code=="0"){//成功
				//储存jwt
				this.tokenService.set({ token: `${result.data["jwt"]}` });
				console.log(this.tokenService.get().token);
				//跳转页面
				this.router.navigateByUrl('/');
			}else{
				//清空密码及重新请求验证码
				this.loginForm.password="";
				this.loginStatus(false);
			}
		});
	}
	
	/**
	 * 打开快餐提示栏，根据result自动样式
	 * @param {ResultBeanModel} result 
	 */
	openSnackBar(result:any) {
		this.snackBar.open(result.msg,"",{
			duration:2000,
			verticalPosition:result.code=="-1"?"bottom":"top",
			panelClass:result.code=="-1"?["login-fail-color"]:""
		}); 
	}

	/**
	 *修改当前form的登陆状态
	*
	* @param {boolean} status t代表正在登陆f代表登录结束
	* @memberof LoginComponent
	*/
	loginStatus(status:boolean){
		this.inLogin=status;
		status?this.reactiveForm.disable():this.reactiveForm.enable();
	}

}
